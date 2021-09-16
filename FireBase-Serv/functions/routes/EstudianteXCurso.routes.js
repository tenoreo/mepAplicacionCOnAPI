const {Router} = require('express')
const router = Router();
const admin = require('firebase-admin');//Esta constante es la encargada de proporcionar la 

const db = admin.firestore(); 



router.get('/api/EstudianteXCurso/:ref', async(req,res)=>{
    try {
        const doc = db.collection("EstudianteXCurso").doc(req.params.ref);
        const item = await doc.get();
        Identificacion = item.data().idEstudiante;
        CodigoMateria = item.data().idCurso;

        const EstudianteDoc = db.collection("Estudiante").doc(""+Identificacion+""); 
        const EstudianteInfo = await EstudianteDoc.get();

        
        const TareaDoc = db.collection("Cursos").doc(""+CodigoMateria+""); 
        const TareaInfo = await TareaDoc.get();
        response = {Id: item.id, IdEstudiante: item.data().idEstudiante, IdCurso: item.data().idCurso, Estudiante: EstudianteInfo.data(), Materia: TareaInfo.data()}
            return res.status(200).json(response);
    
    } catch (error) {
        console.log(error);
        return res.status(500).send(error)
        
    }
    });
//
router.post("/api/EstudianteXCurso/:par1/:par2", async(req,res)=>{
        try {        
            var nUusuario = {idEstudiante: req.params.par1, idMateria: req.params.par2,}
    
            await db.collection("EstudianteXCurso").doc().create(nUusuario)
            return res.status(204).json(); 
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }     
    });

//Cambiar Numero de idEstudiante
router.put("/api/EstudianteXCurso/nombre/:ref/:idEstudiante", async(req, res)=>{
    try {
      const document = db.collection("EstudianteXCurso").doc(req.params.ref);
      await document.update({
        idEstudiante: req.params.idEstudiante,
      });
      return res.status(204).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});

//Cambiar Numero de idEstudiante
router.put("/api/EstudianteXCurso/curso/:ref/:idCurso", async(req, res)=>{
    try {
      const document = db.collection("EstudianteXCurso").doc(req.params.ref);
      await document.update({
        idCurso: req.params.idCurso,
      });
      return res.status(204).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});

//Eliminar Estudiante de un curso
router.delete("/api/EstudianteXCurso/:ref", async(req, res)=>{
    try {
        const document = db.collection("EstudianteXCurso").doc(req.params.ref);
        await document.delete();
        return res.status(200).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});
//Optener todos los estudiantes
router.get('/api/EstudianteXCurso', async(req,res)=>{
    try {
        const query = db.collection("EstudianteXCurso");
        const querySnapShot = await query.get()
        const docs = querySnapShot.docs;
        
        const response = docs.map((doc)=>({
            Id: doc.id,
            IdEstudiante: doc.data().idEstudiante,
            IdCurso: doc.data().idCurso
            ,
            
        }));
 
       var listaElementos = [];
        for (x of response) {
            Identificacion = x.IdEstudiante;
            CodigoMateria = x.IdCurso;

            var EstudianteDoc = db.collection("Estudiante").doc(""+Identificacion+""); 
            var EstudianteInfo = await EstudianteDoc.get();
            var EstudianteData = EstudianteInfo.data();

            var TareaDoc = db.collection("Cursos").doc(""+CodigoMateria+"");  
            var TareaInfo = await TareaDoc.get();
            var CursoData = TareaInfo.data();
            resPonder = {ID: x.Id, IdEstudiante: x.IdEstudiante, IdCurso: x.IdCurso, CursoData, EstudianteData};
            listaElementos.push(resPonder);
          }
          return res.status(200).json(listaElementos);
          //return res.status(200).json(resPonder);
        //return res.status(200).json(response);
    
    } catch (error) {
        console.log(error);
        return res.status(500).send(error)
        
    }
    });

module.exports = router


