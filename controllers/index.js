const router = require('express').Router();
const homepageRoutes = require('./homepage-routes.js');
const loginRoutes = require('./login-routes.js');

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', homepageRoutes);
router.use('/loginRoutes', loginRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;