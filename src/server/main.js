var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var watson = require('watson-developer-cloud');

var util = require('util')

var multiparty = require('multiparty');

var app = express();

var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var router = express.Router();

var visual_recognition = watson.visual_recognition({
  password: "gTOuIHgRlFct",
  username: "2b7516ee-a4cc-46e2-9854-51a8d451e2e1",
  version: 'v2-beta',
  version_date: '2015-12-02'
});


router.post('/classify', function (req, res) {
  var form = new multiparty.Form();

  console.log(req.files);

  form.parse(req, function (err, fields, files) {
    if (files.photo) {
      var params = {
        images_file: fs.createReadStream(files.photo[0].path)
      };


      visual_recognition.classify(params,
        function (err, response) {
          if (err) {
            res.json({error: err});
          }
          else {
            res.json(response);
          }
        });
    } else {
      res.json({error: 'File not found!'});
    }

  });


});

app.use('/api', router);

app.listen(port);