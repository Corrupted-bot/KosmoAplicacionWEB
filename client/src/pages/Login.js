import React, {useState} from 'react';
import useAuth from "../auth/useAuth";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    const auth = useAuth();

    
    function handleClick() {
        navigate('/companies');
    }
    // Peticion al servidor
    const login = () => {
        Axios.post('http://localhost:4000/login', {
            username: username,
            password: password
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].username);
                // Redireccionar si el usuario es correcto
                auth.login({id: response.data[0].id, username: response.data[0].username});
                handleClick();
            }
        });
    }

    return (
        <>
            <section className="gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white"
                                style={
                                    {borderRadius: "1rem"}
                            }>
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">

                                        <h2 className="fw-bold mb-2 text-uppercase">Iniciar Sesion</h2>
                                        <p className="text-white-50 mb-5"></p>

                                        <div className="form-outline form-white mb-4">
                                            <input type="text" id="typeUsuario" className="form-control form-control-lg"
                                                onChange={
                                                    (e) => {
                                                        setUsername(e.target.value);
                                                    }
                                                }/>
                                            <label className="form-label" htmlFor="typeUsuario">Usuario</label>
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input type="password" id="typePasswordX" className="form-control form-control-lg"
                                                onChange={
                                                    (e) => {
                                                        setPassword(e.target.value);
                                                    }
                                                }/>
                                            <label className="form-label" htmlFor="typePasswordX">Contraseña</label>
                                        </div>

                                        <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={login}>Iniciar Sesion</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login;
