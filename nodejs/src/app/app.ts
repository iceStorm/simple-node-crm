import path from "path"

import express, { Application, Express, Handler, NextFunction, Request, Response } from "express"
import * as dotenv from "dotenv"
import logger from "morgan"
import helmet from "helmet"

// import BaseController from "src/common/base.controller"
import AppModule from "src/app/app.module"
import DECORATOR_KEYS from "src/core/decorators/constants"
import { AppRoute, HTTPMethod } from "src/core/decorators/http.decorator"
import { DIContainer } from "src/core/injector"
import Logger from "src/common/logger"
import { MySQLUserStore } from "src/modules/user/stores/mysql.user.store"
import { MySQLCustomerStore } from "src/modules/customers/stores/mysql.customer.store"
import { MySQLEmployeeStore } from "src/modules/employees/stores/mysql.employee.store"
import { MySQLProductStore } from "src/modules/product/stores/mysql.product.store"
import MySQLOrderStore from "src/modules/order/stores/mysql.order.store"
import BaseController from "src/common/base.controller"

export type AppConstructor = {
    port: number | undefined
    rootModule: AppModule
}

type RouteMapItem = {
    router: string
    path: string
    controller: string
    function: string
    method: HTTPMethod
}

export default class App {
    private _port: number | string | undefined
    public get port(): number | string | undefined {
        return this._port
    }

    private _instance: express.Application
    public get instance() {
        return this._instance
    }

    private _rootModule: any
    public get rootModule() {
        return this._rootModule
    }
    public set rootModule(value) {
        this._rootModule = value
    }

    constructor(params: AppConstructor) {
        this.loadEnv()
        this.initDependencies()

        this._instance = express()
        this._port = process.env.PORT || params.port
        this._rootModule = params.rootModule

        this.initializeMiddlewares()
        this.initializeRoutes()
    }

    initDependencies() {
        DIContainer.put("MySQLUserStore", new MySQLUserStore())
        DIContainer.put("MySQLCustomerStore", new MySQLCustomerStore())
        DIContainer.put("MySQLEmployeeStore", new MySQLEmployeeStore())
        DIContainer.put("MySQLProductStore", new MySQLProductStore())
        DIContainer.put("MySQLOrderStore", new MySQLOrderStore())
        // DIContainer.put("MockEmployeeStore", new MockEmployeeStore())
    }

    /**
     * Start server and listening on the defined port.
     */
    listen() {
        this._instance.listen(this._port, () => {
            console.log(`Server listening on: http://localhost:${this.port}`)
        })
    }

    /**
     * Load environment variables for the entire application for using later.
     */
    private loadEnv() {
        // console.log(path.resolve(__dirname, "../env/.env"))

        // LOADING ENVIRONMENT VARIABLES FROM .env FILES
        dotenv.config({
            debug: process.env.NODE_ENV === "development",
            // path: __dirname + "../env/.env",
        })
    }

    /**
     * Load middlewares.
     */
    private initializeMiddlewares() {
        this._instance.use(logger("dev"))

        // error middleware
        // this._instance.use((err: any, req: Request, res: Response, next: NextFunction) => {
        //     Logger.error(err)
        // })

        this._instance.use(
            helmet({
                xssFilter: true,
                hidePoweredBy: false,
            })
        )

        this._instance.use(express.json()) // allowing server to receive json request format.
        this._instance.use(express.urlencoded({ extended: true }))
    }

    /**
     * Load routes from controllers.
     */
    private initializeRoutes() {
        // getting all modules in the application
        const controllers = []
        const modules = [this.rootModule]

        // using traversal method to get all controllers
        while (modules.length > 0) {
            const firstModule = modules.shift()

            const currentModuleControllers = Reflect.getMetadata(DECORATOR_KEYS.CONTROLLERS, firstModule)
            if (currentModuleControllers && currentModuleControllers.length > 0) {
                controllers.push(...currentModuleControllers)
            }

            const childModules = Reflect.getMetadata(DECORATOR_KEYS.MODULES, firstModule)
            if (childModules && childModules.length > 0) {
                modules.push(...childModules)
            }
        }

        // for logging routes table
        const routesMapTable: Array<RouteMapItem> = []

        for (const controller of controllers) {
            // getting controller's metadata
            const routerRootPath = Reflect.getMetadata(DECORATOR_KEYS.ROOT_PATH, controller)

            // getting router's handler methods (getAll, getById...)
            const routerHandlers = Reflect.getMetadata(DECORATOR_KEYS.ROUTES, controller) ?? []

            // each controller has its own router on the root path
            const router = express.Router()

            // init and inject dependencies
            const controllerInstance = new controller(...DIContainer.findDependencies(controller))

            for (const handler of routerHandlers) {
                // use the actual handler method at the end (middlewares need to be run first)
                router[(handler as AppRoute).httpMethod](handler.path, handler.method.bind(controllerInstance))
                // console.log(handler.method, handler.method.prototype)

                routesMapTable.push({
                    router: routerRootPath,
                    controller: controller.name,
                    path: routerRootPath + "" + handler.path,
                    function: `${controller.name}.${handler.method.name}`,
                    method: handler.httpMethod,
                })
            }

            // apply router as middleware
            this._instance.use(routerRootPath, router)
        }

        this.showRoutingTable(routesMapTable)
        console.log(DIContainer)
    }

    showRoutingTable(routesMapTable: RouteMapItem[]) {
        // prevent duplicating router root path
        // this.checkDuplicatedRoutes(routesMapTable)

        const routesLength = routesMapTable.map((r) => r.path.length)
        const maxLengthRoute = Math.max(...routesLength)

        const functionsLength = routesMapTable.map((r) => r.function.length)
        const maxLengthFunction = Math.max(...functionsLength)

        console.table(
            routesMapTable.map((route) => {
                return {
                    ...route,
                    path: route.path.padEnd(maxLengthRoute, " "),
                    function: route.function.padEnd(maxLengthFunction, " "),
                }
            })
        )
    }

    checkDuplicatedRoutes(routes: RouteMapItem[]) {
        const routePaths = routes.map((route) => route.path)
        const uniqueRoutePaths = new Set(...routePaths)

        // Array.from(uniqueRoutePaths).some((path) => routePaths.filter((r) => r == path).length > 1)
    }
}
