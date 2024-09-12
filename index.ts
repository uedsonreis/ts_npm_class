import { stdin, stdout } from 'process'
import { createInterface, Interface } from 'readline/promises'

import { Carro } from './src/carro'
import { Equacao2Grau } from './src/equacao'

async function atividade1(readinput: Interface) {
    
    const consumoText = await readinput.question('Informe o consumo do carro: ')
    const qtdTnqPrincipalText = await readinput.question('Informe quantos litros cabem no tanque principal: ')
    const qtdTnqReservaText = await readinput.question('Informe quantos litros cabem no tanque reserva: ')

    const consumo = Number(consumoText)
    const qtdTnqPrincipal = Number(qtdTnqPrincipalText)
    const qtdTnqReserva = Number(qtdTnqReservaText)

    const carro = new Carro(consumo, qtdTnqPrincipal, qtdTnqReserva)

    console.log(`A autonomia total do carro é de ${carro.autonomiaTotal()} km.`)
    console.log(`A autonomia do carro até a reserva é de ${carro.autonomiaAteReserva()} km.`)
}

async function atividade2(readinput: Interface) {

    const textA = await readinput.question('Informe o valor de A: ')
    const textB = await readinput.question('Informe o valor de B: ')
    const textC = await readinput.question('Informe o valor de C: ')

    const a = Number(textA)
    const b = Number(textB)
    const c = Number(textC)

    const equacao = new Equacao2Grau(a, b, c)

    console.log(`As raízes da equação são [${equacao.calcular()}].`)
}

async function main() {
    const readinput = createInterface(stdin, stdout)

    await atividade2(readinput)

    readinput.close()
}

main()