import express from 'express';
import bodyParser from 'body-parser';
import * as User from '../models/user';

const router = express.Router();

// Get profiles for swiping
router.get('/profiles', async (req, res) => {
  try {
    const userId = req.userId; // Assuming you have middleware to extract the user ID from the token
    const user = await User.findById(userId); // Assuming you have a method to find a user by ID

    // Example: Query profiles from the database based on user preferences
    const profiles = await User.find({
      _id: { $ne: userId }, // Exclude the current user's profile
      location: user.location, // Use the user's location as a filter
      age: { $gte: user.minAge, $lte: user.maxAge }, // Filter by age range
    }).limit(10); // Limit the result to 10 profiles

    res.status(200).json({ profiles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Swipe left or right
router.post('/swipe', async (req, res) => {
  try {
    const { userId, profileId, action } = req.body;

    // Update database with swipe action
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Store the swipe action in the user's profile
    if (action === 'like') {
      user.likes.push(profileId);
    } else if (action === 'pass') {
      user.passes.push(profileId);
    } else {
      return res.status(400).json({ error: 'Invalid action' });
    }

    await user.save();

    res.status(200).json({ message: `Profile ${profileId} ${action}d by user ${userId}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
