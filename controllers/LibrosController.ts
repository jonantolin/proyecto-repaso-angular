interface ILibrosController extends ng.IScope{
    vm: LibrosController;
}

class LibrosController implements ng.IController{

    public static $inject = ["$scope", "librosService"];

    public libros: Array<ILibro>;

    public formuData: ILibro;
   
    public editar: boolean;
    public modificado: boolean;

    //Para la Alert de bootstrap
    public alerta: boolean;
    public alertaTipo: string;
    public alertaTexto: string;

    //funciones
    public guardarDatos: any;
    public editarLibro: any;
    public borrarLibro: any;
    public listar: any;

    

    constructor(private $scope:ILibrosController, private librosService:ILibrosService){

        console.log("LibrosController constructor");
        this.$scope.vm = this;
        $scope.vm.libros = [];

       
        $scope.vm.borrarLibro = (libro) =>{
            if(confirm('¿Seguro que quieres borrar el libro?')){

                this.librosService.delete(libro.id).then(response => {

                    $scope.vm.alerta = true;

                    if(response){
                        $scope.vm.alertaTipo = "warning";
                        $scope.vm.alertaTexto = "Libro eliminado.";

                        $scope.vm.listar();
                    }else{
                        $scope.vm.alertaTipo = "danger";
                        $scope.vm.alertaTexto = "No se pudo eliminar el libro.";
                    }

                });

            }
        } //end borrarLibro

        $scope.vm.editarLibro = (libro) => {

            if(!$scope.vm.editar){
                $scope.vm.editar = true;
            }
           // $scope.vm.editar = !$scope.vm.editar;

            $scope.vm.formuData = angular.copy(libro);

         // angular.copy(libro, $scope.formuData);
        }

        $scope.vm.guardarDatos = (valido) => {

            if(!valido){ //Los datos no pasan la validacion
                return;
            }else{
                console.log("Datos han pasado el validador");

                let libroValido = { "id": -1,
                                    "titulo":  $scope.vm.formuData.titulo,
                                    "isbn":  $scope.vm.formuData.isbn,
                                    "numPaginas":  $scope.vm.formuData.numPaginas,
                                    "autor":  $scope.vm.formuData.autor,
                                    "digital":  $scope.vm.formuData.digital,
                                    "formatos": ($scope.vm.formuData.digital) ? {"epub": $scope.vm.formuData.formatos.epub ,
                                                                                "pdf": $scope.vm.formuData.formatos.pdf,
                                                                                "opf": $scope.vm.formuData.formatos.opf
                                                                                }: {}
                                   }

                this.librosService.modificar($scope.vm.formuData.id, libroValido).then(response => {

                    $scope.vm.alerta = true;

                    if(response){
                        $scope.vm.alertaTipo = "success";
                        $scope.vm.alertaTexto = "Libro modificado con éxito.";
                    }else{
                        $scope.vm.alertaTipo = "danger";
                        $scope.vm.alertaTexto = "No se pudo modifica el libro.";

                    }

                    $scope.vm.editar = !response;

                    $scope.vm.listar();
                
                });

            }

        } //end guardarDatos

        //Listar los libros
        $scope.vm.listar = () => this.librosService.getLibros().then(response => $scope.vm.libros = response);

        $scope.vm.listar();

        
    }

}

