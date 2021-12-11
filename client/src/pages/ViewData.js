import { useEffect, useState } from "react";
import { Container, Table, Col, Modal, Row } from "react-bootstrap";
import { useLocation, useParams } from "react-router";
import * as FaIcons from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Axios from "axios";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

const ViewData = () => {
    let { id } = useParams();
    const [data, setdata] = useState([]);
    const [bandera, setbandera] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [nombre, setnombre] = useState("");
    const [descripcion, setdescripcion] = useState("");

    const [dataProyecto, setdataProyecto] = useState([]);



    const AgregarProyecto = () => {
        Axios.post('http://localhost:4000/add-project', { nombre, descripcion, id }).then((response) => {
            console.log(response)
        });
        alert("Proyecto agregado correctamente.");
        handleClose();
        setbandera("2");
    }


    useEffect(() => {
        async function fetchMyAPI() {
            const res = await Axios.post('http://localhost:4000/empresa-view', { id });
            setdata(res.data);
            setbandera("1");
        }
        async function fetchMyAPIproyectos() {
            const res = await Axios.post('http://localhost:4000/project-view', { id });
            setdataProyecto(res.data);
            setbandera("1");
        }
        fetchMyAPI();
        fetchMyAPIproyectos();
    }, [bandera])



    return (
        <>
            <Button className="botonAtras" href="/companies"><FaIcons.FaArrowAltCircleLeft></FaIcons.FaArrowAltCircleLeft>  Atras</Button>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 style={{ textAlign: "center" }}>{`Datos de la empresa`}</h1>
                    </div>
                    <div className="col">
                    </div>
                    <div className="col">
                        <button className="btn-dark  rounded py-2 w-100 d-inline-block px-3 hover-activo mt-3" onClick={handleShow}> <AiIcons.AiFillProject className="me-2" /> Agregar Proyecto</button>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ textAlign: "center" }}>Agregar Proyecto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="#">
                        <div className="row">
                            <div className="form-group col-lg-6">
                                <label className="font-weight-bold text-small" htmlFor="firstname">Nombre del Proyecto<span className="text-primary ml-1">*</span></label>
                                <input className="form-control" id="firstname" type="text" required="" onChange={(e) => { setnombre(e.target.value); }} />
                            </div>
                            <div className="form-group ">
                                <label className="font-weight-bold text-small" htmlFor="email">Descripción<span className="text-primary ml-1">*</span></label>
                                <textarea className="form-control" id="email" type="email" required="" rows="4" onChange={(e) => { setdescripcion(e.target.value); }} />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={AgregarProyecto}>
                        Guardar Proyecto
                    </Button>
                </Modal.Footer>
            </Modal>
            <Container className="mt-4">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre Empresa</th>
                            <th>Rut Empresa</th>
                            <th>Giro</th>
                            <th>Dirección</th>
                            <th>Email</th>
                            <th>Telefono</th>
                            <th>Cargo</th>
                            <th>Dotación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((valor, i) => (
                            <tr key={i}>
                                <td>{valor.idEmpresas}</td>
                                <td>{valor.NombreEmpresa}</td>
                                <td>{valor.RutEmpresa}</td>
                                <td>{valor.Giro}</td>
                                <td>{valor.Direccion}</td>
                                <td>{valor.MailEmpresa}</td>
                                <td>{valor.TelefonoEmpresa}</td>
                                <td>{valor.CargoEmpresa}</td>
                                <td>{valor.DotacionEmpresa}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
            <h1 style={{ textAlign: "center" }}>Proyectos</h1>
            <Container className="mt-4" >
                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre Proyecto</th>
                                <th>Descripción</th>
                                <th>Herramientas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataProyecto.map((valor, i) => (
                                <tr key={i}>
                                    <td>{valor.idproyectos}</td>
                                    <td>{valor.nombre}</td>
                                    <td>{valor.descripcion}</td>
                                    <td>
                                        <Link style={{ width: "150px", margin: "2px", fontWeight: "500" }} className="btn btn-success mx-2" to={`projects/${valor.idproyectos}`}>Ver</Link>
                                        <Link style={{ width: "150px", margin: "2px", fontWeight: "500" }} className="btn btn-primary mx-2" to={`/companies/${id}/edit/projects/${valor.idproyectos}`}>Editar</Link>
                                        <Link style={{ width: "150px", margin: "2px", fontWeight: "500" }} className="btn btn-danger mx-2" to={`/companies/${id}/delete/projects/${valor.idproyectos}`}>Eliminar</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </>
    );


}
export default ViewData;