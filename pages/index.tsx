import { Navbar } from "@/src/components/navbar";
import { HomeContainer } from "@/styles/home.styles";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Entendendo a Renda Fixa</title>
      </Head>
      <Navbar />
      <HomeContainer>
        <p></p>
      </HomeContainer>
    </>
  );
}
