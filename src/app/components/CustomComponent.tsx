import { PortableTextComponents } from '@portabletext/react';

export const components: PortableTextComponents = {
    block: {
        h2: ({ children }) => (
            <h2 className="text-rose-600 py-4 text-2xl font-bold border-b-2 border-rose-400">
                {children}
            </h2>
        ),
        h1: ({ children }) => (
            <h1 className="text-rose-600 py-4 text-3xl font-bold border-b-4 border-rose-600">
                {children}
            </h1>
        ),
        h3: ({ children }) => (
            <h3 className="text-gray-800 py-2 text-xl italic font-bold border-l-4 border-gray-500 pl-4">
                {children}
            </h3>
        ),
    },

    listItem: {
        bullet: ({ children }) => (
            <li className="list-disc ml-6 text-gray-700 leading-relaxed">
                {children}
            </li>
        ),
    },

    marks: {
        strong: ({ children }) => (
            <strong className="font-bold text-black">
                {children}
            </strong>
        ),
    },
};
