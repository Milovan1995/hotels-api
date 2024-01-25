import { DataSource } from "typeorm";

const dbConnect = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "kukalatimajka123",
  database: "logate",
});

export default dbConnect;
