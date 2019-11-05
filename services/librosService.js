var LibrosService = (function () {
    function LibrosService($http) {
        var _this = this;
        this.ENDPOINT = "http://localhost:3000/libros/";
        this.getLibros = function () {
            var url = _this.ENDPOINT;
            return _this.http.get(url).then(function (res) { return res.data; });
        };
        this.http = $http;
    }
    LibrosService.prototype.getLibroById = function (id) {
        throw new Error("Method not implemented.");
    };
    LibrosService.prototype.delete = function (id) {
        var url = this.ENDPOINT + id;
        return this.http.delete(url).then(function (res) { return true; }, function (res) { return false; });
    };
    LibrosService.prototype.crear = function (libro) {
        throw new Error("Method not implemented.");
    };
    LibrosService.prototype.modificar = function (id, libro) {
        var url = this.ENDPOINT + id;
        return this.http.put(url, libro).then(function (res) { return true; }, function (res) { return false; });
    };
    return LibrosService;
}());
//# sourceMappingURL=librosService.js.map