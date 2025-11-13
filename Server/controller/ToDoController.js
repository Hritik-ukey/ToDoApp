import ToDoModel from '../models/ToDoModel.js';

export const getToDos = async (_req, res) => {
    const toDos = await ToDoModel.find();
    res.send(toDos);
};

export const saveToDos  = async (req, res) => {
  const { toDo } = req.body;    

    ToDoModel.create({ toDo })
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

export const updateToDos = async (req, res) => {
  const { id } = req.params;
  const { toDo } = req.body;
  
  ToDoModel.findByIdAndUpdate(id, { toDo })
    .then(() => {
      res.send("Updated Successfully....");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};


export const deleteToDos = async (req, res) => {
   const { id } = req.params;

  ToDoModel.findByIdAndDelete(id)
    .then(() => {
      res.send("Deleted Successfully....");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};