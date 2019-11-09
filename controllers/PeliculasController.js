var PeliculasController = (function () {
    function PeliculasController($scope, peliculasService) {
        var _this = this;
        this.$scope = $scope;
        this.peliculasService = peliculasService;
        console.log("PeliculasController constructor");
        this.$scope.vm = this;
        $scope.vm.peliculas = [];
        $scope.vm.listar = function () { return _this.peliculasService.getPeliculas().then(function (response) { return $scope.vm.peliculas = response; }); };
        $scope.vm.listar();
        $scope.vm.editarPelicula = function (pelicula) {
            if (!$scope.vm.editar) {
                $scope.vm.editar = true;
            }
            $scope.vm.formuData = angular.copy(pelicula);
        };
        $scope.vm.nuevaPelicula = function () {
            if (!$scope.vm.editar) {
                $scope.vm.editar = true;
            }
            $scope.vm.formuData = undefined;
        };
        $scope.vm.guardarDatos = function (valido) {
            var peli = $scope.vm.formuData;
            if (!valido) {
                return;
            }
            else {
                console.log("Datos han pasado el validador");
                if (peli.id > 0) {
                    _this.peliculasService.modificar(peli.id, peli).then(function (response) {
                        if (response) {
                            $scope.vm.alertaTipo = "success";
                            $scope.vm.alertaTexto = "Pelicula modificada con éxito.";
                        }
                        else {
                            $scope.vm.alertaTipo = "danger";
                            $scope.vm.alertaTexto = "No se pudo modificar la pelicula.";
                        }
                        $scope.vm.alerta = true;
                        $scope.vm.editar = !response;
                        $scope.vm.listar();
                    });
                }
                else {
                    console.log("PeliculasController creando pelicula...");
                    _this.peliculasService.crear(peli).then(function (response) {
                        if (response) {
                            $scope.vm.alertaTipo = "success";
                            $scope.vm.alertaTexto = "Pelicula creada con éxito.";
                            $scope.vm.listar();
                        }
                        else {
                            $scope.vm.alertaTipo = "danger";
                            $scope.vm.alertaTexto = "No se pudo crear la película.";
                        }
                        $scope.vm.alerta = true;
                        $scope.vm.editar = !response;
                    });
                }
            }
        };
        $scope.vm.borrarPelicula = function (pelicula) {
            if (confirm("¿Seguro que quieres borrar la película?")) {
                _this.peliculasService.delete(pelicula.id).then(function (response) {
                    if (response) {
                        $scope.vm.alertaTipo = "warning";
                        $scope.vm.alertaTexto = "Pelicula eliminada.";
                        $scope.vm.listar();
                    }
                    else {
                        $scope.vm.alertaTipo = "danger";
                        $scope.vm.alertaTexto = "No se ha podido eliminar la película.";
                    }
                    $scope.vm.alerta = true;
                });
            }
        };
    }
    PeliculasController.$inject = ["$scope", "peliculasService"];
    return PeliculasController;
}());
//# sourceMappingURL=PeliculasController.js.map