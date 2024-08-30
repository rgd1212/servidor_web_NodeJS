const express = require('express');
const patch = require('path');

const startServer = (options) => {
  const { port, public_path = 'public' } = options
  console.log(`el puerto desde server.js: ${port}`);
  console.log(`el path desde server.js: ${public_path}`);

  const app = express();
  // Esto es un middlewares para poder usar se usa la palabra "use" (express)
  app.use(express.static(public_path)) //contenido estatico que ponemos disponible
  
  app.get('*', (req, res) => {
    const indexPath = path.join(__dirname + `../../${public_path}/index.html`);
    res.sendFile(indexPath);
    console.log('se pudo');
  })
  
  app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
  });

}

module.exports = {
  startServer
}