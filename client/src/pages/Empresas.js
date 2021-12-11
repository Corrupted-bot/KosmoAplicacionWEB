import { useEffect, useState } from "react";
import { Col, Container, Modal, Row, Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import * as IoIcons from "react-icons/io5";
import { Link } from "react-router-dom";
import useAuth from "../auth/useAuth";
import Axios from "axios";

const Empresas = () => {

    const [nombreEmpresa, setNombreEmpresa] = useState("");

    const [rutEmpresa, setrutEmpresa] = useState("");

    const [giroEmpresa, setgiroEmpresa] = useState("");

    const [direccionEmpresa, setdireccionEmpresa] = useState("");

    const [mailEmpresa, setmailEmpresa] = useState("");

    const [telefonoEmpresa, settelefonoEmpresa] = useState("");

    const [cargoEmpresa, setcargoEmpresa] = useState("");

    const [dotacionEmpresa, setdotacionEmpresa] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [data, setdata] = useState([]);
    const [bandera, setbandera] = useState("");
    const auth = useAuth();




    const AgregarEmpresa = () => {
        Axios.post('http://kosmo.icfunab.cl/api/diagnostico', {
            username: nombreEmpresa,
            rut: rutEmpresa,
            giro: giroEmpresa,
            direccion: direccionEmpresa,
            mail: mailEmpresa,
            telefono: telefonoEmpresa,
            cargo: cargoEmpresa,
            dotacion: dotacionEmpresa,
            id: auth.user.id
        }).then((response) => {
            console.log(response)
        });
        handleClose();
        alert("Se creo correctamente")
        setbandera("2");
    }

    useEffect(() => {
        async function fetchMyAPI() {
            const res = await Axios.post('http://kosmo.icfunab.cl/api/add-diagnostico-1', { user: auth.user.id });
            setdata(res.data);
            setbandera("1");
        }
        fetchMyAPI();
    }, [bandera])



    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col">
                    </div>
                    <div className="col">
                        <button className="btn-dark  rounded py-2 w-100 d-inline-block px-3 hover-activo mt-3" onClick={handleShow}> <IoIcons.IoAddCircleSharp className="me-2 mt-auto" />Agregar Empresa</button>
                    </div>
                </div>
            </div>
            {/* BOTON AGREGAR EMPRESA */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ textAlign: "center" }}>Agregar Empresa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="#">
                        <div className="row">
                            <div className="form-group col-lg-6">
                                <label className="font-weight-bold text-small" htmlFor="firstname">Nombre Empresa<span className="text-primary ml-1">*</span></label>
                                <input className="form-control" id="firstname" type="text" required="" onChange={(e) => { setNombreEmpresa(e.target.value); }} />
                            </div>
                            <div className="form-group col-lg-6">
                                <label className="font-weight-bold text-small" htmlFor="lastname">Rut Empresa<span className="text-primary ml-1">*</span></label>
                                <input className="form-control" id="lastname" type="text" required="" onChange={(e) => { setrutEmpresa(e.target.value); }} />
                            </div>
                            <div className="form-group col-lg-12">
                                <label className="font-weight-bold text-small" htmlFor="email">Email Empresa<span className="text-primary ml-1">*</span></label>
                                <input className="form-control" id="email" type="email" required="" onChange={(e) => { setmailEmpresa(e.target.value); }} />
                            </div>
                            <div className="form-group col-lg-6">
                                <label className="font-weight-bold text-small" htmlFor="phone">Telefono <span className="text-primary ml-1">*</span></label>
                                <input className="form-control" id="phone" type="tel" onChange={(e) => { settelefonoEmpresa(e.target.value); }} />
                            </div>
                            <div className="form-group col-lg-6">
                                <label className="font-weight-bold text-small" htmlFor="projecttype">Giro Empresa<span className="text-primary ml-1">*</span></label>
                                <input className="form-control" id="projecttype" type="number" required="" onChange={(e) => { setgiroEmpresa(e.target.value); }} />
                            </div>
                            <div className="form-group col-lg-6">
                                <label className="font-weight-bold text-small" htmlFor="budget">Direccion Empresa<span className="text-primary ml-1">*</span></label>
                                <input className="form-control" id="budget" type="text" required="" onChange={(e) => { setdireccionEmpresa(e.target.value); }} />
                            </div>
                            <div className="form-group col-lg-6">
                                <label className="font-weight-bold text-small" htmlFor="timeframe">Cargo Empresa<span className="text-primary ml-1">*</span></label>
                                <input className="form-control" id="timeframe" type="text" required="" onChange={(e) => { setcargoEmpresa(e.target.value); }} />
                            </div>
                            <div className="form-group col-lg-6">
                                <label className="font-weight-bold text-small" htmlFor="timeframe">Dotación Empresa<span className="text-primary ml-1">*</span></label>
                                <input className="form-control" id="timeframe" type="text" required="" onChange={(e) => { setdotacionEmpresa(e.target.value); }} />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={AgregarEmpresa}>
                        Guardar Empresa
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* BOTON VER  */}

            <Container className="mt-4">
                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre Empresa</th>
                                <th>Rut Empresa</th>
                                <th>Telefono</th>
                                <th>Herramientas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((valor, i) => (
                                <tr key={i}>
                                    <td>{valor.idEmpresas}</td>
                                    <td>{valor.NombreEmpresa}</td>
                                    <td>{valor.RutEmpresa}</td>
                                    <td>{valor.TelefonoEmpresa}</td>
                                    <td>
                                        <Link style={{ width: "150px", margin: "2px", fontWeight: "500" }} className="btn btn-success mx-2" to={`${valor.idEmpresas}/view`}>Ver</Link>
                                        <Link style={{ width: "150px", margin: "2px", fontWeight: "500" }} className="btn btn-primary mx-2" to={`${valor.idEmpresas}/edit`}>Editar</Link>
                                        <Link style={{ width: "150px", margin: "2px", fontWeight: "500" }} className="btn btn-danger mx-2" to={`${valor.idEmpresas}/delete`}>Eliminar</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </>
    )
}
export default Empresas;