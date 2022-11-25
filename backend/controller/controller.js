const db = require('../config/database')
db.connect();

const Todomodel  = require('../model/todoSchema');

exports.home = (req, res) => {
    res.send('Welcome to Home Controller')
}

exports.otherpage = (req, res) => {
    res.send('Requested Page Not Yet Built')
}

exports.createTodo = async (req, res) => {
    const todoName = req.body;

    if (!todoName) {
        // res.prompt('Please Provide the Category')
        res.send('Please Provide the Category')
    }
    // console.log(todoName)
    const testIfUniqueTodo = await Todomodel.findOne(todoName);

    if (testIfUniqueTodo) {
        res.send('Category in Use, Pls try a different Keyword')
    }

    await Todomodel.create(todoName);
    res.status(200).send('Category Added');
}

exports.getTodos = async (req, res) => {
    const allTodos = await Todomodel.find();
    res.json({
        allTodos
    })
}

exports.updateTodo = async (req, res) => {
    const { todoId, todoName } = req.body;
    const todoItem = await Todomodel.findOne({_id:todoId});
    const renamedItem = todoItem?.todoName
    // console.log({ todoId }, { todoName })
    const updating = await Todomodel.findByIdAndUpdate({ _id:todoId }, { todoName });
    res.send(`${renamedItem} is updated to ${todoName}`)
}

exports.deleteTodo = async (req, res) => {
    await Todomodel.findByIdAndDelete(req.params.id);
    res.send('Item Deleted');
}
// exports.deleteTodo = async (req, res,next) => {
//     await Todomodel.findByIdAndDelete(req.params.id);
//     res.send('Item Deleted');
//     return next();
// }
exports.createTodoItem = async (req, res) => {
    const { todoId, todoItemNames } = req.body;
    if (!todoId || !todoItemNames) {
        res.send('Something is missing')
    }
    // const ifTodoExist = await Todomodel.findOne({ _id: todoId });
    // console.log(ifTodoExist.todoItemName[0])
    // ifTodoExist.todoItemName.childish.push(todoItemNames);
    // await ifTodoExist.save();
    // ifTodoExist.todoItemName.create({todoItemName})
    // console.log(mongoose.Types.ObjectId())
    const wow = await Todomodel.findOne({ _id: todoId });
    await wow.todoItemName.push({'task':todoItemNames})
    wow.save();
    res.send('Todo Item Added')

}

exports.getAllItems = async (req, res) => {
    const foundItems = await Todomodel.findById(req.params.id);
   res.json(foundItems.todoItemName)
}

exports.updateAnItem = async (req, res) => {
    // console.log(req.params.id)
    // console.log(req.body)
    //send {task:here}
    const result = await Todomodel.findOneAndUpdate({ "todoItemName._id": req.params.id }, { $set: { "todoItemName.$": req.body } });
    // $set operator replaces the value of a field with a specified value
    // updated item ID is also updated so can't see o/p
    res.send('Updated Successfully');
}

exports.deleteTask = async (req, res) => {
    // console.log(req.params)
    console.log(req.params.id)
    // await Todomodel.findByIdAndDelete({ "todoItemName._id": req.params.id});
    try {
        await Todomodel.findOneAndUpdate({ "todoItemName._id": req.params.id },{$pull: 
            {
            // "task": { _id: req.params.id },
            "todoItemName": {_id: req.params.id }
            }
          });
    } catch (error) {
        console.log(error)
    }
    res.send('Item Deleted Succesfully');
}