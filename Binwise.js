import React from 'react';
import Header from '../components/Header';
import Getstarted from '../components/Getstarted';
import Educorner from '../components/Educorner';
import Recycling from '../components/Recycling';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import Recycler from './Recycler'
import SignIn from './SignIn';
import SignUp from './SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Buybin from './Buybin';
import Services from './Services';
import SearchBar from './SearchBar';

const Binwise = () => {
  const Home = () => (
    <div>
      <SearchBar className='mx-0'/>
      <Getstarted />
      <Educorner />
      <Recycling />
      <Testimonial />
      <Footer />
    </div>
  );

  return (
    <div className="bg-primary min-h-screen w-full">
      <Router>
        <Header />
        <Routes>
          {/* Default route to display all homepage components */}
          <Route path="/Home" element={<Home />} />
          <Route path="/Recycler" element={<Recycler />} />
          <Route path="/Buybin" element={<Buybin />} />
          <Route path="/Services" element={<Services />} />
          {/* Routes for SignIn and SignUp */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Binwise;
