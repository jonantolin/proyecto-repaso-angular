var FormatosPelis = (function () {
    function FormatosPelis() {
        this._vhs = false;
        this._dvd = false;
        this._bluray = false;
    }
    Object.defineProperty(FormatosPelis.prototype, "vhs", {
        get: function () {
            return this._vhs;
        },
        set: function (value) {
            this._vhs = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatosPelis.prototype, "dvd", {
        get: function () {
            return this._dvd;
        },
        set: function (value) {
            this._dvd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatosPelis.prototype, "bluray", {
        get: function () {
            return this._bluray;
        },
        set: function (value) {
            this._bluray = value;
        },
        enumerable: true,
        configurable: true
    });
    return FormatosPelis;
}());
//# sourceMappingURL=FormatosPelis.js.map