

import Link from "next/link";

export default function Header() {
    return (
        <div className="custom-nav p-[10px] w-full max-w-full h-auto md:h-[80px] bg-[#e0f7fa] overflow-hidden">
            <h4 className="font-bold text-[22px] md:text-[26px] text-[#333333] ml-[16px]">Pakistani Palette</h4>
            <ul className="navbar flex flex-row md:ml-auto gap-[20px] md:gap-[70px] text-[16px] md:text-[20px] text-[#333333]">
                <li className="button"><Link href="/">Home</Link></li>
                <li className="button"><Link href="/About">About</Link></li>
                <li className="button"><Link href="/Privacy">Privacy Policy</Link></li>
                <li className="button"><Link href="/Contact">Contact</Link></li>
            </ul>
        </div>
    );
}
