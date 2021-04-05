const express = require('express')
const router = new express.Router()
const controller = require('../controllers/controller')
const upload = require('../middlewares/upload')

const routes = (app) => {
  router.post('/upload', upload.single('file'), controller.uploadCsvToDb)

  app.get('/options', async (req, res) => {
    controller.getAllCountrysFromDb()
      .then(response => {
        res.status(200).json(response)
      })
      .catch(error => {
        res.status(500).send(error)
      })
  })

  app.get('/browse/:country', async (req, res) => {
    controller.getDataOfCountry(req.params)
      .then(response => {
        res.status(200).json(response)
      })
      .catch(error => {
        res.status(500).send(error)
      })
  })

  app.use('/', router)
}

module.exports = routes
