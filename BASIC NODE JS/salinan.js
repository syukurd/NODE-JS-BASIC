const Data = require("./modelContact");
exports.index = (req, res) => {
  Data.get((err, data) => {
    if (err) {
      res.json({
        status: "error",
        message: "woy data kamu errror",
      });
    }
    res.json({
      status: "oke",
      message: "jelas berhasil",
      data: data,
    });
  });
};

exports.new = (req, res) => {
  const data = new Data();
  data.name = req.body.name ? req.body.name : data.name;
  data.gender = req.body.gender;
  data.email = req.body.email;
  data.phone = req.body.phone;

  data.save((err) => {
    if (
      (err) => {
        res.json({
          status: err,
          message: "iya data kamu error",
        });
      }
    )
      res.json({
        status: "succes",
        message: "yah data kammu sukses",
      });
  });
};

exports.view = (req, res) => {
  Data.findById(req.params.data_id, (err, data) => {
    if (err) res.send(err);
    res.json({
      status: "onkeydown",
      message: "bagus",
      data: data,
    });
  });
};
