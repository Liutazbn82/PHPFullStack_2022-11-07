import './App.css';
import { useId, useState, useEffect } from 'react';
import Form from './components/form/Form'

// const Header = ({ nav }) => {
//   const id = useId();
//   return (
//     <header>
//       <h1>UAB "Šviesus rytojus"</h1>
//       <nav>
//         <ul>
//           {nav.map((value, index) => <li key={id + index} > {value} </li>)}
//         </ul>
//       </nav>
//     </header>
//   )
// }

// const Container = (propsai) => {
//   // console.log(propsai);
//   return <div className="container" >{propsai.children}</div>
// }

// const FormEntry = () => {
//   const [reiksme, setReiksme] = useState('Įveskite tekstą į laukelį');

//   const keistiReiksme = (e) => { // galima parasyti viena eilute kaip <input type="text" onChange={(e) => setReiksme(e.target.value)} />
//     setReiksme(e.target.value);
//   }

//   return (
//     <>
//       {/* <input type="text" onChange={(e) => setReiksme(e.target.value)} /> */}
//       <input type="text" onChange={(keistiReiksme)} />
//       <div className="result">{reiksme}</div>
//     </>
//   );
// }

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState({
    name: '',
    done: false
  });

  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState();

  useEffect(() => {
    const data = localStorage.getItem('tasks')
    setTasks(JSON.parse(data));
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    let data;

    if(edit) {
      tasks[editId].name = currentTask.name;
      data = [...tasks];
      setTasks(data);
      setEdit(false);
    } else {
      data = [...tasks, currentTask];
      setTasks(data);
    }

    localStorage.setItem('tasks', JSON.stringify(data));

    setCurrentTask({
      name: '',
      done: false
    });
  }

  const handleDone = (e, index) => {
    tasks[index].done = !tasks[index].done;
    const data = [...tasks];
    setTasks(data);
    localStorage.setItem('tasks', JSON.stringify(data));
  }

  const handleDelete = (e, index) => {
    tasks.splice(index, 1);
    const data = [...tasks];
    setTasks(data);
    localStorage.setItem('tasks', JSON.stringify(data));
  }

  const handleEdit = (index) => {
    setCurrentTask(tasks[index]);
    setEdit(true);
    setEditId(index);

  }

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <Form 
        currentTask={currentTask} 
        setCurrentTask={setCurrentTask} 
        handleForm={handleForm} 
      />
      {tasks.map((value, index) =>
        <li key={value.name + index}
          onClick={(e) => handleDone(e, index)}
          className={value.done ? 'done' : ''}
        >
          <div className="d-flex justify-content-between">
            <span onClick={(e) => handleDone(e, index)} > {value.name}</span>
            <div>
              <button
                className="btn btn-danger me-2"
                onClick={() => handleDelete(index)}
              >Šalinti</button>
              <button
                className="btn btn-primary"
                onClick={() => handleEdit(index)}
              >Redaguoti</button>
            </div>
          </div>
        </li>
      )}
    </div>
  );
}

// const App = () => {
//   const navigacija = ['Titulinis', 'Apie Mus', 'Kontaktai'];
//   return (
//     <Container>
//       <Header nav={navigacija} />
//       <main>
//         <FormEntry />
//         <p><i><br />Copyright</i></p>
//       </main>
//     </Container>
//   );
// }

export default App;
