import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Register = () => {

    const [tipoUsuario, settipoUsuario] = useState("")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return (
        <>
            <section className="gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">

                                        <h2 className="fw-bold mb-2 text-uppercase">Registrar</h2>
                                        <p className="text-white-50 mb-5"></p>

                                        <div className="form-outline form-white mb-4">
                                            <label className="form-label" htmlFor="typeUsuario">Usuario</label>
                                            <input type="text" id="typeUsuario" className="form-control form-control-lg" onChange={(e) => { setUsername(e.target.value); }} />
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <label className="form-label" htmlFor="typePasswordX">Contraseña</label>
                                            <input type="password" id="typePasswordX" className="form-control form-control-lg" onChange={(e) => { setPassword(e.target.value); }} />
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <label className="form-label" htmlFor="typeUsuario">Tipo de Usuario</label>
                                            <select className="form-select" aria-label="Default select example" defaultValue={'DEFAULT'} onChange={(e) => { settipoUsuario(e.target.value); }}>
                                                <option value="DEFAULT" disabled>Tipo de Usuario</option>
                                                <option value="Gestor">Gestor</option>
                                                <option value="Empresa">Empresa</option>
                                                <option value="Administrador">Administrador</option>
                                            </select>
                                        </div>

                                        <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!"></a></p>

                                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Registrar</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <h1>{`Usuario: ${username} + Contraseña: ${password} + Tipo de usuario: ${tipoUsuario}`}</h1> */}
        </>
    )
}
export default Register;