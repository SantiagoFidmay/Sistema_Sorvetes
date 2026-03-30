import { CalculadoraProducao } from '../src/calculadoraProducao.js'

describe('CalculadoraProducao', () => {

    test('deve calcular ingredientes para 1 tonelada', () => {
        const calc = new CalculadoraProducao(1)

        const resumo = calc.gerarResumo()

        expect(resumo.ingredientes.pastaPistacheKg).toBe(300)
        expect(resumo.ingredientes.baseLacteaKg).toBe(700)
    })

    test('deve calcular custo total corretamente', () => {
        const calc = new CalculadoraProducao(1)

        const resumo = calc.gerarResumo()

        expect(resumo.custos.custoTotal).toBe("R$ 48950.00")
    })

})