import { faker } from '@faker-js/faker';

faker.locale = 'sv';

export const qualifications = [
  'Net 6',
  'ASP NET Core',
  'Entity Framework',
  'C#',
  'SQL Server',
  'Azure Devops',
  'JavaScript',
  'HTML',
  'CSS',
  'React',
  'Vue',
  'Scrum',
  'Agile Development',
  'NodeJS',
  'Python',
  'Django'
];

export const createLexiconStudent = (coursePeriodId, courseCode) => {
  const female = Math.floor(Math.random() * 10) + 1 > 7;
  const finishedCourse = Math.floor(Math.random() * 10) + 1 < 2;
  const finishedAPL = Math.floor(Math.random() * 10) + 1 < 8;
  const employed = Math.floor(Math.random() * 10) + 1 > 7;
  const passedCertificate = Math.floor(Math.random() * 10) + 1 > 5;

  return {
    id: faker.datatype.uuid(),
    errandNumber: faker.phone.imei(),
    firstName: faker.name.firstName(female ? 'female' : 'male'),
    lastName: faker.name.lastName(),
    gender: faker.name.gender(female),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber('070 ### ## ##'),
    startDate: faker.date.past(1), // years
    endDate: faker.date.recent(180), // days
    finishedCourse: finishedCourse,
    finishedAPL: finishedAPL,
    employed: employed,
    certificate: {
      name: faker.helpers.arrayElement(['azure-900', 'ms-900', 'itil']),
      passed: passedCertificate
    },
    qualifications: faker.helpers.arrayElements(
      qualifications,
      qualifications.length - 4
    ),
    coursePeriodId: coursePeriodId,
    courseCode: courseCode
  };
};
