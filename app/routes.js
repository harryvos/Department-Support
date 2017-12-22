var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.post('/cs-stage', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var civilServant = req.session.data['cs-check']

  // Check whether the variable matches a condition
  if (civilServant == "cs"){
    // Send user to next page
    res.redirect('/cs-stage')
  }
  else {
    // Send user to ineligible page
    res.redirect('/non-cs-stage')
  }

})


module.exports = router