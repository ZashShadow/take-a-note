'use client';

import { signOut } from 'next-auth/react';

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="px-4 py-1 bg-white text-black rounded hover:scale-105 cursor-pointer"
    >
      Sign out
    </button>
  );
}
