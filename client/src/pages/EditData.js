import {useEffect, useState} from "react";
import {Container, Table} from "react-bootstrap";
import {useLocation, useParams} from "react-router";
import * as FaIcons from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditData = () => {
    let {id} = useParams();
    const [data, setdata] = useState([]);
    const [bandera, setbandera] = useState("");

    const [nombreEmpresa, setNombreEmpresa] = useState("");

    const [rutEmpresa, setrutEmpresa] = useState("");

    const [giroEmpresa, setgiroEmpresa] = useState("");

    const [direccionEmpresa, setdireccionEmpresa] = useState("");

    const [mailEmpresa, setmailEmpresa] = useState("");

    const [telefonoEmpresa, settelefonoEmpresa] = useState("");

    const [cargoEmpresa, setcargoEmpresa] = useState("");

    const [dotacionEmpresa, setdotacionEmpresa] = useState("");

    const navigate = useNavigate();
    function handleClick() {
        navigate('/companies');
    }

    const EditarEmpresa = () => {
        Axios.post('http://kosmo.icfunab.cl/api/edit-company', {
          username: nombreEmpresa,
          rut: rutEmpresa,
          giro: giroEmpresa,
          direccion: direccionEmpresa,
          mail: mailEmpresa,
          telefono: telefonoEmpresa,
          cargo: cargoEmpresa,
          dotacion: dotacionEmpresa,
          id: id
        }).then((response) => {
          console.log(response)
        });
        alert("Se edito correctamente")
        handleClick();
      }


    
    useEffect(() => {
        async function fetchMyAPI(){
            const res = await Axios.post('http://kosmo.icfunab.cl/api/empresa-view',{id});
            setdata(res.data);
            setNombreEmpresa(res.data[0].NombreEmpresa);
            setrutEmpresa(res.data[0].RutEmpresa);
            setmailEmpresa(res.data[0].MailEmpresa);
            settelefonoEmpresa(res.data[0].TelefonoEmpresa);
            setgiroEmpresa(res.data[0].Giro);
            setdireccionEmpresa(res.data[0].Direccion);
            setcargoEmpresa(res.data[0].CargoEmpresa);
            setdotacionEmpresa(res.data[0].DotacionEmpresa);
            setbandera("1");
        }
        fetchMyAPI();
    }, [bandera])


    return (
        <div>
            <Button className="botonAtras" href="/companies"><FaIcons.FaArrowAltCircleLeft></FaIcons.FaArrowAltCircleLeft> Atras</Button>
            <Container className="mt-4">

                
                    {
                    data.map((valor, i) => (
                        <div className="row"
                            key={i}>
                            <div className="form-group col-lg-6">
                                <label className="font-weight-bold text-small" htmlFor="firstname">Nombre Empresa<span className="text-primary ml-1">*</span>
                                </label>
                                <input className="form-control" id="firstname" type="text" required=""
                                    defaultValue={
                                        valor.NombreEmpresa
                                    } onChange={(e) => { 
                                        setNombreEmpresa(e.target.value); }}/>
                            </div>
                            <div className="form-group col-lg-6">
                                <label className="font-weight-bold text-small" htmlFor="lastname">Rut Empresa<span className="text-primary ml-1">*</span>
                                </label>
                                <input className="form-control" id="lastname" type="text" required=""
                                    defaultValue={
                                        valor.RutEmpresa
                                    } onChange={(e) => { setrutEmpresa(e.target.value); }}/>
                            </div>
                            <div className="form-group col-lg-12">
                                <label className="font-weight-bold text-small" htmlFor="email">Email Empresa<span className="text-primary ml-1">*</span>
                                </label>
                                <input className="form-control" id="email" type="email" required=""
                                    defaultValue={
                                        valor.MailEmpresa
                                    } onChange={(e) => { setmailEmpresa(e.target.value); }}/>
                            </div>
                            <div className="form-group col-lg-6">
                                <label className="font-weight-bold text-small" htmlFor="phone">Telefono
                                    <span className="text-primary ml-1">*</span>
                                </label>
                                <input className="form-control" id="phone" type="text"
                                    defaultValue={
                                        valor.TelefonoEmpresa
                                    } onChange={(e) => { settelefonoEmpresa(e.target.value); }}/>
                            </div>
                            <div className="form-group col-lg-6">
                                <label className="font-weight-bold text-small" htmlFor="projecttype">Giro Empresa<span className="text-primary ml-1">*</span>
                                </label>
                                <input className="form-control" id="projecttype" type="number" required=""
                                    defaultValue={
                                        valor.Giro
                                    } onChange={(e) => { setgiroEmpresa(e.target.value); }}/>
                            </div>
                            <div className="form-group col-lg-6">
                                <label className="font-weight-bold text-small" htmlFor="budget">Direccion Empresa<span className="text-primary ml-1">*</span>
                                </label>
                                <input className="form-control" id="budget" type="text" required=""
                                    defaultValue={
                                        valor.Direccion
                                    } onChange={(e) => { setdireccionEmpresa(e.target.value); }} />
                            </div>
                            <div className="form-group col-lg-6">
                                <label className="font-weight-bold text-small" htmlFor="timeframe">Cargo Empresa<span className="text-primary ml-1">*</span>
                                </label>
                                <input className="form-control" id="timeframe" type="text" required=""
                                    defaultValue={
                                        valor.CargoEmpresa
                                    } onChange={(e) => { setcargoEmpresa(e.target.value); }}/>
                            </div>
                            <div className="form-group col-lg-6">
                                <label className="font-weight-bold text-small" htmlFor="timeframe">Dotación Empresa<span className="text-primary ml-1">*</span>
                                </label>
                                <input className="form-control" id="timeframe" type="text" required=""
                                    defaultValue={
                                        valor.DotacionEmpresa
                                    } onChange={(e) => { setdotacionEmpresa(e.target.value); }}/>
                            </div>
                        </div>
                    ))
                } 
                <div className="container-fluid h-100">
                    <div className="row w-100 align-items-center">
                        <div className="col text-center">
                            <Button className="botonGuardar" onClick={EditarEmpresa}><FaIcons.FaSave></FaIcons.FaSave> Guardar</Button>
                        </div>
                    </div>


                </div>

            </Container>
        </div>
    );


}
export default EditData;
