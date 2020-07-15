const { check, validationResult } = require("express-validator");

module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(req, res){
        app.app.Controllers.admin.formulario_inclusao_noticia(app, req, res);
    });

    app.post('/noticias/salvar', function(req, res){
        app.app.Controllers.admin.noticia_salvar(app, req, res);
    });

    
}
