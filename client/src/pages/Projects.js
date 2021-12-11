import Axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useParams } from "react-router";
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Projects = () => {
    const { id, idproyectos } = useParams();
    const [bandera, setbandera] = useState("")
    const [data, setdata] = useState([])
    const [data2, setdata2] = useState([])


    useEffect(() => {
        async function fetchMyAPI() {
            const res = await Axios.post('http://localhost:4000/mostrar-proyecto', { idproyectos });
            const res2 = await Axios.post('http://localhost:4000/puestotrabajo-view', { idproyectos });
            setdata(res.data);
            setdata2(res2.data);
            setbandera("1");
        }
        fetchMyAPI();
    }, [bandera])




    return (
        <>
            <Button className="botonAtras" href={`/companies/${id}/view`}><FaIcons.FaArrowAltCircleLeft></FaIcons.FaArrowAltCircleLeft> Atras</Button>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 style={{ width: "465px" }}>Informacion del Proyecto</h1>
                    </div>
                    <div className="col">
                        <button className="btn-dark  rounded py-2 w-100 d-inline-block px-3 hover-activo mt-3" > <IoIcons.IoAddCircleSharp className="me-2 mt-auto" />Agregar Matriz de Evaluación</button>
                    </div>
                    <div className="col">
                        <Button className="btn-dark  rounded py-2 w-100 d-inline-block px-3 hover-activo mt-3" href={`/companies/${id}/view/projects/${idproyectos}/puestotrabajo`}> <IoIcons.IoAddCircleSharp className="me-2 mt-auto" />Agregar Informe APT</Button>
                    </div>
                </div>
            </div>

            <Container className="mt-4">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre Proyecto</th>
                            <th>Descripcion</th>
                            <th>Archivos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((valor, i) => (
                            <tr key={i}>
                                <td>{valor.idproyectos}</td>
                                <td>{valor.nombre}</td>
                                <td>{valor.descripcion}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>

            <Container className="mt-4">
                <h2 style={{ textAlign: "center" }}>Informes APT</h2>
                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre del puesto de trabajo</th>
                                <th>Descripcion</th>
                                <th>Herramientas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data2.map((valor, i) => (
                                <tr key={i}>
                                    <td>{valor.IdAPT}</td>
                                    <td>{valor.nombrepuesto}</td>
                                    <td>{valor.descripcionpuesto}</td>
                                    <td>
                                        <Link style={{ width: "150px", margin: "2px", fontWeight: "500" }} className="btn btn-success mx-2" to={`/companies/${id}/view/projects/${idproyectos}/view`}>Ver</Link>
                                        <Link style={{ width: "150px", margin: "2px", fontWeight: "500" }} className="btn btn-primary mx-2" to={`/companies/${id}/view/projects/${idproyectos}/edit`}>Editar</Link>
                                        <Link style={{ width: "150px", margin: "2px", fontWeight: "500" }} className="btn btn-danger mx-2" to={`/companies/${id}/view/projects/${idproyectos}/delete`}>Eliminar</Link>
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
export default Projects;