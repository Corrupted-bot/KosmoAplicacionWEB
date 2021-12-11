import {Container, Table} from "react-bootstrap";
import {useLocation, useParams} from "react-router";
import * as FaIcons from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const DeleteProject = () => {
    let {id, idproyectos  } = useParams();
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/companies/${id}/view/`);
    }
    // Peticion al servidor
    const EliminarProject = () => {
        Axios.post('http://kosmo.icfunab.cl/api/remove-project', {
            id: idproyectos,
        }).then((response) => {
            console.log(response);
        });
        handleClick();
    }

    return (
        <div>
            <h1 style={
                {textAlign: "center"}
            }>¿Seguro que desea eliminar el Proyecto?</h1>
            <Container className="mt-4">
                <div className="container-fluid h-100">
                    <div className="row w-100 align-items-center">
                        <div className="col text-center">
                            <Button className="botonAtras btn btn-danger mx-2" href={`/companies/${id}/view/`}><FaIcons.FaArrowAltCircleLeft></FaIcons.FaArrowAltCircleLeft> Cancelar</Button>
                            <Button className="botonAtras btn btn-success mx-2" onClick={EliminarProject}><FaIcons.FaCheckCircle></FaIcons.FaCheckCircle> Aceptar</Button>
                        </div>
                    </div>
                </div>
            </Container>
            

        </div>
    );


}
export default DeleteProject;
