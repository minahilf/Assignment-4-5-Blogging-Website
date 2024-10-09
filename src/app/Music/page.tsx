import Image from "next/image";
import m1 from "../../../images/m1.jpg"
import m2 from "../../../images/m2.jpg"
import m3 from "../../../images/m3.jpg"
import m4 from "../../../images/m4.jpg"
import m5 from "../../../images/m5.jpg"

export default function Music() {
    return (
        <div className="mu-cont">
            
            <div className="container">

            <div className="pics">
                <Image className="ppic" src={m1} alt="pic" />
                <Image className="ppic" src={m2} alt="pic" />
                <Image className="ppic" src={m3} alt="pic" />
                <Image className="ppic" src={m4} alt="pic" />
                <Image className="ppic" src={m5} alt="pic" />
            </div>


            <h1 className="p-heading">Pakistani Music</h1>
            <div className="p-content">
                Pakistani music is as diverse and rich as the culture it springs from, blending influences from ancient traditions, Sufi spirituality, and modern innovation. From the powerful and soulful sounds of Qawwali to the electrifying beats of Pakistani rock bands, the country’s music tells stories of love, devotion, and identity. Music in Pakistan transcends borders, languages, and religions, uniting people through rhythm and melody. Let’s dive into the vibrant world of Pakistani music and explore its different genres, legendary artists, and how it continues to evolve. <br />
                <p className="bold">Qawwali: The Spiritual Heartbeat</p>
                At the soul of Pakistan’s musical heritage lies Qawwali, a form of Sufi devotional music that has touched hearts for centuries. Originating from Sufi traditions, Qawwali focuses on themes of love, devotion, and the pursuit of divine connection. It’s a form of music that transcends mere entertainment—it's a spiritual experience that transports the listener into a state of reflection and inner peace.

                Nusrat Fateh Ali Khan, arguably the most famous Qawwal of all time, brought this ancient form of music to the global stage. His voice, combined with the rhythm of the harmonium and tabla, captivated audiences worldwide. Tracks like “Allah Hoo” and “Tumhe Dillagi Bhool Jani Padegi” are iconic and continue to inspire new generations of listeners.

                The Qawwali experience is often intense and long, with singers and musicians building up emotion through repeated verses and improvisation. The music creates a sense of community, with both performers and audiences engaged in a shared spiritual journey
                <p className="bold">Classical and Folk: The Roots of Tradition</p>
                Pakistani classical music has deep roots in South Asian classical traditions, including Raag and Taal (rhythm and scale systems), and features instruments like the sitar, tabla, and sarangi. Legendary artists such as Ustad Bade Ghulam Ali Khan and Roshan Ara Begum have kept these traditions alive, passing down their skills to the next generation of musicians.

                Folk music, another vital element of Pakistan’s music scene, varies from region to region. In Punjab, the lively beats of Bhangra and Gidda reflect the joy and energy of local celebrations, while Sindhi folk music is characterized by soulful songs about the land, love, and mysticism. Instruments like the ektara and dhol are central to this style.

                Not to be forgotten, the Balochi and Pashto folk songs tell stories of bravery, love, and honor, deeply rooted in tribal traditions. Songs like “Dilbaro Dilbaro” from Balochistan or Attan music from Khyber Pakhtunkhwa are powerful expressions of regional pride and identity.
                <p className="bold">Coke Studio: Where Tradition Meets Innovation</p>
                One of the most exciting developments in Pakistani music over the last decade has been Coke Studio, a television series that brings together traditional and contemporary artists for live performances. Since its debut in 2008, Coke Studio has been credited with revitalizing Pakistan’s music scene, blending genres like Qawwali, folk, pop, and rock, and introducing audiences to a fusion of sounds.

                Under the musical direction of Rohail Hyatt (formerly of Vital Signs), and later producers like Strings and Xulfi, Coke Studio has given new life to traditional music forms while also celebrating modern artists. Performances like “Tajdar-e-Haram” by Atif Aslam and “Afreen Afreen” by Rahat Fateh Ali Khan are just a couple of examples of how this platform has brought together Pakistan’s musical past and present.

            </div>

            </div>



        </div>
    )
}