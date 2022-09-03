import type { GetStaticProps } from "next"
import type { ICarArray } from "../interfaces/interfaces"
import ReservationCard from "./ReservationCard"

export const getStaticProps: GetStaticProps = async () => {
    console.log("getServerSideProps is working :)")

    const apiUrl = 'https://jsonplaceholder.typicode.com/todos'
    const res = await fetch(apiUrl)
    const cars: ICarArray = await res.json()

    return {
        props: {
            cars
        }
    }
}

const Reservations = ({ cars }: ICarArray) => {
    return (
        <div className='grid-cols-3 text-3xl p-2'>
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
        </div>
    )
}

export default Reservations