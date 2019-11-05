var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var ContratosController = (function () {
    function ContratosController($scope, contratosJson) {
        this.$scope = $scope;
        this.contratosJson = contratosJson;
        console.log("ContratosController constructor");
        $scope.vm = this;
        $scope.vm.titulo = "Contratos";
        $scope.vm.contratos = this.contratosJson;
        $scope.vm.contratosSinAcciones = contratosJson.filter(function (contrato) { return !contrato.ACCIONES || contrato.ACCIONES.length == 0; });
        $scope.vm.contratosConAcciones = contratosJson.filter(function (contrato) { return contrato.ACCIONES; });
        $scope.vm.contratosConAcciones1a3 = $scope.vm.contratosConAcciones.filter(function (contrato) { return contrato.ACCIONES.length <= 3 && contrato.ACCIONES.length >= 1; });
        $scope.vm.contratosConAccionesMas3 = $scope.vm.contratosConAcciones.filter(function (contrato) { return contrato.ACCIONES.length > 3; });
        $scope.vm.primerContratoSituacion = $scope.vm.contratosConAcciones.find(function (contrato) { return contrato.ACCIONES.find(function (c) { return c.clave === "SITUACION"; }); });
        $scope.vm.ultimoContratoSituacion = $scope.vm.contratosConAcciones.reverse().find(function (contrato) { return contrato.ACCIONES.find(function (c) { return c.clave === "SITUACION"; }); });
        var accionesDuplicadas = $scope.vm.contratos
            .filter(function (c) { return c.ACCIONES && c.ACCIONES.length > 0; })
            .map(function (c) { return c.ACCIONES; })
            .reduce(function (a, b) {
            return a.concat(b);
        })
            .map(function (x) { return x.titulo; });
        $scope.vm.acciones = __spread(new Set(accionesDuplicadas)).sort();
        $scope.vm.contratosMapeados = contratosJson.map(function (contrato) {
            return {
                "id": contrato.idColumn,
                "nombre": (contrato.nombre) ? contrato.nombre : "Sin nombre",
                "numeroAcciones": (contrato.ACCIONES) ? contrato.ACCIONES.length : 0
            };
        });
    }
    ContratosController.$inject = ["$scope", "contratosJson"];
    return ContratosController;
}());
//# sourceMappingURL=ContratosController.js.map