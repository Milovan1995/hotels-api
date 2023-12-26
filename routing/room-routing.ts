import express from "express";
import roomController from "../controllers/room-controller";

const roomRouter = express.Router();

roomRouter.route("/").post(roomController.insertRoom);
roomRouter.route("/:hotelId").get(roomController.getRoomsByHotel);

export default roomRouter;
