const router = require('express').Router();
const sequelize = require('../config/connection');
const { Employer, Workout, User, Comment } = require('../models');

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/userprofile/:id', (req, res) => {

  User.findOne({
      attributes: { exclude: ['password']},
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        
        res.render('userprofile', {name: dbUserData.name});
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });




});

// router.get('/login', (req, res) => {
//     res.render('userprofile');
//   });

// router.get('/user',(req, res) => {

//   console.log(req.session);
//   res.render('userprofile');
// });

router.get('/groupprofile', (req, res) => {
 res.render('groupprofile');
});
  
module.exports = router;