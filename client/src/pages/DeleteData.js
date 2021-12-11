import {Container, Table} from "react-bootstrap";
import {useLocation, useParams} from "react-router";
import * as FaIcons from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const DeleteData = () => {
    let {id} = useParams();
    const navigate = useNavigate();

    function handleClick() {
        navigate('/companies');
    }
    // Peticion al servidor
    const EliminarCompany = () => {
        Axios.post('http://kosmo.icfunab.cl/api/remove-company', {
            id: id,
        }).then((response) => {
            console.log(response);
        });
        handleClick();
    }

    return (
        <div>
            <h1 style={
                {textAlign: "center"}
            }>¿Seguro que desea eliminar la empresa?</h1>
            <Container className="mt-4">
                <div className="container-fluid h-100">
                    <div className="row w-100 align-items-center">
                        <div className="col text-center">
                            <Button className="botonAtras btn btn-danger mx-2" href="/companies"><FaIcons.FaArrowAltCircleLeft></FaIcons.FaArrowAltCircleLeft> Cancelar</Button>
                            <Button className="botonAtras btn btn-success mx-2" onClick={EliminarCompany}><FaIcons.FaCheckCircle></FaIcons.FaCheckCircle> Aceptar</Button>
                        </div>
                    </div>


                </div>

            </Container>
        </div>
    );


}
export default DeleteData;
