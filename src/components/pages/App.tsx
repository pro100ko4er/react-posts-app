import React, { useEffect, useMemo, useRef, useState } from 'react';
import '../styles/global/App.css'
import PostList from '../common/PostList';
import { PostData } from '../common/PostItem';
import { useGetPageLimitPostsQuery } from '../services/PostService';
function App() {
  const [posts, setPosts] = useState<PostData[]>([])
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(10)
  const { data, error, isLoading } = useGetPageLimitPostsQuery({page, limit})
  const lastElement = useRef<HTMLDivElement>(null)
  const observer = useRef<IntersectionObserver>()
  useMemo(() => {
    if(page >= 11) {
      setPage(prev => prev = 1)
    }
  }, [page])
  useEffect(() => {
    if(data) {
    setPosts(prev => prev.concat(data))
    }
  }, [data])
  useEffect(() => {
    if(isLoading) return
    if(observer.current) observer.current.disconnect()
    if(!isLoading) {
    const callbackObserver = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if(entries[0].isIntersecting) {
          setPage(prev => prev + 1)
      }
    }
    observer.current = new IntersectionObserver(callbackObserver)
    console.log(lastElement.current)
    if(lastElement.current) {
    observer.current.observe(lastElement.current)
    }
  }
  }, [isLoading])
  return (
    <div className="App">
      {
      !isLoading && data
        ?
        <> 
        <PostList posts={posts} />
        <div ref={lastElement} style={{height: 20}}></div>
        </>
        :
        <h2>Загрузка постов...</h2>
      }
       
    </div>
  );
}

export default App;
