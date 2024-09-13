'use server';

import { v4 as uuidv4 } from 'uuid';
import { client } from '../lib/db';
import { redirect } from 'next/navigation';

export async function createBook(formData) {
  const { title, rating, author, blurb } = Object.fromEntries(formData);
  const id = uuidv4();

  await client.HSET(`books:${id}`, { title, rating, author, blurb });
}
