import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";

export function main() {

    let opcao: number;

    while (true) {


        console.log(colors.bg.black, colors.fg.greenstrong,
            "\n*****************************************************");
        console.log("                                                     ");
        console.log("                OFFSHOES - E-COMMERCE                       ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Adicionar Produto                    ");
        console.log("            2 - Listar Produtos                      ");
        console.log("            3 - Apagar Produto                       ");
        console.log("            4 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 4) {
            console.log(colors.fg.yellow,
                "\nE-commerce finalizado!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }
            
        switch (opcao) {
        case 1:
            console.log(colors.fg.whitestrong,
                "\n\nAdicionar Produto\n\n", colors.reset);

            break;
        case 2:
            console.log(colors.fg.whitestrong,
                "\n\nListar Produtos\n\n", colors.reset);

            break;
        case 3:
            console.log(colors.fg.whitestrong,
                "\n\nApagar Produto\n\n", colors.reset);

            break;
        default:
            console.log(colors.fg.whitestrong,
                "\nOpção Inválida!\n", colors.reset);

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

main();