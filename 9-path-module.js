const path = require('path');

console.log(path.sep);

const filePath = path.join('./content', 'subfolder', 'test.txt');
console.log(filePath); // content\subfolder\test.txt

const base = path.basename(filePath);
console.log(base); // test.txt

// this is useful because apps run on many different machines so getting
// the users absolute path is good
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);