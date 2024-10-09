import Image from "next/image"
import hug from "../../../images/hug.jpg"
import Basant from "../../../images/Basant.jpg"
import eid from "../../../images/eid.jpg"
import eiduladha from "../../../images/eiduladha.jpg"
import Ramadan from "../../../images/Ramadan.jpg"

export default function Festival(){
    return(
        <div className="fest-cont px-4 py-8">
            <div className="pics ">
            <Image className="ppic" src={hug} alt="pic" />
            <Image className="ppic" src={Basant} alt="pic" />
            <Image className="ppic" src={eid} alt="pic" />
            <Image className="ppic" src={eiduladha} alt="pic" />
            <Image className="ppic" src={Ramadan} alt="pic" />
            </div>
            <h1 className="p-heading">Festivals of Pakistan</h1>
            <p className="p-content">
                Pakistan is a country rich in cultural diversity, and its festivals are a vibrant reflection of its heritage. Each festival brings communities together, showcasing a blend of traditions, rituals, and joyous celebrations. Among these, Eid and Ramadan stand out as significant religious observances, celebrated with fervor and devotion. <br />

<p className="bold">Ramadan: A Month of Reflection and Spirituality</p>
Ramadan, the ninth month of the Islamic lunar calendar, is a period of fasting, prayer, and reflection for Muslims around the world, including Pakistan. During this month, from dawn until sunset, Muslims abstain from food and drink, engaging in acts of worship and self-discipline. <br />

The Essence of Ramadan: <br />
<i>Fasting (Roza): </i> The fast begins with a pre-dawn meal called Sehri and ends with the evening meal known as Iftar, often shared with family and friends. <br />
<i>FastingPrayer and Reflection: </i>Increased prayers, reading of the Quran, and charitable acts are emphasized during this month, fostering a sense of community and empathy towards those less fortunate. <br />
<i>FastingCharity (Zakat): </i> Muslims are encouraged to give to those in need, making Ramadan not just a personal spiritual journey but a collective effort to uplift society. <br />
<i>FastingEid-ul-Fitr: </i>The Celebration of Breaking the Fast <br />
At the end of Ramadan, Muslims celebrate Eid-ul-Fitr, a joyous occasion marking the conclusion of the fasting month. It’s a day filled with gratitude, festivities, and community gatherings.

<p className="bold">Eid Traditions:</p>

<i>Morning Prayers: </i> The day starts with special congregational prayers at mosques or open grounds, where families come together in their finest clothes, often new outfits purchased for the occasion. <br />
<i>Feasting: </i>Families prepare elaborate meals, featuring traditional dishes such as Biryani, Kebabs, and sweet treats like Sewaiyan (vermicelli), symbolizing the joy of breaking the fast. <br />
<i>Gifts and Charity:</i> It’s customary to exchange gifts and give Zakat-ul-Fitr, a form of charity to ensure everyone can partake in the Eid celebrations, especially the less fortunate. <br />
<i>Eid-ul-Adha: The Festival of Sacrifice</i>
Eid-ul-Adha, also known as the Festival of Sacrifice, is another major Islamic celebration in Pakistan. It commemorates the willingness of Prophet Ibrahim (Abraham) to sacrifice his son in obedience to God.

<p className="bold">Celebrating Eid-ul-Adha:</p>

<i>Animal Sacrifice: </i>Families sacrifice livestock (usually sheep, goats, or cows) and distribute the meat among family, friends, and the needy, emphasizing the spirit of sharing and generosity. <br />
<i>Prayers and Community: </i>Similar to Eid-ul-Fitr, Eid-ul-Adha begins with special prayers, followed by festive gatherings. <br />
<i>Cultural Significance: </i> The festival also reflects the importance of faith and obedience to God, serving as a reminder of the values of sacrifice and compassion. <br />

<p className="bold">Other Notable Festivals</p>
In addition to Ramadan and Eid, Pakistan celebrates various other festivals that highlight its cultural diversity: <br />
<i>Basant: </i>Marking the arrival of spring, this vibrant festival is celebrated mainly in Punjab, where people wear yellow and fly kites, creating a festive atmosphere filled with music and dance.
<i>Independence Day: </i>Celebrated on August 14, this national holiday is marked by flag hoisting ceremonies, parades, and cultural events, reflecting the pride and unity of the nation.
<i>Mela Chiraghan: </i> This is a traditional festival celebrated in Lahore, featuring music, dance, and cultural performances, showcasing the rich heritage of Pakistan</p>
        </div>
    )
}