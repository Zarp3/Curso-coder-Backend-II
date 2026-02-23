import { Router } from "express";
import { userModel } from "../models/user.model.js";

const router = Router();


router.get("/", async (req, res) => {
    const users = await userModel.find();
    res.json(users);
});


router.get("/:uid", async (req, res) => {
    const user = await userModel.findById(req.params.uid);
    res.json(user);
});


router.put("/:uid", async (req, res) => {
    await userModel.findByIdAndUpdate(req.params.uid, req.body);
    res.json({ message: "Usuario actualizado" });
});


router.delete("/:uid", async (req, res) => {
    await userModel.findByIdAndDelete(req.params.uid);
    res.json({ message: "Usuario eliminado" });
});

export default router;