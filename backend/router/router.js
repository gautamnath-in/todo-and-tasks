const express = require('express');
const router = express.Router();

const { home, otherpage, createTodo, getTodos, updateTodo, deleteTodo, createTodoItem,getAllItems,updateAnItem,deleteTask } = require('../controller/controller');

router.get('/', home);
// router.get('/*', otherpage);
router.post('/create-todo', createTodo);
router.get('/all-todos', getTodos);
router.put('/update-todo-name', updateTodo);
router.delete('/delete-todo/:id', deleteTodo);
// router.use('/delete-todo/:id', getTodos,deleteTodo);
router.post('/add-items', createTodoItem);
router.get('/get-all-items/:id', getAllItems);
router.put('/update-todo-item/:id/todoItemName/:id', updateAnItem);
router.delete('/delete-task/:id/todoItemName/:id', deleteTask);
// router.delete('/delete-task/:id', deleteTask);
module.exports = router;