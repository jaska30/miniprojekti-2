var express = require('express');
var router = express.Router();
var service = require('./service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  service.getResults((rows)=>{
    res.json(rows);
  })
});

router.post('/', function(req, res, next){
  service.postResults(req.body, (rowCount)=>{
    if(rowCount>0)
    res.status(201).json({message:'sinne jysähti'});
    else{
      res.status(400).json({message:'ei natsaa'});
    }
  })
})

router.get('/pics', function(req, res, next) {
  service.getPics((rows)=>{
    res.json(rows);
  })
});

module.exports = router;
