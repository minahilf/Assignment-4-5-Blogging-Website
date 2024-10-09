import Image from "next/image";
import c1 from "../../../images/c1.jpg"
import c2 from "../../../images/c2.jpg"
import c3 from "../../../images/c3.jpg"
import c4 from "../../../images/c4.jpg"
import c5 from "../../../images/c5.jpg"

export default function Tradition(){
    return(
        <div className="trad-cont">
            <div className="pics">
            <Image className="ppic" src={c1} alt="pic" />
            <Image className="ppic" src={c2} alt="pic" />
            <Image className="ppic" src={c3} alt="pic" />
            <Image className="ppic" src={c4} alt="pic" />
            <Image className="ppic" src={c5} alt="pic" />
            </div>
            <h1 className="p-heading">Pakistani Traditions</h1>
            <p className="p-content">
            Pakistan is a land of diverse cultures and rich traditions, where every region holds unique customs that define its way of life. These traditions are deeply rooted in history, blending Islamic values with local heritage and ancient customs. Whether it's the lavish celebrations of a desi wedding, the warmth of Pakistani hospitality, or the vibrant festivals that light up the year, Pakistani traditions offer a beautiful window into the soul of the country. <br />
            <p className="bold">Desi Weddings: A Colorful Affair</p>
            Pakistani weddings are legendary for their grandeur, extravagance, and joyous celebrations. These events are not just a union of two individuals but a coming together of families, friends, and communities. Each ceremony is a carefully planned event full of color, music, and ritual, lasting several days.

The Mehndi, a pre-wedding event, is one of the most vibrant aspects, where the bride's hands are adorned with intricate henna designs, and traditional songs and dances create a lively atmosphere. The groom’s side has its own set of traditions, like the Baraat, a grand procession where the groom arrives, often on a decorated horse or car, accompanied by friends and family dancing to upbeat music.

A Pakistani wedding is a blend of joy, love, and togetherness, symbolized by the exchange of garlands, hearty feasts, and heartfelt blessings. The culmination of these ceremonies brings about the Rukhsati, where the bride bids a tearful goodbye to her family, marking her official entry into her new home. <br />
<p className="bold">Hospitality: Warm Welcomes, Open Hearts</p>
Hospitality is a cornerstone of Pakistani culture. It’s not uncommon for a guest to be treated with the utmost care and attention, whether they are visiting a rural village or a bustling city. Offering tea or a full meal to guests is considered a must, and hosts often go above and beyond to make visitors feel welcomed.

In rural areas, this sense of hospitality is even more pronounced. Strangers are welcomed with the same warmth as friends, with families going out of their way to ensure comfort and care. The tradition of mehmaan-nawazi (hospitality) is a reflection of Islamic teachings that encourage generosity and kindness towards guests.

Pakistani homes are often filled with the aroma of traditional dishes like biryani, kebabs, and naan, which are generously served to guests, accompanied by endless cups of tea. No matter how humble or affluent a household may be, the doors are always open to visitors.
<p className="bold">Traditional Clothing: A Fusion of Style and Heritage</p>
Pakistani clothing traditions are not just about fashion; they are a reflection of the country's regional diversity and cultural heritage. The most iconic outfit is the shalwar kameez, a comfortable yet elegant ensemble worn by both men and women across Pakistan. The simplicity of the shalwar (loose pants) paired with the kameez (tunic) allows for flexibility, making it perfect for daily wear and formal occasions.

In provinces like Sindh, Ajrak is an important cultural symbol, with its unique block-printed patterns in deep reds and blues. This traditional fabric is often worn as a shawl or used as a gift to honor guests. Similarly, Peshawari chappals from Khyber Pakhtunkhwa and Sindhi topi (cap) are cultural identifiers that showcase regional pride.

Modern Pakistani designers have reimagined these traditional garments, blending old-school prints and cuts with modern styles. This fusion has brought Pakistani fashion to the international stage, highlighting the country’s ability to preserve its traditions while embracing contemporary trends.
            </p>

        </div>
    )
}