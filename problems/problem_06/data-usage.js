const { readFileSync } = require('fs');
const logFilePath = __dirname + '/data-usage.log';

const raw = readFileSync(logFilePath, 'utf8');

const dataUsage = () => {
  // put your code here !!
  let line = raw.match(/[^\r\n]+/g);
  let data = []

  line.forEach((word) => {
    let temp = word.split(',')
    data.push({
      date: temp[0],
      user: temp[1].split('=')[1],
      data: temp[2].split('=')[1]
    })
  })

  console.log(data)
};

dataUsage()

module.exports = { dataUsage };
