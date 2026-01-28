const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Simple password protection middleware
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

const authMiddleware = (req, res, next) => {
  const password = req.headers['x-admin-password'];
  
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ 
      success: false, 
      error: 'Unauthorized. Invalid password.' 
    });
  }
  
  next();
};

// GET /api/admin/messages - Get all messages
router.get('/messages', authMiddleware, async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch messages' });
  }
});

// GET /api/admin/stats - Get message stats
router.get('/stats', authMiddleware, async (req, res) => {
  try {
    const total = await Contact.countDocuments();
    const unread = await Contact.countDocuments({ read: false });
    res.json({ success: true, stats: { total, unread } });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch stats' });
  }
});

// PATCH /api/admin/messages/:id/read - Mark message as read
router.patch('/messages/:id/read', authMiddleware, async (req, res) => {
  try {
    const message = await Contact.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    
    if (!message) {
      return res.status(404).json({ success: false, error: 'Message not found' });
    }
    
    res.json({ success: true, message });
  } catch (error) {
    console.error('Error updating message:', error);
    res.status(500).json({ success: false, error: 'Failed to update message' });
  }
});

// DELETE /api/admin/messages/:id - Delete a message
router.delete('/messages/:id', authMiddleware, async (req, res) => {
  try {
    const message = await Contact.findByIdAndDelete(req.params.id);
    
    if (!message) {
      return res.status(404).json({ success: false, error: 'Message not found' });
    }
    
    res.json({ success: true, message: 'Message deleted successfully' });
  } catch (error) {
    console.error('Error deleting message:', error);
    res.status(500).json({ success: false, error: 'Failed to delete message' });
  }
});

// POST /api/admin/verify - Verify admin password
router.post('/verify', (req, res) => {
  const { password } = req.body;
  
  if (password === ADMIN_PASSWORD) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, error: 'Invalid password' });
  }
});

module.exports = router;
