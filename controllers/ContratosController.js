var ContratosController = (function () {
    function ContratosController($scope, contratosJson) {
        this.$scope = $scope;
        this.contratosJson = contratosJson;
        console.log("ContratosController constructor");
        $scope.vm = this;
        $scope.vm.titulo = "Contratos";
        $scope.vm.contratos = this.contratosJson;
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