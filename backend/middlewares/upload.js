const multer = require('multer')

const csvFilter = (req, file, cb) => {
  if (file.mimetype.includes('application/vnd.ms-excel')) {
    cb(null, true)
  } else {
    cb(new Error(true / false))
  }
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/resources/')
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`)
  }
})

const uploadFile = multer({ storage: storage, fileFilter: csvFilter })
module.exports = uploadFile
