import hotelController from "../controllers/hotel-controller";
import express from "express";
const hotelRouter = express.Router();

hotelRouter
  .route("/")
  .get(hotelController.getAllHotels)
  .post(hotelController.insertHotel);

hotelRouter
  .route("/:id")
  .get(hotelController.getHotelById)
  .put(hotelController.updateHotel)
  .delete(hotelController.deleteHotel);

export default hotelRouter;
