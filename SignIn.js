import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const SignIn = () => {
  const handleGoogleLogin = (response) => {
    console.log('Google login success:', response);
  };

  const handleGoogleLoginError = () => {
    console.error('Google login failed');
  };

  const handleFacebookResponse = () => {
    console.log('Facebook login logic goes here');
  };

  const handleTwitterLogin = () => {
    const twitterOAuthURL = 'https://api.twitter.com/oauth/authenticate?oauth_token=YOUR_OAUTH_TOKEN';
    window.location.href = twitterOAuthURL;
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.message === 'Login successful') {
        localStorage.setItem('token', data.token);
        window.location.href = '/home'; // Redirect to home page
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred during sign-in');
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
      {/* Form Section */}
      <div className="flex flex-col items-center justify-center md:w-1/2 w-full px-12">
        <div className="flex flex-col items-center">
          <img
            src="images/binwise.png"
            alt=""
            className="h-24 w-20"
          />
          <h1 className="text-3xl font-bold mb-4 text-white text-center">Sign In</h1>
        </div>
        <form className="w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your email"
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
            />
          </div>
          <p className="text-sm mt-4 text-right">
            <a href="/signup" className="text-green-600 font-bold hover:underline">
              Forgot password?
            </a>
          </p>
          <button
            type="submit"
            className="w-28 bg-green-600 text-white items-center justify-center rounded hover:bg-green-700 my-4 py-2 mx-44"
          >
            Log In
          </button>
          <div className="flex flex-col space-y-4">
            {/* Google Login */}
            <div className="bg-white rounded-md flex items-center justify-center py-3 cursor-pointer">
              <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={handleGoogleLoginError}
                useOneTap
                className="!shadow-none !border-none"
              />
            </div>
            {/* Facebook Login */}
            <div
              className="bg-blue-600 rounded-md flex items-center justify-center py-3 cursor-pointer"
              onClick={handleFacebookResponse}
            >
              <FontAwesomeIcon icon={faFacebook} className="text-white text-xl" />
              <span className="ml-2 text-white font-medium">Sign in with Facebook</span>
            </div>
            {/* Twitter Login */}
            <div
              onClick={handleTwitterLogin}
              className="bg-black rounded-md flex items-center justify-center py-3 cursor-pointer"
            >
              <FontAwesomeIcon icon={faXTwitter} className="text-white text-xl" />
              <span className="ml-2 text-white font-medium">Sign in with X</span>
            </div>
          </div>
          <p className="text-sm mt-4 text-center">
            You do not have an account?{' '}
            <a href="/signup" className="text-green-600 font-bold hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
