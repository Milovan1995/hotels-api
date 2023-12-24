import hotelController from "../controllers/hotel-controller";
import express from "express";
const hotelRouter = express.Router();

hotelRouter.get("/hotel", hotelController.getAllHotels);

hotelRouter.get("/hotel/:id", hotelController.getHotelById);

hotelRouter.post("/hotel", hotelController.insertHotel);

hotelRouter.put("/hotel/:id", hotelController.updateHotel);

hotelRouter.delete("/hotel/:id", hotelController.deleteHotel);

export default hotelRouter;
