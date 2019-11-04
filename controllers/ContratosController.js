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
        $scope.vm.ultimoContratoSituacion =
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