import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const router = useRouter();
  const clickHandle = () => {
    console.log(router)
  };
  return (
    <div>
      <div>
        <Link href="/hello">
          <a>to Hello Page</a>
        </Link>
      </div>
      <div>
        <a href="/hello">to Hello Page by SSR</a>
      </div>
      <button
        onClick={() => {
          clickHandle();
        }}
      >
        to Hello Page by useRouter
      </button>
    </div>
  );
};

export default Home
