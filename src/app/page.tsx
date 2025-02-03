'use client'
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from '../firebase/firebase.config';
import { useRouter } from 'next/navigation';
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [value,setValue] = useState('');
  const router = useRouter();
  // const userSession = sessionStorage.getItem('user');

  // useEffect(() => {
  //   const storedValue: string | null = window.sessionStorage.getItem("user");
  //   const valueData = storedValue ? JSON.parse(storedValue) : 1;
  //   setValue(valueData);
  // }, []);
  console.log('USER', user)
  console.log('value', value)

  useEffect(() => {
if(!user && !loading) {
  router.replace('/sign-in');
}
  }, [user, loading,router])
  
  if (loading || !user) {
    return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
  }
  return (
    <main>
      <div className="m-3 bg-slate-500">
      <button onClick={() => signOut(auth)}>Logout</button>
      <h1>Dashboard</h1>
      <Link href='/user-management'>User Profile</Link>
      </div>
    </main>
  );
}

export default Dashboard;

