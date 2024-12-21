
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";
import ClientOnly from "@/app/components/ClientOnly";
import MenuItemFollow from "./MenuItemFollow";

export default function SideNavMain() {
    const pathname = usePathname()
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
                        colorString={pathname == '/' ? '#F02C56' : ''}
                        sizeString="25"
                        />
                    </a>
                    <MenuItem iconString="ติดตาม" colorString="#000000" sizeString="25" />
                    <MenuItem iconString="ไลฟ์สด" colorString="#000000" sizeString="25" />

                    <div className="border-b lg:ml-2 mt-2" />
                    <h3 className="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">
                        บัญชีผู้ใช้ที่แนะนำ
                    </h3>
                    <div className="lg:hidden block pt-3" />
                    <ClientOnly>
                        <div className="cursor-pointer">
                        <MenuItemFollow user={{ id: "1", name: "ผู้ใช้ทดลอง", image: "https://placehold.co/50" }} />

                        </div>
                    </ClientOnly>
                </div>
            </div>  
        </>
    )
}
