import { Produto } from "./Produto";
import { colors } from "../util/Colors";

export class ProdutoFisico extends Produto {
    private _tamanho: number; // tamanho do tênis (ex: 40)
    private _cor: string;

    constructor(id: number, nome: string, marca: string, preco: number, categoria: string, quantidade: number, tamanho: number, cor: string) {
        super(id, nome, marca, preco, categoria, quantidade);
        this._tamanho = tamanho;
        this._cor = cor;
    }

    public get tamanho() { return this._tamanho; }
    public set tamanho(tamanho: number) { this._tamanho = tamanho; }

    public get cor() { return this._cor; }
    public set cor(cor: string) { this._cor = cor; }

    public visualizar(): void {
        console.log(colors.bg.black, colors.fg.yellow,
            "\n\n*****************************************************", colors.reset);
        console.log("Dados do Produto:");
        console.log(colors.bg.black, colors.fg.yellow,
            "*****************************************************", colors.reset);
        console.log("ID: " + this.id);
        console.log("Nome: " + this.nome);
        console.log("Marca: " + this.marca);
        console.log("Categoria: " + this.categoria);
        console.log("Tamanho: " + this.tamanho);
        console.log("Cor: " + this.cor);
        console.log("Quantidade em estoque: " + this.quantidade);
        console.log("Preço: R$ " + this.preco.toFixed(2));
    }
}
