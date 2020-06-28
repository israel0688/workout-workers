const router = require('express').Router();
const {Workout, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');

// get all workouts
router.get('/', (req, res) => {
    Workout.findAll({
      attributes: [
        'id', 
        'workout_type', 
        'workout_amount', 
        'created_at'
      ],
      include: {
          model: User,
          attributes: ['name']
      }
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
   });
  
  // get one workout
  router.get('/:id', (req, res) => {
    Workout.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id', 
        'workout_type', 
        'workout_amount', 
        'created_at'
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No workout found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
   // create a workout
   router.post('/', (req, res) => {
    Workout.create({
      workout_type: req.body.workout_type,
      workout_amount: req.body.workout_amount,
      user_id: req.body.user_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  // update a workout
  router.put('/:id', (req, res) => {
    Workout.update(
      {
        workout_type: req.body.workout_type,
        workout_amount: req.body.workout_amount
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No workout found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  // delete a post
  router.delete('/:id', (req, res) => {
    Workout.destroy(
      {
        where: {
          id: req.params.id
        }
    })
      .then(dbPostData => {
        if(!dbPostData) {
          res.status(404).json({ message: 'No workout found with this id' });
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