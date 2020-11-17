import React, { useState } from 'react'
import Buttons from './components/Buttons'
import Output from './components/Output'
import Formula from './components/Formula'
import './App.css';

function App() {
  const [data, setData] = useState("");
  const [formula, setFormula] = useState("");
  return (
    <div className="calculator">

      <Formula formula={formula} />
      <Output data={data} />
      <Buttons data={data} setData={setData} setFormula={setFormula} />

    </div>
  );
}

export default App;
