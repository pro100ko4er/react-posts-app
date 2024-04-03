import { Link, useMatch } from 'react-router-dom'
import { useGetOnePostQuery } from '../services/PostService'
import styles from '../styles/modules/page-modules/PostPage.module.css'
import { useEffect, useState } from 'react'
import { PostData } from '../common/PostItem'




export default function PostPage() {
    const navigation = useMatch('/posts/:id')
    const id = navigation?.params.id
    const {data, error, isLoading} = useGetOnePostQuery(Number(id))
    return (
        <div className={styles.wrapper}>
            {!isLoading && data && data.length ? 
            <div className={styles.titleWrapper}>
                <h2 className={styles.title}>{data[0]?.id}.{data[0]?.title}</h2> 
                <p className={styles.body}>
                    {data[0]?.body}
                </p>
            </div>
            :
            !isLoading && !data ?
            <h1>Пост не найден</h1>
            :
            isLoading
            &&
            <h2>Загрузка...</h2>
            }
            <Link to={'/'}>
                Назад
            </Link>
        </div>
    )
}