import CompleteLog from "./CompleteLog";
import IncompleteLog from "./IncompleteLog";

export default function LogBook({ list , setList}) {

    function updateLift(lift, w, r, d, t) {
        setList(prevList => {
            let modifyLiftIndex = prevList.findIndex(l => l.name === lift.name);
            let modifyLift = prevList[modifyLiftIndex];
            modifyLift.logs[modifyLift.logs.length - 1] = {weight: w, reps: r, date: d, time: t, complete: true};
            return prevList.toSpliced(modifyLiftIndex, 1, modifyLift);    // adds modified lift back into list
          })
    }

    function addLog(lift) {
        setList(prevList => {
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
          })
    }

    return (
        <div className="lifts">
            {list.map(l => {
                return (
                <div className="lift-box">
                    <h1>{l.name}</h1>
                    {l.logs.map(el => {
                        if (!el.complete) {
                            return (
                            <IncompleteLog l={l} updateLiftHelper={updateLift} weight={el.weight} reps={el.reps} date={el.date} time={el.time}/>
                            )
                        }
                        return <CompleteLog l={l} el={el} addLogHelper={addLog}/>
                    })}
                </div>
                )
            })}
        </div>
    )
}