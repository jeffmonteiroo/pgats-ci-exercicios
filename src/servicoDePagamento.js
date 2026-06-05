export class ServicoDePagamento {
    constructor() {
        this.pagamentos = [];
    }

    pagar(codigoBarras, empresa, valor) {
        const pagamento = {
            codigoBarras: codigoBarras,
            empresa: empresa,
            valor: valor
        };

        if (valor > 100.00) {
            pagamento.categoria = 'cara';
        } else {
            pagamento.categoria = 'padrão';
        }

        this.pagamentos.push(pagamento);
    }

    consultarUltimoPagamento() {
        return this.pagamentos.at(-1);
    }
}
