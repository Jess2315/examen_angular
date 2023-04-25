export interface IPokemon {
    count: string
    results: IResultPokemones[]
}

export interface IResultPokemones {
    name: string
    url: string
}