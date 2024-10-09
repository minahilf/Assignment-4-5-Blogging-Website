import Image from "next/image";
import Link from "next/link";
import festive from "../../images/festive.jpg"
import dress from "../../images/dress.jpg"
import food from "../../images/food.jpg"
import music from "../../images/music.jpg"
import Art from "../../images/Art.jpg"
import wedding from "../../images/wedding.jpg"

export default function Blogs() {
  return (

    <div className="blogs">
      <h1 className="main animation">Celebrating the Rich Tapestry of Pakistani Culture</h1>
      <div className="container">
        {/* blog1 */}

        <div className="blog-flex">
          <div className="blog">
            <div className="image">
              <Image className="pic" src={festive} alt="festivals" />
            </div>
            <div className="content">
              <h2>Festivals of Pakistan</h2>
              <p>Experience the vibrant energy of Pakistani festivals like Basant and Shandur Polo. Each festival brings culture, color, and celebration.
              </p>     </div>
            <Link href="/Festival">
              <button className="btn">Read More</button></Link>
          </div>
          {/* blog2 */}
          <div className="blog">
            <div className="image">
              <Image className="pic" src={dress} alt="dress" />
            </div>
            <div className="content">
              <h2>Pakistani Fashion</h2>
              <p>Discover how traditional Pakistani outfits like Shalwar Kameez and Ajrak are getting a funky, modern makeover with bold designs and colors.
              </p>     </div>
            <Link href="/Fashion">
              <button className="btn">Read More</button></Link>
          </div>

          {/* blog3 */}

          <div className="blog">
            <div className="image">
              <Image className="pic" src={food} alt="food" />
            </div>
            <div className="content">
              <h2>Pakistani Cuisine</h2>
              <p> Indulge in iconic Pakistani dishes like Biryani and Nihari that are bursting with flavor and spices.  Each dish has a story, deeply rooted in tradition, yet loved by all.
              </p>     </div>
            <Link href="/Food">
              <button className="btn">Read More</button></Link>
          </div>

        </div>

        {/* blog4  */}

        <div className="blog-flex">

          <div className="blog">
            <div className="image">
              <Image className="pic" src={music} alt="music" />
            </div>
            <div className="content">
              <h2>Pakistani Music</h2>
              <p>From Qawwali to Rock, Pakistani music genres are diverse and full of soul. Each genre tells a different story, representing the rich diversity of Pakistan.
              </p>     </div>
            <Link href="/Music">
              <button className="btn">Read More</button></Link>
          </div>

          {/* blog5  */}

          <div className="blog">
            <div className="image">
              <Image className="pic" src={Art} alt="art" />
            </div>
            <div className="content">
              <h2>Pakistani Creativity</h2>
              <p>: Explore the vibrant world of Pakistani art forms like Truck Art and Miniature Painting, where tradition meets modern creativity.
              </p>     </div>
            <Link href="/Art">
              <button className="btn">Read More</button></Link>
          </div>

          {/* blog 6 */}

          <div className="blog">
            <div className="image">
              <Image className="pic" src={wedding} alt="shadi" />
            </div>
            <div className="content">
              <h2>Pakistani Traditions </h2>
              <p>Uncover unique cultural practices in Pakistan, from grand desi weddings to unmatched hospitality. These traditions reflect the richness of Pakistani culture.
              </p>     </div>
            <Link href="/Tradition">
              <button className="btn">Read More</button></Link>
          </div>

        </div>
      </div>
    </div>
  );
}
