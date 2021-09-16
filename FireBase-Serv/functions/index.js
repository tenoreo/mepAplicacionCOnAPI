const functions = require("firebase-functions");
const admin = require('firebase-admin');//Esta constante es la encargada de proporcionar la 
const express = require('express');

const app = express();

admin.initializeApp({
    credential: admin.credential.cert('./permissions.json')
  }); 


//const db = admin.firestore();

app.get('/hello-world',(req,res)=>{
    return res.status(200).json({message:'Hellow zawardo'})
});
//Ejemplo de como realizar un post de productos
app.post("/api/products", async(req,res)=>{
    try {
        await db.collection("products").doc("/"+req.body.id+"/")
        .create({name: req.body.name})
        return res.status(204).json(); 
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }     
});
//Post Users 
app.post("/api/Usuarios", async(req,res)=>{
    try {
        await db.collection("Usuarios").doc()
        .create({name: req.body.name})
        return res.status(204).json(); 
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }     
});

app.get('/api/products/:product_id', async(req,res)=>{
try {
    const doc = db.collection("products").doc(req.params.product_id);
    const item = await doc.get()
        const response = item.data()
        return res.status(200).json(response);

} catch (error) {
    console.log(error);
    return res.status(500).send(error)
    
}
});



app.delete("/api/products/:product_id", async(req, res)=>{
    try {
        const document = db.collection("products").doc(req.params.product_id);
        await document.delete();
        return res.status(200).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});

app.put("/api/products/:product_id", async(req, res)=>{
    try {
      const document = db.collection("products").doc(req.params.product_id);
      await document.update({
          name: req.body.name,
      });
      return res.status(200).json();
    } catch (error) {
        return res.status(500).json();
        
    }
});
app.use(require('./routes/EstudianteXtarea.routes'))
app.use(require('./routes/Tarea.routes'))
app.use(require('./routes/Administrativo.routes'))
app.use(require('./routes/EstudianteXCurso.routes'))
app.use(require('./routes/Cursos.routes'))
app.use(require('./routes/Estudiante.routes'))
app.use(require('./routes/Profesor.routes'))
app.use(require('./routes/EvaluacionEstudianteXProfesor.routes'))
exports.app = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
