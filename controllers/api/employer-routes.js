const router = require('express').Router();
const { User, Comment, Workout, Employer } = require('../../models');

// get all Employers
router.get('/', (req, res) => {
    Employer.findAll({
      attributes: [
        'id', 
        'employer_name',
        'created_at'
      ]
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
   });
  
  // get one workout
  router.get('/:id', (req, res) => {
    Employer.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'employer_name'
      ],
      include: {
          model: User,
          attributes: ['name']
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No Employer found' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
   // create an Employer
   router.post('/', (req, res) => {
    Employer.create({
      employer_name: req.body.employer_name
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  // update an Employer
  router.put('/:id', (req, res) => {
    Employer.update(
      {
        employer_name: req.body.employer_name
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No employer found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  // delete an Employer
  router.delete('/:id', (req, res) => {
    Employer.destroy(
      {
        where: {
          id: req.params.id
        }
    })
      .then(dbPostData => {
        if(!dbPostData) {
          res.status(404).json({ message: 'No Employer found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  module.exports = router;