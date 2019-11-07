var Formatos = (function () {
    function Formatos() {
        this._epub = false;
        this._pdf = false;
        this._opf = false;
    }
    Object.defineProperty(Formatos.prototype, "epub", {
        get: function () {
            return this._epub;
        },
        set: function (epub) {
            this._epub = epub;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Formatos.prototype, "pdf", {
        get: function () {
            return this._pdf;
        },
        set: function (pdf) {
            this._pdf = pdf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Formatos.prototype, "opf", {
        get: function () {
            return this._opf;
        },
        set: function (opf) {
            this._opf = opf;
        },
        enumerable: true,
        configurable: true
    });
    return Formatos;
}());
//# sourceMappingURL=Formatos.js.map