const express = require("express");
const mysql = require("mysql");




const db = mysql.createPool({
    user: "grupo07",
    host: "icf233.c5d4mi2dthpc.us-east-1.rds.amazonaws.com",
    password: "grupo..07",
    database: "grupo07",
});

// // //Estatus de conexión
// db.connect(function (err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//     }
//     else {
//         console.log('MySQL Conectado!');
//     }
// });

// SETUP DEL SERVIDOR
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());
const PORT = process.env.PORT || 4000;




//LOGIN CORRECTO
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "Contraseña o Usuario incorrecto." });
            }
        });
});
//REGISTRO CORRECTO
app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, password],
        (err, result) => {
            console.log(err);
        });
});

// REGISTO EMPRESA
app.post('/diagnostico', (req, res) => {
    const username = req.body.username;
    const rut = req.body.rut;
    const giro = req.body.giro;
    const direccion = req.body.direccion;
    const mail = req.body.mail;
    const telefono = req.body.telefono;
    const cargo = req.body.cargo;
    const dotacion = req.body.dotacion;
    const id = req.body.id;

    db.query("INSERT INTO empresas (NombreEmpresa, RutEmpresa, Giro, Direccion, MailEmpresa, TelefonoEmpresa, CargoEmpresa, DotacionEmpresa, idUsers) VALUES (?, ?,?,?,?,?,?,?,?)", [username, rut, giro, direccion, mail, telefono, cargo, dotacion, id],
        (err, result) => {
            console.log(err);
        });
});

//MOSTRAR UNA EMPRESA 

app.post('/empresa-view', (req, res) => {
    const id = req.body.id;
    db.query("SELECT * FROM empresas WHERE idEmpresas = ?", [id],
        function (err, result, fields) {
            if (result != undefined) {
                res.send(result);
            } else {
                console.log(`Este es el Error: ${err}`);
            }
        });
});



//Paso de datos para generar cartas
app.post('/add-diagnostico-1', (req, res) => {

    const user = req.body.user
    db.query("SELECT * FROM empresas WHERE idUsers = ?", [user],
        function (err, result, fields) {

            if (result != undefined) {
                res.send(result);
            } else {
                console.log(`Este es el Error: ${err}`);
            }
        });

});



//ELMINAR EMPRESA 
app.post("/remove-company", (req, res) => {
    const id = req.body.id


    db.query("DELETE FROM proyectos WHERE idEmpresas = ?", id,
        function (err, result, fields) {
            if (result != undefined) {
                console.log(result);
            } else {
                console.log(`Este es el Error: ${err}`);
            }
        });
    db.query("DELETE FROM empresas WHERE idEmpresas = ?", id,
        function (err, result, fields) {
            if (result != undefined) {
                res.send("200");
                console.log(result);
            } else {
                console.log(`Este es el Error: ${err}`);
            }
        });

});

//EDITAR EMPRESA

app.post("/edit-company", (req, res) => {
    const username = req.body.username;
    const rut = req.body.rut;
    const giro = req.body.giro;
    const direccion = req.body.direccion;
    const mail = req.body.mail;
    const telefono = req.body.telefono;
    const cargo = req.body.cargo;
    const dotacion = req.body.dotacion;
    const id = req.body.id;


    db.query("UPDATE empresas SET NombreEmpresa =  ? , RutEmpresa = ?, Giro = ? , Direccion = ?, MailEmpresa = ?, TelefonoEmpresa = ?, CargoEmpresa = ?, DotacionEmpresa = ? WHERE idEmpresas = ?", [username, rut, giro, direccion, mail, telefono, cargo, dotacion, id],
        (err, result) => {
            console.log(err);
        });
});



//AGREGAR PROYECTO

app.post("/add-project", (req, res) => {

    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const id = req.body.id;

    db.query("INSERT INTO proyectos (nombre, descripcion,idEmpresas) VALUES (?,?,?)", [nombre, descripcion, id],
        (err, result) => {
            console.log(err);
        });

});

//MOSTRAR PROYECTOS

app.post("/project-view", (req, res) => {

    const id = req.body.id;

    db.query("SELECT * FROM proyectos where idEmpresas = ?;", [id],
        (err, result) => {
            res.send(result);
        });

});

//MOSTRAR PROYECTO 1

app.post("/mostrar-proyecto", (req, res) => {
    const id = req.body.idproyectos

    db.query("SELECT * FROM proyectos where idproyectos = ?", id,
        (err, result) => {
            res.send(result);
        });
})


//ELMINAR PROYECTO
app.post("/remove-project", (req, res) => {
    const id = req.body.id

    db.query("DELETE FROM proyectos WHERE idproyectos = ?", id,
        function (err, result, fields) {
            if (result != undefined) {
                console.log(result);
            } else {
                console.log(`Este es el Error: ${err}`);
            }
        });

});


//EDITAR PROYECTO

app.post("/edit-project", (req, res) => {

    const id = req.body.id;
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;

    db.query("UPDATE proyectos SET nombre =  ? , descripcion = ? WHERE idproyectos = ?", [nombre, descripcion, id],
        (err, result) => {
            console.log(err);
        });
});

// REGISTRO puesto
app.post('/puestotrabajo', (req, res) => {

    const nombrePuesto = req.body.nombrePuesto
    const Descripcionpuesto = req.body.Descripcionpuesto
    const ControlHorario = req.body.ControlHorario
    const detallescontrolhor = req.body.detallescontrolhor
    const NormasVestuario = req.body.NormasVestuario
    const detallesvestuario = req.body.detallesvestuario
    const FormacionCasa = req.body.FormacionCasa
    const detallesFormacion = req.body.detallesFormacion
    const PensionEmpresa = req.body.PensionEmpresa
    const detallePension = req.body.detallePension
    const RelacionFamilia = req.body.RelacionFamilia
    const detallesRelacion = req.body.detallesRelacion
    const SeguroEnfermedad = req.body.SeguroEnfermedad
    const detallesSeguro = req.body.detallesSeguro
    const Vacaciones = req.body.Vacaciones
    const detallesVacaciones = req.body.detallesVacaciones
    const EvaluaciondeRiesgo = req.body.EvaluaciondeRiesgo
    const detallesRiesgo = req.body.detallesRiesgo
    const EvaluacionRealizada = req.body.EvaluacionRealizada
    const detallesRealizada = req.body.detallesRealizada
    const PromocionLaboral = req.body.PromocionLaboral
    const Flexibilidad = req.body.Flexibilidad
    const Estardepie = req.body.Estardepie
    const Caminar = req.body.Caminar
    const EstarSentado = req.body.EstarSentado
    const Levantar = req.body.Levantar
    const Acarrear = req.body.Acarrear
    const Empujar = req.body.Empujar
    const Subir = req.body.Subir
    const Equilibrio = req.body.Equilibrio
    const Encorvarse = req.body.Encorvarse
    const Arrodillarse = req.body.Arrodillarse
    const ManipularManos = req.body.ManipularManos
    const ManipularDestreza = req.body.ManipularDestreza
    const Vision = req.body.Vision
    const Audicion = req.body.Audicion
    const Adaptacion = req.body.Adaptacion
    const Supervision = req.body.Supervision
    const Jornada = req.body.Jornada
    const Lugar = req.body.Lugar
    const Moverse = req.body.Moverse
    const Actividad = req.body.Actividad
    const Temperatura = req.body.Temperatura
    const Ruido = req.body.Ruido
    const Limpieza = req.body.Limpieza
    const Tareas = req.body.Tareas
    const Espacio = req.body.Espacio
    const Sexo = req.body.Sexo
    const Uniforme = req.body.Uniforme
    const Palabras = req.body.Palabras
    const Numeros = req.body.Numeros
    const Transporte = req.body.Transporte
    const Otros = req.body.Otros
    const Manos = req.body.Manos
    const BuenaVision = req.body.BuenaVision
    const Oido = req.body.Oido
    const Comunicacion = req.body.Comunicacion
    const Pesos = req.body.Pesos
    const Fuerza = req.body.Fuerza
    const Leer = req.body.Leer
    const UsarNumeros = req.body.UsarNumeros
    const Dinero = req.body.Dinero
    const Hora = req.body.Hora
    const Rapido = req.body.Rapido
    const calidad = req.body.calidad
    const concentrarse = req.body.concentrarse
    const variastareas = req.body.variastareas
    const buenequilibrio = req.body.buenequilibrio
    const andar = req.body.andar
    const Estarpie = req.body.Estarpie
    const Sentado = req.body.Sentado
    const Escaleras = req.body.Escaleras
    const enfado = req.body.enfado
    const recordar = req.body.recordar
    const telefono = req.body.telefono
    const conducir = req.body.conducir
    const ordenador = req.body.ordenador
    const deletrear = req.body.deletrear
    const letra = req.body.letra
    const opinion = req.body.opinion
    const apoyo = req.body.apoyo
    const iniciativa = req.body.iniciativa
    const apariencia = req.body.apariencia
    const higiene = req.body.higiene
    const CumplirHorario = req.body.CumplirHorario
    const detCumplirHorario = req.body.detCumplirHorario
    const Asistencia = req.body.Asistencia
    const detAsistencia = req.body.detAsistencia
    const Comunicarse = req.body.Comunicarse
    const detComunicarse = req.body.detComunicarse
    const Conducta = req.body.Conducta
    const detConducta = req.body.detConducta
    const Vestido = req.body.Vestido
    const detVestido = req.body.detVestido
    const Interaccion = req.body.Interaccion
    const detInteraccion = req.body.detInteraccion
    const Motivacion = req.body.Motivacion
    const detMotivacion = req.body.detMotivacion
    const Flexible = req.body.Flexible
    const detFlexible = req.body.detFlexible
    const Inicio = req.body.Inicio
    const detInicio = req.body.detInicio
    const Equipo = req.body.Equipo
    const detEquipo = req.body.detEquipo
    const Salud = req.body.Salud
    const detSalud = req.body.detSalud
    const Consistencia = req.body.Consistencia
    const detConsistencia = req.body.detConsistencia
    const Presion = req.body.Presion
    const detPresion = req.body.detPresion
    const idproyectos = req.body.idproyectos


    db.query("INSERT INTO puestotrabajos (idproyectos,nombrepuesto,descripcionpuesto,controlhorario,detallescontrolhorario,normasvestuario,detallesvestuario,formacioncasa,detallesformacion,pensionempresa,detallespension,relacionfamilia,detallesrelacion,seguroenfermedad,detallesseguro,vacaciones,detallesvacaciones,evaluacionderiesgo,detallesriesgo,evaluacionrealizada,detallesevaluacion,promocionlaboral,flexibilidad,Estardepie,Caminar,EstarSentado,Levantar,Acarrear,Empujar,Subir,Equilibrio,Encorvarse,Arrodillarse,ManipularManos,ManipularDestreza,Vision,Audicion,Adaptacion,Supervision,Jornada,Lugar,Moverse,Actividad,Temperatura,Ruido,Limpieza,Tareas,Espacio,Sexo,Uniforme,Palabras,Numeros,Transporte,Otros,Manos,Buenavision,Oido,Comunicacion,Pesos,Fuerza,Leer,UsarNumeros,Dinero,Hora,rapido,calidad,concentrarse,variastareas,buenequilibrio,andar,estarpie,sentado,escaleras,enfado,recordar,telefono,conducir,ordenador,deletrear,letra,opinion,apoyo,iniciativa,apariencia,higiene,cumplirhorario,detcumplirhorario,asistencia,detasistencia,comunicarse,detcomunicarse,conducta,detconducta,vestido,detvestido,interaccion,detinteraccion,motivacion,detmotivacion,flexible,detflexible,inicio,detinicio,equipo,detequipo,salud,detsalud,consistencia,detconsistencia,presion,detpresion) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [idproyectos,nombrePuesto,Descripcionpuesto,
            ControlHorario,
            detallescontrolhor,
            NormasVestuario,
            detallesvestuario,
            FormacionCasa,
            detallesFormacion,
            PensionEmpresa,
            detallePension,
            RelacionFamilia,
            detallesRelacion,
            SeguroEnfermedad,
            detallesSeguro,
            Vacaciones,
            detallesVacaciones,
            EvaluaciondeRiesgo,
            detallesRiesgo,
            EvaluacionRealizada,
            detallesRealizada,
            PromocionLaboral,
            Flexibilidad,
            Estardepie,
            Caminar,
            EstarSentado,
            Levantar,
            Acarrear,
            Empujar,
            Subir,
            Equilibrio,
            Encorvarse,
            Arrodillarse,
            ManipularManos,
            ManipularDestreza,
            Vision,
            Audicion,
            Adaptacion,
            Supervision,
            Jornada,
            Lugar,
            Moverse,
            Actividad,
            Temperatura,
            Ruido,
            Limpieza,
            Tareas,
            Espacio,
            Sexo,
            Uniforme,
            Palabras,
            Numeros,
            Transporte,
            Otros,
            Manos,
            BuenaVision,
            Oido,
            Comunicacion,
            Pesos,
            Fuerza,
            Leer,
            UsarNumeros,
            Dinero,
            Hora,
            Rapido,
            calidad,
            concentrarse,
            variastareas,
            buenequilibrio,
            andar,
            Estarpie,
            Sentado,
            Escaleras,
            enfado,
            recordar,
            telefono,
            conducir,
            ordenador,
            deletrear,
            letra,
            opinion,
            apoyo,
            iniciativa,
            apariencia,
            higiene,
            CumplirHorario,
            detCumplirHorario,
            Asistencia,
            detAsistencia,
            Comunicarse,
            detComunicarse,
            Conducta,
            detConducta,
            Vestido,
            detVestido,
            Interaccion,
            detInteraccion,
            Motivacion,
            detMotivacion,
            Flexible,
            detFlexible,
            Inicio,
            detInicio,
            Equipo,
            detEquipo,
            Salud,
            detSalud,
            Consistencia,
            detConsistencia,
            Presion,
            detPresion
            ],
        (err, result) => {
            console.log(err);
            console.log(result);
        });
});



app.post("/puestotrabajo-view", (req, res) => {
    const id = req.body.idproyectos

    db.query("SELECT * FROM puestotrabajos where idproyectos = ?", id,
        (err, result) => {
            res.send(result);
        });
})

app.post("/apt-view", (req, res) => {
    const id = req.body.idproyectos

    db.query("SELECT * FROM puestotrabajos where IdAPT = ?", id,
        (err, result) => {
            res.send(result);
        });
})




require('http').createServer(app).listen(PORT);

// app.listen(PORT, () => {
//     console.log(`El servidor esta corriendo en el puerto ${PORT}`);
// });
