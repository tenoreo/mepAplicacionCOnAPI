const {Router} = require('express');
const router = Router();
const admin = require('firebase-admin');//Esta constante es la encargada de proporcionar la 

const db = admin.firestore(); 


router.get('/api/Cursos/:ref', async(req,res)=>{
    try {
        const doc = db.collection("Cursos").doc(req.params.ref);
        const item = await doc.get();
        response = {
            Id: item.id, 
            Nombre: item.data().Nombre, 
            NumeroCurso: item.data().NumeroCurso, 
            ProfesorDelCurso: item.data().ProfesorDelCurso}
            return res.status(200).json(response);
    
    } catch (error) {
        console.log(error);
        return res.status(500).send(error)
        
    }
    });

router.post("/api/Cursos/:par1/:par2/:par3", async(req,res)=>{
        try {        
            var nUusuario = {Nombre: req.params.par1, NumeroCurso: req.params.par2, ProfesorDelCurso: req.params.par3,}
    
            await db.collection("Cursos").doc().create(nUusuario)
            return res.status(204).json(); 
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }     
    });
//Cambiar Nomrbre del curso
router.put("/api/Cursos/nombre/:ref/:nombre", async(req, res)=>{
        try {
          const document = db.collection("Cursos").doc(req.params.ref);
          await document.update({
              Nombre: req.params.nombre,
          });
          return res.status(204).json();
        } catch (error) {
            return res.status(500).json();
            
        }
    });
//Cambiar curso profesor
router.put("/api/Cursos/NumeroCurso/:ref/:numeroCurso", async(req, res)=>{
        try {
          const document = db.collection("Cursos").doc(req.params.ref);
          await document.update({
            NumeroCurso: req.params.numeroCurso,
          });
          return res.status(204).json();
        } catch (error) {
            return res.status(500).json();
            
        }
    });
//Numero de profesor 
router.put("/api/Cursos/NumeroProfesor/:ref/:NumeroProfesor", async(req, res)=>{
        try {
          const document = db.collection("Cursos").doc(req.params.ref);
          await document.update({
            ProfesorDelCurso: req.params.NumeroProfesor,
          });
          return res.status(204).json();
        } catch (error) {
            return res.status(500).json();
            
        }
    });

//Eliminar Cursos
router.delete("/api/Cursos/:ref", async(req, res)=>{
    try {
        const document = db.collection("Cursos").doc(req.params.ref);
        await document.delete();
        return res.status(200).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});
//Optener todos los cursos
router.get('/api/Cursos', async(req,res)=>{
    try {
        const query = db.collection("Cursos");
        const querySnapShot = await query.get()
        const docs = querySnapShot.docs;
        
        const response = docs.map((doc)=>({
            Id: doc.id,
            NombreCurso: doc.data(),
        }));
        return res.status(200).json(response);
    
    } catch (error) {
        console.log(error);
        return res.status(500).send(error)
        
    }
    });

 module.exports = router