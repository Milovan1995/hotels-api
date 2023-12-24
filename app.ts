import express from "express";
import _ from "lodash";
import "reflect-metadata";
import hotelRouter from "./routing/hotel-routing";
import dbConnect from "./common/db-connection";

const app = express();
app.use(express.json());
app.use("/hotel", hotelRouter);

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
