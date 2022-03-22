import { Client } from "@notionhq/client";

export async function getPublishedPostsNotion(db_id) {

  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const posts = await notion.databases.query({
    database_id: db_id,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
  })

  return true;
}