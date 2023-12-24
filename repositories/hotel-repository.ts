import dbConnect from "../common/db-connection";
const getAllHotels = async () => {
  try {
    const data = await dbConnect.query("SELECT * FROM hotel");
    return data;
  } catch (e) {
    return e;
  }
};
const getHotelById = async (id: number) => {
  try {
    const data = await dbConnect.query("SELECT * FROM hotel WHERE id = ?", [
      id,
    ]);
    return data;
  } catch (e) {
    return null;
  }
};
const insertHotel = async (param: any) => {};
export default {
  getAllHotels,
  getHotelById,
  insertHotel,
};
