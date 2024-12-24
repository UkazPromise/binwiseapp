import React, { useState } from 'react'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      alert('Password not the same');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, confirmPassword }),
      });
      const data = await response.json();
      if (data.message === 'Account created successfully') {
        alert('Account created successfully');
        // Redirect to SignIn page
        window.location.href = '/signin';
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred during signup');
    }
  };  
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-primary">
      {/* Left Image Section */}
      <div className="hidden md:block md:w-1/2">
        <img
          src="/images/img7.png"
          alt="binwise collecting refuse for recycling"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full px-12 md:w-1/2">
        <div className="flex flex-col items-center">
            <img
              src="images/binwise.png"
              alt=""
              className="h-24 w-20"
            />
            <h1 className="text-3xl font-bold mb-4 text-white text-center">Sign Up</h1>
        </div>
        <form onSubmit={handleSubmit} className="p-6 rounded w-96">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold text-white">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
    
  );
};

export default SignUp;
