import express from 'express';
const router = express.Router();

/**
 * GET /api/bookings
 * Test endpoint for connection
 */
router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Connection successful - GET request working!',
        timestamp: new Date().toISOString()
    });
});

/**
 * POST /api/bookings
 * Test endpoint for connection
 */
router.post('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Connection successful - POST request working!',
        receivedData: req.body,
        timestamp: new Date().toISOString()
    });
});

export default router;
