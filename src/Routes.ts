import * as express from "express";
import { helloController } from "./controllers/HelloController"
import { userController } from "./controllers/UserController";
import { organizationController } from "./controllers/OrganizationController";
import { userCreateValidator } from "./middlewares/validators/UserValidator";
import { orgCreateValidator } from "./middlewares/validators/OrganizationValidator";

const routes: express.Router = express.Router();

routes.get("/", helloController.index);


//user routes
routes.get("/user", userController.findAll);
routes.post("/user", userCreateValidator, userController.create);
routes.get("/user/:id", userController.findById);
// routes.put("/user/:id", userUpdateValidator, userController.update);
// routes.delete("/user/:id", userController.destroy);

//organization routes
//routes.get("/organization", organizationController.findAll);
routes.post("/organization", orgCreateValidator, organizationController.create);
//routes.get("/organization/:id", organizationController.findById);


export { routes }
