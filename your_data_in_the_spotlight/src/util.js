exports.getCsvHeader = () => {
  // Header for CSV
  return 'developer_name, country, rate, date, hours_worked, software_stack';
}

exports.convertToCsvRecord = (obj) => {
  // Event timestand and id
  let record = `${obj.name},`;
  record += `${obj.country},`;
  record += `${obj.rate},`;
  record += `${obj.date},`;
  record += `${obj.hours_worked},`;
  record += `${obj.software_stack},`;
  record += `null`;

  return record;
}