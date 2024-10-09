import Image from "next/image"
import d1 from "../../../images/d1.jpg"
import d2 from "../../../images/d2.jpg"
import d3 from "../../../images/d3.jpg"
import d4 from "../../../images/d4.jpg"
import d5 from "../../../images/d5.jpg"

export default function Fashion() {
    return (
        <div className="fashionCont">
            <div className="pics">
                <Image className="ppic" src={d1} alt="pic" />
                <Image className="ppic" src={d2} alt="pic" />
                <Image className="ppic" src={d3} alt="pic" />
                <Image className="ppic" src={d4} alt="pic" />
                <Image className="ppic" src={d5} alt="pic" />
            </div>
            <h1 className="p-heading">Pakistani Fashion</h1>
            <p className="p-content">
                Pakistan is a country with a rich cultural heritage, and its traditional clothing has long been an integral part of its identity. From the ever-classic Shalwar Kameez to the detailed and intricate Ajrak prints, Pakistani fashion tells stories of history, regional diversity, and artistry. But in recent years, a fascinating trend has emerged—a bold modern makeover that merges age-old traditions with contemporary designs. Today, we’re seeing a fashion revolution where tradition meets innovation, creating a unique style that appeals to the modern generation. <br />
                <p className="bold">The Shalwar Kameez: A Modern Makeover</p>
                The Shalwar Kameez is more than just Pakistan’s national dress; it is a symbol of cultural pride worn by men and women across all regions. Traditionally, it consists of loose pants (shalwar) and a long tunic (kameez), often adorned with beautiful embroidery and motifs. But what’s interesting today is how this simple yet elegant outfit has been transformed.

                Designers have embraced experimental cuts, bold colors, and embellishments to give the Shalwar Kameez a contemporary flair. Women’s kameezes are now featuring asymmetrical hemlines, high slits, and intricate beadwork, while men’s Shalwar Kameez is seeing a more fitted silhouette, often paired with modern accessories like stylish waistcoats and jackets. This fusion of traditional and modern elements allows Pakistanis to stay connected to their roots while making a bold fashion statement.
                <p className="bold">The Rise of Ajrak and Block Prints</p>
                Another significant part of Pakistani fashion heritage is the Ajrak, a block-printed fabric with deep cultural significance, especially in Sindh. Ajrak is characterized by geometric patterns, bold colors, and a traditional black, red, and indigo color scheme.

                In recent years, fashion designers have reinterpreted Ajrak prints in exciting ways. While the traditional designs remain popular, Ajrak is now being incorporated into modern jackets, scarves, and even streetwear, appealing to a younger generation looking for cultural yet trendy outfits. The fabric, which once adorned Sindhi men as shawls and turbans, has found a new life on runways, red carpets, and in casual wear collections
                <p className="bold">Embracing Bold Colors and Minimalism</p>
                A notable shift in recent years has been the move toward minimalism in Pakistani fashion. While ornate, heavily embroidered outfits are still a staple for formal events and weddings, many young fashionistas are opting for clean lines and simpler designs in their day-to-day wardrobe.

                Bold color blocking, neutral tones, and minimal embellishments are trending, creating a sophisticated look that feels both modern and grounded. This minimalist approach offers versatility, as many pieces can easily transition from casual daytime wear to elegant evening attire with a few styling tweaks.
            </p>
        </div>
    )
}