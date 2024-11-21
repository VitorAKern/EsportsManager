import { check, body } from "express-validator";
import { errorMessages } from "../../helpers/Constants";

const orgCreateValidator = [
  check("organization_name")
    .notEmpty().withMessage(errorMessages.isRequired),

  check("user_id")
    .notEmpty().withMessage(errorMessages.isRequired)
    .isUUID().withMessage(errorMessages.isNotObjectId),

  check("funds")
    .notEmpty().withMessage(errorMessages.isRequired)

];

// const userUpdateValidator = [
//   check("name").if(body("name").exists())
//     .notEmpty().withMessage(errorMessages.isRequired),

//   check("email").if(body("email").exists())
//     .notEmpty().withMessage(errorMessages.isRequired)
//     .isEmail().withMessage(errorMessages.isInvalid)
// ]

export { orgCreateValidator  }


