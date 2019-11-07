var Libro = (function () {
    function Libro() {
        this.id = 0;
        this._titulo = "";
        this._isbn = "";
        this._numPaginas = 0;
        this._autor = "";
        this._digital = false;
        this._formatos = new Formatos();
    }
    Libro.prototype.getId = function () {
        return this.id;
    };
    Libro.prototype.setId = function (id) {
        this.id = id;
    };
    Object.defineProperty(Libro.prototype, "titulo", {
        get: function () {
            return this._titulo;
        },
        set: function (value) {
            this._titulo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "isbn", {
        get: function () {
            return this._isbn;
        },
        set: function (value) {
            this._isbn = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "numPaginas", {
        get: function () {
            return this._numPaginas;
        },
        set: function (value) {
            this._numPaginas = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "autor", {
        get: function () {
            return this._autor;
        },
        set: function (value) {
            this._autor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "digital", {
        get: function () {
            return this._digital;
        },
        set: function (value) {
            this._digital = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "formatos", {
        get: function () {
            return this._formatos;
        },
        set: function (value) {
            this._formatos = value;
        },
        enumerable: true,
        configurable: true
    });
    return Libro;
}());
//# sourceMappingURL=Libro.js.map