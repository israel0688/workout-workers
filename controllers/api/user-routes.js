const router = require('express').Router();
const { User, Employer } = require('../../models');

// GET /api/users
// Get all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password']}/*,
        include: {
          model: Employer,
          attributes: ['employer_name']
      } */
      })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
  });
 /* Simple search using AND and =

  Model.findAll({
     where: {
       attr1: 42,
       attr2: 'cake'
     }
  })
  WHERE attr1 = 42 AND attr2 = 'cake'*/

// GET /api/users/1
// Get a single user
router.get('/:id', (req, res) => {
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
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
  });

// POST /api/users
// Creating a user
router.post('/', (req, res) => {
    User.create({
      // employer_id: req.body.employer_id,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.post('/login', (req, res) => {
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
  
      const validPassword = dbUserData.checkPassword(req.body.password);
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
  
      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });

// PUT /api/users/1
// Update user data
router.put('/:id', (req, res) => {  
    User.update(req.body, {
        individualHooks: true,
        where: {
          id: req.params.id
        }
    })
      .then(dbUserData => {
        if (!dbUserData[0]) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// DELETE /api/users/1
// Delete a single user
router.delete('/:id', (req, res) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;