// import {createPool} from "mysql2/promise";

// const {DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOSTNAME} = process.env;

// export const pool = createPool({
//   host: DB_HOSTNAME,
//   user: DB_USERNAME,
//   password: DB_PASSWORD,
//   database: DB_NAME,
//   port: 3306,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

import mongoose from "mongoose";
const {DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_NAME} = process.env;

const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}/${DB_NAME}?retryWrites=true&w=majority`;
export const connectToDataBase = async () => {
  try {
    await mongoose.set("strictQuery", false).connect(uri);
    console.log("Conexion a Base de Datos Exitosa");
  } catch (error) {
    console.log("Error al Conectarse", error);
    process.exit(1);
  }
};

// WITH MONGODB
// let db;
// export const connectToDataBase = async () => {
//   try {
//     await client.connect();
//     db = client.db();
//     console.log("conexcion con mongo db exitosa");
//   } catch (error) {
//     console.log("error al conectarse", error);
//     process.exit(1);
//   }
// };

// export const mongoDBinstance = () => {
//   return db;
// };
