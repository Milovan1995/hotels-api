import dbConnect from "../common/db-connection";

const insertRoom = async (room: any) => {
  try {
    const result = await dbConnect.query(
      `INSERT INTO room (hotel_id,room_no,no_of_beds,room_name,description,updated,created) VALUES (?,?,?,?,?,now(),now())`,
      [
        room.hotelId,
        room.roomNo,
        room.noOfBeds,
        room.roomName,
        room.roomDescription,
      ]
    );
    return result;
  } catch (e) {
    console.error(e, "error");
  }
};

const getRoomsByHotel = async (id: any) => {
  try {
    const data = await dbConnect.query(
      "SELECT * FROM room WHERE hotel_id = ?",
      [id]
    );
    return data;
  } catch (e) {
    console.error(e, "error");
  }
};

export default { insertRoom, getRoomsByHotel };
