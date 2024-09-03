function KanbanTask(params) {
  const { task, advanceTask } = params;
  return (
    <button
      className="border-2 border-blue-600 bg-blue-100 p-2 rounded w-full"
      onClick={() => advanceTask(task.title)}
    >
      {task.title}
    </button>
  );
}

export default KanbanTask;
