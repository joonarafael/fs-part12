const express = require("express");
const { getAsync, setAsync } = require("../redis");
const { Todo } = require("../mongo");
const router = express.Router();

/* GET todos listing. */
router.get("/", async (_, res) => {
	const todos = await Todo.find({});
	res.send(todos);
});

/* POST todo to listing. */
router.post("/", async (req, res) => {
	const count = await getAsync("added_todos");

	if (count) {
		setAsync("added_todos", parseInt(count) + 1);
	} else {
		setAsync("added_todos", 1);
	}

	const todo = await Todo.create({
		text: req.body.text,
		done: false,
	});
	res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
	const { id } = req.params;
	req.todo = await Todo.findById(id);
	if (!req.todo) return res.sendStatus(404);

	next();
};

/* DELETE todo. */
singleRouter.delete("/", async (req, res) => {
	await req.todo.delete();
	res.sendStatus(200);
});

/* GET todo. */
singleRouter.get("/", async (req, res) => {
	res.send(req.todo);
});

/* PUT todo. */
singleRouter.put("/", async (req, res) => {
	console.log("called with body", req.body);

	req.todo.done = req.body.done;
	req.todo.text = req.body.text;
	await req.todo.save();
	res.send(req.todo);
});

router.use("/:id", findByIdMiddleware, singleRouter);

module.exports = router;
