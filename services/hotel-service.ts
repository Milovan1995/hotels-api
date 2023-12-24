import hotelRepository from "../repositories/hotel-repository";

const getAllHotels = async () => {
  const data = await hotelRepository.getAllHotels();
  return data;
};
const getHotelById = async (id: number) => {
  const data = await hotelRepository.getHotelById(id);
  return data;
};

const insertHotel = () => {
  return { msg: "Inserting new hotel" };
};

const updateHotel = (id: number) => {
  return { msg: `Updating hotel with id: ${id}` };
};
const deleteHotel = (id: number) => {
  return { msg: `Deleted hotel with id: ${id}` };
};
export default {
  getAllHotels,
  getHotelById,
  insertHotel,
  updateHotel,
  deleteHotel,
};
