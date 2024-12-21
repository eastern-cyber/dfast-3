
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";

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
                        iconString="For You"
                        colorString={pathname == '/' ? '#F02C56' : ''}
                        sizeString="25"
                        />
                    </a>
                    <MenuItem iconString="Fllowing" colorString="#000000" sizeString="25" />
                    <MenuItem iconString="LIVE" colorString="#000000" sizeString="25" />

                    <div className="border-b lg:ml-2 mt-2" />
                </div>
            </div>  
        </>
    )
}
