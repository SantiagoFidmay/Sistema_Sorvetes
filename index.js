import { CalculadoraProducao } from './models/calculadoraProducao.js'

const calcProd = new CalculadoraProducao(5)

console.log(calcProd.gerarResumo())