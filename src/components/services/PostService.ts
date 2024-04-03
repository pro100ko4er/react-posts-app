import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { PostData } from '../common/PostItem'


export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => ({
                url: '/posts',
            })
        }),
        getLimitPosts: builder.query<PostData[], number>({
            query: (limit) => ({
                url: `/posts`,
                params: {
                    _limit: limit
                }
            })
        }),
        getPagePosts: builder.query<PostData[], number>({
            query: (page) => ({
                url: `/posts`,
                params: {
                    _page: page
                }
            })
        }),
        getPageLimitPosts: builder.query<PostData[], {page: number, limit: number}>({
            query: ({page, limit}) => ({
                url: `/posts`,
                params: {
                    _limit: limit,
                    _page: page
                }
            })
        }),
        getOnePost: builder.query<PostData[], number>({
            query: (id) => ({
              url: '/posts',
              params: {
                id
              }  
            })
        })
    })
})

export const { useGetLimitPostsQuery, useGetPageLimitPostsQuery, useGetOnePostQuery } = postApi