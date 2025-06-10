import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ProdutoFisico } from "./src/model/ProdutoFisico";
import { ProdutoController } from "./src/controller/ProdutoController";

export function main() {

    let produtos: ProdutoController = new ProdutoController();

    produtos.cadastrar(new ProdutoFisico(produtos.gerarId(), "Nike Revolution", "Nike", 299.90, "Esportivo", 10, 41, "Preto"));
    produtos.cadastrar(new ProdutoFisico(produtos.gerarId(), "Adidas RunFalcon", "Adidas", 279.90, "Corrida", 8, 40, "Azul"));
    produtos.cadastrar(new ProdutoFisico(produtos.gerarId(), "Olympikus Tube", "Olympikus", 189.90, "Casual", 15, 39, "Branco"));

    let opcao: number, id: number, preco: number, quantidade: number, tamanho: number;
    let nome: string, marca: string, categoria: string, cor: string;


    while (true) {
        console.log(colors.bg.black, colors.fg.greenstrong,
            "\n*****************************************************");
        console.log("                   OFFSHOES - E-COMMERCE             ");
        console.log("*****************************************************");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar Produtos                      ");
        console.log("            3 - Consultar Produto por ID             ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            6 - Sair                                 ");
        console.log("*****************************************************", colors.reset);

        opcao = readlinesync.questionInt("Entre com a opcao desejada: ");

        if (opcao == 6) {
            console.log(colors.fg.yellow, "\nOFFSHOES - O seu tênis está aqui!");
            sobre();
            console.log(colors.reset, "")
            process.exit(0);
        }

        try {
        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCadastrar Produto\n\n", colors.reset);

                nome = readlinesync.question("Nome: ");
                marca = readlinesync.question("Marca: ");
                categoria = readlinesync.question("Categoria: ");
                tamanho = readlinesync.questionInt("Tamanho (ex: 40): ");
                cor = readlinesync.question("Cor: ");
                quantidade = readlinesync.questionInt("Quantidade em estoque: ");
                preco = readlinesync.questionFloat("Preco (R$): ");

                produtos.cadastrar(new ProdutoFisico(
                    produtos.gerarId(), nome, marca, preco, categoria, quantidade, tamanho, cor
                ));

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar Produtos\n\n", colors.reset);
                produtos.listarTodos();
                keyPress()
                break;

            case 3:
                id = readlinesync.questionInt("ID do produto: ");
                produtos.procurarPorId(id);
                keyPress()
                break;

            case 4:
                id = readlinesync.questionInt("ID do produto para atualizar: ");
                // to do - corrigir o let de produto do PRODUTO CONTROLLER
                let produto = produtos.buscarNoArray(id);
                if (produto) {
                    nome = readlinesync.question("Nome: ");
                    marca = readlinesync.question("Marca: ");
                    categoria = readlinesync.question("Categoria: ");
                    tamanho = readlinesync.questionInt("Tamanho (ex: 40): ");
                    cor = readlinesync.question("Cor: ");
                    quantidade = readlinesync.questionInt("Quantidade em estoque: ");
                    preco = readlinesync.questionFloat("Preco (R$): ");

                    produtos.atualizar(new ProdutoFisico(
                        id, nome, marca, preco, categoria, quantidade, tamanho, cor
                    ));
                } else {
                    console.log("\nProduto não encontrado!");
                }
                keyPress()
                break;

            case 5:
                id = readlinesync.questionInt("ID do produto para apagar: ");
                produtos.deletar(id);
                keyPress()
                break;

            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);
                keyPress()
                break;
            } 
            } catch (error) {
                if (error instanceof AppError) {
                    console.log(colors.fg.red, error.message, colors.reset);
                } else {
                    console.log(colors.fg.red, "Erro inesperado!", colors.reset);
                }
                keyPress();
            }
    }
}

class AppError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "AppError";
    }
}

export function sobre(): void {
    console.log("\n****************************************");
    console.log("Projeto Desenvolvido por: Diego Cavalcanti");
    console.log("Email Profissional - cavalcanti@hotmail.com");
    console.log("github.com/diegocavalcanti-dev");
    console.log("****************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
