/* TODOs:
 *  - validate query parameters
 */

var express = require('express'),
    app = express()

//server.use(restify.queryParser())

// Number of sides, default is 6 
var sides = [4, 6, 8, 10, 12, 20, 30]

function roll (s, n) {
  var retval = {sum : 0, val: []}
  for(var i = 0; i < n; i++) {
    retval.val.push(Math.floor(Math.random() * s) + 1)
    retval.sum += retval.val[i]
  }
  return retval
}

app.get('/roll', function (req, res, next) {
  var s = req.query.s || 6 //number of sides
  var n = req.query.n || 3 //number of dice
  var r = req.query.r || 1 //number of rolls

  var retval = []
  for(var i = 0; i < r; i++) {
    retval.push(roll(s, n))
  }

  res.send(retval)
  next()
})

var server = app.listen(80, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
});