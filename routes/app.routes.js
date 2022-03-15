const router = require("express").Router();
const routes = require('../controllers/app.controllers');



router.get('/', routes.homeRoutes);
router.get('/about', routes.aboutRoutes);
router.get('/contact', routes.contactRoutes);
// router.post('/contact', routes.)


module.exports = router;

