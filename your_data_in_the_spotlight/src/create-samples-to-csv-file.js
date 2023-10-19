const { getCsvHeader, convertToCsvRecord} = require('./util');
const { createDeveloper, createSampleRecord } = require('./sample-record');

const fs = require('fs')

let developerCount = 759;
console.log(`Creating ${developerCount} developers`);
const developers = [];

while (developerCount-- > 0) {
  developers.push(createDeveloper());
}

// ---------------------------------------------------
// Create output file
// ---------------------------------------------------
const FILENAME = `data/developer_records.csv`;
const logger = fs.createWriteStream(FILENAME, {
  flags: 'w' //  Open file for writing. Fle is created or truncated
})

// Write the CSV header
logger.write(`${getCsvHeader()}`);

console.log(`Creating ${FILENAME} with ${developers.length * 12} records`);

// For every month
for (let month = 1; month <= 12; month++) {
  // Create record for every developer
  for (const developer of developers) {
    const objData = createSampleRecord(developer, month);
    const csvData = convertToCsvRecord(objData)
    
    logger.write('\n');
    logger.write(csvData);
  }
}

logger.end();