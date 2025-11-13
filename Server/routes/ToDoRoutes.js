import { Router } from "express";   
import { getToDos, saveToDos, updateToDos, deleteToDos } from "../controller/ToDoController.js";

const router = Router();    

router.get('/getToDos', getToDos);
router.post('/saveToDos', saveToDos);
router.put('/update/:id', updateToDos);
router.delete('/delete/:id', deleteToDos);

export default router;          