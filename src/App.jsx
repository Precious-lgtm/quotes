import React from 'react';
import PageHeader from './components/PageHeader';
import Quotes from './pages/Quotes';

function App() {
  
  return (
    <div className="w-5/6 h-screen flex flex-col justify-start items-center overflow-auto">
      <PageHeader />
      <Quotes />
    </div>
  )
}

export default App;
