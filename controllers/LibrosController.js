var LibrosController = (function () {
    function LibrosController($scope, librosService) {
        var _this = this;
        this.$scope = $scope;
        this.librosService = librosService;
        console.log("LibrosController constructor");
        this.$scope.vm = this;
        $scope.vm.libros = [];
        $scope.vm.borrarLibro = function (libro) {
            if (confirm('¿Seguro que quieres borrar el libro?')) {
                _this.librosService.delete(libro.id).then(function (response) {
                    $scope.vm.alerta = true;
                    if (response) {
                        $scope.vm.alertaTipo = "warning";
                        $scope.vm.alertaTexto = "Libro eliminado.";
                        $scope.vm.listar();
                    }
                    else {
                        $scope.vm.alertaTipo = "danger";
                        $scope.vm.alertaTexto = "No se pudo eliminar el libro.";
                    }
                });
            }
        };
        $scope.vm.editarLibro = function (libro) {
            if (!$scope.vm.editar) {
                $scope.vm.editar = true;
            }
            $scope.vm.formuData = angular.copy(libro);
        };
        $scope.vm.nuevoLibro = function () {
            if (!$scope.vm.editar) {
                $scope.vm.editar = true;
            }
            $scope.vm.formuData = undefined;
        };
        $scope.vm.guardarDatos = function (valido) {
            if (!valido) {
                return;
            }
            else {
                console.log("Datos han pasado el validador");
                var libroValido = { "id": $scope.vm.formuData.id,
                    "titulo": $scope.vm.formuData.titulo,
                    "isbn": $scope.vm.formuData.isbn,
                    "numPaginas": $scope.vm.formuData.numPaginas,
                    "autor": $scope.vm.formuData.autor,
                    "digital": $scope.vm.formuData.digital,
                    "formatos": ($scope.vm.formuData.digital) ? { "epub": ($scope.vm.formuData.formatos) ? $scope.vm.formuData.formatos.epub : false,
                        "pdf": ($scope.vm.formuData.formatos) ? $scope.vm.formuData.formatos.pdf : false,
                        "opf": ($scope.vm.formuData.formatos) ? $scope.vm.formuData.formatos.opf : false,
                    } : {}
                };
                if (libroValido.id) {
                    _this.librosService.modificar(libroValido.id, libroValido).then(function (response) {
                        $scope.vm.alerta = true;
                        if (response) {
                            $scope.vm.alertaTipo = "success";
                            $scope.vm.alertaTexto = "Libro modificado con éxito.";
                        }
                        else {
                            $scope.vm.alertaTipo = "danger";
                            $scope.vm.alertaTexto = "No se pudo modifica el libro.";
                        }
                        $scope.vm.editar = !response;
                        $scope.vm.listar();
                    });
                }
                else {
                    _this.librosService.crear(libroValido).then(function (response) {
                        $scope.vm.alerta = true;
                        if (response) {
                            $scope.vm.alertaTipo = "success";
                            $scope.vm.alertaTexto = "Libro creado con éxito.";
                            $scope.vm.listar();
                        }
                        else {
                            $scope.vm.alertaTipo = "danger";
                            $scope.vm.alertaTexto = "No se pudo crear el libro.";
                        }
                        $scope.vm.editar = !response;
                    });
                }
            }
        };
        $scope.vm.listar = function () { return _this.librosService.getLibros().then(function (response) { return $scope.vm.libros = response; }); };
        $scope.vm.listar();
    }
    LibrosController.$inject = ["$scope", "librosService"];
    return LibrosController;
}());
//# sourceMappingURL=LibrosController.js.map