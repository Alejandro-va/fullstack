const pool = require("../db"); //conecto con la bd pq instale el modulo pg

//MOSTRAR(LISTAR TODAS)
const getAllTasks = async (req, res, next) => {
  //res.send("retrieven a list of tasks");
  //res.send("tareas");
  try {
    //throw new Error("ALGO ANDA MAL");
    const getAllTask = await pool.query("SELECT * FROM task");
    console.log(getAllTask);
    res.json(getAllTask.rows);
  } catch (error) {
    next(error);
  }
};

//MOSTRAR(LISTAR UNA)
const getTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM task WHERE id = $1", [id]);

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Task no found" });
    return res.json(result.rows[0]);
  } catch (error) {
    return next(error);
  }
};

//CREAR (para q funcione cree esto en el index "app.use(express.json()); ")
const createTask = async (req, res, next) => {
  //const taskBody = req.body;
  //res.send("creating a task");
  const { title, description } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
    console.log(result);
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

//BORRAR
const deleteTask = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await pool.query("DELETE FROM task WHERE id = $1", [id]);
    if (result.length === 0)
      return res.status(404).json({ message: "Task not found" });
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

//ACTUALIZAR
const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const result = await pool.query(
      "UPDATE task SET title=$1, description=$2 WHERE id=$3 RETURNING *",
      [title, description, id]
    );
    console.log(id, title, description);
    //res.send("updating a task");
    if (result.rows.length === 0)
      return res.status(404).json({ message: "Task not found" });
    //return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllTasks, getTask, createTask, deleteTask, updateTask };
