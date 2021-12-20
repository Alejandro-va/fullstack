//MOSTRAR(LISTAR TODAS)
const getAllTasks = async (req, res) => {
  res.send("retrieven a list of tasks");
};

//MOSTRAR(LISTAR UNA)
const getTask = (req, res) => {
  res.send("retrieving a single task");
};

//CREAR (para q funcione cree esto en el index "app.use(express.json()); ")
const createTask = (req, res) => {
  //const taskBody = req.body;
  //console.log(taskBody);

  const { title, description } = req.body;
  console.log(title, description);
  res.send("creating a task");
};

//BORRAR
const deleteTask = (req, res) => {
  res.send("deleting a task");
};

//ACTUALIZAR
const updateTask = (req, res) => {
  res.send("updating a task");
};

module.exports = { getAllTasks, getTask, createTask, deleteTask, updateTask };
