class  Impuesto {
    constructor(montoBrutoAnual, deducciones){
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    get montoBrutoAnual(){
        return this._montoBrutoAnual;
    }
    set montoBrutoAnual(value){
        this._montoBrutoAnual = value;
    }
    get deducciones(){
        return this._deducciones;
    }
    set deducciones(value){
        this._deducciones = value;
    }
    
}

export {Impuesto}