'use client';

import { useRouter } from 'next/navigation';
import { createBook } from '@/app/actions/create';
import { useState } from 'react';

export default function Create() {
  const [error, setError] = useState('');
  const router = useRouter(); // Initialize the router for redirection

  async function handleSubmit(formData) {
    const result = await createBook(formData);

    if (result?.error) {
      setError(result.error); // Set error message if there's an error
    } else {
      router.push('/'); // Redirect to home page on success
    }
  }

  return (
    <main>
      <form action={handleSubmit}>
        <h2>Add a New Book</h2>
        <input type='text' name='title' placeholder='title' />
        <input type='text' name='author' placeholder='author' />
        <input
          type='number'
          name='rating'
          max={10}
          min={1}
          placeholder='rating'
        />
        <textarea name='blurb' placeholder='blurb...'></textarea>
        <button type='submit' className='btn'>
          Add Book
        </button>
        {error && <div className='error'>{error}</div>}
      </form>
    </main>
  );
}
