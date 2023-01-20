import './App.css';
import { useId, useState } from 'react';

const Header = ({nav}) => {
  const id = useId();
  return (
    <header>
      <h1>UAB "Šviesus rytojus"</h1>
      <nav>
        <ul>
          {nav.map((value, index) => <li key={id + index} > {value} </li>)}
        </ul>
      </nav>
    </header>
  )
}

const Container = (propsai) => {
  // console.log(propsai);
  return <div className="container" >{propsai.children}</div>
}

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

const FormEntry = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState();

  const handleForm = (e) => {
    e.preventDefault();
    // tasks.push(currentTask);
    
    setTasks([...tasks, { name: currentTask, done: false } ]);
  }

  const handleDone = (e, index) => {
    tasks[index].done = true;

    setTasks([...tasks]);
    
    // e.target.classList.add('done');
  }

  return (
    <>
      <h2>Task Manager</h2>
      <label className='laukelisDescription'>Įveskite norimus įvykius ir spauskite išsaugoti.</label>
      <form className="input-group" onSubmit={handleForm}> {/* klase bootstrape islygina mygtuka */}
        <input type="text" className="form-control" onChange={ (e) => setCurrentTask(e.target.value)} />
        <button className="btn btn-primary">Išsaugoti</button>
      </form>
      {tasks.map((value, index) => 
        <li key={value.name + index} onClick={ (e) => handleDone(e, index)} className={value.done ? 'done' : ''}>{value.name}</li> 
      )}
    </>
  );
}

const App = () => {
  const navigacija = ['Titulinis', 'Apie Mus', 'Kontaktai'];
  return (
    <Container>
      <Header nav={navigacija} />
      <main>
              <FormEntry />
        
      </main>
    </Container>
  );
}

export default App;
