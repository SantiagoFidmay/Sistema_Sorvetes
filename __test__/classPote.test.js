import { Pote } from '../models/Pote.js'

describe('Teste da Classe de Pote', () => {

    test('Calculo do Volume do Pote', () => {
        const pote = new Pote(2, 2)
        const volume = pote.calcularVolume()
        pote.resumo()

        expect(volume).toBeCloseTo(25.13, 2)
    })
})