import { Request, Response } from "express";
import roomService from "../services/room-service";

const insertRoom = async (req: Request, res: Response) => {
  const data = await roomService.insertRoom(req.body);
  res.send(data);
};

const getRoomsByHotel = async (req: Request, res: Response) => {
  const data = await roomService.getRoomsByHotel(req.params.hotelId);
  res.send(data);
};

export default { insertRoom, getRoomsByHotel };
