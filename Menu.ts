import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ProdutoFisico } from "./src/model/ProdutoFisico";
import { Produto } from "./src/model/Produto";

export function main() {

    let produtos: Produto[] = [];
    let id: number = 1;
    let opcao: number, preco: number, quantidade: number, tamanho: number;
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

                produtos.push(new ProdutoFisico(
                    id++, nome, marca, preco, categoria, quantidade, tamanho, cor
                ));

                keyPress();
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar Produtos\n\n", colors.reset);
                for (const produto of produtos) {
                    produto.visualizar();
                }
                keyPress();
                break;

            case 3:
                const idConsulta = readlinesync.questionInt("ID do produto: ");
                const encontrado = produtos.find(p => p.id === idConsulta);
                if (encontrado) {
                    encontrado.visualizar();
                } else {
                    console.log("\nProduto não encontrado!");
                }
                keyPress();
                break;

            case 4:
                const idAtualizar = readlinesync.questionInt("ID do produto para atualizar: ");
                const indice = produtos.findIndex(p => p.id === idAtualizar);
                if (indice !== -1) {
                    nome = readlinesync.question("Nome: ");
                    marca = readlinesync.question("Marca: ");
                    categoria = readlinesync.question("Categoria: ");
                    tamanho = readlinesync.questionInt("Tamanho (ex: 40): ");
                    cor = readlinesync.question("Cor: ");
                    quantidade = readlinesync.questionInt("Quantidade em estoque: ");
                    preco = readlinesync.questionFloat("Preco (R$): ");

                    produtos[indice] = new ProdutoFisico(
                        idAtualizar, nome, marca, preco, categoria, quantidade, tamanho, cor
                    );
                    console.log("Produto atualizado com sucesso!");
                } else {
                    console.log("\nProduto não encontrado!");
                }
                keyPress();
                break;

            case 5:
                const idDeletar = readlinesync.questionInt("ID do produto para apagar: ");
                const pos = produtos.findIndex(p => p.id === idDeletar);
                if (pos !== -1) {
                    produtos.splice(pos, 1);
                    console.log("Produto removido!");
                } else {
                    console.log("\nProduto não encontrado!");
                }
                keyPress();
                break;

            default:
                console.log(colors.fg.whitestrong, "\nopcao Inválida!\n", colors.reset);
                keyPress();
                break;
        }
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
