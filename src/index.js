const express = require("express");
const morgan = require("morgan");

const taskRoutes = require("./routes/tasks.routes");

const app = express();

app.use(morgan("dev"));
app.use(express.json()); //ed esta forma el servidor va a entender que  la informacin  que va en el contenido del body es json

app.use(taskRoutes);

app.listen(4000);
console.log("Server on port 4000");
