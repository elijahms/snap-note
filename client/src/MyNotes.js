import {useState, useEffect} from 'react'

const MyNotes = () => {

    const [userEvents, setUserEvents] = useState(null) 

    useEffect(() => {
        // auto-login
        fetch("/api/events")
        .then((r) => r.json())
        .then((data) => {
            setUserEvents(data)
            console.log(data)
    }
        )

      }, []);

    
    return (
        <div>
            {userEvents && userEvents.map((e) => <p>{e.weekday}</p>)}
        </div>
    )
}

export default MyNotes
