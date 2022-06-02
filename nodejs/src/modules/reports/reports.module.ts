import Module from "src/core/decorators/module.decorator"
import ReportsController from "./reports.controller";
import ReportsService from "./reports.service";

@Module({
    controllers: [ReportsController],
    providers: [ReportsService],
})
export default class ReportsModule {}
