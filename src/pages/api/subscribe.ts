// pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      const { email } = req.body;
  
      try {
        // Example: Simulate email saving or third-party service integration
        console.log(`Email subscribed: ${email}`);
        
        res.status(200).json({ message: 'Subscription successful' });
      } catch (error) {
        console.error('Subscription error:', error);
        res.status(500).json({ error: 'Failed to subscribe' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
}