import userRepository from "../repositories/user-repository";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import dbConnect from "../common/db-connection";

const register = async (user: any) => {
  user.hashedPassword = crypto
    .createHash("md5")
    .update(user.password)
    .digest("hex");
  const result = await userRepository.register(user);
  if (result.affectedRows > 0) {
    //imamo usera, salji token koji generises
    const token = jwt.sign(
      {
        username: user.username,
        isAdmin: false,
      },
      "SECRET"
    );
    return { success: true, token };
  } else {
    return { success: false, result };
  }
};

const login = async (user: any) => {
  user.hashedPassword = crypto
    .createHash("md5")
    .update(user.password)
    .digest("hex");
  const result = await userRepository.login(user);

  if (result && result.length > 0) {
    const token = jwt.sign(
      {
        username: user.username,
        isAdmin: result[0].is_admin == 1 ? true : false,
      },
      "SECRET"
    );
    return { success: true, token };
  } else {
    return { success: false };
  }
};

export default { register, login };
