const fs = require('fs')
const fastcsv = require('fast-csv')
const parser = fastcsv.parse()
const pg = require('pg')

const pool = new pg.Pool({
  host: 'localhost',
  user: 'postgres',
  database: 'csv_data',
  password: '1234',
  port: 5432,
  idleTimeoutMillis: 300000,
  connectionTimeoutMillis: 300000
})

const numberColumnsToAddress = 15
const formatDataToFixedColumns = (row) => {
  const newRow = []
  for (let column = 0; column < numberColumnsToAddress; column++) {
    newRow.push(row[column])
  }
  return newRow
}

const uploadCsvToDb = async (req, res) => {
  const csvPath = '/resources/' + req.file.filename
  const csvData = []
  const stream = fs.createReadStream(csvPath)
  const csvStream = parser.on('data', (data) => csvData.push(data))
    .on('end', async () => {
      const queryRow = 'INSERT INTO data VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)'

      await pool.connect(async (error, client, callback) => {
        if (error) {
          throw error
        }
        try {
          for (let row = 0; row < csvData.length; row++) {
            const newRow = formatDataToFixedColumns(csvData[row])
            await client.query(queryRow, newRow, (err, res) => {
              if (err) {
                console.log(err.stack)
              } else {
                console.log('inserted ' + res.rowCount + ' row:', csvData[row])
              }
            })
          }
        } finally {
          callback()
        }
      })
    })
  stream.pipe(csvStream)
}

module.exports = {
  uploadCsvToDb
}
