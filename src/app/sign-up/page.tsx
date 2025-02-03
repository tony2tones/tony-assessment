'use client'

import {useState} from 'react';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from '@/firebase/firebase.config';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async() => {
    console.log({auth})
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({res})
      setEmail('')
      setPassword('')
    } catch(e) {
      console.error('an error has occurred', e)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-900'>
      <div className='bg-gray-800 p-10 rounded-lg shadow-xl w-96'>
        <h1 className='text-white text-2xl mb-5'>Sign Up</h1>
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
         <button className='text-white w-full p-3 bg-indigo-600 rounded hover:bg-indigo-500' onClick={handleSignUp}>Sign up</button>
      </div>
    </div>
  )
}

export default SignUp;