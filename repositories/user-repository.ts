import dbConnect from '../common/db-connection'

const register = async (user: any) => {
  try {
    const result = await dbConnect.query(
      'INSERT INTO users (username, hashed_password, is_admin) VALUES (?,?,0);',
      [user.username, user.hashedPassword]
    )
    return result
  } catch (e: any) {
    return { success: false, msg: e.message }
  }
}

const login = async (user: any) => {
  try {
    const result = await dbConnect.query(
      'SELECT * FROM users WHERE username = ? AND hashed_password = ?;',
      [user.username, user.hashedPassword]
    )
    return result
  } catch (e: any) {
    return { success: false, msg: e.message }
  }
}

export default { register, login }
