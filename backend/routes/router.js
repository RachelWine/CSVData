const express = require('express')
const router = new express.Router()
const controller = require('../controllers/controller')
const upload = require('../middlewares/upload')

const routes = (app) => {
  router.post('/upload', upload.single('file'), controller.uploadCsvToDb)

  app.use('/', router)
}

module.exports = routes
