var PeliculasService = (function () {
    function PeliculasService($http) {
        this.ENDPOINT = "http://localhost:3000/peliculas/";
        this.http = $http;
    }
    PeliculasService.prototype.getPeliculas = function () {
        var url = this.ENDPOINT;
        return this.http.get(url).then(function (res) {
            var peliculas = res.data.map(function (elem) {
                var peli = new Pelicula();
                peli.id = elem.id;
                peli.titulo = elem.titulo;
                peli.director = elem.director;
                peli.numOscars = elem.numOscars;
                peli.enVenta = elem.enVenta;
                peli.formatos = elem.formatos;
                return peli;
            });
            return peliculas;
        });
    };
    PeliculasService.prototype.getPeliculasById = function (id) {
        throw new Error("Method not implemented.");
    };
    PeliculasService.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    PeliculasService.prototype.crear = function (pelicula) {
        var url = this.ENDPOINT;
        var peliNueva = new Pelicula();
        peliNueva.titulo = pelicula.titulo;
        peliNueva.director = pelicula.director;
        peliNueva.numOscars = pelicula.numOscars;
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
            "numOscars": peliNueva.numOscars,
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
        peliModificada.numOscars = pelicula.numOscars;
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
            "numOscars": peliModificada.numOscars,
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