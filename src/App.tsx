import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoalType = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    const newGoals: CourseGoalType = {
      id: Math.random(),
      title: goal,
      description: summary,
    };
    setGoals((prev) => {
      return [...prev, newGoals];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prev) => prev.filter((goals) => goals.id !== id));
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of Goals" }}>
        <h1>Your Future Goals</h1>
      </Header>
      {/* <button onClick={handleAddGoal}>Add Goals</button> */}
      <NewGoal addNewGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
