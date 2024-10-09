import Image from "next/image";
import f1 from "../../../images/f1.jpg"
import f2 from "../../../images/f2.jpg"
import f3 from "../../../images/f3.jpg"
import f4 from "../../../images/f4.jpg"
import f5 from "../../../images/f5.jpg"

export default function Food() {
    return (
        <div className="food-cont">
            <div className="pics">
                <Image className="ppic" src={f1} alt="pic" />
                <Image className="ppic" src={f2} alt="pic" />
                <Image className="ppic" src={f3} alt="pic" />
                <Image className="ppic" src={f4} alt="pic" />
                <Image className="ppic" src={f5} alt="pic" />
            </div>
            <h1 className="p-heading">Pakistani Cuisine</h1>
            <p className="p-content">
                Pakistan is a land of diverse cultures, rich traditions, and above all, a country known for its bold and flavorful cuisine. With a wide variety of ingredients, spices, and cooking techniques, Pakistani food offers an unforgettable experience for the taste buds. Whether you're indulging in a plate of Biryani or savoring the richness of Nihari, each dish tells a story steeped in tradition and cultural pride. Pakistani cuisine, often described as an explosion of flavors, showcases a fusion of Mughal, Persian, Central Asian, and Indian influences, creating a culinary tapestry that is truly unique. <br />
                <p className="bold">The Irresistible Charm of Biryani</p>
                If there’s one dish that has captured the hearts of millions, it’s Biryani. This flavorful, aromatic rice dish is not just food—it's a celebration in itself. Originating from the Mughal kitchens, Biryani has been adapted regionally across Pakistan, with cities like Karachi, Lahore, and Hyderabad giving their own signature touch.

                The dish combines long-grain basmati rice with layers of marinated meat (usually chicken or mutton), fragrant spices, and saffron, cooked to perfection in a pot. The key to a great Biryani lies in the slow cooking process, allowing the flavors to meld beautifully, resulting in a dish that's savory, spicy, and utterly delicious. Often served with raita (a yogurt-based side dish) or a tangy salad, Biryani is a must-have at weddings, celebrations, and even casual family gatherings.
                <p className="bold">Nihari: The King of Stews</p>
                Nihari is a dish with royal origins, said to have been a favorite of the Mughal emperors. This rich, slow-cooked meat stew is made from either beef or mutton, simmered overnight in a blend of spices like cardamom, cumin, and cloves, allowing the meat to become incredibly tender. The result is a flavorful, deeply satisfying dish that is usually eaten as a breakfast treat, served with naan or paratha.

                A bowl of Nihari is not complete without a sprinkle of fresh ginger, green chilies, and a squeeze of lemon. It’s a hearty and aromatic meal that warms you from the inside out, making it especially popular during the colder months. For many Pakistanis, enjoying a bowl of Nihari on a lazy Sunday morning is a cherished tradition.
                <p className="bold">Seekh Kebabs and Grilled Goodness</p>
                Pakistan's love for grilled food is evident in its wide variety of kebabs. One standout is the Seekh Kebab, made from minced meat mixed with spices and grilled on skewers. The smoky flavor from the grill combined with the spiced meat creates an irresistible combination.

                Seekh Kebabs are often enjoyed with chutney or raita and served alongside fresh salads. While they are commonly found in restaurants and food stalls, Seekh Kebabs are also a favorite during BBQ gatherings, where families and friends come together to enjoy food hot off the grill.
                <p className="bold">Sweet Endings: Desserts That Delight</p>
                No Pakistani meal is complete without something sweet to end on. Pakistani desserts, like the rest of its cuisine, are rich and full of flavor. One of the most iconic desserts is Gulab Jamun, soft and syrupy dough balls made from milk solids and soaked in a sugary rosewater syrup. These melt-in-your-mouth treats are often enjoyed at celebrations and special occasions.

                Another popular dessert is Kheer, a creamy rice pudding flavored with cardamom, saffron, and topped with slivers of almonds and pistachios. Jalebi, a deep-fried spiral of batter soaked in sugar syrup, is another sweet treat that is as crispy as it is sticky and sweet.
            </p>
        </div>
    )
}