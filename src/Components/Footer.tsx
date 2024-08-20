import { BiSolidHeart } from "react-icons/bi";

export default function Footer() {
    return (
    <div className="w-full h-12 bg-gray-900 font-Sansita text-sm flex justify-center items-center gap-2 text-white">
        <BiSolidHeart className="text-red-800"/>
        <p>All the pictures come from <a className="font-semibold" href="https://www.adobe.com/fr/products/firefly.html">Adobe Firefly</a></p>
    </div>
)
}