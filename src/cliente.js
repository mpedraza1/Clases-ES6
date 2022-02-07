class Cliente {
    constructor(nombre, impuesto){
        this._nombre = nombre;
        this._impuesto = impuesto
    }

    get getNombre(){
        return this._nombre
    }

    set setNombre(nombre){
        this._nombre = nombre
    }

    calcularImpuesto () {
        // ((𝑚𝑜𝑛𝑡𝑜𝐵𝑟𝑢𝑡𝑜𝐴𝑛𝑢𝑎𝑙 − 𝑑𝑒𝑑𝑢𝑐𝑐𝑖𝑜𝑛𝑒𝑠) * 21%)
        return (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21

}
 
};

export {Cliente}