// import {v4 as uuidv4} from 'uuid'
import ReservationCard from "./ReservationCard"

const Reservations = () => {
    const list = [
        {
            id: 0,
            name: 'Renault Clio',
            range: 84,
            away: 4.7,
            available: true,
        },
        {
            id: 1,
            name: 'Renault Captur',
            range: 283,
            away: 13.2,
            available: true,
        },
        {
            id: 2,
            name: 'Renault Kadjar',
            range: 0,
            away: 23.4,
            available: false,
        },
        {
            id: 3,
            name: 'Renault Captur',
            range: 283,
            away: 13.2,
            available: false,
        },
        {
            id: 4,
            name: 'Renault Kadjar',
            range: 0,
            away: 23.4,
            available: false,
        },
    ]

    return (
        <div className='grid-cols-3 text-3xl p-2'>
            {list.map(item => (
                <ReservationCard 
                    key={item.id}
                    id={item.id} 
                    name={item.name} 
                    range={item.range} 
                    away={item.away} 
                    available={item.available} 
                />
            ))}
        </div>
    )
}

export default Reservations