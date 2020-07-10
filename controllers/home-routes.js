const router = require('express').Router();
const sequelize = require('../config/connection');
const { Employer, Workout, User, Comment } = require('../models');

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
    res.render('userprofile');
  });

router.get('/user',(req, res) => {

  console.log(req.session);
  res.render('userprofile');
});

router.get('/groupprofile', (req, res) => {
  res.render('groupprofile');
});
  
module.exports = router;