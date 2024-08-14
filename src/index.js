import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header'
import Content from './components/content';
import Footer from './components/footer'

//Creating a page using ReactJs
function LandingPage(){
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
ReactDOM.render(<LandingPage />,document.getElementById('root'));

