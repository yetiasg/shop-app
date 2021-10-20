import { App } from "./app";
import config from "./config/config";
import { TestController } from "./api/v1/controllers/TestController.controller";

const port: number = Number(config.server.PORT);

const controllers = [
  new TestController()
]

new App(controllers, port).listen();