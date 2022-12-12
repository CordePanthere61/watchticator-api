export interface Token {
    id: number,
    uuid: string,
    user: string,
    website: string,
    time: string
}

export interface Combinaison {
    id: number,
    website: string,
    mac: string,
    user: string,
    movements: string
}

export interface Acknowledgment {
    id: number,
    id_combinaison: number,
    time: string,
    completed: boolean
}