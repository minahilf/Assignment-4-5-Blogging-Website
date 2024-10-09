import Link from "next/link";
export default function Footer() {
    return (
        <div className="w-full bg-[#e0f7fa] mt-[100px] p-[16px] flex justify-between mb-0">
            <div className="w-[30%] ml-[16px]">
                <h6 className="text-[#333333] mt-[16px] text-lg font-bold">About</h6>
                <p className="text-[#333333] text-[18px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nostrum veniam libero, labore nemo hic accusantium dolor laboriosam, maiores ab recusandae adipisci aperiam.
                    </p>
                
                <h6 className="text-[#333333] mt-[16px] text-lg font-bold">Email</h6>
                <p className="text-[#333333] text-[18px]">pakistanipalatte@gmail.com</p>
            </div>
            <div className="w-[30%]">
                <h6 className="text-[#333333] mt-[28px] text-lg font-bold">Quick Links</h6>
                <ul className="text-[#333333] text-[18px]">
                    <Link href= "/"><li>Home</li></Link>
                    <Link href="/About"><li>About</li></Link>
                    <Link href="/"> <li>Blogs</li></Link>
                    <Link href="/Privacy"><li>Privacy Policy</li></Link>
                    <Link href="/Contact"><li>Contact</li></Link>
                </ul>
            </div>
        </div>
    );
}
