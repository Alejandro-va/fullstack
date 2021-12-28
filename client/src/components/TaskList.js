import React, { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate(); //para ir a editar, envio el id taskform

  //Listar
  const loadTask = async () => {
    const response = await fetch("http://localhost:4000/tasks");
    const data = await response.json();
    //console.log(data);
    setTasks(data);
  };

  //Borrar
  const handleDlete = async (id) => {
    try {
      //elimino en backend
      await fetch(`http://localhost:4000/tasks/${id}`, {
        method: "DELETE",
      });
      //elimino en el frontend
      setTasks(
        tasks.filter(
          (el) => el.id !== id
        ) /*manten todas menos la del id q me estan pasando*/
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTask();
  }, []);

  return (
    <>
      <h1>TaskList</h1>
      {tasks.map((el) => (
        <Card style={{ marginBottom: ".7rem" }} key={el.id}>
          <CardContent
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <Typography>{el.title}</Typography>
              <Typography>{el.description}</Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="inherit"
                onClick={() => navigate(`/tasks/${el.id}/edit`)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="warning"
                onClick={() => handleDlete(el.id)}
                style={{ margin: ".5rem" }}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default TaskList;
