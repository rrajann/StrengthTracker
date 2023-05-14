import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { flushSync } from 'react-dom';

export default function App() {

  const [lift, setLift] = useState({ name: "", logs: [{weight: "", reps: "", date:""}]});
  const [list, setList] = useState([]);
  const [log, setLog] = useState({weight: "", reps: "", date:""});
  // const log = lift.logs[logID];
  console.log(log);

  function submitLift(e) {
    e.preventDefault();

    if (list.map(el => el.name).includes(lift.name)) {
      return alert("Lift has already been logged. You can edit the lift within the lift box.");
    }

    console.log(log);
    setLift((currLift) => {return {...currLift, logs: [log]}});
    console.log(lift);
    setList(
      (currList) => {return [...currList, lift]}
    )
    console.log(list);
    setLift({ name: "", complete: false, logs: [log]});
  }

  function mutateLogWeight(val) {
    return {...log, weight: val}
  }

  // function mutateLift(l, change) {
  //   const lift = list.findIndex(el => el.name === l.name);
  //   setList((currList) => {
  //     return currList.toSpliced(lift, 1, change(l));
  //   })
  // }

  // function mutateLiftName(l, newName) {
  //   mutateLift(l, el => {return {...el, name: newName}});
  // }

  // function updateLift(e, l) {
  //   e.preventDefault();
  //   mutateLift(l, el => {return {...el, logs:[log], complete: true}})
  //   console.log(list);
  // }

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
      <label htmlFor="lift-weight"> Weight: </label>
      <input value={log.weight} onChange={e => setLog(prev => {return {...prev, weight: e.target.value}})} min="0" type="number" id="lift-weight"></input>
      <label htmlFor="lift-reps"> Reps: </label>
      <input value={log.reps} onChange={e => setLog(prev => {return {...prev, reps: e.target.value}})} min="0" type="number" id="lift-reps"></input>
      <label htmlFor="lift-date"> Date: </label>
      <input value={log.date} onChange={e => setLog(prev => {return {...prev, date: e.target.value}})} type="date" id="lift-date"></input>
      <button className="btn">New Lift</button>
    </form>

    <div className="lifts">
      {list.map(l => {
        return (
          <div className="lift-box">
            {l.name}
            {l.logs.map(el => {
              return (
                <div className="lift-info">
                  <p><span>Weight:</span> {el.weight}</p>
                  <p><span>Reps:</span> {el.reps}</p>
                  <p><span>Date:</span> {el.date}</p>
                </div>
              )
            })}
          </div>)
      }
      )
    }
    </div>
    </>
  )
}