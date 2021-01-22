const router = require("express").Router();
const contactController = require("./contactController");

router.get("/", (req, res) => {
  res.json({
    status: "oke",
    message: "berhasil geng",
  });
});

router
  .route("/contact")
  .get(contactController.index)
  .post(contactController.new);

router
  .route("/contact/:contact_id")
  .get(contactController.view)
  .put(contactController.update)
  .delete(contactController.delete);
// .patch(contactController.update)

router.route("contact/name").get(contactController.viewname);
module.exports = router;
