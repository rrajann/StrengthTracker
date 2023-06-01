import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { flushSync } from 'react-dom';
import { useEffect } from 'react';
import InsertLift from './InsertLift';
import LogBook from './LogBook';
import { fetchData, options } from './fetchData';

export default function App() {

  const [list, setList] = useState([]);

  async function submitLiftToList(newLift) {
    if (list.map(el => el.name).includes(newLift.name)) {
      return alert("Lift has already been logged. You can edit the lift within the lift box.");
    }
    
    setList(
      (currList) => {return [...currList, newLift]}
    )

    const yes = await fetchData("https://exercisedb.p.rapidapi.com/exercises", options);
    console.log(yes);
  }


  return (
    <>
      <div className="drop-down">
        Strength
      </div>
      <InsertLift submitLiftToList={submitLiftToList}/>
      <LogBook list={list} setList={setList}/>
    </>
    
  )
}