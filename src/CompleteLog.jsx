export default function CompleteLog({ el, l, addLogHelper }) {

    function addLog(e, lift) {
        e.preventDefault();
    
        addLogHelper(lift);
      }

    return (
      <>
        <p><span>Weight:</span> {el.weight}</p>
        <p><span>Reps:</span> {el.reps}</p>
        <p><span>Date:</span> {el.date}</p>
        {el.time}
      </>
    )
}