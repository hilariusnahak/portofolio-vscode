import { Client } from '@notionhq/client';
import { NextRequest, NextResponse } from 'next/server';

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: 'Name, email, and message are required' },
      { status: 400 }
    );
  }

  try {
    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID! },
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

    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Notion API error:', error);
    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
