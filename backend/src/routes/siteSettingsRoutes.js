const express = require("express");

const {
    getSiteSettings,
    updateSiteSetting
} = require("../controllers/siteSettingsController");

const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.get(
    "/",
    authenticateToken,
    getSiteSettings
);

router.patch(
    "/:key",
    authenticateToken,
    updateSiteSetting
);

module.exports = router;