import roomRepository from "../repositories/room-repository";

const insertRoom = async (room: any) => {
  const data = await roomRepository.insertRoom(room);
  return data;
};

const getRoomsByHotel = async (id: any) => {
  const data = await roomRepository.getRoomsByHotel(id);
  return data;
};
export default { insertRoom, getRoomsByHotel };
