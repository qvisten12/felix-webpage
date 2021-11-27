import Header from "../components/Header/Header";
import ProjectList from "../components/ProjectList/index";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Felix Ljungqvist - Portfolio</title>
      </Head>
      <Header />
      <hr />
      <ProjectList />
    </div>
  );
}
