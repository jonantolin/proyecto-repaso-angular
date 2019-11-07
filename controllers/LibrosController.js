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
                    if (response) {
                        $scope.vm.alertaTipo = "warning";
                        $scope.vm.alertaTexto = "Libro eliminado.";
                        $scope.vm.listar();
                    }
                    else {
                        $scope.vm.alertaTipo = "danger";
                        $scope.vm.alertaTexto = "No se pudo eliminar el libro.";
                    }
                    $scope.vm.alerta = true;
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
            var lib = $scope.vm.formuData;
            if (!valido) {
                return;
            }
            else {
                console.log("Datos han pasado el validador");
                var libroValido = { "id": lib.id,
                    "titulo": lib.titulo,
                    "isbn": lib.isbn,
                    "numPaginas": lib.numPaginas,
                    "autor": lib.autor,
                    "digital": (lib.digital) ? lib.digital : false,
                    "formatos": (lib.digital) ? { "epub": (lib.formatos) ? lib.formatos.epub : false,
                        "pdf": (lib.formatos) ? lib.formatos.pdf : false,
                        "opf": (lib.formatos) ? lib.formatos.opf : false,
                    } : {}
                };
                if (libroValido.id) {
                    _this.librosService.modificar(libroValido.id, libroValido).then(function (response) {
                        if (response) {
                            $scope.vm.alertaTipo = "success";
                            $scope.vm.alertaTexto = "Libro modificado con éxito.";
                        }
                        else {
                            $scope.vm.alertaTipo = "danger";
                            $scope.vm.alertaTexto = "No se pudo modifica el libro.";
                        }
                        $scope.vm.alerta = true;
                        $scope.vm.editar = !response;
                        $scope.vm.listar();
                    });
                }
                else {
                    _this.librosService.crear(libroValido).then(function (response) {
                        if (response) {
                            $scope.vm.alertaTipo = "success";
                            $scope.vm.alertaTexto = "Libro creado con éxito.";
                            $scope.vm.listar();
                        }
                        else {
                            $scope.vm.alertaTipo = "danger";
                            $scope.vm.alertaTexto = "No se pudo crear el libro.";
                        }
                        $scope.vm.alerta = true;
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