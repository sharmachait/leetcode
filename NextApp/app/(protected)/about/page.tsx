'use client';
import { useSession } from 'next-auth/react';

export default function about() {
  const session = useSession();
  return <div>{JSON.stringify(session)}</div>;
}
