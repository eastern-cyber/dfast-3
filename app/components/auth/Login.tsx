import { ShowErrorObject } from "@/app/types";
import { useState } from "react";
import TextInput from "../TextInput";
import { BiLoaderCircle } from "react-icons/bi";
import { useUser } from "@/app/context/user";
import { FiLogOut } from "react-icons/fi";

export default function Login() {

    const contextUser = useUser()

    const [loading, setLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string | ''>('');
    const [password, setPassword] = useState<string | ''>('');
    const [error, setError] = useState<ShowErrorObject | null>(null)

    const showError = (type: string) => {
        if (error && Object.entries(error).length >0 && error.type == type) {
            return error.message
        }
        return ''
    }

    const validate = () => {
        setError(null)
        let isError = false

        if (!email) {
            setError({ type: 'email', message: 'กรุณาระบุอีเมลล์แอดเดรส'})
            isError = true
        } else if (!password) {
            setError({ type: 'password', message: 'กรุณาระบุรหัสผ่าน'})
            isError = true
        }
        return isError
    }

    const login = async () => {
        let isError = validate()
        if (isError) return
        if (!contextUser) return

        try {
            setLoading(true)
            await contextUser.login(email, password)
            setLoading(false)
            // setIsLoadingOpen(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
            alert(error)
        }
    }

    return (
        <>
            <div>
                <h1 className="text-center text-[28px] mb-4 font-bold">ล็อกอิน</h1>
            
                <div className="px-6 pb-2">
                    <TextInput
                        string={email}
                        placeholder="อีเมลล์"
                        onUpdate={setEmail}
                        inputType="email"
                        error={showError('email')}
                    />
                </div>

                <div className="px-6 pb-2">
                    <TextInput
                        string={password}
                        placeholder="รหัสผ่าน"
                        onUpdate={setPassword}
                        inputType="password"
                        error={showError('password')}
                    />
                </div>

                <div className="px-6 pb-2 mt-6">
                    <button
                        disabled={loading}
                        onClick={() => login()}
                        className={`
                            flex items-center justify-center w-full text-[17px] font-semibold text-white py-3 rounded-sm
                            ${(!email || !password) ? 'bg-gray-200' : 'bg-[#eb1c24]'}
                        `}
                    >
                        {loading ? <BiLoaderCircle className="animate-spin" color="#ffffff" size={25} /> : 'ล็อกอิน'}
                    </button>
                </div>
            </div>
        </>
    )
}