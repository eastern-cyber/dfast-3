import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function TopNav() {
    const router = useRouter()
    const pathname = usePathname()

    return (
        <>
            <div id="TopNav" className="fixed bg-white z-30 flex items-center w-full border-b h-[60px]">
                <div className={`flex items-center justify-between gap-6 w-full px-4 mx-auto ${pathname === '/' ? 'max-w-[1150px]' : ''}`}>
                        <a href="/">
                        <img className="min-w-[115px] w-[115px]" src="/images/3k-logo.png" />
                        </a>
                </div>
            </div>
        </>
    )
}
