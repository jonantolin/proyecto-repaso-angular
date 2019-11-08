class FormatosPelis{

    private _vhs: boolean;
    private _dvd: boolean;
    private _bluray: boolean;

    constructor(){
        this._vhs = false;
        this._dvd = false;
        this._bluray = false;
    }

    /**
     * Getter vhs
     * @return {boolean}
     */
	public get vhs(): boolean {
		return this._vhs;
	}

    /**
     * Getter dvd
     * @return {boolean}
     */
	public get dvd(): boolean {
		return this._dvd;
	}

    /**
     * Getter bluray
     * @return {boolean}
     */
	public get bluray(): boolean {
		return this._bluray;
	}

    /**
     * Setter vhs
     * @param {boolean} value
     */
	public set vhs(value: boolean) {
		this._vhs = value;
	}

    /**
     * Setter dvd
     * @param {boolean} value
     */
	public set dvd(value: boolean) {
		this._dvd = value;
	}

    /**
     * Setter bluray
     * @param {boolean} value
     */
	public set bluray(value: boolean) {
		this._bluray = value;
	}
    



}