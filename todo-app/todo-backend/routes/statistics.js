const express = require("express");
const { getAsync } = require("../redis");
const { Todo } = require("../mongo");
const router = express.Router();

/* GET statistics */
router.get("/", async (req, res) => {
	const count = await getAsync("added_todos");

	if (count) {
		await client.set("added_todos", parseInt(count));
	}

	res.send({
		added_todos: 0,
	});
});

module.exports = router;
