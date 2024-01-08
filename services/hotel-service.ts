import hotelRepository from "../repositories/hotel-repository";

const getAllHotels = async () => {
  const data = await hotelRepository.getAllHotels();
  return data;
};
const getHotelById = async (id: number) => {
  const data = await hotelRepository.getHotelById(id);
  if (data && data.length > 0) {
    return data[0];
  }
  return null;
};

const insertHotel = async (hotel: any) => {
  const data = await hotelRepository.insertHotel(hotel);
  return data;
};

const updateHotel = async (id: number, hotel: any) => {
  const data = await hotelRepository.updateHotel(id, hotel);
  return data;
};
const deleteHotel = async (id: number) => {
  const data = await hotelRepository.deleteHotel(id);
  return data;
};
export default {
  getAllHotels,
  getHotelById,
  insertHotel,
  updateHotel,
  deleteHotel,
};
