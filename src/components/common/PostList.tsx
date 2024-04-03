import PostItem, { PostData } from "./PostItem"

export interface PostListProps {
    posts: PostData[]
}


export default function PostList(props: PostListProps) {
    const {posts} = props
    return (
        <div className="wrapper">
            {posts.map(post => {
                return (
                    <PostItem post={post} />
                )
            })}
        </div>
    )
}