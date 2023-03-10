import React from 'react';
import { useState } from 'react';
import { PasswordService } from '../services/PasswordService.js'

let PasswordGen = () => {

    let [state, setState] = useState({
        generatedPassword: '',
        passwordLength: 10,
        symbol: false,
        number: false,
        lower: false,
        upper: false
    });

    let updateInput = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    let updateCheck = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked
        })
        // console.log('event', event);
    }

    // const storage = [];

    let submit = (event) => {
        event.preventDefault();
        console.log('submit state', state);
        let passwordObj = PasswordService.getPasswordObj(state);
        let thePassword = PasswordService.generatePassword(passwordObj, state.passwordLength);
        setState({ ...state, generatedPassword: thePassword });

        // sugeneruotas slaptazodis pagal parinktis
        // **********************************************
        var kodas = (thePassword);

        // let [kodas, setkodas ] = useState(thePassword);

        console.log('thePassword - ', kodas);

        localStorage.setItem('slaptažodis', [kodas]);
  
        // setStorage({ kodas });

        // ************************************************
        
        // const storage = [];
        // storage.push(kodas);
        // console.log('storage', storage);  
    };

    // let storage = (event) => {
    //     let [store, setStore ] = useState(kodas);
    // };

    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(state)}</pre> */}
            <div className="container  mt-6">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header bg-warning p-2">
                                <p className="h4">Password Generator</p>
                            </div>
                            <div className="card-body bg-primary">
                                <form onSubmit={submit}>
                                    {/* <div className="mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text">Password</span>
                                            <input
                                                value={state.generatedPassword}
                                                onChange={updateInput}
                                                name="generatedPassword"
                                                type="text"
                                                className="form-control"
                                                placeholder="Generated Password"
                                            />
                                            <span className="input-group-text"><i className="fa fa-clipboard"></i></span>
                                        </div>
                                    </div> */}
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <input
                                                required={true}
                                                value={state.passwordLength}
                                                onChange={updateInput}
                                                name="passwordLength"
                                                type="number"
                                                className="form-control"
                                                placeholder="Password Length"
                                            />
                                            <span className="input-group-text">Password Length</span>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <input
                                                    onChange={updateCheck}
                                                    name="symbol"
                                                    type="checkbox"
                                                    className="form-check-input"
                                                />
                                            </span>
                                            <input type="text" disabled={true} className="form-control" placeholder="Symbols" />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <input
                                                    onChange={updateCheck}
                                                    name="number"
                                                    type="checkbox" className="form-check-input" />
                                            </span>
                                            <input type="text" disabled={true} className="form-control" placeholder="Numbers" />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <input
                                                    onChange={updateCheck}
                                                    name="lower"
                                                    type="checkbox" className="form-check-input" />
                                            </span>
                                            <input type="text" disabled={true} className="form-control" placeholder="Lowercase Letters" />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <input
                                                    onChange={updateCheck}
                                                    name="upper"
                                                    type="checkbox" className="form-check-input" />
                                            </span>
                                            <input type="text" disabled={true} className="form-control" placeholder="Uppercase Letters" />
                                        </div>
                                    </div>
                                    <div className="mb-0 mt-3 ">
                                        <input type="submit" value="Generate" className="btn btn-warning" />
                                        {/* <input type="reset" value="Reset" className="btn btn-danger m-2" /> */}
                                        {/* Perkrauname puslapį kad išvalyti nustatymus. */}
                                        <button className="btn btn-danger m-2" onClick={() => window.location.reload(false)}>Clear settings!</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <div className="card-header bg-success-subtle p-2">
                            <h4 className="text-center">Generated passwords:</h4>
                            {/* ************************************************************************** */}
                            <div className="input-group mb-2">
                                <span className="input-group-text">Password</span>
                                <input
                                    value={state.generatedPassword}
                                    onChange={updateInput}
                                    name="generatedPassword"
                                    type="text"
                                    className="form-control"
                                    placeholder="Generated Password"
                                />
                                <span className="input-group-text"><i className="fa fa-clipboard"></i></span>

                                {/* onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}} */}

                            </div>
                            <div className="input-group mb-2">
                                <span className="input-group-text form-control">kiti passwordai       </span>
                                <span className="input-group-text"><i className="fa fa-clipboard"></i></span>
                            </div>
                            {/* ************************************************************************** */}
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>

    )
};

export default PasswordGen;