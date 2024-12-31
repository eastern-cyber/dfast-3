"use client"

import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { UploadError } from "../types";
import UploadLayout from "../layouts/UploadLayout";
import { BiLoaderCircle, BiSolidCloudUpload } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { PiForkKnifeLight } from "react-icons/pi";
import { useUser } from "../context/user";
import useCreatePost from "../hooks/useCreatePost";

export default function Upload() {
    const contextUser = useUser()
    const router = useRouter()

    let [fileDisplay, setFileDisplay] = useState<string>('');
    let [caption, setCaption] = useState<string>('');
    let [file, setFile] = useState<File | null>(null);
    let [error, setError] = useState<UploadError | null>(null);
    let [isUploading, setIsUploading] = useState<boolean>(false);

    useEffect(() => {
        if (!contextUser?.user) router.push('/')
    }, [contextUser])

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (files && files.length > 0) {
            const file = files[0];
            const fileUrl = URL.createObjectURL(file);
            setFileDisplay(fileUrl);
            setFile(file);
        }
    }

    const discard = () => {
        setFileDisplay('')
        setFile(null)
        setCaption('')
    }

    const clearVideo = () => {
        setFileDisplay('')
        setFile(null)
    }

    const validate = () => {
        setError(null)
        let isError = false

        if (!file) {
            setError({ type: 'File', message: 'กรุณาเลือกวิดีโอคลิป' })
            isError = true
        } else if (!caption) {
            setError({ type: 'caption', message: 'กรุณาใส่ข้อความแค๊ปชั่น' })
            isError = true
        }
        return isError
    }

    const createNewPost = async () => {
        let isError = validate()
        if (isError) return
        if (!file || !contextUser?.user) return
        setIsUploading(true)

        try {
            await useCreatePost(file, contextUser?.user?.id, caption)
            router.push(`/profile/${contextUser?.user?.id}`)
            setIsUploading(false)
        } catch (error) {
            console.log(error)
            setIsUploading(false)
            alert(error)
        }
    }

    return (
        <>
            <UploadLayout>
                <div className="w-full mt-[80px] mb-[40px] bg-white shadow-lg rounded-md py-6 md:px-10 px-4">
                    <div>
                        <h1 className="text-[23px] font-semibold]">อัพโหลดวิดีโอ</h1>
                        <h2 className="text-gray-400 mt-1">โพสต์วิดีโอบนช่องของท่าน</h2>
                    </div>

                    <div className="mt-8 md:flex gap-6">
                        {!fileDisplay ? (
                            <label
                                htmlFor="fileInput"
                                className="
                                    md:mx-0
                                    mx-auto
                                    mt-4
                                    mb-6
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    w-full
                                    max-w-[260px]
                                    h-[470px]
                                    text-center
                                    p-3
                                    border-2
                                    border-dashed
                                    border-gray-300
                                    rounded-lg
                                    hover:bg-gray-100
                                    cursor-pointer
                                "
                            >
                                <BiSolidCloudUpload size="40" color="#b3b3b1" />
                                <p className="mt-4 text-[17px]">เลือกวิดีโอที่ต้องการ</p>
                                <p className="mt-1.5 text-gray-500 text-[13px]">หรือลากไฟล์มาไว้ที่นี่</p>
                                <p className="mt-12 text-gray-400 text-sm">MP4</p>
                                <p className="mt-2 text-gray-400 text-[13px]">ความยาวไม่เกิน 30 นาที</p>
                                <p className="mt-2 text-gray-400 text-[13px]">ขนาดไม่เกิน 2GB</p>
                                <label
                                    htmlFor="fileInput"
                                    className="px-2 py-1.5 mt-8 text-white text-[15px] w-[80%] bg-[#eb1c24]  rounded-sm cursor-pointer"
                                >
                                    เลือกไฟล์
                                </label>
                                <input 
                                    type="file"
                                    id="fileInput"
                                    onChange={onChange}
                                    hidden
                                    accept=".mp4"
                                />
                            </label>

                        ) : (
                            <div
                            className="
                                md:mx-0
                                mx-auto
                                mt-4
                                md:mb-12
                                mb-16
                                flex
                                items-center
                                justify-center
                                w-full
                                max-w-[260px]
                                h-[540px]
                                p-3
                                rounded-2xl
                                cursor-pointer
                                relative
                            "
                            >
                                {isUploading ? (
                                    <div className="absolute flex items-center justify-center z-20 bg-black h-full w-full rounded-[50px] bg-opacity-50">
                                        <div className="mx-auto flex items-center justify-center gap-1">
                                            <BiLoaderCircle className="animate-spin" color="#F12B56" size={30} />
                                            <div className="text-white font-bold">กำลังอัพโหลด...</div>
                                        </div>
                                    </div>

                                ) : null}

                                <img 
                                    className="absolute z-20 pointer-events-none"
                                    src="/images/mobile-case.png"
                                />

                                <img 
                                    className="absolute right-4 bottom-6 z-20"
                                    width="90"
                                    src="/images/3k-logo-white.png"
                                />
                                <video 
                                    autoPlay
                                    loop
                                    muted
                                    className="absolute rounded-xl object-cover z-10 p-[13px] w-full h-full"
                                    src={fileDisplay} 
                                />

                                <div className="absolute -bottom-12 flex items-center justify-between z-50 rounded-xl border w-full p-2 border-gray-300">
                                    <div className="flex items-center truncate">
                                        <AiOutlineCheckCircle size="16" className="min-w-[16px]" />
                                        <p className="text-[11px] pl-1 truncate text-ellipsis">
                                            {file ? file.name : ''}
                                        </p>
                                    </div>
                                    <button onClick={() => clearVideo()} className="text-[11px] ml-2 font-semibold">
                                        เปลี่ยน
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="mt-4 mb-6">
                            <div className="flex bg-[#F8F8F8] py-4 px-6">
                                <div>
                                    <PiForkKnifeLight className="mr-4" size="20" />
                                </div>
                                <div>
                                    <div className="text-semibold text-[15px] mb-1.5">แบ่งวิดีโอและแก้ไข</div>
                                    <div className="text-semibold text-[13px] text-gray-400">
                                        คุณสามารถแบ่งวิดีโอของคุณออกเป็นหลายส่วน ยกเลิกส่วนซ้ำซ้อน 
                                        และเปลี่ยนวิดีโอแนวนอนให้เป็นแนวตั้งได้
                                    </div>
                                </div>
                                <div className="flex justify-end max-w-[130px] w-full h-full text-center my-auto">
                                    <button className="px-8 py-1.5 text-white text-[15px] bg-[#eb1c24] rounded-sm">
                                        แก้ไข
                                    </button>
                                </div>
                            </div>

                            <div className="mt-5">
                                <div className="flex items-center justify-between">
                                    <div className="mb-1 text-[15px]">แค๊ปชั่น</div>
                                    <div className="text-gray-400 text-[12px]">{caption.length}/150</div>
                                </div>
                                <input
                                maxLength={150} 
                                    type="text"
                                    className="
                                        w-full
                                        border
                                        p-2.5
                                        rounded-md
                                        focus:outline-none
                                    "
                                    value={caption}
                                    onChange={event => setCaption(event.target.value)}
                                />
                            </div>
                            <div className="flex gap-3">
                                <button
                                    disabled={isUploading}
                                    onClick={() => discard()}
                                    className="px-10 py-2.5 mt-8 border text-[16px] hover:bg-gray-100 rounded-sm"
                                >
                                    ยกเลิก
                                </button>
                                <button
                                    disabled={isUploading}
                                    onClick={() => createNewPost()}
                                    className="px-10 py-2.5 mt-8 border text-[16px] text-white bg-[#eb1c24] rounded-sm"
                                >
                                    {isUploading ? <BiLoaderCircle className="animate-spin" color="#ffffff" size={25} /> : 'โพสต์'}
                                </button>
                            </div>

                            {error ? (
                                <div className="text-red-600 mt-4">
                                    {error.message}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </UploadLayout>
        </>
    )
}