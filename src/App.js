import React from 'react';
import Article from './Components/Article';
import DateAndTime from './Components/DateAndTime';
import UserDetail from './Components/UserDetail';
import DarkMode from './context/DarkMode';

function App() {

  return (

    <div className="App">
      <DarkMode>
        <header>
          <h1>Skeleton-Screen</h1>
        </header>
        <div>
          <h3 className='text-center' style={{ 'backgroundColor': 'lightgrey' }}><DateAndTime /></h3>
        </div>
        <div className="content">
          <Article />
          <UserDetail />
        </div>
      </DarkMode>
    </div>

  );
}

export default App;
