const { readFileSync: readBruh, writeFileSync: writeBruh } = require('fs');
console.log('start');
const first = readBruh('./content/first.txt', 'utf8');

const second = readBruh('./content/second.txt', 'utf8');

console.log(first, second);

writeBruh(
    './content/subfolder/newFile.txt', 
    `bruh wtf ${first}, ${second}`,
    { flag: 'a' } // this will append to the file instead of overwriting
);
console.log('done with this task');
console.log('starting the next one');
