import type { ICarArray } from "../interfaces/interfaces"
import ReservationCard from "./ReservationCard"
import NewReservationCard from "./NewReservationCard"

const Reservations = ({ cars }: ICarArray) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 text-3xl p-2'>
            {cars?.map(car => (
                <ReservationCard
                    key={car.id}
                    id={car.id}
                    name={car.name}
                    range={car.range}
                    away={car.away}
                    isAvailable={car.isAvailable}
                />
            ))}
            <NewReservationCard />
        </div>
    )
}

export default Reservations