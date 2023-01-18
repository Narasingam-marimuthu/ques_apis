const fs = require("fs");

module.exports = {
  imageLoop: function (req) {
    var imageName;
    req.image.map((image) => {
      // console.log(image.originalname, "image");
      imageName = image.originalname;
    });
    return imageName;
  },
};
