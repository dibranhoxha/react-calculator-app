import React, { useState } from 'react'
import Buttons from './components/Buttons'
import Output from './components/Output'
import Formula from './components/Formula'
import './App.css';

function App() {
  const [data, setData] = useState("");
  return (
    <div className="calculator">

      <Formula data={data} />
      <Output data={data} />
      <Buttons data={data} setData={setData} />

    </div>
  );
}

export default App;
