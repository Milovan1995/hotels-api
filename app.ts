import express from "express";
import _ from "lodash";
import hotelRouter from "./routing/hotel-routing";

const app = express();
app.use(express.json());
app.use(hotelRouter);

const port: number = 3000;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
