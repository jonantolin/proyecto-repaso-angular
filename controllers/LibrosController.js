var LibrosController = (function () {
    function LibrosController($scope, librosService) {
        var _this = this;
        this.$scope = $scope;
        this.librosService = librosService;
        console.log("LibrosController constructor");
        this.$scope.vm = this;
        $scope.vm.libros = [];
        $scope.vm.editarLibro = function (libro) {
            $scope.vm.editar = !$scope.vm.editar;
            $scope.formuData = libro;
        };
        $scope.vm.guardarDatos = function (valido) {
            if (!valido) {
                return;
            }
            else {
                console.log("Datos han pasado el validador");
                _this.librosService.modificar($scope.vm.formuData.id, $scope.vm.formuData).then(function (response) {
                    $scope.vm.modificado = response;
                });
            }
        };
        this.librosService.getLibros().then(function (response) { return $scope.vm.libros = response; });
    }
    LibrosController.$inject = ["$scope", "librosService"];
    return LibrosController;
}());
//# sourceMappingURL=LibrosController.js.map