import { useRef, type FormEvent } from "react";

type NewGoalType = {
  addNewGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ addNewGoal }: NewGoalType) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    e.currentTarget.reset();

    addNewGoal(enteredGoal, enteredSummary);
  };

  return (
    <form onSubmit={handleSubmit} action="">
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" id="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
