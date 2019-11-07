interface ILibro{
    _titulo: string;
    _isbn: string;
    id: number;
    _numPaginas: number;
    _autor: string;
    _digital: boolean;
    _formatos?: any;
}

//El ? indica que es opcional, puede que ese atributo venga o no