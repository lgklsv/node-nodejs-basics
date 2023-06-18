const parseArgs = () => {
  const argsArr = process.argv.slice(2);
  const ans = [];
  for (let i = 0; i < argsArr.length; i += 2) {
    ans.push(`${argsArr[i].slice(2)} is ${argsArr[i + 1]}`);
  }
  if (ans.length) {
    console.log(ans.join(', '));
  }
};

parseArgs();
