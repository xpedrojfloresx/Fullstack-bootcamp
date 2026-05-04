import './css/App.css';
import { Fragment } from 'react/jsx-runtime';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('');
  const [newTaskCompleted, setNewTaskCompleted] = useState(false);


  const handleAddTask = () => {
    if (newTaskName.trim() === '' || newTaskPriority.trim() === '') {
      return;
    }

    const newTask = {
      id: Date.now(),
      name: newTaskName,
      completed: newTaskCompleted,
      priority: newTaskPriority
    };


    setTasks([...tasks, newTask]);
    setNewTaskName('');
    setNewTaskPriority('');
    setNewTaskCompleted(false);
    setIsDialogOpen(false);
  }

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  const handleCompletedTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <Fragment className="App">
      <div class="min-h-screen bg-[#0f172a] p-8">
        <div class="mx-auto max-w-7xl">
          <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
              <h1 class="text-xl font-semibold text-white">Tareas</h1>
              <p class="mt-2 text-sm text-gray-400">
                Una lista de tareas en la que puedes visualizar, agregar y eliminar tareas.
              </p>
            </div>
            <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <button type="button" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => setIsDialogOpen(true)}>
                Agregar tarea nueva
              </button>
            </div>
          </div>

          <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div class="overflow-hidden ring-1 ring-white/10 sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-700">
                    <thead class="bg-[#1e293b]">
                      <tr>
                        <th scope="col" class="px-1 py-3.5 text-left text-sm font-semibold text-white">ID</th>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white">Nombre de la tarea</th>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white">Prioridad</th>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white">Completado</th>
                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                          <span class="sr-only">Eliminar</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody class={`divide-y divide-gray-800 bg-[#0f172a]`}>
                      {tasks.map((task) => (
                        <tr key={task.id} className={`${task.completed ? 'line-through text-white' : 'text-white'} `} onClick={() => handleCompletedTask(task.id)}>
                          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">{task.id}</td>
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-400">{task.name}</td>
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-400">{task.priority}</td>
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-400">
                            <input type="checkbox" onClick={() => setNewTaskCompleted(true)} />
                          </td>
                          <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <a href="#" class="text-indigo-400 hover:text-indigo-300" onClick={() => handleDeleteTask(task.id)}>Eliminar</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isDialogOpen && (
        <div class="fixed inset-0 bg-black/50 z-50" id="dialog" >
          <div class="flex min-h-full items-center justify-center">
            <div class="bg-white p-6 rounded-md shadow-md">
              <input type="text" class="w-96 h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500" placeholder="Nombre de la tarea" value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} />
              <select class="w-96 h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500" placeholder="Prioridad" value={newTaskPriority} onChange={(e) => setNewTaskPriority(e.target.value)}>
                <option value="high">Alta</option>
                <option value="medium">Media</option>
                <option value="low">Baja</option>
              </select>
              <div class="flex justify-end mt-4 mb-0 gap-2">
                <button type="button" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => {
                  handleAddTask();
                  setIsDialogOpen(false);
                  setNewTaskName('');
                }}>
                  Agregar
                </button>
                <button type="button" class="block rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default App;
