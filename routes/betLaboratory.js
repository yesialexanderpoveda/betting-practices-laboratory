const express = require('express');
const controller = require('../controllers/betLaboratory')
const router = express.Router();

router.get('/api/laboratory', controller.getData)
module.exports = router;

/* Necesitamos las rutas con sus respectivos controllers para que el usuario pueda desarrollar
   un plan de apuesta:
   cada plan de apuesta es una nueva ruta que debe generar un cambio en el home que es donde
   se hace las respectivas apuestas.
   El usuario estara condicionado, a validar una apuesta en el historial al querer ver las
   estadisticas del segmento que apostara 
   Ademas se debe generar un historial para cada apuesta que haga el usuario independientemente
   si utiliza un plan de apuesta o no
   */

router.post('/api/laboratory', controller.postData)