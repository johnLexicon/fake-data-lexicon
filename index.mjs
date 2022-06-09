import { createLexiconStudent } from './fake-data.mjs';

const lexiconStudents = [];

Array.from({ length: 10 }).forEach(() => {
  const fakeStudent = createLexiconStudent('1', 'NA21');
  lexiconStudents.push(fakeStudent);
});

console.log(lexiconStudents);
