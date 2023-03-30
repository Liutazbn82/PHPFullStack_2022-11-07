import React, { 
  // useState, 
  // useRef, 
  // useEffect 
} from 'react';
// import Skaiciuokle from './Skaiciuokle'
// https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react

function App() {

  const [ state, setState ] = React.useState({
    pvmDydis: 0.21,
    sumaBePvm: 0,
    pvmSuma: 0,
    sumaSuPvm: 0
  })

  function handleChange(event) {
    event.preventDefault();
    const value = event.target.value;
    const newData = {
      ...state,
      [event.target.name]: value
    };
    
    if(event.target.name === 'sumaBePvm')
      newData.sumaSuPvm = +newData.sumaBePvm + (+newData.sumaBePvm * newData.pvmDydis);

    if(event.target.name === 'sumaSuPvm')
      newData.sumaBePvm = +newData.sumaSuPvm / (1 + +newData.pvmDydis);

      newData.pvmSuma = (+newData.sumaBePvm * +newData.pvmDydis);

    setState(newData);

    console.log(newData);
  }

  

// *****************************************************************
  // function clickToCount(e) {
  //   e.preventDefault();
  //   // console.log('mygtukas skaiciuoti suveikia paspaudus')
  //   const form = e.target;
  //   const formData = new FormData(form);

  //   // You can pass formData as a fetch body directly:
  //   // fetch('/some-api', { method: form.method, body: formData });

  //   // Or you can work with it as a plain object:
  //   const formJson = Object.fromEntries(formData.entries());
  //   console.log('skaičiai iš formos', formJson);
  //   // console.log('skaičiai iš formos', formJson.sumaBePvm, formJson.pvmDydis);
  //   const sumaBePvm = formJson.sumaBePvm;
  //   const pvmDydis = formJson.pvmDydis;

  //   console.log('bendra suma su pvm', (sumaBePvm *(pvmDydis/100)));
  // }
// ********************************************************************

  return (
    <>

      <div className="App">

        <h1 className="mb-3">PVM skaičiuoklė</h1>

        {/* <form onSubmit={clickToCount} className="form-control w-50 bg-success form"> */}

        <form 
          // onChange={handleChangeSumaBePvm} 
          className="form-control w-50 bg-success form"
          >
          <div className="container">
            <div className="input-group mb-3 mt-3">
              <span className="input-group-text bg-warning col-4">PVM dydis</span>
              <select 
                className="form-select text-center" 
                name="pvmDydis" 
                id="pvmDydis"
                type="number"
                onChange={handleChange}
              >
                <option value="0.21">21%</option>
                <option value="0.19">19%</option>
                <option value="0.09">9%</option>
                <option value="0.05">5%</option>
              </select>
            </div>

            <div className="input-group mb-3">
              <span 
                  className="input-group-text bg-info-subtle col-4 " 
                  id="inputGroup-sizing-default">Suma be PVM
              </span>
              <input 
                  name="sumaBePvm" 
                  value={state.sumaBePvm} 
                  onChange={handleChange} 
                  id="sumaBePvm" 
                  type="number" 
                  className="form-control text-center" 
                  aria-label="Sizing example input" 
                  aria-describedby="inputGroup-sizing-default" 
              />
            </div>

            <div className="input-group mb-3">
              <span 
                  className="input-group-text bg-warning-subtle col-4" 
                  id="inputGroup-sizing-default">PVM suma
              </span>
              <input 
                  name="pvmSuma" 
                  value={state.pvmSuma}
                  id="pvmSuma" 
                  type="number" 
                  className="form-control text-center" 
                  aria-label="Sizing example input" 
                  aria-describedby="inputGroup-sizing-default" 
                  // onChange={handleChange}
                  disabled 
              />
            </div>

            <div className="input-group mb-3">
              <span 
                  className="input-group-text bg-warning-subtle col-6" 
                  id="inputGroup-sizing-default">Bendra suma (su PVM)
              </span>
              <input 
                  name="sumaSuPvm" 
                  onChange={handleChange}
                  value={state.sumaSuPvm}
                  id="sumaSuPvm" 
                  type="number" 
                  className="form-control text-center fw-bold" 
                  aria-label="Sizing example input" 
                  aria-describedby="inputGroup-sizing-default" 
              />
            </div>
            {/* <button
              type="submit"
              className="btn btn-warning mt-1 mb-3"
              onClick={handleChange2}
              >Skaičiuoti!
            </button> */}
          </div>
        </form>
      </div>

    </>
  )
}

export default App;
