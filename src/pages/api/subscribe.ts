// pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      // Simulate email saving or third-party service integration
      console.log(`Email subscribed: ${email}`);
      
      // Respond with a success message
      res.status(200).json({ message: 'Subscription successful' });
    } catch (error) {
      // Handle errors and send a failure message
      res.status(500).json({ error: 'Failed to subscribe' });
    }
  } else {
    // Handle invalid HTTP methods
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
