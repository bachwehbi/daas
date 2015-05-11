/* TODOs:
 *  - validate query parameters
 */

var restify = require('restify'),
    server = restify.createServer()

server.use(restify.queryParser())

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

server.get('/roll', function respond (req, res, next) {
  var s = req.params.s || 6 //number of sides
  var n = req.params.n || 3 //number of dice
  var r = req.params.r || 1 //number of rolls

  var retval = []
  for(var i = 0; i < r; i++) {
    retval.push(roll(s, n))
  }

  res.send(retval)
  next()
})

server.listen(80, function() {
  console.log('%s listening at %s', server.name, server.url)
})
