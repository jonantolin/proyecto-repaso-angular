class Formatos{

    private _epub: boolean;
    private _pdf: boolean;
    private _opf: boolean;


    constructor(){

        this._epub = false;
        this._pdf = false;
        this._opf = false;

    }

    public get epub(): boolean {
        return this._epub;
    }

    public set epub(epub: boolean) {
        this._epub = epub;
    }

    public get pdf(): boolean {
        return this._pdf;
    }

    public set pdf(pdf: boolean) {
        this._pdf = pdf;
    }

    public get opf(): boolean {
        return this._opf;
    }

    public set opf(opf: boolean) {
        this._opf = opf;
    }

    

    
}