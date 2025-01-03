"use client"

import { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import Register from "@/app/components/auth/Register"
import Login from "@/app/components/auth/Login"
import { useGeneralStore } from "../stores/general"

export default function AuthOverlay() {
    let { setIsLoginOpen } = useGeneralStore()

    let [isRegister, setIsRegister] = useState<boolean>(false)

    return (
        <> 
            <div
                id="AuthOverlay"
                className="fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50"
            >
                <div className="rerlative bg-white w-full max-w-[470px] h-[70%] p-4 rounded-lg">

                    <div className="w-full flex justify-end">
                        <button
                            onClick={() => setIsLoginOpen(false)}
                            className="p-1.5 rounded-full bg-gray-100"
                        >
                            <AiOutlineClose size="26" />
                        </button>
                    </div>

                    {isRegister ? <Register /> : <Login />}

                    <div className="relative flex items-center justify-center py-5 left-0 bottom-0 border-t w-full">
                        <span className="text-[14px] text-gray-600">ยังไม่มีบัญชีผู้ใช่งาน?</span>

                        <button
                            onClick={() => setIsRegister(isRegister = !isRegister)}
                            className="text-[14px] text-[#eb1c24] font-semibold pl-1"
                        >
                            <span>{!isRegister ? 'ลงทะเบียน' : 'ล็อกอิน'}</span>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}