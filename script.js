console.log("script carregou")
const displayResultado = document.querySelector("#resultado"); 

// Verifica se achou
if (!displayResultado) {
    console.error("Erro: O elemento com id 'Resultado' (com R maiúsculo) não foi encontrado no HTML!");
}

function getComputerChoice() {
    const choices = ["pedra", "papel", "tesoura"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return "Empate!";
    if (
        (playerSelection === "pedra" && computerSelection === "tesoura") ||
        (playerSelection === "papel" && computerSelection === "pedra") ||
        (playerSelection === "tesoura" && computerSelection === "papel")
    ) return "Você venceu!";
    return "Você perdeu!";
}

const botoes = document.querySelectorAll(".btn-escolha");

function iniciarRodada(e) {
    const escolhaJogador = e.currentTarget.id.toLowerCase();
    const escolhaComputador = getComputerChoice();
    const resultado = playRound(escolhaJogador, escolhaComputador);

    displayResultado.textContent = `Xandinho escolheu: ${escolhaComputador}. ${resultado}`;

    displayResultado.classList.remove("vitoria", "derrota", "empate")

    if(resultado==="Você venceu!") displayResultado.classList.add("vitoria")
    else if(resultado==="Você perdeu!") displayResultado.classList.add("derrota")
    else displayResultado.classList.add("empate")
}

botoes.forEach(botao => {
    botao.addEventListener("click", iniciarRodada);
});