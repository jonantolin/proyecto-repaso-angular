var Pelicula = (function () {
    function Pelicula() {
        this._id = 0;
        this._titulo = "";
        this._director = "";
        this._numOscars = 0;
        this._enVenta = false;
        this._formatos = new FormatosPelis();
    }
    Object.defineProperty(Pelicula.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pelicula.prototype, "titulo", {
        get: function () {
            return this._titulo;
        },
        set: function (value) {
            this._titulo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pelicula.prototype, "director", {
        get: function () {
            return this._director;
        },
        set: function (value) {
            this._director = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pelicula.prototype, "numOscars", {
        get: function () {
            return this._numOscars;
        },
        set: function (value) {
            this._numOscars = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pelicula.prototype, "enVenta", {
        get: function () {
            return this._enVenta;
        },
        set: function (value) {
            this._enVenta = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pelicula.prototype, "formatos", {
        get: function () {
            return this._formatos;
        },
        set: function (value) {
            this._formatos = value;
        },
        enumerable: true,
        configurable: true
    });
    return Pelicula;
}());
//# sourceMappingURL=Pelicula.js.map