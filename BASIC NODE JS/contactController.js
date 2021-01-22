const Contact = require("./contactModel");
// menampilkan read
exports.index = (req, res) => {
  Contact.get((err, data) => {
    if (err) {
      res.json({
        status: "Ops error",
        message: err,
      });
    }
    res.json({
      status: "succes",
      message: "yeah berhasil",
      data: data,
    });
  });
};

exports.new = (req, res) => {
  const contact = new Contact();
  contact.name = req.body.name ? req.body.name : contact.name;
  contact.gender = req.body.gender;
  contact.email = req.body.email;
  contact.phone = req.body.phone;

  contact.save((err) => {
    if (err) {
      res.json({
        message: err,
      });
    }
    res.json({
      message: "data successfully",
      data: data,
    });
  });
};

exports.view = (req, res) => {
  Contact.findById(req.params.contact_id, (err, contact) => {
    if (err) res.send(err);
    res.json({
      message: "successs",
      data: contact,
    });
  });
};

exports.update = (req, res) => {
  Contact.findById(req.params.contact_id, (err, contact) => {
    if (err) res.send(err);

    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

    contact.save((err) => {
      res.json(err);
      res.json({
        message: "berhasil di update",
        data: contact,
      });
    });
  });
};

exports.delete = (req, res) => {
  Contact.remove({ _id: req.params.contact_id }, (err, contact) => {
    if (err) res.json(err);
    res.json({
      status: 200,
      message: "contact delete",
      data: contact,
    });
  });
};

exports.viewname = (req, res) => {
  Contact.findOne({ name: req.params.name }, function (err, contact) {
    if (err) res.json(err);
    res.json({
      status: 200,
      message: "contact view",
      data: contact,
    });
  });
};
