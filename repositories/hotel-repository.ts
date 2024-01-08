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
const insertHotel = async (hotel: any) => {
  try {
    const data = await dbConnect.query(
      "INSERT INTO hotel (name , description , no_of_stars , year_of_start , updated , created) VALUES (?, ?, ?, ?, now(), now())",
      [hotel.name, hotel.description, hotel.noOfStars, hotel.yearOfStart]
    );
    return { success: true, data };
  } catch (e) {
    console.error(e, "error");
  }
};
const deleteHotel = async (id: number) => {
  try {
    const data = await dbConnect.query("DELETE FROM hotel WHERE id = ?", [id]);
    return { msg: "success", data };
  } catch (e) {
    console.error(e, "error");
  }
};
const updateHotel = async (id: number, hotel: any) => {
  try {
    const data = await dbConnect.query(
      "UPDATE hotel SET name = ?, description = ?, no_of_stars = ?, year_of_start = ?, updated = now() WHERE id = ?",
      [hotel.name, hotel.description, hotel.noOfStars, hotel.yearOfStart, id]
    );
    return data;
  } catch (e) {
    console.error(e, "error");
  }
};
export default {
  getAllHotels,
  getHotelById,
  insertHotel,
  deleteHotel,
  updateHotel,
};
