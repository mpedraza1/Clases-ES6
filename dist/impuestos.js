class Impuesto {
  constructor(montoBrutoAnual, deducciones) {
    this.montoBrutoAnual = montoBrutoAnual;
    this.deducciones = deducciones;
  }

  get montoBrutoAnual() {
    return this.montoBrutoAnual;
  }

  set montoBrutoAnual(value) {
    this.montoBrutoAnual = value;
  }

  get deducciones() {
    return this.deducciones;
  }

  set deducciones(value) {
    this.deducciones = value;
  }

}

export { Impuesto };