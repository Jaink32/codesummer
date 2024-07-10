import React from 'react';
import { Link } from 'react-router-dom';

function Myregistorpage() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-8 p-3 bg-light shadow">
                    <div className="container-fluid">
                        <div className="row">
                            <div className='col-12 text-center'>
                                <h1>New Registor Page</h1>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">FullName</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">DOB</label>
                                    <input type="date" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                <label className="form-label">Gender</label><br/>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gender" value="male" />
                                        <label class="form-check-label">Male</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gender" value="female" />
                                        <label class="form-check-label">Female</label>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Course</label>
                                    <select className='form-select'>
                                        <option>Mern</option>
                                        <option>excel</option>
                                        <option>java</option>
                                        <option>mongodb</option>
                                        <option>express</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">password</label>
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-12 text-center">
                                <div className="mb-3">

                                    <input type="button" className="btn btn-success" value="login" />
                                    <input type="button" className="btn btn-danger ms-3" value="cancel" />
                                    <Link to="/">back to login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Myregistorpage