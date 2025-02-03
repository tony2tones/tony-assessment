'use client'
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from '@/firebase/firebase.config';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  console.log('USER', user)

  if(!user) {
    router.push('/sign-up');
  }

  return (
    <h1>Dashboard</h1>
  );
}
