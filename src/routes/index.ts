import { Router } from "express";
import { GetProfileController } from "../controller/getProfileController";

const route = Router();

const getProfileController = new GetProfileController();

route.get("/user/:user", getProfileController.getProfile);
route.get("/user", getProfileController.getProfile);

export { route };
