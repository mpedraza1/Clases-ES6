import { Cliente, Impuesto } from "./cliente.js";
const impuestoUno = new Impuesto();
impuestoUno.montoBrutoAnual = 10000;
impuestoUno.deducciones = 2000;
const cliente1 = new Cliente("ClienteUno", impuestoUno);
const resultadoCliente1 = cliente1.calcularImpuesto();
console.log(resultadoCliente1);