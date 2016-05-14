var express = require('express');
var fs = require('fs');
var app = express();
var watson = require('watson-developer-cloud');


var visual_recognition = watson.visual_recognition({
  password: "gTOuIHgRlFct",
  username: "2b7516ee-a4cc-46e2-9854-51a8d451e2e1",
  version: 'v2-beta',
  version_date: '2015-12-02'
});

var params = {
  images_file: fs.createReadStream('./src/server/images.jpg')
};


visual_recognition.classify(params,
  function (err, response) {
    if (err)
      console.log(err);
    else
      console.log(JSON.stringify(response, null, 2));
  });

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world');
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 5000!');
});