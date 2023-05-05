import groq from "groq";

export const modules = groq`
    *[_type == 'modules']
`;
