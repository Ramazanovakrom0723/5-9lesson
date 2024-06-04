import React, { useState } from 'react';
import Header from './components/header/header';
import Carousel from './components/carousel/carousel';
import Footer from './components/footer/footer'
import './App.css';

function App() {
  const [selectedModel, setSelectedModel] = useState('Model S');

  return (
    <div className="App">
      <Header onSelectModel={setSelectedModel} />
      <Carousel selectedModel={selectedModel} />
      <Footer />
    </div>
  );
}

export default App;
