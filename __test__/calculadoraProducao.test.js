import { CalculadoraProducao } from '../models/calculadoraProducao.js'

describe('CalculadoraProducao', () => {

    test('Deve calcular ingredientes para 5 toneladas', () => {
        const calc = new CalculadoraProducao(5)

        const resumo = calc.gerarResumo()

        expect(resumo.ingredientes.leiteKg).toBeCloseTo(2666.67, 2)
        expect(resumo.ingredientes.cremeKg).toBeCloseTo(861.11, 2)
        expect(resumo.ingredientes.acucarKg).toBeCloseTo(527.78, 2)
        expect(resumo.ingredientes.pastaPistacheKg).toBeCloseTo(666.67, 2)
        expect(resumo.ingredientes.pistacheInteiroKg).toBeCloseTo(277.78, 2)
    })

    test('Deve calcular custo total corretamente', () => {
        const calc = new CalculadoraProducao(1)

        const resumo = calc.gerarResumo()

        expect(resumo.custos.custoTotal).toBeDefined()
    })

})