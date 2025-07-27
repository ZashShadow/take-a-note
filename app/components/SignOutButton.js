'use client';

import { signOut } from 'next-auth/react';

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
    >
      Sign out
    </button>
  );
}
