// components/SignInButton.tsx
'use client';

import { signIn } from 'next-auth/react';

export default function SignInButton() {
  return (
    <button
      onClick={() => signIn("google", {
        callbackUrl: "/", // ✅ where to go after login
        redirect: true,   // ✅ allow redirect
      })}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Sign in with Google
    </button>
  );
}
