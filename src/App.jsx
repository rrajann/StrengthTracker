import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { flushSync } from 'react-dom';
import { useEffect } from 'react';
import InsertLift from './InsertLift';
import LogBook from './LogBook';

export default function App() {

  const [list, setList] = useState([]);

  function submitLiftToList(newLift) {
    if (list.map(el => el.name).includes(newLift.name)) {
      return alert("Lift has already been logged. You can edit the lift within the lift box.");
    }
    
    setList(
      (currList) => {return [...currList, newLift]}
    )
  }

  return (
    <>
      <div className="drop-down">
        Strength
        <img src="./vite.svg"></img>
        <a href="https://github.com/rrajann">About Us</a>
      </div>
      <InsertLift submitLiftToList={submitLiftToList}/>
      <LogBook list={list} setList={setList}/>
    </>
    
  )
}