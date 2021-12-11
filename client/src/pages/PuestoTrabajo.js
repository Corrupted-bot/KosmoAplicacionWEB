import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';

import { Button } from 'react-bootstrap';
import Axios from 'axios';
import { useNavigate, useParams } from 'react-router';



const PuestoTrabajo = () => {
    let { id, idproyectos } = useParams();
    //FORMULARIO1
    const navigate = useNavigate();


    function handleClick() {
        navigate(`/companies/${id}/view/projects/${idproyectos}`);
    }

    const [nombrePuesto, setNombrePuesto] = useState("");

    const [Descripcionpuesto, setDescripcionPuesto] = useState("");

    const [ControlHorario, setControlHorario] = useState("");
    const [detallescontrolhor, setdetallescontrolhor] = useState("");

    const [NormasVestuario, setNormasVestuario] = useState("");
    const [detallesvestuario, setdetallesvestuario] = useState("");

    const [FormacionCasa, setFormacionCasa] = useState("");
    const [detallesFormacion, setdetallesFormacion] = useState("");

    const [PensionEmpresa, setPensionEmpresa] = useState("");
    const [detallePension, setdetallePension] = useState("");

    const [RelacionFamilia, setRelacionFamilia] = useState("");
    const [detallesRelacion, setdetallesRelacion] = useState("");

    const [SeguroEnfermedad, setSeguroEnfermedad] = useState("");
    const [detallesSeguro, setdetallesSeguro] = useState("");

    const [Vacaciones, setVacaciones] = useState("");
    const [detallesVacaciones, setdetallesVacaciones] = useState("");

    //FORMULARIO 2

    const [EvaluaciondeRiesgo, setEvaluaciondeRiesgo] = useState("");
    const [detallesRiesgo, setdetallesRiesgo] = useState("");

    const [EvaluacionRealizada, setEvaluacionRealizada] = useState("");
    const [detallesRealizada, setdetallesRealizada] = useState("");

    const [PromocionLaboral, setPromocionLaboral] = useState("");
    const [Flexibilidad, setFlexibilidad] = useState("");

    //FORMULARIO 3

    const [Estardepie, setEstardepie] = useState("");
    const [Caminar, setCaminar] = useState("");
    const [EstarSentado, setEstarSentado] = useState("");
    const [Levantar, setLevantar] = useState("");
    const [Acarrear, setAcarrear] = useState("");
    const [Empujar, setEmpujar] = useState("");
    const [Subir, setSubir] = useState("");
    const [Equilibrio, setEquilibrio] = useState("");
    const [Encorvarse, setEncorvarse] = useState("");
    const [Arrodillarse, setArrodillarse] = useState("");
    const [ManipularManos, setManipularManos] = useState("");
    const [ManipularDestreza, setManipularDestreza] = useState("");
    const [Vision, setVision] = useState("");
    const [Audicion, setAudicion] = useState("");
    const [Adaptacion, setAdaptacion] = useState("");
    const [Supervision, setSupervicion] = useState("");


    //FORMULARIO 4

    const [Jornada, setJornada] = useState("");
    const [Lugar, setLugar] = useState("");
    const [Moverse, setMoverse] = useState("");
    const [Actividad, setActividad] = useState("");
    const [Temperatura, setTemperatura] = useState("");
    const [Ruido, setRuido] = useState("");
    const [Limpieza, setLimpieza] = useState("");
    const [Tareas, setTareas] = useState("");
    const [Espacio, setEspacio] = useState("");
    const [Sexo, setSexo] = useState("");
    const [Uniforme, setUniforme] = useState("");
    const [Palabras, setPalabras] = useState("");
    const [Numeros, setNumeros] = useState("");
    const [Transporte, setTransporte] = useState("");
    const [Otros, setOtros] = useState("");

    const labels = ["Jornada Completa", "Dentro", "Estando en un lugar", "Donde haya mucha actividad", "Donde haga calor", "En un lugar ruidoso", "En un sitio limpio", "Una tarea constante", "En un espacio grande", "Principalmente con hombres", "Con uniforme", "Con palabras / libros", "Con números", "Utilizando transporte público", "Con otros"];
    const labelFinal = ["Media Jornada", "En el exterior", "Cambiando de lugar", "Donde haya poca actividad", "Donde haga frío", "En un lugar silencioso", "En un sitio desaliñado, sucio", "Haciendo diferentes tareas", "En un espacio pequeño", "Principalmente con mujeres", "Sin uniforme", "No con palabras ni libros", "No con números", "Sin usar transporte público", "No con otros"];
    const funciones = [setJornada, setLugar, setMoverse, setActividad, setTemperatura, setRuido, setLimpieza, setTareas, setEspacio, setSexo, setUniforme, setPalabras, setNumeros, setTransporte, setOtros];


    //FORMULARIO 5 

    const [Manos, setManos] = useState("");
    const [BuenaVision, setBuenavision] = useState("");
    const [Oido, setOido] = useState("");
    const [Comunicacion, setComunicacion] = useState("");
    const [Pesos, setPesos] = useState("");
    const [Fuerza, setFuerza] = useState("");
    const [Leer, setLeer] = useState("");
    const [UsarNumeros, setUsarNumeros] = useState("");
    const [Dinero, setDinero] = useState("");
    const [Hora, setHora] = useState("");
    const [Rapido, setRapido] = useState("");
    const [calidad, setcalidad] = useState("");
    const [concentrarse, setconcentrarse] = useState("");
    const [variastareas, setvariastareas] = useState("");
    const [buenequilibrio, setbuenequilibrio] = useState("");
    const [andar, setandar] = useState("");
    const [Estarpie, setEstarpie] = useState("");
    const [Sentado, setsentado] = useState("");
    const [Escaleras, setEscaleras] = useState("");
    const [enfado, setenfado] = useState("");
    const [recordar, setrecordar] = useState("");
    const [telefono, settelefono] = useState("");
    const [conducir, setconducir] = useState("");
    const [ordenador, setordenador] = useState("");
    const [deletrear, setdeletrear] = useState("");
    const [letra, setletra] = useState("");
    const [opinion, setopinion] = useState("");
    const [apoyo, setapoyo] = useState("");
    const [iniciativa, setiniciativa] = useState("");
    const [apariencia, setapariencia] = useState("");
    const [higiene, sethigiene] = useState("");

    const labels2 = ["Usar manos", "Buena visión", "Buen oido", "Comunicarse bien", "Levantar pesos", "Tener fuerza", "Poder Leer", "Poder usar números", "Poder usar dinero", "Saber decir la hora", "Saber trabajar rapido", "Saber conseguir calidad", "Concentrarse + de 2 hs", "Poder hacer varias tareas", "Tener buen equilibrio", "Poder andar", "Poder estar de pie + de 2 hs", "Poder estar sentado + de 2 hs", "Poder utilizar escaleras", "No enfadarse a menudo", "Poder recordar instrucciones", "Saber utilizar el teléfono", "Saber conducir", "Saber utilizar el ordenador", "Saber deletrear", "Tener buena letra", "Tener opinion,criterio,juicio", "Poder trabajar sin apoyo", "Tener iniciativa", "Saber cuidar su apariencia", "Tener buena higiene personal"];
    const labelFinal2 = ["No requerida", "No requerida", "No requerida", "No requerida", "No requerida", "No requerida", "No requerida", "No requerida", "No requerida", "No requerida", "No requerida", "No requerida", "No requerida", "Solo 1 ó 2 tareas", "No requerida", "No requerida", "No requerida", "No requerida", "No requerida", "No requerida", "No requerida", "No requerida", "No requerida", "No requerida", "No requerida", "No requerida", "No requerida", "Se requiere apoyo directo", "No requerida", "No requerida", "No requerida"];
    const funciones2 = [setManos, setBuenavision, setOido, setComunicacion, setPesos, setFuerza, setLeer, setUsarNumeros, setDinero, setHora, setRapido, setcalidad, setconcentrarse, setvariastareas, setbuenequilibrio, setandar, setEstarpie, setsentado, setEscaleras, setenfado, setrecordar, settelefono, setconducir, setordenador, setdeletrear, setletra, setopinion, setapoyo, setiniciativa, setapariencia, sethigiene];

    //FORMULARIO 6

    const [CumplirHorario, setCumplirHorario] = useState("");
    const [detCumplirHorario, setdetCumplirHorario] = useState("");
    const [Asistencia, setAsistencia] = useState("");
    const [detAsistencia, setdetAsistencia] = useState("");
    const [Comunicarse, setComunicarse] = useState("");
    const [detComunicarse, setdetComunicarse] = useState("");
    const [Conducta, setConducta] = useState("");
    const [detConducta, setdetConducta] = useState("");
    const [Vestido, setVestido] = useState("");
    const [detVestido, setdetVestido] = useState("");
    const [Interaccion, setInteraccion] = useState("");
    const [detInteraccion, setdetInteraccion] = useState("");

    //FORMULARIO 7


    const [Motivacion, setMotivacion] = useState("");
    const [detMotivacion, setdetMotivacion] = useState("");
    const [Flexible, setFlexible] = useState("");
    const [detFlexible, setdetFlexible] = useState("");
    const [Inicio, setInicio] = useState("");
    const [detInicio, setdetInicio] = useState("");
    const [Equipo, setEquipo] = useState("");
    const [detEquipo, setdetEquipo] = useState("");
    const [Salud, setSalud] = useState("");
    const [detSalud, setdetSalud] = useState("");
    const [Consistencia, setConsistencia] = useState("");
    const [detConsistencia, setdetConsistencia] = useState("");
    const [Presion, setPresion] = useState("");
    const [detPresion, setdetPresion] = useState("");

    const GuardarPuestoTrabajo = () => {
        Axios.post("http://localhost:4000/puestotrabajo", {
            nombrePuesto: nombrePuesto,
            Descripcionpuesto: Descripcionpuesto,
            ControlHorario: ControlHorario,
            detallescontrolhor: detallescontrolhor,
            NormasVestuario: NormasVestuario,
            detallesvestuario: detallesvestuario,
            FormacionCasa: FormacionCasa,
            detallesFormacion: detallesFormacion,
            PensionEmpresa: PensionEmpresa,
            detallePension: detallePension,
            RelacionFamilia: RelacionFamilia,
            detallesRelacion: detallesRelacion,
            SeguroEnfermedad: SeguroEnfermedad,
            detallesSeguro: detallesSeguro,
            Vacaciones: Vacaciones,
            detallesVacaciones: detallesVacaciones,
            EvaluaciondeRiesgo: EvaluaciondeRiesgo,
            detallesRiesgo: detallesRiesgo,
            EvaluacionRealizada: EvaluacionRealizada,
            detallesRealizada: detallesRealizada,
            PromocionLaboral: PromocionLaboral,
            Flexibilidad: Flexibilidad,
            Estardepie: Estardepie,
            Caminar: Caminar,
            EstarSentado: EstarSentado,
            Levantar: Levantar,
            Acarrear: Acarrear,
            Empujar: Empujar,
            Subir: Subir,
            Equilibrio: Equilibrio,
            Encorvarse: Encorvarse,
            Arrodillarse: Arrodillarse,
            ManipularManos: ManipularManos,
            ManipularDestreza: ManipularDestreza,
            Vision: Vision,
            Audicion: Audicion,
            Adaptacion: Adaptacion,
            Supervision: Supervision,
            Jornada: Jornada,
            Lugar: Lugar,
            Moverse: Moverse,
            Actividad: Actividad,
            Temperatura: Temperatura,
            Ruido: Ruido,
            Limpieza: Limpieza,
            Tareas: Tareas,
            Espacio: Espacio,
            Sexo: Sexo,
            Uniforme: Uniforme,
            Palabras: Palabras,
            Numeros: Numeros,
            Transporte: Transporte,
            Otros: Otros,
            Manos: Manos,
            BuenaVision: BuenaVision,
            Oido: Oido,
            Comunicacion: Comunicacion,
            Pesos: Pesos,
            Fuerza: Fuerza,
            Leer: Leer,
            UsarNumeros: UsarNumeros,
            Dinero: Dinero,
            Hora: Hora,
            Rapido: Rapido,
            calidad: calidad,
            concentrarse: concentrarse,
            variastareas: variastareas,
            buenequilibrio: buenequilibrio,
            andar: andar,
            Estarpie: Estarpie,
            Sentado: Sentado,
            Escaleras: Escaleras,
            enfado: enfado,
            recordar: recordar,
            telefono: telefono,
            conducir: conducir,
            ordenador: ordenador,
            deletrear: deletrear,
            letra: letra,
            opinion: opinion,
            apoyo: apoyo,
            iniciativa: iniciativa,
            apariencia: apariencia,
            higiene: higiene,
            CumplirHorario: CumplirHorario,
            detCumplirHorario: detCumplirHorario,
            Asistencia: Asistencia,
            detAsistencia: detAsistencia,
            Comunicarse: Comunicarse,
            detComunicarse: detComunicarse,
            Conducta: Conducta,
            detConducta: detConducta,
            Vestido: Vestido,
            detVestido: detVestido,
            Interaccion: Interaccion,
            detInteraccion: detInteraccion,
            Motivacion: Motivacion,
            detMotivacion: detMotivacion,
            Flexible: Flexible,
            detFlexible: detFlexible,
            Inicio: Inicio,
            detInicio: detInicio,
            Equipo: Equipo,
            detEquipo: detEquipo,
            Salud: Salud,
            detSalud: detSalud,
            Consistencia: Consistencia,
            detConsistencia: detConsistencia,
            Presion: Presion,
            detPresion: detPresion,
            idproyectos:idproyectos

        }).then((response) => {
            console.log(response)
        });
        alert("Se creo correctamente el puesto de trabajo");
        handleClick();
    }

    return (
        <>
            <Button className="botonAtras" href={`/companies/${id}/view/projects/${idproyectos}`}><FaIcons.FaArrowAltCircleLeft></FaIcons.FaArrowAltCircleLeft> Atras</Button>
            <h1 style={{ textAlign: 'center' }}> Análisis del Puesto de Trabajo </h1>
            <ul className="nav nav-tabs bg-dark2" id="myTab" role="tablist">

                <li className="nav-item" role="presentation">
                    <button className="nav-link nav-link2 " id="puesto-trabajo" data-bs-toggle="tab" data-bs-target="#trabajo" type="button" role="tab" aria-controls="puestoTrabajo" aria-selected="true">Puesto de Trabajo</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link nav-link2 " id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Salud y Seguridad</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link nav-link2" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Habilidad Fisica</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link nav-link2" id="prueba-tab" data-bs-toggle="tab" data-bs-target="#prueba" type="button" role="tab" aria-controls="prueba" aria-selected="false">Trabajo</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link nav-link2" id="prueba-tab2" data-bs-toggle="tab" data-bs-target="#prueba2" type="button" role="tab" aria-controls="prueba2" aria-selected="false">Habilidades Requeridas</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link nav-link2" id="prueba-tab3" data-bs-toggle="tab" data-bs-target="#prueba3" type="button" role="tab" aria-controls="prueba3" aria-selected="false">Apoyo</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link nav-link2" id="prueba-tab4" data-bs-toggle="tab" data-bs-target="#prueba4" type="button" role="tab" aria-controls="prueba4" aria-selected="false">Apoyo 2</button>
                </li>
                <li>
                    <Button className="nav-link nav-link2 negro" onClick={GuardarPuestoTrabajo}><FaIcons.FaSave></FaIcons.FaSave> Guardar</Button>
                </li>

            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="trabajo" role="tabpanel" aria-labelledby="puesto-trabajo">
                    <div style={{ width: "900px", height: "600px" }} className="formulario-2 formulario centro my-custom-scrollbar">
                        <div> <h1>Puesto de Trabajo</h1></div>
                        <label>Nombre de Puesto </label>
                        <input type="text" placeholder="Nombre del puesto"
                            onChange={(e) => {
                                setNombrePuesto(e.target.value);
                            }}

                        />
                        <br />
                        <label>Descripción del Puesto</label>
                        <input type="text" placeholder="Descripcion Puesto disponible"
                            onChange={(e) => {
                                setDescripcionPuesto(e.target.value);
                            }}

                        />
                        <br />
                        <label>Control Horario</label>
                        <select className="form-select" aria-label="Control Horario" defaultValue={'DEFAULT'} onChange={(e) => { setControlHorario(e.target.value); }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">SI</option>
                            <option value="2">NO</option>
                        </select>

                        <textarea type="text" placeholder="Detalles Control Horario" maxLength={500}
                            onChange={(e) => {
                                setdetallescontrolhor(e.target.value);
                            }}

                        ></textarea>
                        <br />
                        <label> Normas de Vestuario </label>
                        <select className="form-select" aria-label="Normas de Vestuario" defaultValue={'DEFAULT'} onChange={(e) => {
                            setNormasVestuario(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">SI</option>
                            <option value="2">NO</option>
                        </select>
                        <textarea type="text" placeholder="Detalles de Normas de Vestuario" maxLength={500}
                            onChange={(e) => {
                                setdetallesvestuario(e.target.value);
                            }}
                        />
                        <br />
                        <label> Formación en Casa </label>
                        <select className="form-select" aria-label="Formacion en Casa" defaultValue={'DEFAULT'} onChange={(e) => {
                            setFormacionCasa(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">SI</option>
                            <option value="2">NO</option>
                        </select>
                        <textarea type="text" placeholder="Detalles Formacion en Casa" maxLength={500}
                            onChange={(e) => {
                                setdetallesFormacion(e.target.value);
                            }}

                        />

                        <br />
                        <label> Pensión de Empresa </label>
                        <select className="form-select" aria-label="Pensión de empresa" defaultValue={'DEFAULT'} onChange={(e) => {
                            setPensionEmpresa(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">SI</option>
                            <option value="2">NO</option>
                        </select>
                        <textarea type="text" placeholder="Detalles Pension de Empresa" maxLength={500}
                            onChange={(e) => {
                                setdetallePension(e.target.value);
                            }}

                        />

                        <br />
                        <label>Relación con la familia</label>
                        <select className="form-select" aria-label="Relacion con la Familia" defaultValue={'DEFAULT'} onChange={(e) => {
                            setRelacionFamilia(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">SI</option>
                            <option value="2">NO</option>
                        </select>
                        <textarea type="text" placeholder="Detalles Relacion Familia" maxLength={500}
                            onChange={(e) => {
                                setdetallesRelacion(e.target.value);
                            }}

                        />

                        <br />
                        <label>Seguro de enfermedad </label>
                        <select className="form-select" aria-label="Seguro de Enfermedad" defaultValue={'DEFAULT'} onChange={(e) => {
                            setSeguroEnfermedad(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">SI</option>
                            <option value="2">NO</option>
                        </select>

                        <textarea type="text" placeholder="Detalles Seguro de Enfermedad" maxLength={500}
                            onChange={(e) => {
                                setdetallesSeguro(e.target.value);
                            }}

                        />

                        <br />

                        <label>Vacaciones </label>
                        <select className="form-select" aria-label="Vacaciones" defaultValue={'DEFAULT'} onChange={(e) => {
                            setVacaciones(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">SI</option>
                            <option value="2">NO</option>
                        </select>

                        <textarea type="text" placeholder="Detalles Vacaciones" maxLength={500}
                            onChange={(e) => {
                                setdetallesVacaciones(e.target.value);
                            }}

                        />
                    </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="formulario-2 formulario centro my-custom-scrollbar" style={{ width: "900px", height: "600px" }}>
                        <div> <h1>SALUD Y SEGURIDAD</h1></div>
                        <label>Evaluacion de riesgo</label>
                        <select className="form-select" aria-label="Evaluacion de riesgo" defaultValue={'DEFAULT'} onChange={(e) => {
                            setEvaluaciondeRiesgo(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">SI</option>
                            <option value="2">NO</option>
                        </select>

                        <textarea type="text" placeholder="Detalles Evaluacion de Riesgo" maxLength={500}
                            onChange={(e) => {
                                setdetallesRiesgo(e.target.value);
                            }}

                        />
                        <br />
                        <label>Evaluacion Realizada</label>
                        <select className="form-select" aria-label="Evaluacion Realizada" defaultValue={'DEFAULT'} onChange={(e) => {
                            setEvaluacionRealizada(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">SI</option>
                            <option value="2">NO</option>
                        </select>

                        <textarea type="text" placeholder="Detalles Evaluacion Realizada" maxLength={500}
                            onChange={(e) => {
                                setdetallesRealizada(e.target.value);
                            }}

                        />
                        <label>Promocion Laboral</label>
                        <textarea type="text" placeholder="Perspectiva de promocion Laboral" maxLength={500}
                            onChange={(e) => {
                                setPromocionLaboral(e.target.value);
                            }}

                        />
                        <div>

                            <label>Flexibilidad Laboral</label>
                            <textarea type="text" placeholder="Flexibilidad Laboral" maxLength={500}
                                onChange={(e) => {
                                    setFlexibilidad(e.target.value);
                                }}

                            />

                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <div style={{ width: "900px", height: "600px" }} className="formulario-2 formulario centro my-custom-scrollbar">
                        <h1>HABILIDAD FISICA</h1>

                        <label>Estar de pie</label>
                        <select className="form-select" aria-label="Estar de pie" defaultValue={'DEFAULT'} onChange={(e) => {
                            setEstardepie(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">SI</option>
                            <option value="2">NO</option>
                        </select>
                        <label>Caminar</label>
                        <select className="form-select" aria-label="Caminar" defaultValue={'DEFAULT'} onChange={(e) => {
                            setCaminar(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">SI</option>
                            <option value="2">NO</option>
                        </select>
                        <label>Estar Sentado</label>
                        <select className="form-select" aria-label="Estar Sentado" defaultValue={'DEFAULT'} onChange={(e) => {
                            setEstarSentado(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">SI</option>
                            <option value="2">NO</option>
                        </select>
                        <label>Levantar</label>
                        <select className="form-select" aria-label="Levantar" defaultValue={'DEFAULT'} onChange={(e) => {
                            setLevantar(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">SI</option>
                            <option value="2">NO</option>
                        </select>
                        <label>Acarrear</label>
                        <select className="form-select" aria-label="Acarrear" defaultValue={'DEFAULT'} onChange={(e) => {
                            setAcarrear(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">SI</option>
                            <option value="2">NO</option>
                        </select>
                        <label>Empujar</label>
                        <select className="form-select" aria-label="Empujar" defaultValue={'DEFAULT'} onChange={(e) => {
                            setEmpujar(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">SI</option>
                            <option value="2">NO</option>
                        </select>
                        <label>Subir</label>
                        <select className="form-select" aria-label="Subir" defaultValue={'DEFAULT'} onChange={(e) => {
                            setSubir(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">SI</option>
                            <option value="2">NO</option>
                        </select>
                        <label>Mantener Equilibrio</label>
                        <select className="form-select" aria-label="Mantener Equilibrio" defaultValue={'DEFAULT'} onChange={(e) => {
                            setEquilibrio(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">SI</option>
                            <option value="2">NO</option>
                        </select>
                        <label>Encorvarse</label>
                        <select className="form-select" aria-label="Encorvarse" defaultValue={'DEFAULT'} onChange={(e) => {
                            setEncorvarse(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">SI</option>
                            <option value="2">NO</option>
                        </select>
                        <label>Arrodillarse</label>
                        <select className="form-select" aria-label="Arrodillarse" defaultValue={'DEFAULT'} onChange={(e) => {
                            setArrodillarse(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">SI</option>
                            <option value="2">NO</option>
                        </select>
                        <label>Manipular con las manos</label>
                        <select className="form-select" aria-label="Manipular con las manos" defaultValue={'DEFAULT'} onChange={(e) => {
                            setManipularManos(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">UNA MANO</option>
                            <option value="2">AMBAS MANOS</option>
                        </select>
                        <label>Manipular con destreza</label>
                        <select className="form-select" aria-label="Manipular con destreza" defaultValue={'DEFAULT'} onChange={(e) => {
                            setManipularDestreza(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">FINA</option>
                            <option value="2">GRUESA</option>
                        </select>
                        <label>Vision</label>
                        <select className="form-select" aria-label="Vision" defaultValue={'DEFAULT'} onChange={(e) => {
                            setVision(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">SI</option>
                            <option value="2">NO</option>
                        </select>
                        <label>Audicion</label>
                        <select className="form-select" aria-label="Audicion" defaultValue={'DEFAULT'} onChange={(e) => {
                            setAudicion(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">SI</option>
                            <option value="2">NO</option>
                        </select>
                        <label>Requisitos de adaptacion</label>
                        <textarea type="text" placeholder="Requisitos de adaptacion" maxLength={500}
                            onChange={(e) => {
                                setAdaptacion(e.target.value);
                            }}
                        />
                        <label>Expetativas de supervicion/ apoyo natural</label>
                        <textarea type="text" placeholder="Expetativas de supervicion/apoyo natural" maxLength={500}
                            onChange={(e) => {
                                setSupervicion(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="tab-pane fade" id="prueba" role="tabpanel" aria-labelledby="prueba-tab">
                    <div style={{ width: "900px", height: "600px" }} className="formulario-2 formulario centro my-custom-scrollbar">
                        <h1>El trabajo es:</h1>
                        <table className="table-dark table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">1</th>
                                    <th scope="col">2</th>
                                    <th scope="col">3</th>
                                    <th scope="col">4</th>
                                    <th scope="col">5</th>
                                    <th scope="col">6</th>
                                    <th scope="col">7</th>
                                    <th scope="col">8</th>
                                    <th scope="col">9</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>

                                {[...Array(labels.length).keys()].map(i => (
                                    <tr key={i}>
                                        <th scope="row">{labels[i]}</th>
                                        {[...Array(9).keys()].map(j => (
                                            <td key={j}>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name={`options` + i} id="inlineRadio1" value={j + 1} onChange={(e) => {
                                                        funciones[i](e.target.value);
                                                    }} />
                                                </div>
                                            </td>
                                        ))}
                                        <th scope="row">{labelFinal[i]}</th>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="tab-pane fade" id="prueba2" role="tabpanel" aria-labelledby="prueba-tab2">
                    <div style={{ width: "900px", height: "600px" }} className="formulario-2 formulario centro my-custom-scrollbar">
                        <h1>Habilidades Requeridas</h1>
                        <table className="table-dark table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">1</th>
                                    <th scope="col">2</th>
                                    <th scope="col">3</th>
                                    <th scope="col">4</th>
                                    <th scope="col">5</th>
                                    <th scope="col">6</th>
                                    <th scope="col">7</th>
                                    <th scope="col">8</th>
                                    <th scope="col">9</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>

                                {[...Array(labels2.length).keys()].map(i => (
                                    <tr key={i}>
                                        <th scope="row">{labels2[i]}</th>
                                        {[...Array(9).keys()].map(j => (
                                            <td key={j}>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name={`options` + i} id="inlineRadio1" value={j + 1} onChange={(e) => {
                                                        funciones2[i](e.target.value);
                                                    }} />
                                                </div>
                                            </td>
                                        ))}
                                        <th scope="row">{labelFinal2[i]}</th>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="tab-pane fade" id="prueba3" role="tabpanel" aria-labelledby="prueba-tab3">
                    <div style={{ width: "900px", height: "600px" }} className="formulario-2 formulario centro my-custom-scrollbar">
                        <div> <h1>Listado de comprobacion de necesidades de apoyo</h1></div>
                        <label>Cumplir el Horario</label>
                        <select className="form-select" aria-label="Evaluacion de riesgo" defaultValue={'DEFAULT'} onChange={(e) => {
                            setCumplirHorario(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">Necesita apoyo total</option>
                            <option value="2">Necesita algun apoyo</option>
                            <option value="3">No necesita apoyo</option>
                        </select>
                        <textarea type="text" placeholder="Detalles Evaluacion Realizada" maxLength={500}
                            onChange={(e) => {
                                setdetCumplirHorario(e.target.value);
                            }}

                        />
                        <label>Asistencia</label>
                        <select className="form-select" aria-label="Evaluacion de riesgo" defaultValue={'DEFAULT'} onChange={(e) => {
                            setAsistencia(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">Necesita apoyo total</option>
                            <option value="2">Necesita algun apoyo</option>
                            <option value="3">No necesita apoyo</option>
                        </select>
                        <textarea type="text" placeholder="Detalles Evaluacion Realizada" maxLength={500}
                            onChange={(e) => {
                                setdetAsistencia(e.target.value);
                            }}

                        />
                        <label>Comunicacion</label>
                        <select className="form-select" aria-label="Evaluacion de riesgo" defaultValue={'DEFAULT'} onChange={(e) => {
                            setComunicarse(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">Necesita apoyo total</option>
                            <option value="2">Necesita algun apoyo</option>
                            <option value="3">No necesita apoyo</option>
                        </select>
                        <textarea type="text" placeholder="Detalles Evaluacion Realizada" maxLength={500}
                            onChange={(e) => {
                                setdetComunicarse(e.target.value);
                            }}

                        />
                        <label>Conducta</label>
                        <select className="form-select" aria-label="Evaluacion de riesgo" defaultValue={'DEFAULT'} onChange={(e) => {
                            setConducta(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">Necesita apoyo total</option>
                            <option value="2">Necesita algun apoyo</option>
                            <option value="3">No necesita apoyo</option>
                        </select>
                        <textarea type="text" placeholder="Detalles Evaluacion Realizada" maxLength={500}
                            onChange={(e) => {
                                setdetConducta(e.target.value);
                            }}

                        />
                        <label>Vestido/apariencia</label>
                        <select className="form-select" aria-label="Evaluacion de riesgo" defaultValue={'DEFAULT'} onChange={(e) => {
                            setVestido(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">Necesita apoyo total</option>
                            <option value="2">Necesita algun apoyo</option>
                            <option value="3">No necesita apoyo</option>
                        </select>
                        <textarea type="text" placeholder="Detalles Evaluacion Realizada" maxLength={500}
                            onChange={(e) => {
                                setdetVestido(e.target.value);
                            }}

                        />
                        <label>Interaccion social</label>
                        <select className="form-select" aria-label="Evaluacion de riesgo" defaultValue={'DEFAULT'} onChange={(e) => {
                            setInteraccion(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">Necesita apoyo total</option>
                            <option value="2">Necesita algun apoyo</option>
                            <option value="3">No necesita apoyo</option>
                        </select>
                        <textarea type="text" placeholder="Detalles Evaluacion Realizada" maxLength={500}
                            onChange={(e) => {
                                setdetInteraccion(e.target.value);
                            }}
                        />
                        <div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="prueba4" role="tabpanel" aria-labelledby="prueba-tab4">
                    <div style={{ width: "900px", height: "600px" }} className="formulario-2 formulario centro my-custom-scrollbar">
                        <div> <h1>Listado de comprobacion de necesidades de apoyo</h1></div>
                        <label>Motivacion</label>
                        <select className="form-select" aria-label="Evaluacion de riesgo" defaultValue={'DEFAULT'} onChange={(e) => {
                            setMotivacion(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">Necesita apoyo total</option>
                            <option value="2">Necesita algun apoyo</option>
                            <option value="3">No necesita apoyo</option>
                        </select>
                        <textarea type="text" placeholder="Detalles Evaluacion Realizada" maxLength={500}
                            onChange={(e) => {
                                setdetMotivacion(e.target.value);
                            }}

                        />
                        <label>Flexibilidad</label>
                        <select className="form-select" aria-label="Evaluacion de riesgo" defaultValue={'DEFAULT'} onChange={(e) => {
                            setFlexible(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">Necesita apoyo total</option>
                            <option value="2">Necesita algun apoyo</option>
                            <option value="3">No necesita apoyo</option>
                        </select>
                        <textarea type="text" placeholder="Detalles Evaluacion Realizada" maxLength={500}
                            onChange={(e) => {
                                setdetFlexible(e.target.value);
                            }}

                        />
                        <label>Iniciativa</label>
                        <select className="form-select" aria-label="Evaluacion de riesgo" defaultValue={'DEFAULT'} onChange={(e) => {
                            setInicio(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">Necesita apoyo total</option>
                            <option value="2">Necesita algun apoyo</option>
                            <option value="3">No necesita apoyo</option>
                        </select>
                        <textarea type="text" placeholder="Detalles Evaluacion Realizada" maxLength={500}
                            onChange={(e) => {
                                setdetInicio(e.target.value);
                            }}

                        />
                        <label>Trabajo en equipo</label>
                        <select className="form-select" aria-label="Evaluacion de riesgo" defaultValue={'DEFAULT'} onChange={(e) => {
                            setEquipo(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">Necesita apoyo total</option>
                            <option value="2">Necesita algun apoyo</option>
                            <option value="3">No necesita apoyo</option>
                        </select>
                        <textarea type="text" placeholder="Detalles Evaluacion Realizada" maxLength={500}
                            onChange={(e) => {
                                setdetEquipo(e.target.value);
                            }}

                        />
                        <label>Salud y seguridad</label>
                        <select className="form-select" aria-label="Evaluacion de riesgo" defaultValue={'DEFAULT'} onChange={(e) => {
                            setSalud(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">Necesita apoyo total</option>
                            <option value="2">Necesita algun apoyo</option>
                            <option value="3">No necesita apoyo</option>
                        </select>
                        <textarea type="text" placeholder="Detalles Evaluacion Realizada" maxLength={500}
                            onChange={(e) => {
                                setdetSalud(e.target.value);
                            }}

                        />
                        <label>Consistencia</label>
                        <select className="form-select" aria-label="Evaluacion de riesgo" defaultValue={'DEFAULT'} onChange={(e) => {
                            setConsistencia(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">Necesita apoyo total</option>
                            <option value="2">Necesita algun apoyo</option>
                            <option value="3">No necesita apoyo</option>
                        </select>
                        <textarea type="text" placeholder="Detalles Evaluacion Realizada" maxLength={500}
                            onChange={(e) => {
                                setdetConsistencia(e.target.value);
                            }}

                        />
                        <label>Trabajar con presion</label>
                        <select className="form-select" aria-label="Evaluacion de riesgo" defaultValue={'DEFAULT'} onChange={(e) => {
                            setPresion(e.target.value);
                        }}>
                            <option value="DEFAULT" disabled>Seleccione una opción</option>
                            <option value="1">Necesita apoyo total</option>
                            <option value="2">Necesita algun apoyo</option>
                            <option value="3">No necesita apoyo</option>
                        </select>
                        <textarea type="text" placeholder="Detalles Evaluacion Realizada" maxLength={500}
                            onChange={(e) => {
                                setdetPresion(e.target.value);
                            }}

                        />

                        <div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default PuestoTrabajo;