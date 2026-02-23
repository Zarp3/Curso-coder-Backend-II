import { Router } from "express";
import { productModel } from "../models/product.model.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const products = await productModel.find();
        res.json({ status: "success", products });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener productos" });
    }
});

router.get("/:pid", async (req, res) => {
    try {
        const product = await productModel.findById(req.params.pid);

        if (!product)
            return res.status(404).json({ error: "Producto no encontrado" });

        res.json({ status: "success", product });
    } catch (error) {
        res.status(500).json({ error: "Error al buscar producto" });
    }
});

router.post("/", async (req, res) => {
    try {
        const { title, price } = req.body;

        const newProduct = await productModel.create({
            title,
            price
        });

        res.status(201).json({ status: "success", product: newProduct });
    } catch (error) {
        res.status(500).json({ error: "Error al crear producto" });
    }
});

router.put("/:pid", async (req, res) => {
    try {
        await productModel.findByIdAndUpdate(req.params.pid, req.body);

        res.json({ status: "success", message: "Producto actualizado" });
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar producto" });
    }
});

router.delete("/:pid", async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.params.pid);

        res.json({ status: "success", message: "Producto eliminado" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar producto" });
    }
});

export default router;