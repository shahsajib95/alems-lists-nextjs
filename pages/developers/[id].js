export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map(dev => {
        return {
            params: { id: dev.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json()
    console.log()
    
    return {
        props: { dev: data }
    }
}

const Details = ({dev})  => {
    // console.log(data)
    return (
        <div>
            <h1>{dev.name}</h1>
            <p>{dev.email}</p>
            <p>{dev.website}</p>
            <p>{dev.address.city}</p>
        </div>
    );
}

export default Details;