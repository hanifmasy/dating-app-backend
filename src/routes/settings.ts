import express from 'express';
import bodyParser from 'body-parser';
import * as User from '../models/user';

const router = express.Router();

// Update user settings
router.put('/update', async (req, res) => {
  try {
    const { userId, settings } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Implement logic to update user settings
    // Update user preferences in the database
    user.settings = { ...user.settings, ...settings };

    // Save the updated user profile
    await user.save();

    res.status(200).json({ message: `Settings updated for user ${userId}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
