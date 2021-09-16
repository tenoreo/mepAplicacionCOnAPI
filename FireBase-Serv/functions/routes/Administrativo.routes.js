const {Router} = require('express')
const router = Router();
const admin = require('firebase-admin');//Esta constante es la encargada de proporcionar la 

const db = admin.firestore(); 

router.get('/api/Administrativo/:ref', async(req,res)=>{
    try {
        const doc = db.collection("Administrativo").doc(req.params.ref);
        const item = await doc.get();
        response = {Id: item.id, Contraseña: item.data().Contraseña, Correo: item.data().Correo}
            return res.status(200).json(response);
    
    } catch (error) {
        console.log(error);
        return res.status(500).send(error)
        
    }
    });

router.post("/api/Administrativo/:par1/:par2", async(req,res)=>{
        try {        
            var nUusuario = {Contraseña: req.params.par1, Correo: req.params.par2,}
    
            await db.collection("Administrativo").doc().create(nUusuario)
            return res.status(204).json(); 
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }     
    });
//Cambiar Numero de contraseña
router.put("/api/Administrativo/nombre/:ref/:Contraseña", async(req, res)=>{
    try {
      const document = db.collection("Administrativo").doc(req.params.ref);
      await document.update({
        Contraseña: req.params.Contraseña,
      });
      return res.status(204).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});

//Cambiar Numero de contraseña
router.put("/api/Administrativo/nombre/:ref/:Correo", async(req, res)=>{
    try {
      const document = db.collection("Administrativo").doc(req.params.ref);
      await document.update({
        Correo: req.params.Correo,
      });
      return res.status(204).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});

//Eliminar Profesor
router.delete("/api/Administrativo/:ref", async(req, res)=>{
    try {
        const document = db.collection("Administrativo").doc(req.params.ref);
        await document.delete();
        return res.status(200).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});

//Optener todas los perfiles de administradores
router.get('/api/Administrativo', async(req,res)=>{
        try {
            const query = db.collection("Administrativo");
            const querySnapShot = await query.get()
            const docs = querySnapShot.docs;
            
            const response = docs.map((doc)=>({
                Id: doc.id,
                Contraseña: doc.data().Contraseña,
                Correo: doc.data().Correo
                ,
            }));
            return res.status(200).json(response);
        
        } catch (error) {
            console.log(error);
            return res.status(500).send(error)
            
        }
        });
    
    module.exports = router