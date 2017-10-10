var express = require('express');
var router = express.Router();

var multer  = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './drama/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+'.txt')
  }
})
var upload = multer({storage: storage})


/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("aaa");
  res.render('upload', { title: 'Express' });
});

router.post('/uploadFile',upload.single('drama'), function(req, res, next) {
	console.log(req.file.path);
  res.send('success');
});

module.exports = router;
