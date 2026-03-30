export class CalculadoraProducao {
    constructor(metaToneladas){
        this.metaToneladas = metaToneladas

        this.metaKg = metaToneladas * 1000

        this.percentualPistache = 0.30
        this.percentualBase = 0.70

        this.custoPistacheKg = 120.00
        this.custoBaseKg = 18.50
    }

    calcularIngredientes(){
        this.qtdePistache = this.metaKg * this.percentualPistache
        this.qtdeBase = this.metaKg * this.percentualBase
    }

    calcularCustos() {
        this.custoPistache = this.qtdePistache * this.custoPistacheKg
        this.custoBase = this.qtdeBase * this.custoBaseKg

        this.custoTotal = this.custoPistache + this.custoBase
    }

    gerarResumo(){
        this.calcularIngredientes()
        this.calcularCustos()

        return {
            metaProducao: this.metaToneladas + 5, //Aqui faz a mudança da quantidade de toneladas

            ingredientes: {
                pastaPistacheKg: this.qtdePistache,
                baseLacteaKg: this.qtdeBase
            },

            custos: {
                custoPistache: "R$ " + this.custoPistache.toFixed(2),
                custoBase: "R$ " + this.custoBase.toFixed(2),
                custoTotal: "R$ " + this.custoTotal.toFixed(2)
            }
        }
    }
}