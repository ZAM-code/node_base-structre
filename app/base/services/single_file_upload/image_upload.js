// pakages
let path = require("path")
let multer = require("multer")


//Storage
var storage = multer.diskStorage({
    destination: function (req, file, cb) {

        // Uploads is the Upload_folder_name 
        return cb(null, "uploads/Logo")
    },
    filename: function (req, file, cb) {
        return cb(null, file.fieldname + "-" + file.originalname)
    }
})

//function 
// const maxSize = 1 * 1000 * 1000;
var upload = multer({
    storage: storage,
    // limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {
        // console.log("..........................." , file)
        // console.log("============================" , file.originalname)

        // Set the filetypes, it is optional 
        // var filetypes = /vnd.openxmlformats-officedocument.spreadsheetml.sheet/; 
        var mimetype = file.mimetype;

        var extname = path.extname(
            file.originalname).toLowerCase();



        // console.log("--------------------------" , extname)

        if (mimetype && extname) {
            return cb(null, true);
        }


        cb("Error: File upload only supports the "
            + "following filetypes - ");
    }

    // mypic is the name of file attribute 
}).single("logo");

module.exports = {upload}