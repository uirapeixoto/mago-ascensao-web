export interface Personagem {
    id: number;
    id_usuario: number;
    nome: string;
    jogador: string;
    natureza: string;
    essencia: string;
    comportamento: string;
    tradicao: string;
    cronica: string;
    conceito: string;
    cabala: string;
}

export interface Atributos {
    id_personagem: number;
    forca: number;
    destreza: number;
    vigor: number;
    carisma: number;
    manipulacao: number;
    aparencia: number;
    percepcao: number;
    inteligencia: number;
    raciocinio: number;
}

export interface Talentos {
    id: number;
    id_habilidade: number;
    prontidao: number;
    esportes: number;
    conciencia: number;
    briga: number;
    esquiva: number;
    expressao: number;
    intimidacao: number;
    lideranca: number;
    manha: number;
    labia: number;
}

export interface Pericias {
    id: number;
    id_habilidade: number;
    oficios: number;
    conducao: number;
    etiqueta: number;
    armas_fogo: number;
    meditacao: number;
    armas_brancas: number;
    atuacao: number;
    furtividade: number;
    sobrevivencia: number;
    tecnologia: number;
}

export interface Conhecimento {
    id: number;
    id_habilidade: number;
    academicos: number;
    computador: number;
    enigmas: number;
    investigacao: number;
    direito: number;
    linguistica: number;
    medicina: number;
    ocultismo: number;
    ciencia: number;
}

export interface Habilidades {
    id: number;
    idPersonagem: number;
    talentos: Talentos;
    Pericias: Pericias;
    conhecimento: Conhecimento;
}

export interface Esperas {
    id: number;
    id_personagem: number;
    correspondencia: number;
    entropia: number;
    forcas: number;
    vida: number;
    mente: number;
    materia: number;
    primordio: number;
    espirito: number;
    tempo: number;
}

export interface Antecedete {
    id: number;
    idPersonagem: number;
    nome: string;
}

export interface Vitalidade {
    id: number;
    id_personagem: number;
    escoriado: boolean;
    machucado: boolean;
    ferido: boolean;
    ferido_Gravimente: boolean;
    espancado: boolean;
    incapacitado: boolean;
}

export interface Ressonancia {
    id: number;
    id_personagem: number;
    dinamica: number;
    entropica: number;
    estatica: number;
}

export interface Combate {
    id: number;
    id_personagem: number;
    arma: string;
    dif: string;
    dano: number;
}

export interface Vantagens {
    id: number;
    id_personagem: number;
    arete: number;
    quintessencia: number;
    experiencia: number;
    antecedetes: Antecedete[];
    vitalidade: Vitalidade;
    ressonancia: Ressonancia;
    combate: Combate[];
}

export interface Preludio {
    id_personagem: number;
    texto: string;
}

export interface FichaPersonagem {
    personagem: Personagem;
    atributos: Atributos;
    habilidades: Habilidades;
    esperas: Esperas;
    vantagens: Vantagens;
    preludio: Preludio;
}

export interface Usuario {
    id: number;
    data_criacao: string;
    data_alteracao: string;
    nome: string;
    ficha_personagem: FichaPersonagem[];
}