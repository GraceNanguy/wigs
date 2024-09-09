import Home from './home'
import Navbar from './navbar'
import CommentSection from './comment'
import Footer from './footer'

import {Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/comment" element={<CommentSection />} />
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
