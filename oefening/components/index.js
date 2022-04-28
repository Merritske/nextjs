import Link from "next/link"


export default function Layout({children}){
    return(
        <>
        <h1 className="title">De Hormonen</h1>
        <ul className="navbar">
  
   
            <Link href="/">
                 <li>
                Kalendar
            </li>
                </Link>       
                <Link href="/achtergrond">
                 <li>
                Achtergrond info
            </li>
                </Link>   
                <Link href="/links">
                 <li>
              Nuttige website's
            </li>
                </Link>       
        </ul>
        {children}

        <footer>
          <h3>2022 Merritske
              </h3>  
        </footer>
        </>
    )
}