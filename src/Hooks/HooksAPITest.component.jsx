import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';






const HooksApiTest = () => {


    const [ postsData, setPosts ] = useState([]);

    const id = 1;
    const conditionalFetchTest = async () => {
        const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
        const postsJson = (await posts.json()).slice(0,20);
        setPosts(postsJson);
    }


    useEffect(()=>{
        fetchPosts()
    },[])



    useEffect(()=>{
        consoler();
    },[postsData])

    const fetchPosts = useCallback( async ()=>{
        const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
        const postsJson = (await posts.json()).slice(0,10);
        setPosts(postsJson);
    },[])



    const consoler = useCallback(()=>{
        console.log(postsData);
    },[])




    return (
        <div>
            {
                postsData.length > 0 &&
                postsData.map( postItem => {
                    return (
                        <p key={postItem.id}>{postItem.title}</p>
                    )
                })
            }
        </div >
    )
}

export default HooksApiTest;
