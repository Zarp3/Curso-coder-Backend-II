import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import { initializePassport } from "./config/passport.config.js";
import sessionsRouter from "./routes/sessions.router.js";
import usersRouter from "./routes/users.router.js";
import productRouter from "./routes/product.router.js";

const app = express();
const PORT = 8080;

app.use("/api/products", productRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
    .then(() => console.log("🟢 Conectado a MongoDB"))
    .catch(err => console.log(err));

initializePassport();
app.use(passport.initialize());

app.use("/api/sessions", sessionsRouter);
app.use("/api/users", usersRouter);

app.listen(PORT, () => {
    console.log(`🚀 Server escuchando en puerto ${PORT}`);
});