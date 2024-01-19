import express from "express";
import _ from "lodash";
import "reflect-metadata";
import hotelRouter from "./routing/hotel-routing";
import dbConnect from "./common/db-connection";
import roomRouter from "./routing/room-routing";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/hotel", hotelRouter);
app.use("/room", roomRouter);

//putanje = aktuelni folder + public

console.log(__dirname, "aktuelni folderF");
app.use(express.static(path.join(__dirname, "public")));
const port: number = 3000;

dbConnect
  .initialize()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err: any) => {
    console.error(err);
  });
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
