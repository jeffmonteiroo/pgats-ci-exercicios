import { ServicoDePagamento } from '../src/servicoDePagamento.js';
import assert from 'node:assert';

describe('Testando a Classe ServicoDePagamento', function () {
    it('Validar que ao realizar um pagamento acima de 100.00 a categoria é cara', function () {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();
        const codigoDeBarras = '0987-7656-3475';
        const empresa = 'Samar';
        const valor = 156.87;
        const categoriaEsperada = 'cara';

        // Act
        servicoDePagamento.pagar(codigoDeBarras, empresa, valor);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.categoria, categoriaEsperada);
    });

    it('Validar que ao realizar um pagamento igual ou abaixo de 100.00 a categoria é padrão', function () {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();
        const codigoDeBarras = '1234-5678-9012';
        const empresa = 'Companhia de Luz';
        const valor = 100.00;
        const categoriaEsperada = 'padrão';

        // Act
        servicoDePagamento.pagar(codigoDeBarras, empresa, valor);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.categoria, categoriaEsperada);
    });

    it('Validar que o método consultarUltimoPagamento retorna o último pagamento realizado', function () {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();
        const primeiroPagamento = {
            codigoBarras: '1111-2222-3333',
            empresa: 'Empresa A',
            valor: 50.00,
            categoria: 'padrão'
        };
        const segundoPagamento = {
            codigoBarras: '4444-5555-6666',
            empresa: 'Empresa B',
            valor: 250.00,
            categoria: 'cara'
        };

        // Act
        servicoDePagamento.pagar(primeiroPagamento.codigoBarras, primeiroPagamento.empresa, primeiroPagamento.valor);
        servicoDePagamento.pagar(segundoPagamento.codigoBarras, segundoPagamento.empresa, segundoPagamento.valor);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoBarras, segundoPagamento.codigoBarras);
        assert.equal(ultimoPagamento.empresa, segundoPagamento.empresa);
        assert.equal(ultimoPagamento.valor, segundoPagamento.valor);
        assert.equal(ultimoPagamento.categoria, segundoPagamento.categoria);
    });
});
