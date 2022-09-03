export interface ICar {
    id: string
    name: string
    range: number
    away: number
    isAvailable: boolean
}

export interface ICarArray {
    cars: ICar[]
}
