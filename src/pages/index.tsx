import { Layout } from "@/components/Layout";
import { Main } from "@/components/Main";
import { getHomeData } from "@/lib/sanity.client";
import Head from "next/head";

export default function Home({ homepage }: any) {
  console.log(homepage);
  return (
    <Layout>
      <Head>
        <title>GTR1 - Cours, Tds, Tps, Exams</title>
      </Head>
      <Main data={homepage} />
    </Layout>
  );
}

export async function getStaticProps() {
  const homepage = await getHomeData();
  return {
    props: {
      homepage,
    },
  };
}
