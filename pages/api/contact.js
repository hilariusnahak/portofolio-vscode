import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required' });
  }

  try {
    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: {
        Name: {
          title: [{ text: { content: name } }],
        },
        Email: {
          email: email,
        },
        Message: {
          rich_text: [{ text: { content: message } }],
        },
      },
    });

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Notion API error:', error);
    return res.status(500).json({ message: 'Failed to send message' });
  }
}
