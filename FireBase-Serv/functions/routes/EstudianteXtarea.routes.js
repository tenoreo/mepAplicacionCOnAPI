const {Router} = require('express')
const router = Router();
const admin = require('firebase-admin');//Esta constante es la encargada de proporcionar la 

const db = admin.firestore(); 


router.get('/api/EstudianteXtarea/:ref', async(req,res)=>{
    try {
        const doc = db.collection("EstudianteXtarea").doc(req.params.ref);
        const item = await doc.get();
        Identificacion = item.data().idEstudiante;
        CodigoTarea = item.data().idTarea;

        const EstudianteDoc = db.collection("Estudiante").doc(""+Identificacion+""); 
        const EstudianteInfo = await EstudianteDoc.get();
        console.log(Identificacion)
        
        const TareaDoc = db.collection("Tarea").doc(""+CodigoTarea+""); 
        const TareaInfo = await TareaDoc.get();
        response = {Id: item.id, IdEstudiante: item.data().idEstudiante, IdTarea: item.data().idTarea, Estudiante: EstudianteInfo.data(), Tarea: TareaInfo.data()}
            return res.status(200).json(response);
    
    } catch (error) {
        console.log(error);
        return res.status(500).send(error)
        
    }
    });
//
router.post("/api/EstudianteXtarea/:par1/:par2", async(req,res)=>{
        try {        
            var nUusuario = {idEstudiante: req.params.par1, idTarea: req.params.par2,}
    
            await db.collection("EstudianteXtarea").doc().create(nUusuario)
            return res.status(204).json(); 
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }     
    });

    //Cambiar Numero de idEstudiante
router.put("/api/EstudianteXtarea/nombre/:ref/:idEstudiante", async(req, res)=>{
    try {
      const document = db.collection("EstudianteXtarea").doc(req.params.ref);
      await document.update({
        idEstudiante: req.params.idEstudiante,
      });
      return res.status(204).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});

//Cambiar Numero de idEstudiante
router.put("/api/EstudianteXtarea/curso/:ref/:idTarea", async(req, res)=>{
    try {
      const document = db.collection("EstudianteXtarea").doc(req.params.ref);
      await document.update({
        idTarea: req.params.idTarea,
      });
      return res.status(204).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});

//Eliminar Estudiante de un curso
router.delete("/api/EstudianteXtarea/:ref", async(req, res)=>{
    try {
        const document = db.collection("EstudianteXtarea").doc(req.params.ref);
        await document.delete();
        return res.status(200).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});


//Optener todos los estudiantes
router.get('/api/EstudianteXtarea', async(req,res)=>{
    try {
        const query = db.collection("EstudianteXtarea");
        const querySnapShot = await query.get()
        const docs = querySnapShot.docs;
        
        const response = docs.map((doc)=>({
            Id: doc.id,
            IdEstudiante: doc.data().idEstudiante,
            IdTarea: doc.data().idTarea
            ,
            
        }));
 
       var listaElementos = [];
        for (x of response) {
            Identificacion = x.IdEstudiante;
            Identificacion_Tarea = x.IdTarea;

            var EstudianteDoc = db.collection("Estudiante").doc(""+Identificacion+""); 
            var EstudianteInfo = await EstudianteDoc.get();
            var EstudianteData = EstudianteInfo.data();

            var TareaDoc = db.collection("Tarea").doc(""+Identificacion_Tarea+"");  
            var TareaInfo = await TareaDoc.get();
            var TareaData = TareaInfo.data();
            resPonder = {ID: x.Id, IdEstudiante: x.IdEstudiante, IdTarea: x.IdTarea, TareaData, EstudianteData};
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