import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useLocation, useParams } from "react-router";
import * as FaIcons from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditProject = () => {
    let { id, idproyectos } = useParams();
    const [data, setdata] = useState([]);
    const [bandera, setbandera] = useState("");

    const [nombreproject, setnombreproject] = useState("");
    const [descripcion, setdescripcion] = useState("");

    const navigate = useNavigate();



    function handleClick() {
        navigate(`/companies/${id}/view`);
    }

    const EditarProyecto = () => {
        Axios.post("http://kosmo.icfunab.cl/api/edit-project", {
            id: idproyectos,
            nombre: nombreproject,
            descripcion: descripcion
        }).then((response) => {
            console.log(response)
        });
        alert("Se edito correctamente")
        handleClick();
    }


    useEffect(() => {
        async function fetchMyAPI() {
            const res = await Axios.post('http://kosmo.icfunab.cl/api/mostrar-proyecto', { idproyectos });
            setdata(res.data);
            setnombreproject(res.data[0].nombre);
            setdescripcion(res.data[0].descripcion);
            setbandera("1");
        }
        fetchMyAPI();
    }, [bandera])


    return (
        <div>
            <Button className="botonAtras" href={`/companies/${id}/view`}><FaIcons.FaArrowAltCircleLeft></FaIcons.FaArrowAltCircleLeft> Atras</Button>
            <h1 style={{ textAlign: "center", padding: "20px" }}>Editar Proyecto</h1>
            <Container className="mt-4">
                {
                    data.map((valor, i) => (
                        <div className="container" key={i}>
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                    <label className="font-weight-bold text-small" htmlFor="lastname">Nombre del Proyecto<span className="text-primary ml-1">*</span>
                                    </label>
                                    <input className="form-control" id="lastname" type="text" required=""
                                        defaultValue={
                                            valor.nombre
                                        } onChange={(e) => { 
                                            setnombreproject(e.target.value); }}/>
                                    <label className="font-weight-bold text-small" htmlFor="lastname">Descripción<span className="text-primary ml-1">*</span>
                                    </label>
                                    <textarea className="form-control" style={{ height: "300px" }} id="lastname" type="text" required=""
                                        defaultValue={
                                            valor.descripcion
                                        } onChange={(e) => { 
                                            setdescripcion(e.target.value); }}/>
                                </div>
                                <div className="col">
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="container-fluid h-100">
                    <div className="row w-100 align-items-center">
                        <div className="col text-center">
                            <Button className="botonGuardar" onClick={EditarProyecto}><FaIcons.FaSave></FaIcons.FaSave> Guardar</Button>
                        </div>
                    </div>
                </div>



            </Container>
        </div>
    );


}
export default EditProject;
