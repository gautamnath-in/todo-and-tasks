# todo-and-tasks
## TODO and Task CRD Operations
_Used Libraries_
* Mongoose
* Express
* Dotenv

**Time Taken to Build**

Among the controllers::

* The _createTodoItem_ took me around 5 hrs to ensure that a unique ID generates each time the user add a new task. [Here I learned abt the `$set` operator]

* The _updateAnItem_ controller took me about 2.5 hrs to update a specific task.

* The _deleteTask_ controller took 3 hrs roughly to delete a particular task from the to-do item. [ Here I learned abt the `$pull` operator]

***

In Express JS::

I created the router to have a clean work environment segregating the Controllers (Bussiness Logic), the Router (Routing), and the App.
