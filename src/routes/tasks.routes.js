//END POINTS
/****************************************/
const { Router } = require("express"); //importo express
const {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks.controller"); //los controladores son las funciones de los las peticiones

const router = Router();

//MOSTRAR(LISTAR TODAS)
router.get("/tasks", getAllTasks);

//MOSTRAR(LISTAR UNA)
router.get("/tasks/10", getTask);

//CREAR
router.post("/tasks", createTask);

//BORRAR
router.delete("/tasks", deleteTask);

//ACTUALIZAR
router.put("/tasks", updateTask);

module.exports = router;
