import { useState } from 'react'

const NewReservationCard = () => {
    const [name, setName] = useState('');
    const [range, setRange] = useState(0);
    const [away, setAway] = useState(0.0);

    const handleSubmit = async () => {
        const form = {
            "name": name,
            "range": range,
            "away": away,
            "isAvailable": true
        }

        console.log(JSON.stringify(form))

        const apiUrl = 'https://localhost:3001/api'
        const res = await fetch(apiUrl, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(form)
        })
    }

    return (
        <form onSubmit={handleSubmit} className={`flex flex-col gap-2 items-center justify-center m-4 p-4 border-2 rounded-lg`}>
            <label>Name:
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='ml-6 mt-2 rounded-full text-center w-40' />
            </label>
            <label>Range:
                <input min={0} size={4} type='number' value={range} onChange={(e) => setRange(+e.target.value)} className='ml-6 mt-2 rounded-full text-center w-40' />
            </label>
            <label>Away:
                <input min={0} step={.1} type='number' value={away} onChange={(e) => setAway(+e.target.value)} className='ml-6 mt-2 rounded-full text-center w-40' />
            </label>

            <input type='submit' value='Add' className='text-xl mt-4 text-green-500' />
        </form>
    )
}

export default NewReservationCard