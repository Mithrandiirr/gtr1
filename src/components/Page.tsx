import Link from "next/link";
import React from "react";
import Png from "../components/png-icon.png";
import Image from "next/image";
import { buildFileUrl } from "@sanity/asset-utils";
interface PageProps {
  data: any;
}

export const Page: React.FC<PageProps> = ({ data }) => {
  const getUrlFromId = (ref: string) => {
    // Example ref: file-207fd9951e759130053d37cf0a558ffe84ddd1c9-mp3
    // We don't need the first part, unless we're using the same function for files and images
    const [_file, id, extension] = ref.split("-");

    return `https://cdn.sanity.io/files/afozw2hi/production/${id}.${extension}`;
  };
  return (
    <div className="max-w-[1560px]  py-4  mx-auto gr px-4">
      <div className="flex flex-row table:flex-col table:gap-8 table:text-center">
        <Link href={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-narrow-left"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M5 12l4 4" />
            <path d="M5 12l4 -4" />
          </svg>
        </Link>
        <h1 className="text-2xl font-semibold flex-1 flex flex-row  justify-center small:text-xl ">
          {data.title}
        </h1>
      </div>
      <section>
        <div className=" py-8 gap-y-12 flex flex-col px-12 table:px-4">
          {data.content?.map((c: any) => (
            <>
              <h3 className="text-xl font-bold uppercase table:text-base">
                {c._type}
              </h3>
              <div className="flex flex-row gap-16 flex-wrap">
                {c.data?.map((d: any) => (
                  <a
                    key={d._key}
                    href={getUrlFromId(d.type.asset._ref)}
                    className="flex flex-col gap-2 items-center table:items-center table:text-center"
                  >
                    <Image src={Png} alt="Png" width={64} />
                    <h2 className="text-xl table:text-base">{d.name}</h2>
                  </a>
                ))}
              </div>
            </>
          ))}
        </div>
      </section>
    </div>
  );
};
