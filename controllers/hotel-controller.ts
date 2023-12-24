import { Request, Response } from "express";

const getAllHotels = (req: Request, res: Response) => {
  res.send({ msg: "Getting all hotels" });
};

const getHotelById = (req: Request, res: Response) => {
  const id = req.params.id;
  res.send({ msg: `Getting the hotel with id ${id}` });
};
const insertHotel = (req: Request, res: Response) => {
  res.send({ msg: "Inserting new hotel" });
};
const updateHotel = (req: Request, res: Response) => {
  const id = req.params.id;
  res.send({ msg: `Updating the hotel with id ${id}` });
};

const deleteHotel = (req: Request, res: Response) => {
  const id = req.params.id;
  res.send({ msg: `Deleting hotel with id ${id}` });
};
export default {
  getAllHotels,
  getHotelById,
  insertHotel,
  updateHotel,
  deleteHotel,
};
