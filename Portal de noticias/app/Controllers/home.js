module.exports.index = function(app, req, res){
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.Models.NoticiasDAO(connection);

    noticiasModel.get5UltimasNoticias(function(error, result){
        console.log(result);
        res.render("home/index", {noticias : result});
    });
    
}