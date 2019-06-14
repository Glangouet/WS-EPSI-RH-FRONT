const express = require('express');
const app = express();

app.use('/', express.static('dist/mspr-cloud-project-app'));

app.listen(3000, () => {
  return console.log(`server is listening on 3000`)
});
