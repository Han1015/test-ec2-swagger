var query = require("./src/query");

const initializeEndpoint = (app) => {
    /**
    * @swagger
    * /tasks:
    *   get:
    *     description: Returns all tasks
    *     produces:
    *      - application/json
    *     responses:
    *       200:
    *         description: users
    *         schema:
    *           type: array
    *           items:
    */
    app.get("/tasks", query.getTasks);
    app.post("/task", query.createTask);
    app.get("/task/:taskId", query.getTaskById);
    app.delete("/task/:taskId", query.deleteTaskById);
    app.put("/task/:taskId", query.updateTaskById);
}

module.exports = initializeEndpoint;