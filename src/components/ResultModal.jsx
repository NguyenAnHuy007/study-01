export default function ResultModal({ result, targetTime }) {
  return (
    <dialog className="resut-modal">
      <h2>Your {result}:</h2>
      <p>
        The target time was <strong>{targetTime} second.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{targetTime} seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
