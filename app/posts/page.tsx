'use client'
import { useEffect, useState } from "react";
import supabaseInstance from "../config/supabaseClient";
const FetchPosts = () => {
    const [posts,setPosts]=useState< { [x: string]: any; }[] |null|string >(null);

    useEffect(()=>{
        
        const fetchPosts=async () => {
            try{
            const {data,error}=await supabaseInstance.from("Posts").select();
            if(error){
                setPosts("could not fetch any post")
            }else{
                setPosts(data)
            };
            }
            catch(error){
                setPosts("could not fetch any post")
            }
        };
        fetchPosts()
        
    },[posts])
    return ( 
        <div>
            {
                posts !== null ? (
                    <div>
                        Posts:{JSON.stringify(posts)}
                    </div>
                ):(
                    <div>Loading ...</div>
                )
            }
        </div>
     );
}
 
export default FetchPosts;