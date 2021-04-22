    export interface Personagem {
        Id: number;
        IdUsuario: number;
        Nome: string;
        Jogador: string;
        Natureza: string;
        Essencia: string;
        Comportamento: string;
        Tradicao: string;
        Conceito: string;
        Cabala: string;
    }

    export interface Atributos {
        IdPersonagem: number;
        Forca: number;
        Destreza: number;
        Vigor: number;
        Carisma: number;
        Manipulacao: number;
        Aparencia: number;
        Percepcao: number;
        Inteligencia: number;
        Raciocinio: number;
    }

    export interface Talentos {
        Id: number;
        IdHabilidade: number;
        Prontidao: number;
        Esportes: number;
        Conciencia: number;
        Briga: number;
        Esquiva: number;
        Expressao: number;
        Intimidacao: number;
        Lideranca: number;
        Manha: number;
        Labia: number;
    }

    export interface Pericias {
        Id: number;
        IdHabilidade: number;
        Oficios: number;
        Conducao: number;
        Etiqueta: number;
        Armas_Fogo: number;
        Meditacao: number;
        Armas_Brancas: number;
        Atuacao: number;
        Furtividade: number;
        Sobrevivencia: number;
        Tecnologia: number;
    }

    export interface Conhecimento {
        Id: number;
        IdHabilidade: number;
        Academicos: number;
        Computador: number;
        Enigmas: number;
        Investigacao: number;
        Direito: number;
        Linguistica: number;
        Medicina: number;
        Ocultismo: number;
        Ciencia: number;
    }

    export interface Habilidades {
        Id: number;
        IdPersonagem: number;
        Talentos: Talentos;
        Pericias: Pericias;
        Conhecimento: Conhecimento;
    }

    export interface Esperas {
        Id: number;
        IdPersonagem: number;
        Correspondencia: number;
        Entropia: number;
        Forcas: number;
        Vida: number;
        Mente: number;
        Materia: number;
        Primordio: number;
        Espirito: number;
        Tempo: number;
    }

    export interface Antecedete {
        Id: number;
        IdPersonagem: number;
        nome: string;
    }

    export interface Vitalidade {
        Id: number;
        IdPersonagem: number;
        Escoriado: boolean;
        Machucado: boolean;
        Ferido: boolean;
        Ferido_Gravimente: boolean;
        Espancado: boolean;
        Incapacitado: boolean;
    }

    export interface Ressonancia {
        Id: number;
        IdPersonagem: number;
        Dinamica: number;
        Entropica: number;
        Estatica: number;
    }

    export interface Combate {
        Id: number;
        IdPersonagem: number;
        Arma: string;
        Dif: string;
        Dano: number;
    }

    export interface Vantagens {
        Id: number;
        IdPersonagem: number;
        Arete: number;
        Quintessencia: number;
        Experiencia: number;
        Antecedetes: Antecedete[];
        Vitalidade: Vitalidade;
        Ressonancia: Ressonancia;
        Combate: Combate[];
    }

    export interface FilchaPersonagem {
        Personagem: Personagem;
        Atributos: Atributos;
        Habilidades: Habilidades;
        Esperas: Esperas;
        Vantagens: Vantagens;
    }

    export interface Usuario {
        Id: number;
        DataCriacao: string;
        DataAlteracao: string;
        Nome: string;
        FilchaPersonagem: FilchaPersonagem[];
    }