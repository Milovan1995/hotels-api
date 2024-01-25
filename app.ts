import express from "express";
import _ from "lodash";
import "reflect-metadata";
import hotelRouter from "./routing/hotel-routing";
import dbConnect from "./common/db-connection";
import roomRouter from "./routing/room-routing";
import cors from "cors";
import path from "path";
import fileUploadRouter from "./common/file-upload";
import userRouter from "./routing/user-routing";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/hotel", hotelRouter);
app.use("/room", roomRouter);
app.use(fileUploadRouter);

app.use(userRouter);
//putanje = aktuelni folder + public

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
