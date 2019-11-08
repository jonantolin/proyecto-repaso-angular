interface IPeliculasService{

    getPeliculas(): angular.IPromise<Array<Pelicula>>;

    getPeliculasById(id: number): angular.IPromise<Pelicula>;

    delete(id: number): angular.IPromise<boolean>;

    crear(libro: Pelicula): angular.IPromise<boolean>;

    modificar(id: number, libro: Pelicula): angular.IPromise<boolean>;

}

class PeliculasService implements IPeliculasService{

    private http: ng.IHttpService;
    private ENDPOINT: string = "http://localhost:3000/peliculas/";

    constructor($http){
        this.http = $http;
    }

    getPeliculas(): any {
        
        let url = this.ENDPOINT;
        return this.http.get(url).then(res => {

            const peliculas = res.data.map( elem => {
                let peli = new Pelicula();
                peli.id = elem.id;
                peli.titulo = elem.titulo;
                peli.director = elem.director;
                peli.numOscars = elem.numOscars;
                peli.enVenta = elem.enVenta;
                peli.formatos = elem.formatos;

                return peli;
            });

            return peliculas;
        
        });

    }  
    
    getPeliculasById(id: number): angular.IPromise<Pelicula> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): angular.IPromise<boolean> {
        throw new Error("Method not implemented.");
    }
    crear(pelicula: Pelicula): angular.IPromise<boolean> {
        let url = this.ENDPOINT;
        let peliNueva = new Pelicula();

        peliNueva.titulo = pelicula.titulo;
        peliNueva.director = pelicula.director;
        peliNueva.numOscars = pelicula.numOscars;

        
        
        if(pelicula.enVenta){
            peliNueva.enVenta = true;
        }

        if(pelicula.enVenta){
            (pelicula.formatos.vhs) ? peliNueva.formatos.vhs = true : null;
            (pelicula.formatos.dvd) ? peliNueva.formatos.dvd = true : null;
            (pelicula.formatos.bluray) ? peliNueva.formatos.bluray = true : null;

        }

        let peliJson = {
                        "titulo": peliNueva.titulo,
                        "director": peliNueva.director,
                        "numOscars": peliNueva.numOscars,
                        "enVenta": peliNueva.enVenta,
                        "formatos": {
                                        "vhs":peliNueva.formatos.vhs,
                                        "dvd":peliNueva.formatos.dvd,
                                        "bluray":peliNueva.formatos.bluray
                                    }
                       };

        return this.http.post(url, peliJson).then(
            response => true
        );               
        
    }
    modificar(id: number, pelicula: Pelicula): angular.IPromise<boolean> {
        let url = this.ENDPOINT + id;
        let peliModificada = new Pelicula();

        peliModificada.id = pelicula.id;
        peliModificada.titulo = pelicula.titulo;
        peliModificada.director = pelicula.director;
        peliModificada.numOscars = pelicula.numOscars;

        
        
        if(pelicula.enVenta){
            peliModificada.enVenta = true;
        }

        if(pelicula.enVenta){
            (pelicula.formatos.vhs) ? peliModificada.formatos.vhs = true : null;
            (pelicula.formatos.dvd) ? peliModificada.formatos.dvd = true : null;
            (pelicula.formatos.bluray) ? peliModificada.formatos.bluray = true : null;

        }

        let peliJson = {
                        "id":peliModificada.id,
                        "titulo": peliModificada.titulo,
                        "director": peliModificada.director,
                        "numOscars": peliModificada.numOscars,
                        "enVenta": peliModificada.enVenta,
                        "formatos": {
                                        "vhs":peliModificada.formatos.vhs,
                                        "dvd":peliModificada.formatos.dvd,
                                        "bluray":peliModificada.formatos.bluray
                                    }
                       };
        return this.http.put(url, peliJson).then(
            response => true
        );

    }
  
}