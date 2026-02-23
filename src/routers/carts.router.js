import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "Ruta carts funcionando" });
});

export default router;