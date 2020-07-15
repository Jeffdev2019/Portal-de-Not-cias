module.exports = function(app){
    app.get('/', function(req, res){
        app.app.Controllers.home.index(app, req, res);
    });
}

