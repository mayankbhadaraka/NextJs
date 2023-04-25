import React from "react";
import styles from "../../styles/Test.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  // console.log(data)
  return {
    props: { data: data },
  };
};

const index = ({ data }) => {
  // console.log(data)
  return (
    <div>
      <h1 className={styles.title}>Test Page</h1>
      {data.map(item => (
        <Link href={`/Test/${item.id}`} key={item.id}>
            <h3 className={styles.single}>{ item.name }</h3>
        </Link>
      ))}
    </div>
  );
};

export default index;
