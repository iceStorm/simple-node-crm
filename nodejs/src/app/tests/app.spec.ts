import { app } from "src/main";
import request from "supertest";

describe('Application', () => {
    it('should return "Server running Ok"', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect(200, 'Server running Ok', () => {
                done();
            })
    })
})