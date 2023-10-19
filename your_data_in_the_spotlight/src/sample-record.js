const { faker } = require('@faker-js/faker');

exports.createSampleRecord = () => {

  // Create some data that will be used to create other meaningful data
  const firstName = faker.person.firstName();
  const middleName = faker.person.middleName();
  const lastName = faker.person.lastName();

  // Another options is faker.location.country()
  const country = faker.helpers.weightedArrayElement([
    { weight: 5, value: "Chile" }, { weight: 21, value: "Brazil" },
    { weight: 7, value: "Sweden" }, { weight: 4, value: "Nigeria" },
    { weight: 5, value: "Armenia" }, { weight: 2, value: "Kenya" },
    { weight: 6, value: "Georgia" }, { weight: 6, value: "Uganda" },
    { weight: 12, value: "Turkey" }, { weight: 9, value: "Peru" },
    { weight: 4, value: "Ivory Coast" }, { weight: 3, value: "Argentina" },
    { weight: 3, value: "Turkey" }, { weight: 2, value: "Zimbabwe" },
    { weight: 3, value: "Colombia" }, { weight: 2, value: "Senegal" },
    { weight: 10, value: "Uruguay" }, { weight: 1, value: "Portugal" },
  ]);

  const software_stack = faker.helpers.weightedArrayElement([
    { weight: 5, value: "Backend" }, { weight: 4, value: "DevOps" },
    { weight: 7, value: "Data Engineer" }, { weight: 9, value: "Frontend" },
  ]);

  const randomMonth = faker.number.int({ min: 1, max: 12 });

  const fakeData = {
    name: `${firstName} ${middleName} ${lastName}`,
    country,
    rate: faker.number.int({ min: 14, max: 28 }),
    date: `${randomMonth.toString().padStart(2, '0')}-2023`,
    hours_worked: faker.number.int({ min: 80, max: 160 }),
    software_stack,
  };

  // -------------------------------------------------------------
  // Mess a little with the data to make report look interesting
  // -------------------------------------------------------------

  // Pump up data science 
  if (fakeData.software_stack === "Data Engineer") {
    fakeData.rate = Math.floor(fakeData.rate * 1.5);
  }

  // The greater the month, the greater the hours worked
  fakeData.hours_worked = Math.floor(fakeData.hours_worked * (1 + (randomMonth / 50)));

  // Except for May, when people worked less
  if (randomMonth == 5) {
    fakeData.hours_worked = Math.floor(fakeData.hours_worked * 0.7);
  }

  // And September, when people worked much more!
  if (randomMonth == 9) {
    fakeData.hours_worked = Math.floor(fakeData.hours_worked * 1.1);
  }

  // -------------------------------------------------------------
  // Add currency to rate
  // -------------------------------------------------------------
  fakeData.rate = `USD ${fakeData.rate}`;

  return fakeData
};