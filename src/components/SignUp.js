import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Toaster, toast} from "react-hot-toast";
import {Link} from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User creation successful
        const user = userCredential.user;
        console.log('User created:', user);
        toast.success('User Created Successfully!')
      })
      .catch((error) => {
        // Error occurred during user creation
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error creating user:', errorCode, errorMessage);
        toast.error('Failed to create user...')
      });
  };

  return (
    <>
    <div>
      <Toaster position='top-center'/>
      <h2 >Create User</h2>
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
      <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      <button onClick={handleSignUp}>Sign Up</button>
      Already have an account <Link to="/">Login</Link>

    </div>
    </>
  );
};

export default SignUp;
