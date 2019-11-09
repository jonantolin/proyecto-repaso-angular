interface IPeliculasController extends ng.IScope{
    vm: PeliculasController;
}

class PeliculasController implements ng.IController{


    public static $inject = ["$scope", "peliculasService"];

    public peliculas: Array<Pelicula>;
    public formuData: any;  //Libro ? 

    public editar: boolean;
    public modificado: boolean;

    //Para la Alert de bootstrap
    public alerta: boolean;
    public alertaTipo: string;
    public alertaTexto: string;


    //funciones
    public guardarDatos: any;
    public editarPelicula: any;
    public borrarPelicula: any;
    public listar: any;
    public nuevaPelicula: any;

    constructor(private $scope:IPeliculasController, private peliculasService:IPeliculasService){

        console.log("PeliculasController constructor");
        this.$scope.vm = this;
        $scope.vm.peliculas = [];

         //Listar peliculas
         $scope.vm.listar = () => this.peliculasService.getPeliculas().then(response => $scope.vm.peliculas = response);

         $scope.vm.listar();

         $scope.vm.editarPelicula = (pelicula: Pelicula) => {

            if(!$scope.vm.editar){
                $scope.vm.editar = true;
            }
           
            $scope.vm.formuData = angular.copy(pelicula); //si lo igualo, en vez de usar angular.copy, se iguala por referencia

        }

        $scope.vm.nuevaPelicula = () => {

            if(!$scope.vm.editar){
                $scope.vm.editar = true;
            }

            $scope.vm.formuData = undefined;
        }

        $scope.vm.guardarDatos = (valido: boolean) => {
            
            const peli = $scope.vm.formuData;

            if(!valido){ //Los datos no pasan la validacion
                
                return;

            }else{

                console.log("Datos han pasado el validador");                   

                if(peli.id > 0){ // Es un libro a MODIFICAR

                    

                    this.peliculasService.modificar(peli.id, peli).then(response => {

                        if(response){
                            $scope.vm.alertaTipo = "success";
                            $scope.vm.alertaTexto = "Pelicula modificada con éxito.";
                        }else{
                            $scope.vm.alertaTipo = "danger";
                            $scope.vm.alertaTexto = "No se pudo modificar la pelicula.";

                        }

                        $scope.vm.alerta = true;

                        $scope.vm.editar = !response;

                        $scope.vm.listar();
                    
                    });

                }else{ // ******** Es un NUEVO libro


                    console.log("PeliculasController creando pelicula...");
                    this.peliculasService.crear(peli).then(response => {

                        if(response){
                            $scope.vm.alertaTipo = "success";
                            $scope.vm.alertaTexto = "Pelicula creada con éxito.";

                            $scope.vm.listar();
                        }else{
                            $scope.vm.alertaTipo = "danger";
                            $scope.vm.alertaTexto = "No se pudo crear la película.";

                        }

                        $scope.vm.alerta = true;

                        $scope.vm.editar = !response;

                    });

                }//end if-else CREAR o MOFICIAR

            } //end if-else datosFormu validados en la vista 

        }//end guardarDatos

        $scope.vm.borrarPelicula = (pelicula: Pelicula) => {
            if(confirm("¿Seguro que quieres borrar la película?")){

                this.peliculasService.delete(pelicula.id).then(
                    response =>{

                        if(response){
                            $scope.vm.alertaTipo = "warning";
                            $scope.vm.alertaTexto = "Pelicula eliminada.";
        
                            $scope.vm.listar();

                        }else{
                            $scope.vm.alertaTipo = "danger";
                            $scope.vm.alertaTexto = "No se ha podido eliminar la película.";

                        }

                        $scope.vm.alerta = true;

                    }

                );

            }// end if confirm

        }





    } //end constructor


}