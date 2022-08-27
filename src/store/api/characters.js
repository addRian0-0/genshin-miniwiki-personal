import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const charactersApi = createApi({
    reducerPath: "characters",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://genshin-app-api.herokuapp.com`
    }),
    endpoints: (builder) => ({
        getCharacters: builder.query({
            query: () => `/api/characters/`
        }),
        getCharacter: builder.query({
            query: (nameCharacter) => `/api/characters/info/${nameCharacter}`
        })
    })
});

export const { useGetCharactersQuery, useGetCharacterQuery } = charactersApi;