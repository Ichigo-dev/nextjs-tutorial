import type { NextPage } from 'next'
import Link from 'next/link'

interface HelloProps {
    data: String;
}

const Hello = (aprops: HelloProps) => {
  return (
    <div>
      <p>Hello</p>
      <Link href="/">
        <a>to Top</a>
      </Link>
      <p>{aprops.data}</p>
    </div>
  );
};

export async function getServerSideProps() {
  const data: String = "Hello";

  return { props: { data: data } };
}

export default Hello;