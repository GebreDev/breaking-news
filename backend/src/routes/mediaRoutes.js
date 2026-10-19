const express = require("express");
const {
  getMedia,
  uploadMedia,
  deleteMedia,
} = require("../controllers/mediaController");
const { handleMediaUpload } = require("../services/mediaUploadService");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authenticateToken, getMedia);

router.post("/upload", authenticateToken, handleMediaUpload, uploadMedia);

router.delete("/:id", authenticateToken, deleteMedia);

module.exports = router;
