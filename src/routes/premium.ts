import express from 'express';
import bodyParser from 'body-parser';
import * as User from '../models/user';

const router = express.Router();

// Purchase premium package
router.post('/purchase', async (req, res) => {
  try {
    const { userId, packageType } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Implement logic to handle premium package purchase
    // Update user profile with premium features
    if (packageType === 'premium1') {
      user.isPremium = true;
      user.premiumFeatures.push('Feature 1');
    } else if (packageType === 'premium2') {
      user.isPremium = true;
      user.premiumFeatures.push('Feature 2');
    } else {
      return res.status(400).json({ error: 'Invalid package type' });
    }

    // Save the updated user profile
    await user.save();

    res.status(200).json({ message: `User ${userId} purchased ${packageType} package` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
