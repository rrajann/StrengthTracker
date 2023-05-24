export default function IncompleteLog({ l, updateLiftHelper, weight, reps, date, time }) {

    function updateLift(e, lift, w, r, d, t) {
        e.preventDefault();

        updateLiftHelper(lift, w, r, d, t);
    }

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