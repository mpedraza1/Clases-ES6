import { Cliente } from "./cliente.js";
import { Impuesto } from "./impuestos.js";

const impuestoUno = new Impuesto()
impuestoUno.montoBrutoAnual = 1000000;
impuestoUno.deducciones = 2000

const cliente1 = new Cliente ("ClienteUno", impuestoUno)

const resultadoCliente1 = cliente1.calcularImpuesto();
console.log(resultadoCliente1);