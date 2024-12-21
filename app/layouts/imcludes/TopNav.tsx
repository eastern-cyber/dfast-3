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

                            <div className="absolute bg-white max-w-[910px] h-auto w-full z-20 left-0 top-12 border p-1">
                                <div className="p-1">
                                    <a href="/profile/1" className="flex items-center justify-between w-full cursor-pointer hover:bg-[#F12B56] p-1 px-2 hover:text-white" rel="stylesheet">
                                    <div className="flex items-center">
                                        <img className="rounded-md" width="40" src="https://placehold.co/400" />
                                        <div className="truncate ml-2">Mac Paramee</div>
                                    </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                </div>
            </div>
        </>
    )
}
