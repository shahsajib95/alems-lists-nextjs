import styles from '../../styles/Developers.module.css';
import Link from 'next/Link';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { developers: data }
    }
}
const developers = ({ developers }) => {
    return (
        <div>
            <h1>All developers</h1>
            {developers.map(dev => (
                <div key={dev.id}>
                    <Link href={'/developers/' + dev.id}>
                        <a className={styles.single}>
                            <h3>{dev.name}</h3>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default developers;