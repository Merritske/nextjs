import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function Layout({children}){
    return(
        <>
        <ul className={styles.title}>
            <Link href="/">
            <li>Home</li>
            </Link>
            <Link href="/blog">
            <li>Blog</li>
            </Link>
            <Link href="/contact">
            <li>Contact</li>
            </Link>
        </ul>
{children}

        <footer>
<h3> 2022</h3>
        </footer>
        </>
    )
}