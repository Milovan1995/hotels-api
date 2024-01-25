import hotelController from "../controllers/hotel-controller";
import express from "express";
import authMiddleware from "../middlewares/auth-middleware";
const hotelRouter = express.Router();

hotelRouter
  .route("/")
  .get(authMiddleware, hotelController.getAllHotels)
  .post(hotelController.insertHotel);

hotelRouter
  .route("/:id")
  .get(hotelController.getHotelById)
  .put(hotelController.updateHotel)
  .delete(hotelController.deleteHotel);

export default hotelRouter;
