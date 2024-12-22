"use client";

import { useEffect } from "react";
import { PostMainCompTypes } from "../types";

export default function PostMain( { post }: PostMainCompTypes) {

    useEffect(() => {
        const video = document.getElementById(`video-${post?.id}`) as HTMLVideoElement
        const postMainElement = document.getElementById(`PostMain-${post.id}`);

        if (postMainElement) {
            let observer = new IntersectionObserver((entries) => {
                entries[0].isIntersecting ? video.play() : video.pause()
            }, { threshold: [0.6] })

            observer.observe(postMainElement);
        }
    }, [])
    return ( 
        <>
            <div id={`PostMain-${post.id}`} className="flex border-b py-6">
                
                <div className="cursor-pointer">
                    <img className="rounded-full max-h-[60px]" width="60" src={post?.profile?.image} />
                </div>
            </div>
        </>)
}