const { getCsvHeader, convertToCsvRecord} = require('./util');
const { createSampleRecord } = require('./sample-record');

const fs = require('fs')

let records = 10273;

const FILENAME = `data/developer_records.csv`;
const logger = fs.createWriteStream(FILENAME, {
  flags: 'w' //  Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
})

// Write the CSV header
logger.write(`${getCsvHeader()}`);

console.log(`Creating ${FILENAME} with ${records} records`);

while (records-- > 0 ) {
  const objData = createSampleRecord();
  const csvData = convertToCsvRecord(objData)
  
  logger.write('\n');
  logger.write(csvData);
}

logger.end();