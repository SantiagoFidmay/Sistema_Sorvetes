import { CalculadoraProducao } from './models/calculadoraProducao.js'
import { Pote } from './models/Pote.js'

const calcProd = new CalculadoraProducao(5)
const pote = new Pote(2, 2)

pote.resumo()
console.log(calcProd.gerarResumo())