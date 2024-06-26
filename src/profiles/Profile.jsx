import { Link, useLoaderData } from 'react-router-dom'

export default function Profile() {
    const careers = useLoaderData()

    return (
        <div className="profiles">
            {careers.map((career) => (
                <Link
                    className="profiles__links"
                    to={'/'}
                    key={career.id}
                >
                    <p>{career.name}</p>
                    <p className="profiles__station">
                        Jobbar på: {career.company.name}
                    </p>
                </Link>
            ))}
        </div>
    )
}

// data loader
export const profileLoader = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
}