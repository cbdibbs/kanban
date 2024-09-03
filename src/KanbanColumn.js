import KanbanTask from "./KanbanTask";

function KanbanColumn(params) {
  const { name, tasks, advanceTask } = params;
  return (
    <div className="text-center p-2">
      <h3 className="font-bold text-lg">{name}</h3>
      <div className="flex flex-col gap-4 p-4">
        {tasks.map((task) => (
          <KanbanTask key={task.title} task={task} advanceTask={advanceTask} />
        ))}
      </div>
    </div>
  );
}

export default KanbanColumn;
