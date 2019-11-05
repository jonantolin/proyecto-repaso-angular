interface ILibrosService{


    /**
     * peticion GET para obtener todos los libros
     * @return angular.Ipromise<Array<ILibro>>
     */
    getLibros(): angular.IPromise<Array<ILibro>>;

    getLibroById(id: number): angular.IPromise<ILibro>;

    delete(id: number): angular.IPromise<boolean>;

    crear(libro: ILibro): angular.IPromise<boolean>;

    modificar(id: number, libro: ILibro): angular.IPromise<boolean>;

    //TODO getLibroById(id: number), delete(), create(), modificar

}

class LibrosService implements ILibrosService{

    private http: ng.IHttpService;
    private ENDPOINT: string = "http://localhost:3000/libros/";

    constructor($http){
        this.http = $http;
    }

    public getLibros = (): any => {
       let url = this.ENDPOINT;
       return this.http.get(url).then(res => res.data);
    }   
    
    public getLibroById(id: number): angular.IPromise<ILibro> {
        throw new Error("Method not implemented.");
    }
    public delete(id: number): angular.IPromise<boolean> {
        let url = this.ENDPOINT + id;
        return this.http.delete(url).then(res => true, res=> false);
    }
    public crear(libro: ILibro): angular.IPromise<boolean> {
        throw new Error("Method not implemented.");
    }
    public modificar(id: number, libro: ILibro): angular.IPromise<boolean> {
        let url = this.ENDPOINT + id;
        return this.http.put(url, libro).then(res => true, res=> false);
    }



    
}