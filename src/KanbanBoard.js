import { useState } from "react";
import KanbanColumn from "./KanbanColumn";

const INITIAL_TASKS = [
  { title: "Mow the lawn", status: "To Do" },
  { title: "Buy groceries", status: "To Do" },
  { title: "Take a nap", status: "Done" },
  { title: "Plan vacation", status: "In Progress" },
  { title: "Walk the dog", status: "Done" },
  { title: "Wash the car", status: "To Do" },
  { title: "Go to the gym", status: "Done" },
  { title: "Clean the house", status: "In Progress" },
  { title: "Do the dishes", status: "Done" },
  { title: "Take out the trash", status: "Done" },
];

function KanbanBoard() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  // This function will advance a task to the next status
  const advanceTask = (taskTitle) => {
    setTasks(
      [...tasks].map((task) => {
        if (task.title !== taskTitle) return task;

        if (task.status === "To Do") {
          task.status = "In Progress";
        } else if (task.status === "In Progress") {
          task.status = "Done";
        }

        return task;
      }),
    );
  };

  return (
    <div className="m-8">
      <h3 className="text-2xl">Awesome Kanban Board</h3>
      <div className="grid grid-flow-col justify-stretch mt-4 bg-blue-200 border-2 border-slate-600 rounded divide-x divide-dashed divide-slate-600">
        <KanbanColumn advanceTask={advanceTask} name="To Do" tasks={tasks} />
        <KanbanColumn
          advanceTask={advanceTask}
          name="In Progress"
          tasks={tasks}
        />
        <KanbanColumn advanceTask={advanceTask} name="Done" tasks={tasks} />
      </div>
    </div>
  );
}

export default KanbanBoard;
