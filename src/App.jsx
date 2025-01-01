import React from 'react';
import PageHeader from './components/PageHeader';
import Quotes from './pages/Quotes';

function App() {
  
  return (
    <div className="w-[81.25%] h-screen flex flex-col justify-start items-center overflow-auto">
      <PageHeader backVisible={true} />
      <Quotes />
    </div>
  )
}

export default App;
