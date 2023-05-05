import { Layout } from "@/components/Layout";
import { Page } from "@/components/Page";
import client from "@/utils/client";
import Head from "next/head";
import React from "react";

interface modulesProps {}

const modules: React.FC<modulesProps> = ({ page }: any) => {
  return (
    <Layout>
      <Head>
        <title>GTR1 - {page.title}</title>
      </Head>
      <Page data={page} />
    </Layout>
  );
};
export async function getStaticPaths() {
  const pages = await client.fetch(
    `*[_type == "modules" && defined(slug.current)] {
        "slug": slug.current,
      }`
  );
  return {
    paths: pages.map((page: any) => [{ params: { slug: page.slug } }]).flat(),
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const page = await client.fetch(
    `
    *[_type == "modules" && slug.current == $slug][0]
  `,
    { slug }
  );
  return {
    props: {
      page,
    },
  };
}
export default modules;
