import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Result from "../components/Result";
import requests from "../utils/requests";

export default function Home(props) {
  console.log(props);
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Result />
    </div>
  );
}

export async function GetServerSideProps(context) {
  const genre = context.query.genre;

  // const request1 = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then((res) => res.json());

  const request2 = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=38ba003f471027424263d4c52f16a25c`).then(function(res){
    console.log(res.status);
  });
  const data = await request2.json();
  console.log(data);
  return {
    props: {
     result: data.results,
    },
  };
}