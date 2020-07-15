module.exports.formulario_inclusao_noticia = function(app, req, res){
    res.render("./admin/form_add_noticia", {validacao:{}, noticia : {}});
}

module.exports.noticia_salvar = function(app, req, res){
    var noticia = req.body;
        
    req.assert('titulo','O Titulo é obrigatorio').notEmpty();
    req.assert('resumo','Resumo é obrigatorio').notEmpty();
    req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('nome','Autor é obrigatorio').notEmpty();
    req.assert('data_noticia','Data é obrigatoria').notEmpty().isDate({format:'YYYY-MM-DD'});
    req.assert('noticia','Noticia é obrigatoria').notEmpty();
    
    var erros = req.validationErrors();

    //console.log(erros);

    if(erros){
        res.render("admin/form_add_noticia", {validacao : erros, noticia: noticia});
        return;
    }
    
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.Models.NoticiasDAO(connection); 

    noticiasModel.salvarNoticia(noticia, function(error, result){
        res.redirect('/noticias');
    });
}