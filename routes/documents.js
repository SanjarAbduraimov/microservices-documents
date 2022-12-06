var express = require("express");
var router = express.Router();
var documentsController = require("../controllers/documents");

/*
 * GET
 */
router.get("/", documentsController.list);

/*
 * GET
 */
router.get("/:id", documentsController.show);

/*
 * POST
 */
router.post("/", documentsController.create);

/*
 * PUT
 */
router.put("/:id", documentsController.update);

/*
 * DELETE
 */
router.delete("/:id", documentsController.remove);

module.exports = router;
