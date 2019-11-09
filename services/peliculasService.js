var PeliculasService = (function () {
    function PeliculasService($http) {
        this.ENDPOINT = "http://localhost:3000/peliculas/";
        this.http = $http;
    }
    PeliculasService.prototype.getPeliculas = function () {
        var url = this.ENDPOINT;
        return this.http.get(url).then(function (res) { return res.data; });
    };
    PeliculasService.prototype.getPeliculasById = function (id) {
        throw new Error("Method not implemented.");
    };
    PeliculasService.prototype.delete = function (id) {
        var url = this.ENDPOINT + id;
        return this.http.delete(url).then(function (res) { return true; });
    };
    PeliculasService.prototype.crear = function (pelicula) {
        var url = this.ENDPOINT;
        var peliNueva = new Pelicula();
        peliNueva.titulo = pelicula.titulo;
        peliNueva.director = pelicula.director;
        peliNueva.calificacion = pelicula.calificacion;
        if (pelicula.enVenta) {
            peliNueva.enVenta = true;
        }
        if (pelicula.enVenta) {
            (pelicula.formatos.vhs) ? peliNueva.formatos.vhs = true : null;
            (pelicula.formatos.dvd) ? peliNueva.formatos.dvd = true : null;
            (pelicula.formatos.bluray) ? peliNueva.formatos.bluray = true : null;
        }
        var peliJson = {
            "titulo": peliNueva.titulo,
            "director": peliNueva.director,
            "calificacion": peliNueva.calificacion,
            "enVenta": peliNueva.enVenta,
            "formatos": {
                "vhs": peliNueva.formatos.vhs,
                "dvd": peliNueva.formatos.dvd,
                "bluray": peliNueva.formatos.bluray
            }
        };
        return this.http.post(url, peliJson).then(function (response) { return true; });
    };
    PeliculasService.prototype.modificar = function (id, pelicula) {
        var url = this.ENDPOINT + id;
        var peliModificada = new Pelicula();
        peliModificada.id = pelicula.id;
        peliModificada.titulo = pelicula.titulo;
        peliModificada.director = pelicula.director;
        peliModificada.calificacion = pelicula.calificacion;
        if (pelicula.enVenta) {
            peliModificada.enVenta = true;
        }
        if (pelicula.enVenta) {
            (pelicula.formatos.vhs) ? peliModificada.formatos.vhs = true : null;
            (pelicula.formatos.dvd) ? peliModificada.formatos.dvd = true : null;
            (pelicula.formatos.bluray) ? peliModificada.formatos.bluray = true : null;
        }
        var peliJson = {
            "id": peliModificada.id,
            "titulo": peliModificada.titulo,
            "director": peliModificada.director,
            "calificacion": peliModificada.calificacion,
            "enVenta": peliModificada.enVenta,
            "formatos": {
                "vhs": peliModificada.formatos.vhs,
                "dvd": peliModificada.formatos.dvd,
                "bluray": peliModificada.formatos.bluray
            }
        };
        return this.http.put(url, peliJson).then(function (response) { return true; });
    };
    return PeliculasService;
}());
//# sourceMappingURL=peliculasService.js.map