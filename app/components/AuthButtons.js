// components/AuthButtons.tsx
'use client';

import { useSession } from 'next-auth/react';
import SignOutButton from './SignOutButton';
import SignInButton from './SignInButton';

export default function AuthButtons() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Loading...</p>;

  return (
    <div>
      {session ? (
        <>
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
}
