import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Getstarted from './Getstarted';
import Educorner from './Educorner';
import Recycler from './Recycler';
import Testimonial from './Testimonial';
import SearchBar from '../pages/SearchBar';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/signin';
      return;
    }

    fetch('http://localhost:5000/api/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch user data');
        }
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((err) => {
        console.error('Fetch error:', err);
        localStorage.removeItem('token');
        window.location.href = '/signin';
      });
  }, []);

  if (!user) {
    return <div>Loading user data...</div>;
  }

  return (
    <div>
        <div className="profile">
          {user.profilePic ? (
            <img
              src={`http://localhost:5000/images/${user.profilePic}`}
              alt="Profile"
              className="rounded-full"
            />
          ) : (
            <span>Loading profile...</span>
          )}
        </div>
      <div>Welcome to the homepage, {user.email}</div>
      <Header />
      <SearchBar/>
      <Getstarted />
      <Educorner />
      <Recycler />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
