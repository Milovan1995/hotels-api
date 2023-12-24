import { Request, Response } from "express";
import hotelService from "../services/hotel-service";
const getAllHotels = (req: Request, res: Response) => {
  const data = hotelService.getAllHotels();
  res.send(data);
};

const getHotelById = (req: Request, res: Response) => {
  const id = req.params.id;
  const data = hotelService.getHotelById(parseInt(id));
  res.send(data);
};
const insertHotel = (req: Request, res: Response) => {
  const data = hotelService.insertHotel();
  res.send(data);
};
const updateHotel = (req: Request, res: Response) => {
  const id = req.params.id;
  const data = hotelService.updateHotel(parseInt(id));
  res.send(data);
};

const deleteHotel = (req: Request, res: Response) => {
  const id = req.params.id;
  const data = hotelService.deleteHotel(parseInt(id));
  res.send(data);
};
export default {
  getAllHotels,
  getHotelById,
  insertHotel,
  updateHotel,
  deleteHotel,
};
