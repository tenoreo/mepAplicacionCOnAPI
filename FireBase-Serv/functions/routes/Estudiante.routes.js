const {Router} = require('express')
const router = Router();
const admin = require('firebase-admin');//Esta constante es la encargada de proporcionar la 



const db = admin.firestore();

router.get('/api/Estudiante/:ref', async(req,res)=>{
    try {
        const doc = db.collection("Estudiante").doc(req.params.ref);
        const item = await doc.get();
        response = {Id: item.id, Cedula: item.data().cedula, Nombre: item.data().Nombre, Apellido1: item.data().Apellido1, Apellido2: item.data().Apellido2, 
            Grado: item.data().Grado, Email: item.data().Email}
            return res.status(200).json(response);
    
    } catch (error) {
        console.log(error);
        return res.status(500).send(error)
        
    }
    });
//Busqueda por ceduala
router.get('/api/Estudiante/est/:cedula', async(req,res)=>{
    try {
        
        const profes = db.collection("Estudiante");
        
        const query = profes.where("cedula", "==", ""+req.params.cedula+"");
        const querySnapShot = await query.get();
        const docs = querySnapShot.docs;
    
        const response = docs.map((doc)=>({
            Id: doc.id,
            Estudiante: doc.data(),
        }));
        return res.status(200).json(response[0]);

    
    } catch (error) {
        console.log(error);
        return res.status(500).send(error)
        
    }
});
router.post("/api/Estudiante/:par1/:par2/:par3/:par4/:par5/:par6", async(req,res)=>{
    try {  
        
        
        const profes = db.collection("Estudiante");
        
        const query = profes.where("cedula", "==", ""+req.params.par1+"");
        const querySnapShot = await query.get();
        const docs = querySnapShot.docs;
    
        const Estudiantes = docs.map((doc)=>({
            Id: doc.id,
            Estudiante: doc.data(),
        }));

        if (Estudiantes.length == 0){
            var nUusuario = {cedula: req.params.par1, Nombre: req.params.par2, Grado: req.params.par3, 
                Email: req.params.par4, Apellido2: req.params.par5, Apellido1: req.params.par6,}

            await db.collection("Estudiante").doc().create(nUusuario)
            return res.status(204).json(); 
        }else{
            return res.status(450).json();
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }     
});
//Cambiar nombre
router.put("/api/Estudiante/nombre/:ref/:nombre", async(req, res)=>{
    try {
      const document = db.collection("Estudiante").doc(req.params.ref);
      await document.update({
          Nombre: req.params.nombre,
      });
      return res.status(204).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});
//Cambiar Apellido1
router.put("/api/Estudiante/Apellido1/:ref/:Apellido1", async(req, res)=>{
    try {
      const document = db.collection("Estudiante").doc(req.params.ref);
      await document.update({
        Apellido1: req.params.Apellido1,
      });
      return res.status(204).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});
//Cambiar Apellido2
router.put("/api/Estudiante/Apellido2/:ref/:Apellido2", async(req, res)=>{
    try {
      const document = db.collection("Estudiante").doc(req.params.ref);
      await document.update({
        Apellido2: req.params.Apellido2,
      });
      return res.status(204).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});
//Cambiar cedula 
router.put("/api/Estudiante/cedula/:ref/:cedula", async(req, res)=>{
    try {
      const document = db.collection("Estudiante").doc(req.params.ref);
      await document.update({
          cedula: req.params.cedula,
      });
      return res.status(204).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});
//Cambiar email
router.put("/api/Estudiante/email/:ref/:email", async(req, res)=>{
    try {
      const document = db.collection("Estudiante").doc(req.params.ref);
      await document.update({
          Email: req.params.email,
      });
      return res.status(204).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});
//Cambiar grado 
router.put("/api/Estudiante/grado/:ref/:grado", async(req, res)=>{
    try {
      const document = db.collection("Estudiante").doc(req.params.ref);
      await document.update({
          Grado: req.params.grado,
      });
      return res.status(204).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});
//Eliminar estudiante
router.delete("/api/Estudiante/:ref", async(req, res)=>{
    try {
        const document = db.collection("Estudiante").doc(req.params.ref);
        await document.delete();
        return res.status(200).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});

//Optener todos los estudiantes
router.get('/api/Estudiante', async(req,res)=>{
    try {
        const query = db.collection("Estudiante");
        const querySnapShot = await query.get()
        const docs = querySnapShot.docs;
        
        const response = docs.map((doc)=>({
            Id: doc.id,
            Nombre: doc.data().Nombre,
        }));
        return res.status(200).json(response);
    
    } catch (error) {
        console.log(error);
        return res.status(500).send(error)
        
    }
    });

module.exports = router