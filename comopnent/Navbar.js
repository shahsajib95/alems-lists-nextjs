import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return ( <div>
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={50} height={50}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/developers"><a>Dev Listings</a></Link>
        </nav>
    </div> );
}
 
export default Navbar;