var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var x;
  //var random = Math.random() * (3) + (-1);
  var random = Math.random();
  console.log(req.query.x);
  x = req.query.x;

  // checking if url has params
  if (x == undefined) {
    x = random;
  }


  
  let ab = Math.abs(x) 
  let ac =Math.acos(x)
  let si = Math.sin(x)
  let sih = Math.sinh(x)
  res.render('computation', {
    title: 'Computation',
    values: `applied to ` + x + ` is ` + ab,
    v1: `applied to ` + x + ` is ` + ac,
    v2: `applied to ` + x + ` is ` + si,
    v3: `applied to ` + x + ` is ` + sih
  });
});

module.exports = router;