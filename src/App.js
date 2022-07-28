import { useState } from 'react';
import './App.css';
import { data } from './mockData'
import User from './User';
import UserInput from './userInput';


function App() {
  const [query, setQuery] = useState("")
  return (
    <div className='app'>
      <UserInput setQuery={setQuery} />
      <User userData={data} query={query} />
    </div>

  );
}

export default App;
