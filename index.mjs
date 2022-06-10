import { promises as fs } from 'fs';
import * as path from 'path';
import { createLexiconStudent } from './fake-data.mjs';

async function saveToFile(data, filename) {
  try {
    await fs.writeFile(`./files/${filename}`, data);
    console.log(`File ${filename} saved successfully`);
  } catch (err) {
    console.log(`Unable to save to ${filename}`, err.message);
  }
}

function createFakeData(count, callback) {
  Array.from({ length: count }).forEach(() => {
    callback();
  });
}

const lexiconStudents = [];

createFakeData(10, () => {
  lexiconStudents.push(createLexiconStudent('1'));
});

await saveToFile(JSON.stringify(lexiconStudents), 'fake-NA21-students.json');

// console.log(lexiconStudents);
