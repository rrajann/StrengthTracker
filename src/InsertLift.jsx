import { useState } from "react";

export default function InsertLift( { submitLiftToList }) {

    const [lift, setLift] = useState({ name: "", logs: [{ weight: "", reps: "", date: "", time: "", complete: false }]});

    function submitLift(e) {
        e.preventDefault();

        submitLiftToList(lift);
        
        setLift({ name: "", logs: [{ weight: "", reps: "", date: "", time: "", complete: false }]});
      }

    return (
    <form onSubmit={submitLift} className="submission"> 
      <label htmlFor="lift-name"> Lift: </label>
      <input value={lift.name} onChange={e => setLift(prev => {return {...prev, name: e.target.value}})} type="type" id="lift-name"></input>
      <button className="btn">New Lift</button>
    </form>
    )

}