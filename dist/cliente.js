class Cliente {
  constructor(nombre) {
    this.nombre = nombre;
    this.impuesto = impuesto;
  }

  get getNombre() {
    return this.nombre;
  }

  set setNombre(nombre) {
    this.nombre = nombre;
  }

}

const calcularImpuesto = () => {
  // ((𝑚𝑜𝑛𝑡𝑜𝐵𝑟𝑢𝑡𝑜𝐴𝑛𝑢𝑎𝑙 − 𝑑𝑒𝑑𝑢𝑐𝑐𝑖𝑜𝑛𝑒𝑠) * 21%)
  return (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21;
};

export { Cliente };