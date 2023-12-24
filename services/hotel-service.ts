const getAllHotels = () => {
  return { msg: "Getting all hotels" };
};
const getHotelById = (id: number) => {
  return { msg: `Getting hotel with id:  ${id}` };
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
