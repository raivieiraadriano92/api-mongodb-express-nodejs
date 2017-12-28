module.exports = function(app){
    var Curso = app.models.cursos;

    var Controller = {
        auth: function(req, res){
            res.json({a:1});
        }
    }

    return Controller;
}
