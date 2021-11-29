const app = require("./app");
require("dotenv").config({ path: "backend/config.env" });
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000;

const connectDatabase = () => {
  mongoose
    .connect(`${process.env.DB_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(
        `Mongodb Database connected with HOST: ${con.connection.host}`
      );
    });
};

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config.env" });
}

connectDatabase();

const server = app.listen(PORT, () =>
  console.log(`Server started in port: ${PORT} in ${process.env.NODE_ENV}`)
);
