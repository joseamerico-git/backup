import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    
    cb(null, "public/upload/");

  },
  filename: function (req, file, cb) {
    const {productId} = req.body
    cb(null, `${file.originalname}`);
  }
})





const uploads = multer({
  storage: storage, 
  
  fileFilter: (req, file, cb) => {
    const extensaoImage = ['image/jpg', 'image/jpeg', 'image/png'].find(formatoAceito => formatoAceito == file.mimetype);
    
    if (extensaoImage) {
     return cb(null, true)
    }

    return cb(null, false)
  }
});

export default uploads;