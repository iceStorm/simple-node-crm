import "reflect-metadata"
import 'es6-shim';

import { app } from "src/main"
import request from "supertest"

describe("CUSTOMERS", () => {
    it("should return all customers", (done) => {
        request(app)
            .get("/customers")
            .expect(200)
            .expect("Content-Type", "application/json")
            .end((err, response) => {
                if (err) {
                    throw err
                } else done()
            })
    })
})
