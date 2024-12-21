import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function TopNav() {
    const router = useRouter()
    const pathname = usePathname()

    const handleSearchName = (event: { target: { value: string } }) => {
        console.log(event.target.value)
    }

    return (
        <>
            <div id="TopNav" className="fixed bg-white z-30 flex items-center w-full border-b h-[60px]">
                <div className={`flex items-center justify-between gap-6 w-full px-4 mx-auto ${pathname === '/' ? 'max-w-[1150px]' : ''}`}>
                        <a href="/">
                        <img className="min-w-[115px] w-[115px]" src="/images/3k-logo.png" />
                        </a>

                        <div className="relative hidden md:flex items-center justify-end bg-[#F1F1F2] p-1 rounded-full max-w-[430px] w-full">
                            <input 
                                type="text"
                                onChange={handleSearchName}
                                className="w-full pl-3 my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none"
                                placeholder="ค้นหา"
                            />

                        </div>
                </div>
            </div>
        </>
    )
}
