interface IContratoResumen{
    id: string;
    nombre: string;
    numeroAcciones: number;
}

interface IContratosController extends ng.IScope{
    vm: ContratosController;
}

class ContratosController implements ng.IController{

    /*
    Sacar Resumen Contratos: 
    - Num contratos sin acciones
    - Num contratos entre 1 y 3 acciones
    - Num contratos con mas de 3 acciones
    - Todas las acciones distintas
    - (usar .find) Primer contrato que dentro de las ACCIONES tenga "clave":"SITUACION"
    - (usar .find) Ultimo contrato que dentro de las ACCIONES tenga "clave":"SITUACION"

    */


    public titulo: string;
    public contratos: any;
    public contratosValidos: any;

    public contratosMapeados: Array<IContratoResumen>;
    
    public static $inject = ["$scope", "contratosJson"];

    constructor(private $scope:IContratosController, private contratosJson:any){

        console.log("ContratosController constructor");
        $scope.vm = this;
        $scope.vm.titulo = "Contratos";
        $scope.vm.contratos = this.contratosJson;

        $scope.vm.contratosMapeados = contratosJson.map((contrato) => {
            return {
                "id": contrato.idColumn,
                "nombre": (contrato.nombre) ? contrato.nombre : "Sin nombre",
                "numeroAcciones": (contrato.ACCIONES) ? contrato.ACCIONES.length : 0
            }
        })       

 
    }
}