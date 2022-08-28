interface Props {
    id: string | number
    name: string
    range: number
    away: number
    available: boolean
}

const ReservationCard = ({ id, name, range, away, available }: Props) => {
    const color: string = !available ? 'text-gray-500' : ''

    return (
        <div className={`m-4 p-4 border-2 rounded-lg ${color}`}>
            <p className='border-b-2'>{name}</p>
            <p className='text-xl mt-4'>Range left: {range} kilometers</p>
            <p className='text-xl mt-4'>Away from you: {away} kilometers</p>
            <p className='text-xs mt-4'>Unique id (dev): {id}</p>
        </div>
    )
}

export default ReservationCard