const pool = require("../config/db");

const createAuditLog = async ({
    adminId,
    action,
    entityType = null,
    entityId = null,
    description = null,
    ipAddress = null
}) => {
    try {
        await pool.query(
            `INSERT INTO audit_logs (
                admin_id,
                action,
                entity_type,
                entity_id,
                description,
                ip_address
            )
            VALUES ($1, $2, $3, $4, $5, $6)`,
            [
                adminId,
                action,
                entityType,
                entityId,
                description,
                ipAddress
            ]
        );
    } catch (error) {

        console.error("Audit log error:", error);
    }
};

module.exports = {
    createAuditLog
};