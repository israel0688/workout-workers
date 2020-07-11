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
//     console.log('we made it to login');
//     console.log(req.session);

//     User.findOne({
//         where: {
//             email: req.params.email
//         },

//         attributes: [
//             'name'
//         ]
//         // include: [
//         // {
//         //     model:User,
//         //     attributes: ['name']
//         // }
//         // ]
        
//     })
//     .then(dbUserData => {
//         req.session.save(() => {
//             req.session.name = dbUserData.name;
//             req.session.loggedIn = true;

//             res.json(dbUserData);
//         });
//         // if (!dbUserData) {
//         //     res.status(404).json({ message: 'No User found with this Email.' });
//         //     return;
//         //   }
    

//           // serialize the data
//         // const name = dbUserData.get({ plain: true });

//         // const name = dbUserData;
//         // console.log(name);

    

//     res.render('userprofile', { name });
//     });
//   });
  
module.exports = router;