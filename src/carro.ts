export class Carro {

    constructor(
        private consumo: number,
        private litrosTnqPrincipal: number,
        private litrosTnqReserva: number
    ) {}

    public autonomiaTotal() {
        return this.consumo * (this.litrosTnqPrincipal + this.litrosTnqReserva)
    }
    
    public autonomiaAteReserva() {
        return this.consumo * this.litrosTnqPrincipal
    }
}