export class CalculadoraProducao {
    constructor(metaToneladas){
        this.metaToneladas = metaToneladas
        this.metaKg = metaToneladas * 1000

        // Custo esperado de Mercado dos produtos, Mudar baseado no Valor de Mercado
        this.custoLeiteKg = 4.50
        this.custoCremeKg = 12.00
        this.custoAcucarKg = 3.80
        this.custoPastaPistacheKg = 140.00
        this.custoPistacheInteiroKg = 95.00
    }

    calcularIngredientes(tamanhoPote) {
        // Agora usa o valor dinâmico, se falhar por algum motivo, usa 900 como padrão
        const total = tamanhoPote || 900 
    
        this.leite = this.metaKg * (480 / total)
        this.creme = this.metaKg * (155 / total)
        this.acucar = this.metaKg * (95 / total)
        this.pastaPistache = this.metaKg * (120 / total)
        this.pistacheInteiro = this.metaKg * (50 / total)
    }

    calcularCustos() {
        this.custoLeite = this.leite * this.custoLeiteKg
        this.custoCreme = this.creme * this.custoCremeKg
        this.custoAcucar = this.acucar * this.custoAcucarKg
        this.custoPastaPistache = this.pastaPistache * this.custoPastaPistacheKg
        this.custoPistacheInteiro = this.pistacheInteiro * this.custoPistacheInteiroKg
    
        this.custoTotal = 
            this.custoLeite +
            this.custoCreme +
            this.custoAcucar +
            this.custoPastaPistache +
            this.custoPistacheInteiro
    }

    // Gerar o Resumo no index repassando o tamanho do pote
    gerarResumo(tamanhoPote){
        this.calcularIngredientes(tamanhoPote)
        this.calcularCustos()

        return {
            metaProducao: this.metaToneladas,

            ingredientes: {
                leiteKg: this.leite,
                cremeKg: this.creme,
                acucarKg: this.acucar,
                pastaPistacheKg: this.pastaPistache,
                pistacheInteiroKg: this.pistacheInteiro
            },

            custos: {
                custoLeite: "R$ " + this.custoLeite.toFixed(2),
                custoCreme: "R$ " + this.custoCreme.toFixed(2),
                custoAcucar: "R$ " + this.custoAcucar.toFixed(2),
                custoPastaPistache: "R$ " + this.custoPastaPistache.toFixed(2),
                custoPistacheInteiro: "R$ " + this.custoPistacheInteiro.toFixed(2),
                custoTotal: "R$ " + this.custoTotal.toFixed(2)
            }
        }
    }
}