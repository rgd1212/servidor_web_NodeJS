const { envs } = require('./config/env');
const { startServer } = require('./server/server');

const main = () => {
  // console.log('Aqui comenzaremos el servidor');
  // console.log(envs);
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH
  })
}
// funcion auto convocada va al final por que js va de arriba hacia abajo
// auto convocada porque va dentro de parenstesis y al final lleva otros ()
(async () => {

  main();

})();

