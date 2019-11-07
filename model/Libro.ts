class Libro{
    
    private _titulo: string; 
    private _isbn: string;
    private _id: number;
    private _numPaginas: number;
    private _autor: string;
    private _digital: boolean;

    /**
     * Getter titulo
     * @return {string}
     */
	public get titulo(): string {
		return this._titulo;
	}

    /**
     * Getter isbn
     * @return {string}
     */
	public get isbn(): string {
		return this._isbn;
	}

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter numPaginas
     * @return {number}
     */
	public get numPaginas(): number {
		return this._numPaginas;
	}

    /**
     * Getter autor
     * @return {string}
     */
	public get autor(): string {
		return this._autor;
	}

    /**
     * Getter digital
     * @return {boolean}
     */
	public get digital(): boolean {
		return this._digital;
	}

    /**
     * Getter formatos
     * @return {any}
     */
	public get formatos(): any {
		return this._formatos;
	}

    /**
     * Setter titulo
     * @param {string} value
     */
	public set titulo(value: string) {
		this._titulo = value;
	}

    /**
     * Setter isbn
     * @param {string} value
     */
	public set isbn(value: string) {
		this._isbn = value;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter numPaginas
     * @param {number} value
     */
	public set numPaginas(value: number) {
		this._numPaginas = value;
	}

    /**
     * Setter autor
     * @param {string} value
     */
	public set autor(value: string) {
		this._autor = value;
	}

    /**
     * Setter digital
     * @param {boolean} value
     */
	public set digital(value: boolean) {
		this._digital = value;
	}

    /**
     * Setter formatos
     * @param {any} value
     */
	public set formatos(value: any) {
		this._formatos = value;
	}
    private _formatos: any;





    
}