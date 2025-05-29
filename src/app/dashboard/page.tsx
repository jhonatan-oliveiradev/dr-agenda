import {headers} from 'next/headers'

import { auth } from "@/lib/auth"

import { SignOutButton } from './components/sign-out-button';

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  return (
    <div>
      <h1>{session?.user?.name}</h1>
     <SignOutButton />
  </div>
  )
}
