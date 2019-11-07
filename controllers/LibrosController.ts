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
    public nuevoLibro: any;

    

    constructor(private $scope:ILibrosController, private librosService:ILibrosService){

        console.log("LibrosController constructor");
        this.$scope.vm = this;
        $scope.vm.libros = [];

       
        $scope.vm.borrarLibro = (libro: ILibro) =>{
            if(confirm('¿Seguro que quieres borrar el libro?')){

                this.librosService.delete(libro.id).then(response => {

                    if(response){
                        $scope.vm.alertaTipo = "warning";
                        $scope.vm.alertaTexto = "Libro eliminado.";

                        $scope.vm.listar();
                    }else{
                        $scope.vm.alertaTipo = "danger";
                        $scope.vm.alertaTexto = "No se pudo eliminar el libro.";
                    }

                    $scope.vm.alerta = true;

                });

            }
        } //end borrarLibro

        $scope.vm.editarLibro = (libro: ILibro) => {

            if(!$scope.vm.editar){
                $scope.vm.editar = true;
            }
           
            $scope.vm.formuData = angular.copy(libro); //si lo igualo, en vez de usar angular.copy, se iguala por referencia

        }

        $scope.vm.nuevoLibro = () => {

            if(!$scope.vm.editar){
                $scope.vm.editar = true;
            }

            $scope.vm.formuData = undefined;
        }

        $scope.vm.guardarDatos = (valido: boolean) => {

            if(!valido){ //Los datos no pasan la validacion
                return;
            }else{
                console.log("Datos han pasado el validador");

                let libroValido: ILibro = { "id": $scope.vm.formuData.id,
                                        "titulo":  $scope.vm.formuData.titulo,
                                        "isbn":  $scope.vm.formuData.isbn,
                                        "numPaginas":  $scope.vm.formuData.numPaginas,
                                        "autor":  $scope.vm.formuData.autor,
                                        "digital":  $scope.vm.formuData.digital,
                                        "formatos": ($scope.vm.formuData.digital) ? {"epub": ($scope.vm.formuData.formatos)? $scope.vm.formuData.formatos.epub : false ,
                                                                                    "pdf": ($scope.vm.formuData.formatos)? $scope.vm.formuData.formatos.pdf : false ,
                                                                                    "opf": ($scope.vm.formuData.formatos)? $scope.vm.formuData.formatos.opf : false ,
                                                                                    }: {}
                                    }

                if(libroValido.id){ // Es un libro a MODIFICAR

                    

                    this.librosService.modificar(libroValido.id, libroValido).then(response => {

                        if(response){
                            $scope.vm.alertaTipo = "success";
                            $scope.vm.alertaTexto = "Libro modificado con éxito.";
                        }else{
                            $scope.vm.alertaTipo = "danger";
                            $scope.vm.alertaTexto = "No se pudo modifica el libro.";

                        }

                        $scope.vm.alerta = true;

                        $scope.vm.editar = !response;

                        $scope.vm.listar();
                    
                    });

                }else{ // ******** Es un NUEVO libro


                    this.librosService.crear(libroValido).then(response => {

                        if(response){
                            $scope.vm.alertaTipo = "success";
                            $scope.vm.alertaTexto = "Libro creado con éxito.";

                            $scope.vm.listar();
                        }else{
                            $scope.vm.alertaTipo = "danger";
                            $scope.vm.alertaTexto = "No se pudo crear el libro.";

                        }

                        $scope.vm.alerta = true;

                        $scope.vm.editar = !response;

                    });

                }//end if-else 

            }   

        } //end guardarDatos

        //Listar los libros
        $scope.vm.listar = () => this.librosService.getLibros().then(response => $scope.vm.libros = response);

        $scope.vm.listar();

        
    } //end constructor

}

