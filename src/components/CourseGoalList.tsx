import CourseGoal from "./CourseGoal";
import { type CourseGoalType } from "../App.tsx";
import InfoBox from "./InfoBox.tsx";
import { type ReactNode } from "react";

type CourseGoalListType = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({goals,onDeleteGoal,}: CourseGoalListType) {

  if (goals.length === 0) {
    return <InfoBox mode="hint">You dont have any Goals</InfoBox>;
  }

  let warningBox: ReactNode;
  if (goals.length > 4) {
    warningBox = (
      <InfoBox severity="high" mode="warning">You are collecting a lot of Goals</InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} onDelete={onDeleteGoal} title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
