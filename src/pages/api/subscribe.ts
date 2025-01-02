// pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Here you would store the email (e.g., in a database or send to a third-party service)
    try {
      // Example: Simulate email saving or third-party service integration
      console.log(`Email subscribed: ${email}`);
      
      res.status(200).json({ message: 'Subscription successful' });
    } catch {
      res.status(500).json({ error: 'Failed to subscribe' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
