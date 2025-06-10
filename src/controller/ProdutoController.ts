import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
    private produtos: Produto[] = [];
    private proximoId: number = 1;

    public gerarId(): number {
        return this.proximoId++;
    }

    public procurarPorId(id: number): void {
        const produto = this.produtos.find(p => p.id === id);
        if (produto) produto.visualizar();
        else console.log("\nProduto não encontrado!");
    }

    public listarTodos(): void {
        if (this.produtos.length === 0) {
            console.log("\nNenhum produto cadastrado.");
        } else {
            for (const p of this.produtos) {
                p.visualizar();
            }
        }
    }

    public cadastrar(produto: Produto): void {
        this.produtos.push(produto);
        console.log("\nProduto cadastrado com sucesso!");
    }

    public atualizar(produto: Produto): void {
        const index = this.produtos.findIndex(p => p.id === produto.id);
        if (index !== -1) {
            this.produtos[index] = produto;
            console.log("\nProduto atualizado com sucesso!");
        } else {
            console.log("\nProduto não encontrado!");
        }
    }

    public deletar(id: number): void {
        const index = this.produtos.findIndex(p => p.id === id);
        if (index !== -1) {
            this.produtos.splice(index, 1);
            console.log("\nProduto removido!");
        } else {
            console.log("\nProduto não encontrado!");
        }
    }

    // to do - corrigir o id do Menu 
    public buscarNoArray(id: number): Produto | null {
        const produto = this.produtos.find((p) => p.id === id);
        return produto ? produto : null;
    }

}
