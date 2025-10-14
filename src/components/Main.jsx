

import art from "../images/art-gallery-883967_1280.jpg";
import muttart from "../images/muttart.jpg";
import riverBoat from "../images/river-boat.jpg";
export default function Main(){
    return(
        <>
            <section className="section-two">
            <h2> Top three things to do in Edmonton</h2>
                <div className="continer">
                    <article>
                        <img 
                            src={art}
                            alt="Modern art gallery building with large glass windows reflecting the sky, surrounded by urban landscape. The scene feels inviting and creative."
                        />
                        <h3>
                            Art gallary of Alberta 
                        </h3>
                        <p className="card"> 
                            Let us go and tour gallary and the see the old bones of mamonths
                        </p>
                        <a href="https://www.youraga.ca/exhibitions/past-exhibitions" target="_blank">Alberta Exhibitions</a>
                    </article>
                    <article>
                        <img 
                            src={muttart}
                            alt="Distinctive glass pyramids of the Muttart Conservatory set in a lush green park, with city skyline in the background. The atmosphere is peaceful and vibrant."
                        />
                        <h3>
                            Muttart Conservatory
                        </h3>
                        <p className="card"> 
                            visit and learn about their 700 plants species or check out what's new in the Featured Pyramid.
                        </p>
                        <a href="https://movelearnplay.edmonton.ca/COE/public/category/browse/MUTTART#gsc.tab=0" target="_blank">Muttart Conservatory</a>
                    </article>
                    <article>
                        <img 
                            src={riverBoat}
                            alt="Riverboat cruising along the North Saskatchewan River with passengers on deck enjoying scenic city views and greenery. The mood is relaxed and cheerful."
                        />
                        <h3>
                            Edmonton RiverBoat 
                        </h3>
                        <p className="card"> 
                            come and sail down the north- saskatoon river with the Edmonton queen, eat buffee and take picture
                        </p>
                        <a href="https://www.edmontonriverboat.ca/" target="_blank">Edmonton Riverboat</a>
                    </article>
                </div>
            </section>
        </>
    )
}
