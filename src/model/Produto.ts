import { colors } from "../util/Colors";

export abstract class Produto {
    private _id: number;
    private _nome: string;
    private _marca: string;
    private _preco: number;
    private _categoria: string; // Ex: "Tênis Esportivo", "Casual"
    private _quantidade: number;

    constructor(id: number, nome: string, marca: string, preco: number, categoria: string, quantidade: number) {
        this._id = id;
        this._nome = nome;
        this._marca = marca;
        this._preco = preco;
        this._categoria = categoria;
        this._quantidade = quantidade;
    }

    public get id() { 
        return this._id; 
    }
    public set id(id: number) {
        this._id = id; 
    }

    public get nome() { 
        return this._nome; 
    }
    public set nome(nome: string) { 
        this._nome = nome; 
    }

    public get marca() { 
        return this._marca; 
    }
    public set marca(marca: string) { 
        this._marca = marca; 
    }

    public get preco() { 
        return this._preco; 
    }
    public set preco(preco: number) { 
        this._preco = preco; 
    }

    public get categoria() { 
        return this._categoria; 
    }
    public set categoria(categoria: string) { 
        this._categoria = categoria; 
    }

    public get quantidade() { 
        return this._quantidade; 
    }
    public set quantidade(q: number) { 
        this._quantidade = q; 
    }

    // Método abstrato de visualização, para especialização
    public abstract visualizar(): void;
}
