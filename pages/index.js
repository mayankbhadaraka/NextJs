import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Link from "next/link";
import styles from "../styles/Home.module.css"


export default function Home() {
  return (
   <div>
    <h1 className={styles.title}>Homepage</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, at impedit? Dolore perspiciatis corporis labore natus explicabo minima reiciendis, culpa dolorem ratione, eaque ipsa possimus!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt magni accusantium quod exercitationem dolorem est minus.</p>
    <Link href="/Test" className={styles.btn}>
      see MyList
    </Link>
   </div>
  )
}
