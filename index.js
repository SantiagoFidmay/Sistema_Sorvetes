// Importando as classes criadas pelos Devs 1 e 2
import { CalculadoraProducao } from './models/calculadoraProducao.js';
import { Pote } from './models/Pote.js';

// Aguarda o HTML carregar completamente antes de rodar os scripts
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mapeando os elementos do HTML (Botões, Inputs e a div de Resposta)
    const btnCalcular = document.getElementById('btn-calcular');
    const btnLimpar = document.getElementById('btn-limpar');
    
    const selectMeta = document.getElementById('meta');
    const inputRaio = document.getElementById('raio');
    const inputAltura = document.getElementById('altura');
    const divResposta = document.getElementById('resposta');

    // 2. Ação do botão "Calcular"
    btnCalcular.addEventListener('click', () => {
        // Pegando os valores digitados/selecionados
        const raio = parseFloat(inputRaio.value);
        const altura = parseFloat(inputAltura.value);
        
        // O select de meta tem value="1000" para 1 tonelada (que são 1000kg). 
        // Como a classe espera a meta em toneladas, dividimos por 1000.
        const metaKg = parseFloat(selectMeta.value); 
        const toneladas = metaKg / 1000; 

        // Validação básica: se o usuário não preencheu o raio ou altura
        if (isNaN(raio) || isNaN(altura) || raio <= 0 || altura <= 0) {
            divResposta.innerHTML = '<p style="color: red;">⚠️ Por favor, preencha o Raio e a Altura do pote com valores maiores que zero!</p>';
            return;
        }

        // --- INTEGRAÇÃO DAS CLASSES ---
        
        // Instancia a Calculadora de Produção
        const calculadora = new CalculadoraProducao(toneladas);
        const resumoProducao = calculadora.gerarResumo();

        // Instancia o Pote
        const pote = new Pote(raio, altura);
        const volumePote = pote.calcularVolume();
        const pesoPote = pote.calcularPeso();
        const totalPotes = pote.quantosPotesCabem(toneladas);

        // --- EXIBIÇÃO NO HTML ---
        
        // Injetando o HTML com os resultados calculados dentro da div #resposta
        divResposta.innerHTML = `
            <h3>📊 Custos e Ingredientes (${toneladas} Tonelada/s)</h3>
            <ul>
                <li><strong>Pasta de Pistache (${resumoProducao.ingredientes.pastaPistacheKg} kg):</strong> ${resumoProducao.custos.custoPistache}</li>
                <li><strong>Base Láctea (${resumoProducao.ingredientes.baseLacteaKg} kg):</strong> ${resumoProducao.custos.custoBase}</li>
                <li><strong>Custo Total de Produção:</strong> <span style="color: green; font-weight: bold;">${resumoProducao.custos.custoTotal}</span></li>
            </ul>
            
            <h3 style="margin-top: 15px;">📦 Logística e Embalagem</h3>
            <ul>
                <li><strong>Volume do Pote:</strong> ${volumePote.toFixed(2)} cm³</li>
                <li><strong>Peso estimado por pote:</strong> ${pesoPote.toFixed(2)} g</li>
                <li><strong>Rendimento Total:</strong> A produção encherá aproximadamente <strong>${totalPotes.toLocaleString('pt-BR')}</strong> potes.</li>
            </ul>
        `;
    });

    // 3. Ação do botão "Limpar"
    btnLimpar.addEventListener('click', () => {
        // Zera os inputs
        inputRaio.value = '';
        inputAltura.value = '';
        
        // Volta os selects para a opção padrão (índice 1 = 5 toneladas / 900g)
        selectMeta.selectedIndex = 1; 
        document.getElementById('pote').selectedIndex = 1; 
        
        // Restaura a mensagem original
        divResposta.innerHTML = '<p>Selecione a meta, o pote, informe as dimensões e clique em "Calcular" para ver o relatório completo.</p>';
    });
});