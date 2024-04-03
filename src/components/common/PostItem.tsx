import { Link } from 'react-router-dom'
import styles from '../styles/modules/common-modules/PostItem.module.css'

export interface PostData {
    id: number,
    title: string,
    body: string
}


export interface PostItemProps {
    post: PostData
}



export default function PostItem(props: PostItemProps) {
    const {post} = props
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleBlock}>
                <h2 className={styles.title}>{post.id}.{post.title}</h2>
                <div className={styles.bodyWrapper}>
                    <p className={styles.body}>
                        {post.body.length > 50 ? post.body.slice(0, 50) + '...' : post.body} {post.body.length >= 50 ? <Link to={`/posts/${post.id}`}>посмотреть</Link>  : <></>}
                    </p>
                </div>
            </div>
        </div>
    )
}