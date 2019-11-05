interface ILibrosController extends ng.IScope{
    vm: LibrosController;
}

class LibrosController implements ng.IController{

    public static $inject = ["$scope", "librosService"];

    public libros: Array<ILibro>;

    public formuData: ILibro;
   
    public editar: boolean;
    public modificado: boolean;

    //funciones
    public guardarDatos: any;
    public editarLibro: any;

    constructor(private $scope:ILibrosController, private librosService:ILibrosService){

        console.log("LibrosController constructor");
        this.$scope.vm = this;
        $scope.vm.libros = [];

        $scope.vm.editarLibro = (libro) => {

            $scope.vm.editar = !$scope.vm.editar;

            $scope.formuData = libro;
        }

        $scope.vm.guardarDatos = (valido) => {

            if(!valido){ //Los datos no pasan la validacion
                return;
            }else{
                console.log("Datos han pasado el validador");

                this.librosService.modificar($scope.vm.formuData.id, $scope.vm.formuData).then(response => {
                    
                    $scope.vm.modificado = response;
                
                });

            }

        }

        //Listar los libros
        this.librosService.getLibros().then(response => $scope.vm.libros = response);

        
    }

}

