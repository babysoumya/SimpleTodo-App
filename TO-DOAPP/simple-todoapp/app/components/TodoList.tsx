import { ITask } from "@/types/tasks"
import { FcTodoList } from "react-icons/fc"
import Task from "./Task"

interface todoListProps {
  tasks: ITask[]
}
const TodoList: React.FC<todoListProps>= ({tasks}) => {
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Task</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map(task => <Task key={task.id} task={task}/>)}
    </tbody>
  </table>
</div>
  )
}

export default TodoList