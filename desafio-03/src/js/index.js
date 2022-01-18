let nomeHospede = prompt('Olá. Como você se chama?')
let vaiSeHospedar = confirm(`Seja bem-vindo(a), ${nomeHospede}! Gostaria de pagar R$50,00 para passar a noite na nossa hospedagem?`)

if (vaiSeHospedar) {
    alert('Ótimo! Nós temos as melhores camas de toda a região!')
} else {
    alert('Que pena! Você parecia ser uma pessoa mais legal!')
}