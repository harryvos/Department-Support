var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.post('/cs-stage', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var civilservant = req.session.data['civilservant']

  if (civilservant === 'true') {
    // redirect to the relevant page
    res.redirect('/cs-stage')
  } else {
    // if over18 is any other value (or is missing) render the page requested
    res.redirect('non-cs-stage')
  }
})

router.post('/cs-prepdisco-step', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var stage = req.session.data['stage']

  if (stage === 'prepdiscoStageTrue') {
    // redirect to the relevant page
    res.redirect('/cs-prepdisco-step')
  } else {
    // if over18 is any other value (or is missing) render the page requested
    res.redirect('content-wip')
  }
})

router.post('/scoping', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var step = req.session.data['step']

  if (step === 'scopingStageTrue') {
    // redirect to the relevant page
    res.redirect('/scoping')
  } else {
    // if over18 is any other value (or is missing) render the page requested
    res.redirect('content-wip')
  }
})

module.exports = router