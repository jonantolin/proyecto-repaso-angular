class Pelicula{


    private _id: number;
    private _titulo: string;
    private _director: string;
    private _numOscars: number;
    private _enVenta: boolean;
    private _formatos: FormatosPelis;


    constructor(){
        this._id = 0;
        this._titulo = "";
        this._director = "";
        this._numOscars = 0;
        this._enVenta = false;
        this._formatos = new FormatosPelis();
        
    }

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter titulo
     * @return {string}
     */
	public get titulo(): string {
		return this._titulo;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter titulo
     * @param {string} value
     */
	public set titulo(value: string) {
		this._titulo = value;
	}
    
    /**
     * Getter director
     * @return {string}
     */
	public get director(): string {
		return this._director;
	}

    /**
     * Getter numOscars
     * @return {number}
     */
	public get numOscars(): number {
		return this._numOscars;
	}

    /**
     * Getter enVenta
     * @return {boolean}
     */
	public get enVenta(): boolean {
		return this._enVenta;
	}

    /**
     * Getter formatos
     * @return {FormatosPelis}
     */
	public get formatos(): FormatosPelis {
		return this._formatos;
	}

    /**
     * Setter director
     * @param {string} value
     */
	public set director(value: string) {
		this._director = value;
	}

    /**
     * Setter numOscars
     * @param {number} value
     */
	public set numOscars(value: number) {
		this._numOscars = value;
	}

    /**
     * Setter enVenta
     * @param {boolean} value
     */
	public set enVenta(value: boolean) {
		this._enVenta = value;
	}

    /**
     * Setter formatos
     * @param {FormatosPelis} value
     */
	public set formatos(value: FormatosPelis) {
		this._formatos = value;
	}



    

}