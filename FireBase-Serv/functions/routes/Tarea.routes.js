const {Router} = require('express')
const router = Router();
const admin = require('firebase-admin');//Esta constante es la encargada de proporcionar la 

const db = admin.firestore(); 



router.get('/api/Tarea/:ref', async(req,res)=>{
    try {
        const doc = db.collection("Tarea").doc(req.params.ref);
        const item = await doc.get();
        response = {Id: item.id, Categoría: item.data().Categoría, FechaEntrega: item.data().FechaEntrega, FechaPublicación: item.data().FechaPublicación, Instrucciones: item.data().Instrucciones,
            NombreArchivo: item.data().NombreArchivo, NotaFinal: item.data().NotaFinal,
            Titulo: item.data().Titulo, Curso: item.data().Curso}
            return res.status(200).json(response);
    
    } catch (error) {
        console.log(error);
        return res.status(500).send(error)
        
    }
    });

    router.post("/api/Tarea/:par1/:par2/:par3/:par4/:par5/:par6/:par7", async(req,res)=>{
        try {        
            var nUusuario = {Categoría: req.params.par1, FechaEntrega: req.params.par2, FechaPublicación: req.params.par3, Instrucciones: req.params.par4,
                NombreArchivo: req.params.par5, NotaFinal: req.params.par6, Curso: req.params.par6}
    
            await db.collection("Tarea").doc().create(nUusuario)
            return res.status(204).json(); 
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }     
    });
//Cambiar Numero de Categoria
router.put("/api/Tarea/Categoría/:ref/:Categoría", async(req, res)=>{
    try {
      const document = db.collection("Tarea").doc(req.params.ref);
      await document.update({
        Categoría: req.params.Categoría,
      });
      return res.status(204).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});

//Cambiar fecha de entrega
router.put("/api/FechaEntrega/FechaEntrega/:ref/:FechaEntrega", async(req, res)=>{
    try {
      const document = db.collection("Tarea").doc(req.params.ref);
      await document.update({
        FechaEntrega: req.params.FechaEntrega,
      });
      return res.status(204).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});

//Cambiar fecha de FechaPublicación
router.put("/api/FechaPublicación/FechaPublicación/:ref/:FechaPublicación", async(req, res)=>{
    try {
      const document = db.collection("Tarea").doc(req.params.ref);
      await document.update({
        FechaPublicación: req.params.FechaPublicación,
      });
      return res.status(204).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});

//Cambiar fecha de Instrucciones
router.put("/api/Instrucciones/Instrucciones/:ref/:Instrucciones", async(req, res)=>{
    try {
      const document = db.collection("Tarea").doc(req.params.ref);
      await document.update({
        Instrucciones: req.params.Instrucciones,
      });
      return res.status(204).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});

//Cambiar fecha de Instrucciones
router.put("/api/NombreArchivo/NombreArchivo/:ref/:NombreArchivo", async(req, res)=>{
    try {
      const document = db.collection("Tarea").doc(req.params.ref);
      await document.update({
        NombreArchivo: req.params.NombreArchivo,
      });
      return res.status(204).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});

router.put("/api/NotaFinal/NotaFinal/:ref/:NotaFinal", async(req, res)=>{
    try {
      const document = db.collection("Tarea").doc(req.params.ref);
      await document.update({
        NotaFinal: req.params.NotaFinal,
      });
      return res.status(204).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});

//Cambiar Numero de Categoria
router.put("/api/Tarea/Curso/:ref/:Curso", async(req, res)=>{
    try {
      const document = db.collection("Tarea").doc(req.params.ref);
      await document.update({
        Categoría: req.params.Categoría,
      });
      return res.status(204).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});

router.delete("/api/Tarea/:ref", async(req, res)=>{
    try {
        const document = db.collection("Tarea").doc(req.params.ref);
        await document.delete();
        return res.status(200).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});

//Optener todas los perfiles de Tareas
router.get('/api/Tarea', async(req,res)=>{
    try {
        const query = db.collection("Tarea");
        const querySnapShot = await query.get()
        const docs = querySnapShot.docs;
        
        const response = docs.map((doc)=>({
            Id: doc.id,
            Categoría: doc.data().Categoría, FechaEntrega: doc.data().FechaEntrega, FechaPublicación: doc.data().FechaPublicación, Instrucciones: doc.data().Instrucciones,
            NombreArchivo: doc.data().NombreArchivo, NotaFinal: doc.data().NotaFinal, Curso: doc.data().Curso,
            
        }));
        return res.status(200).json(response);
    
    } catch (error) {
        console.log(error);
        return res.status(500).send(error)
        
    }
    });
module.exports = router