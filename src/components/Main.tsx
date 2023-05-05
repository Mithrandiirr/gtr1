import Link from "next/link";
import React from "react";

interface MainProps {
  data: any;
}

export const Main: React.FC<MainProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-8  table:grid-cols-2 phony:grid-cols-1 items-start">
      {data.map((m: any) => (
        <Link
          href={`/${m.slug.current}`}
          key={m._key}
          className="flex flex-col  w-full gr items-center h-full justify-center"
        >
          <div className="flex flex-row gap-3 items-center py-3 px-2   pr-8">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_7_7)">
                <path
                  d="M5 6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H8C8.26522 5 8.51957 5.10536 8.70711 5.29289C8.89464 5.48043 9 5.73478 9 6V20C9 20.2652 8.89464 20.5196 8.70711 20.7071C8.51957 20.8946 8.26522 21 8 21H6C5.73478 21 5.48043 20.8946 5.29289 20.7071C5.10536 20.5196 5 20.2652 5 20V6Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 6C9 5.73478 9.10536 5.48043 9.29289 5.29289C9.48043 5.10536 9.73478 5 10 5H12C12.2652 5 12.5196 5.10536 12.7071 5.29289C12.8946 5.48043 13 5.73478 13 6V20C13 20.2652 12.8946 20.5196 12.7071 20.7071C12.5196 20.8946 12.2652 21 12 21H10C9.73478 21 9.48043 20.8946 9.29289 20.7071C9.10536 20.5196 9 20.2652 9 20V6Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 9H9"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 17H13"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.803 5.56L15.987 5.03C16.549 4.895 17.12 5.22 17.269 5.762L20.964 19.18C21.0292 19.4256 21.0003 19.6868 20.8831 19.9123C20.7658 20.1377 20.5686 20.3113 20.33 20.399L20.197 20.44L18.013 20.97C17.451 21.105 16.88 20.78 16.731 20.238L13.036 6.82C12.9708 6.57435 12.9997 6.31321 13.117 6.08773C13.2342 5.86225 13.4315 5.68867 13.67 5.601L13.803 5.56Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 10L18 9"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 17L19.923 16.02"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_7_7">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h2 className="text-lg font-medium small:flex small:flex-1">
              {m.title}
            </h2>
          </div>
          {/* <div className="flex flex-col">
            {m.content?.map((l: any) => (
              <Link
                key={l._key}
                href={`/${l._type}/${m.slug?.current}`}
                className="flex flex-row gap-3 items-center   py-2"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_7_412)">
                    <path
                      d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 9H10"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 13H15"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 17H15"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_7_412">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h3 className="text-lg">
                  {l._type == "tds" && "TDs"}
                  {l._type == "cours" && "Cours"}
                  {l._type == "exams" && "Exams"}
                </h3>
              </Link>
            ))}
          </div> */}
        </Link>
      ))}
    </div>
  );
};
