interface ILibro{
    titulo: string;
    isbn: string;
    id: number;
    numPaginas: number;
    autor: string;
    digital: boolean;
    formatos?: Array<string>;
}

//El ? indica que es opcional, puede que ese atributo venga o no