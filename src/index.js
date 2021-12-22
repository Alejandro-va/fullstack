const express = require("express");
const morgan = require("morgan");
const cors = require("cors"); //para conectar back con front

const taskRoutes = require("./routes/tasks.routes");

const app = express();

app.use(cors()); //permite comuiniocar ambos servidores de manera simple
app.use(morgan("dev"));
app.use(express.json()); //ed esta forma el servidor va a entender que  la informacin  que va en el contenido del body es json

app.use(taskRoutes); //Importa las rutas(dsd el index)

app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});

app.listen(4000);
console.log("Server on port 4000");
