export class Pote {
    constructor(raio, altura) {
        this.raio = raio
        this.altura = altura
        this.densidade = 0.6
    }

    calcularVolume() {
        return Math.PI * (this.raio * this.raio) * this.altura
    }

    calcularPeso() {
        return this.calcularVolume() * this.densidade
    }

    quantosPotesCabem(toneladas) {
        const pesoTotalEmGramas = toneladas * 1_000_000
        const pesoPorPote = this.calcularPeso()
        return Math.floor(pesoTotalEmGramas / pesoPorPote)
    }

    resumo() {
        const volume = this.calcularVolume()
        const peso = this.calcularPeso()

        console.log("=== Pote de Pistache ===")
        console.log(`Raio:        ${this.raio} cm`)
        console.log(`Altura:      ${this.altura} cm`)
        console.log(`Volume:      ${volume.toFixed(2)} cm³`)
        console.log(`Peso/pote:   ${peso.toFixed(2)} g`)
        console.log(`Densidade:   ${this.densidade} g/cm³\n`)

        const uma = this.quantosPotesCabem(1)
        const cinco = this.quantosPotesCabem(5)
        const dose = this.quantosPotesCabem(12)
        console.log(`1 tonelada(s) dão ${uma} potes`)
        console.log(`5 tonelada(s) dão ${cinco} potes`)
        console.log(`12 tonelada(s) dão ${dose} potes`)
        
    }
}