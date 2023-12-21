import { type ReactNode } from "react";

// AWAGIDAKI AYRI FORMA ISTIFADESIDIR
// import { type FC } from "react";

// const CourseGoal: FC<CourseGaolType> = ({ title, children}) => {
//   return (
//     <article className="task-article">
//       <div>
//         <h1>{title}</h1>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;

export type CourseGaolType = {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
};

export default function CourseGoal({
  title,
  children,
  onDelete,
  id,
}: CourseGaolType) {
  return (
    <article className="task-article">
      <div>
        <h1>{title}</h1>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
