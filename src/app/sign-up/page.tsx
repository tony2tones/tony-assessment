'use client'

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase.config';

const SignUp = () => {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const onSubmit = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
      router.push('/')

    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-900'>
      <div className='bg-gray-800 p-10 rounded-lg shadow-xl w-96'>
        <h1 className='text-white text-2xl mb-5'>Sign Up</h1>
        <form onSubmit={onSubmit}>
        <input 
        type='email'
         placeholder='Please enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white  placeholder-gray-500'
         />

         <input
         type="password"
         placeholder='Please enter a password'
         value={password}
         onChange={(e) => setPassword(e.target.value)}
          className='w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500'
         />
         <button className='text-white w-full p-3 bg-indigo-600 rounded hover:bg-indigo-500' type='submit'>Sign up</button>
         </form>
      </div>
    </div>
  )
}

export default SignUp;