const parseEnv = () => {
  const envsArr = Object.entries(process.env);
  const ans = [];
  envsArr.forEach(env => {
    if (env[0].startsWith('RSS_')) {
      ans.push(`${env[0]}=${env[1]}`);
    }
  });
  if (ans.length) {
    console.log(ans.join(', '));
  }
};

parseEnv();
