const express = require("express");

const {
    getNews,
    getNewsBySlug,
    getAdminNews,
    getNewsById,
    createNews,
    updateNews,
    deleteNews
} = require("../controllers/newsController");

const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getNews);

router.get("/:slug", getNewsBySlug);

router.get("/admin/all", authenticateToken, getAdminNews);

router.get("/admin/:id", authenticateToken, getNewsById);

router.post("/", authenticateToken, createNews);

router.put("/:id", authenticateToken, updateNews);

router.delete("/:id", authenticateToken, deleteNews);

module.exports = router;