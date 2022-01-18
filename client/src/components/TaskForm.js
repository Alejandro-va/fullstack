import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; //redirecciono

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false); //para comprobar de donde viene el form

  const navigate = useNavigate(); //redirecciono cuandio creo o actualizo
  const params = useParams(); //recibe el id de tasklist

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(editing, "como");
    //si existe el editing actualizo los datos, sino los guardo por primera vez
    if (editing) {
      //actualiza
      await fetch(`http://localhost:4000/tasks/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });
    } else {
      //guarda
      await fetch("http://localhost:4000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      });
    }

    setLoading(false);
    //redirecciono
    navigate("/");
  };

  //EDITAR (d aki pa bajo edito)
  const loadTask = async (id) => {
    const res = await fetch(`http://localhost:4000/tasks/${id}`);
    const data = await res.json();
    //console.log(data);
    setTask({ title: data.title, description: data.description });
    setEditing(true);
    console.log(editing, "verdadero");
  };

  useEffect(() => {
    //si existe el parametro id
    if (params.id) {
      loadTask(params.id);
    }
    //console.log(params.id);
    //console.log(editing);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card sx={{ mt: 5 }} style={{ background: "#1e272e", padding: "1rem" }}>
          <Typography variant="5" textAlign="center" color="white">
            {editing ? "Edit Task" : "Create Task"}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Write your title"
                name="title"
                value={
                  task.title
                } /* la propiedad value n es necesaria para guardar, la agregue para q el formulario en edicion cargue */
                onChange={handleChange}
                sx={{ display: "block", margin: ".5rem 0" }}
                inputProps={{ style: { color: "#eee" } }}
                InputLabelProps={{ style: { color: "#eee" } }}
              />
              <TextField
                variant="filled"
                label="Write your description"
                name="description"
                value={
                  task.description
                } /* la propiedad value n es necesaria para guardar, la agregue para q el formulario en edicion cargue */
                onChange={handleChange}
                multiline
                rows={4}
                sx={{ display: "block", margin: ".5rem 0" }}
                inputProps={{ style: { color: "#eee" } }}
                InputLabelProps={{ style: { color: "#eee" } }}
              />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!task.title || !task.description}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  "Save"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TaskForm;
