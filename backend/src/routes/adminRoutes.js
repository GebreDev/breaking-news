const express = require("express");

const {
    login,
    getAdmins,
    createAdmin,
    updateAdminStatus,
    getAuditLogs
} = require("../controllers/adminController");

const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", login);

router.get(
    "/users",
    authenticateToken,
    getAdmins
);

router.post(
    "/users",
    authenticateToken,
    createAdmin
);

router.patch(
    "/users/:id/status",
    authenticateToken,
    updateAdminStatus
);

router.get(
    "/audit-logs",
    authenticateToken,
    getAuditLogs
);

module.exports = router;