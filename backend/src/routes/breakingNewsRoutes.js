const express = require("express");

const {
  getBreakingNews,
  getActiveBreakingNews,
  createBreakingNews,
  updateBreakingNews,
  updateBreakingNewsDetails,
  deleteBreakingNews,
} = require("../controllers/breakingNewsController");

const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/active", getActiveBreakingNews);

router.get("/", authenticateToken, getBreakingNews);

router.post("/", authenticateToken, createBreakingNews);

router.patch("/:id", authenticateToken, updateBreakingNews);

router.put("/:id", authenticateToken, updateBreakingNewsDetails);

router.delete("/:id", authenticateToken, deleteBreakingNews);

module.exports = router;
