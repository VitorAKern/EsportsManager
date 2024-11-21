import { INTERNAL_SERVER_ERROR, OK } from "http-status-codes";
import { Request, Response } from "express";
import { BaseController } from "./base/BaseController";
import Organization from "../database/models/Organization";

class OrganizationController extends BaseController {
    create = (req: Request, res: Response) => {
        if(!this.hasError(req, res)){
            return Organization.create(req.body)
            .then(organization => res.status(OK).json(organization))
            .catch(error => res.status(INTERNAL_SERVER_ERROR).json(error))
        }
        return res;
    }
}


const organizationController = new OrganizationController();
export { organizationController }