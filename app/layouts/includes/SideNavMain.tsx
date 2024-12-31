
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";
import ClientOnly from "@/app/components/ClientOnly";
import MenuItemFollow from "./MenuItemFollow";
import { useGeneralStore } from "@/app/stores/general";
import { useUser } from "@/app/context/user";
import { useEffect } from "react";

export default function SideNavMain() {

    let { setRandomUsers, randomUsers } = useGeneralStore()
    
    const contextUser = useUser()
    const pathname = usePathname()
    
    useEffect(() => { setRandomUsers() }, [])
    return (
        <>
            <div
                id="SideNavMain"
                className={`
                    fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto
                    ${pathname === '/' ? 'lg:w-[310px]' : 'lg:w-[220px]'}
                `}
            >
                <div className="lg:w-full w-[55px] mx-auto">
                    <a href="/">
                        <MenuItem
                        iconString="สำหรับคุณ"
                        colorString={pathname == '/' ? '#eb1c24' : ''}
                        sizeString="25"
                        />
                    </a>
                    <MenuItem iconString="ติดตาม" colorString="#000000" sizeString="25" />
                    <MenuItem iconString="ไลฟ์สด" colorString="#000000" sizeString="25" />

                    <div className="border-b lg:ml-2 mt-2" />
                    <h3 className="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">ผู้ที่ท่านควรติดตาม</h3>

                    <div className="lg:hidden block pt-3" />
                    <ClientOnly>
                        <div className="cursor-pointer">
                            {randomUsers.map((user, index) => (
                                <MenuItemFollow key={index} user={user} />
                            ))}
                        </div>
                    </ClientOnly>

                    <button className="lg:block hidden text-[#eb1c24] pt-1.5 pl-2 text-[13px]">
                        ดูทั้งหมด
                    </button>

                    {contextUser?.user?.id ? (
                        <div>
                            <div className="border-b lg:ml-2 mt-2" />
                            <h3 className="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">ผู้ที่ท่านติดตามแล้ว</h3>
                            
                            <div className="lg:hidden block pt-3" />
                            <ClientOnly>
                                <div className="cursor-pointer">
                                    {randomUsers.map((user, index) => (
                                        <MenuItemFollow key={index} user={user} />
                                    ))}
                                </div>
                            </ClientOnly>

                            <button className="lg:block hidden text-[#eb1c24] pt-1.5 pl-2 text-[13px]">
                                ดูเพิ่ม
                            </button>
                        </div>
                    ) : null}
                    <div className="lg:block hidden border-b lg:ml-2 mt-2" />

                    <div className="lg:block hidden text-[11px] text-gray-500">
                        <p className="pt-4 px-2">3K - ก๊อกก๊อกก๊อก โซเชียลแอ๊พยุคใหม่</p>
                        <p className="pt-4 px-2">Good Governance & Transparency</p>
                        <p className="pt-4 px-2">เพื่อความโปร่งใสและตรวจสอบได้</p>
                        <p className="pt-4 px-2">Privacy & Safety  - ความปลอดภัยและความเป็นส่วนตัว</p>
                    </div>
                    <div className="lg:block hidden border-b lg:ml-2 mt-2" />
                    <div className="lg:block hidden text-[12px] text-black-500">
                        <p className="pt-4 px-2">© 2024 3K - Kok Kok Kok</p>
                    </div>
                </div>
            </div>  
        </>
    )
}
