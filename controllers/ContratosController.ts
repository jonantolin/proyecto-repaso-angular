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
    
    public contratosSinAcciones: Array<any>;
    public contratosConAcciones: Array<any>;
    public contratosConAcciones1a3: Array<any>;
    public contratosConAccionesMas3: Array<any>;

    public primerContratoSituacion: any;
    public ultimoContratoSituacion: any;

    public acciones: any;


    public contratosMapeados: Array<IContratoResumen>;
    
    public static $inject = ["$scope", "contratosJson"];

    constructor(private $scope:IContratosController, private contratosJson:any){

        console.log("ContratosController constructor");
        $scope.vm = this;
        $scope.vm.titulo = "Contratos";
        $scope.vm.contratos = this.contratosJson;
        $scope.vm.contratosSinAcciones = contratosJson.filter( contrato => !contrato.ACCIONES || contrato.ACCIONES.length == 0);
        $scope.vm.contratosConAcciones = contratosJson.filter( contrato => contrato.ACCIONES);
        $scope.vm.contratosConAcciones1a3 = $scope.vm.contratosConAcciones.filter( contrato => contrato.ACCIONES.length <= 3 && contrato.ACCIONES.length >= 1);
        $scope.vm.contratosConAccionesMas3 = $scope.vm.contratosConAcciones.filter( contrato => contrato.ACCIONES.length > 3);

        $scope.vm.primerContratoSituacion = $scope.vm.contratosConAcciones.find( contrato => contrato.ACCIONES.find(c => c.clave === "SITUACION"));

        // Otra forma de hacerlo: conseguir todos los contratos con ACCIONES.clave === "SITUACION" y en el html, poner la ultima posicion [array.length -1]
        //$scope.vm.ultimoContratoSituacion = $scope.vm.contratosConAcciones.filter(contrato => contrato.ACCIONES.filter(c => c.clave ==="SITUACION").length > 0);

        $scope.vm.ultimoContratoSituacion = $scope.vm.contratosConAcciones.reverse().find( contrato => contrato.ACCIONES.find(c => c.clave === "SITUACION"));

        let accionesDuplicadas: Array<any> = $scope.vm.contratos
            .filter(c => c.ACCIONES && c.ACCIONES.length > 0) // coger solo arrays con datos
            .map(c => c.ACCIONES)                             // quedarnos con las acciones            
            .reduce(function(a, b) {                          // reducir los subarrays a 1 array                             
                return a.concat(b);
            })            
            .map(x => x.titulo);                              // quedarnos con el titulo de la accion

        $scope.vm.acciones = [...new Set(accionesDuplicadas)].sort(); // eliminar duplicados y ordena

        $scope.vm.contratosMapeados = contratosJson.map((contrato) => {
            return {
                "id": contrato.idColumn,
                "nombre": (contrato.nombre) ? contrato.nombre : "Sin nombre",
                "numeroAcciones": (contrato.ACCIONES) ? contrato.ACCIONES.length : 0
            }
        })       

 
    }
}