class Routes  {

    static homeRoutes(req, res) {
        res.render('app');
    }

    static aboutRoutes(req, res) {
        res.render('about');
    }

    static contactRoutes(req, res) {
        res.render('contact');
    }
}

module.exports = Routes;