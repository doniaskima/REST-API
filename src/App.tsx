import React from 'react';
import './App.css';
import Person from "./components/Person"
import Greet from "./components/Grre"
import Status from './components/Status';
 import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';

function App() {

  const personName={
    first:"Donia",
    last:"Skima",
  }

  return (
    <div className="App">
      <Greet name="Donia" messageCount={3}  isLoggedIn={true} />
      <Person name={personName} />
      <Status status="loading" />
      <Heading>Hello world</Heading>
      <Oscar>
        <Heading>
          Hoooooo
        </Heading>
      </Oscar>
      <Button handleCLick={(event)=>{
        console.log("Button Click",event)
      }} />
      <Input value="" handleChange={(event)=>console.log(event)} />
    </div>
  );
}

export default App;
