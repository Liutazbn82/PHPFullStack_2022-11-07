import React from 'react';
import { useState } from 'react';
import PasswordService from 'react'

let PasswordGen = () => {

    let [state, setState] = useState({
        initialState: {
            generatedPassword: '',
            passwordLength: 20,
            symbol: false,
            number: false,
            lower: false,
            upper: false
        }
    });

    let updateInput = (event) => {
        setState({
            value: {
                ...state,
                [event.target.name]: event.target.value
            }
        })
    }

    let updateCheck = (event) => {
        setState({
            value: {
                ...state,
                [event.target.name]: event.target.checked
            }
        })
    }

    let submit = (event) => {
        event.preventDefault();
        let passwordObj = PasswordService.getPasswordObj(state);
        let thePassword = PasswordService.generatePassword(passwordObj, state.passwordLength);
        setState({...state , generatedPassword: thePassword});
    };




    return (
        <React.Fragment>
            <pre>{JSON.stringify(state)}</pre>
            <div className="container  mt-6">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header bg-warning p-2">
                                <p className="h4">Password Generator</p>
                            </div>
                            <div className="card-body bg-primary">
                                <form onSubmit={submit}>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className="input-group-text">Password</span>
                                            <input
                                                value={state.generatedPassword}
                                                onChange={updateInput}
                                                name="generatedPassword"
                                                type="text" className="form-control" placeholder="Generated Password" />
                                            <span className="input-group-text"><i className="fa fa-clipboard"></i></span>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <input
                                                required={true}
                                                value={state.passwordLength}
                                                onChange={updateInput}
                                                name="passwordLength"
                                                type="number" className="form-control" placeholder="Password Length" />
                                            <span className="input-group-text">Length</span>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <input
                                                    onChange={updateCheck}
                                                    name="symbol"
                                                    type="checkbox" className="form-check-input" />
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
                                    <div className="mb-2">
                                        <input type="submit" value="Generate" className="btn btn-warning" />
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default PasswordGen;