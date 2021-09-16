const {Router} = require('express')
const router = Router();
const admin = require('firebase-admin');//Esta constante es la encargada de proporcionar la 

const db = admin.firestore(); 


router.get('/api/EvaluacionEstudianteXProfesor/:ref', async(req,res)=>{
    try {
        const doc = db.collection("EvaluacionEstudianteXProfesor").doc(req.params.ref);
        const item = await doc.get();
        Identificacion = item.data().idEstudiante;
        CodigoProfesor = item.data().idProfesor;

        const EstudianteDoc = db.collection("Estudiante").doc(""+Identificacion+""); 
        const EstudianteInfo = await EstudianteDoc.get();
        console.log(Identificacion)
        
        const ProfesorDoc = db.collection("Profesor").doc(""+CodigoProfesor+""); 
        const ProfesorInfo = await ProfesorDoc.get();
        response = {Id: item.id, IdEstudiante: item.data().idEstudiante, CalificaciónOtorgada: item.data().Calificación, IdProfesor: item.data().idProfesor, Estudiante: EstudianteInfo.data(), Profesor: ProfesorInfo.data()}
            return res.status(200).json(response);
    
    } catch (error) {
        console.log(error);
        return res.status(500).send(error)
        
    }
    });



//Ingresar calificacion del profesor
router.post("/api/EvaluacionEstudianteXProfesor/:par1/:par2/:par3", async(req,res)=>{
        try {        
            var nUusuario = {idEstudiante: req.params.par1, idProfesor: req.params.par2, Calificacion: req.params.par3}
            await db.collection("EvaluacionEstudianteXProfesor").doc().create(nUusuario)

           
            const profes = db.collection("EvaluacionEstudianteXProfesor");

            const query = profes.where("idProfesor", "==", ""+req.params.par2+"");
            const querySnapShot = await query.get()
            const docs = querySnapShot.docs;
            
            const response = docs.map((doc)=>({
                Id: doc.id,
                Calific: doc.data().Calificacion
                ,
            }));
            //Revisar apartir de aqui arriba 
            var totalElementos = 0;
            var totalCalificaciones = 0; 
            for (x of response) {
                console.log(x.Calific);
                totalCalificaciones += Number(x.Calific);
                totalElementos += 1;
            }
            
            //
            calificacionRes = totalCalificaciones / totalElementos;
            //guardar la nota en el profe
            const document = db.collection("Profesor").doc(req.params.par2);
            await document.update({
              Calificación: (""+calificacionRes+""),
            });

            return res.status(204).json(); 
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }     
    });

//optener todos los profes a los cuales el estudiante a evaluado(par1 = idEstudiante)

router.get("/api/EvaluacionEstudianteXProfesor/buscarProfes/:par1", async(req,res)=>{
try{
    const profes = db.collection("EvaluacionEstudianteXProfesor");

    const query = profes.where("idEstudiante", "==", ""+req.params.par1+"");
    const querySnapShot = await query.get()
    const docs = querySnapShot.docs;
    
    const response = docs.map((doc)=>({
        Id: doc.id,
        Calific: doc.data().Calificacion,
        IdEstudiante: doc.data().idEstudiante,
        IdProfesor: doc.data().idProfesor
        ,
    }));
    var listaElementos = [];
    for (x of response) {
        console.log(x.Calific);

        const ProfesorDoc = db.collection("Profesor").doc(""+x.IdProfesor+""); 
        const ProfesorInfo = await ProfesorDoc.get();
        respuesta = {Id: x.Id, IdEstudiante: x.IdEstudiante, CalificaciónOtorgada: x.Calific, IdProfesor: x.IdProfesor, Profesor: ProfesorInfo.data()};
        
        listaElementos.push(respuesta);
    }
    return res.status(200).json(listaElementos); 
} catch (error) {
    console.log(error);
    return res.status(500).send(error);
}     
});
module.exports = router