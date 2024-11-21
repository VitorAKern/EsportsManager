import { OK, NO_CONTENT, INTERNAL_SERVER_ERROR, NOT_FOUND } from "http-status-codes";
import { Request, Response } from "express";
import { BaseController } from "./base/BaseController";
import User from "../database/models/User";

class UserController extends BaseController {

  findAll = (_req: Request, res: Response) => {
    return User.findAll()
      .then(users => res.status(OK).json(users))
      .catch(error => res.status(INTERNAL_SERVER_ERROR).json(error))
  }

  create = (req: Request, res: Response) => {
    if (!this.hasError(req, res)) {
      return User.create(req.body)
        .then(user => res.status(OK).json(user))
        .catch(error => res.status(INTERNAL_SERVER_ERROR).json(error))
    }

    return res;
  }

  findById = (req: Request, res: Response) => {
    return User.findByPk(req.params.id)
      .then(user => user ? res.status(OK).json(user) : res.status(NOT_FOUND).send())
      .catch(error => res.status(INTERNAL_SERVER_ERROR).json(error))
  }

  // update = (req: Request, res: Response) => {
  //   if (!this.hasError(req, res)) {
  //     return User.update(req.body)
  //       .then(user => user ? res.status(OK).json(user) : res.status(NOT_FOUND).send())
  //       .catch(error => res.status(INTERNAL_SERVER_ERROR).json(error))
  //   }

  //   return res;
  // }

  // destroy = (req: Request, res: Response) => {
  //   return User.findByIdAndDelete(req.params.id)
  //     .then(user => user ? res.status(NO_CONTENT).json(user) : res.status(NOT_FOUND).send())
  //     .catch(error => res.status(INTERNAL_SERVER_ERROR).json(error))
  // }
}

const userController = new UserController();
export { userController }
