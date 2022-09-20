import type { ICar } from "../interfaces/interfaces"

const ReservationCard = ({ id, name, range, away, isAvailable }: ICar) => {
    const color: string = !isAvailable ? ' text-gray-500' : ''

    return (
        <div className={`flex flex-col items-center justify-center m-4 p-4 border-2 rounded-lg${color}`}>
            <p className='border-b-2'>{name}</p>
            <p className='text-xl mt-4'>Range left: {range} kilometers</p>
            <p className='text-xl mt-4'>Away from you: {away} kilometers</p>
            <p className='text-xs mt-4'>Unique id (dev): {id}</p>
            <div className='flex flex-row gap-8 text-xl mt-2'>
                <button className='text-orange-500'>Update</button>
                <button className='text-red-500'>Delete</button>
            </div>
        </div>
    )
}

export default ReservationCard
