import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { flushSync } from 'react-dom';
import { useEffect } from 'react';

export default function App() {

  const [list, setList] = useState([]);
  const [lift, setLift] = useState({ name: "", logs: [{ weight: "", reps: "", date: "", time: "", complete: false }]});


  function submitLift(e) {
    e.preventDefault();

    if (list.map(el => el.name).includes(lift.name)) {
      return alert("Lift has already been logged. You can edit the lift within the lift box.");
    }

    setList(
      (currList) => {return [...currList, lift]}
    )
    
    setLift({ name: "", logs: [{ weight: "", reps: "", date: "", time: "", complete: false }]});
}

  function updateLift(e, lift, w, r, d, t) {
    e.preventDefault();

    setList(prevList => {
      let modifyLiftIndex = prevList.findIndex(l => l.name === lift.name);
      let modifyLift = prevList[modifyLiftIndex];
      modifyLift.logs[modifyLift.logs.length - 1] = {weight: w, reps: r, date: d, time: t, complete: true};
      return prevList.toSpliced(modifyLiftIndex, 1, modifyLift);    // adds modified lift back into list
    })
    console.log(list);
  }

  function addLog(e, lift) {
    e.preventDefault();
    console.log('hi');

    setList(prevList => {
      // let modifyLift = prevList.find(l => l.name === lift.name);
      // modifyLift.logs = [...modifyLift.logs, { weight: "", reps: "", date: "", time: "", complete: false }];
      // return prevList;
      let modifyLog = {weight: "", reps: "", date: "", time: "", complete: false};

      let modifyLiftIndex = prevList.findIndex(l => l.name === lift.name);
      let modifyLift = prevList[modifyLiftIndex];

      const logExists = modifyLift.logs.some((log) =>
        log.weight === modifyLog.weight &&
        log.reps === modifyLog.reps &&
        log.date === modifyLog.date &&
        log.time === modifyLog.time &&
        log.complete === modifyLog.complete);

      if (!logExists) {
        modifyLift.logs = [...modifyLift.logs, modifyLog];
      }

      let updatedLift = [...prevList]
      updatedLift[modifyLiftIndex] = modifyLift
      return updatedLift;
      return prevList.toSpliced(modifyLiftIndex, 1, modifyLift);    // adds modified lift back into list
    })
    console.log(list);
  }

  return (
    <>
    
    <div className="drop-down">
      Strength
      <img src="./vite.svg"></img>
      <a href="https://github.com/rrajann">About Us</a>
    </div>

    <form onSubmit={submitLift} className="submission"> 
      <label htmlFor="lift-name"> Lift: </label>
      <input value={lift.name} onChange={e => setLift(prev => {return {...prev, name: e.target.value}})} type="type" id="lift-name"></input>
      <button className="btn">New Lift</button>
    </form>

    <div className="lifts">
      {list.map(l => {
        return (
          <div className="lift-box">
            <h1>{l.name}</h1>
            {l.logs.map(el => {
              if (!el.complete) {
                let weight, reps, date, time;
                return (
                  <form className="lift-newlog" onSubmit={e => updateLift(e, l, weight, reps, date, time)}>
                    <label htmlFor="lift-weight"> Weight: </label>
                    <input onChange={e => weight = e.target.value} min="0" type="number" id="lift-weight"></input>
                    <label htmlFor="lift-reps"> Reps: </label>
                    <input onChange={e => reps = e.target.value} min="0" type="number" id="lift-reps"></input>
                    <label htmlFor="lift-date"> Date: </label>
                    <input onChange={e => date = e.target.valuee} type="date" id="lift-date"></input>
                    <label htmlFor="lift-time"> Time: </label>
                    <input onChange={e => time = e.target.value} type="time" id="lift-time"></input>
                    <button className="btn">Submit</button>
                  </form>
                  )
                }
              return (
                <form className="lift-info" onSubmit={e => addLog(e, l)}>
                  <p><span>Weight:</span> {el.weight}</p>
                  <p><span>Reps:</span> {el.reps}</p>
                  <p><span>Date:</span> {el.date}</p>
                  {el.time}
                  <button className="btn">+</button>
                </form>
              )
              }
            )
            }
      </div>)
      }
      )
    }
    </div>
    </>
  )
}