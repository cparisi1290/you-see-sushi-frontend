import React from 'react';
import { Carousel } from 'react-bootstrap';
import Maguro from '../images/Maguro.jpg';
import Sake from '../images/Sake.jpg';
import Saba from '../images/Saba.jpg';
import Hamachi from '../images/Hamachi.jpg';
import Tai from '../images/Tai.jpg';
import DragonRoll from '../images/Dragon+Roll.jpg';
import AlaskaRoll from '../images/AlaskaRoll.jpg';
import BostonRoll from '../images/BostonRoll.jpg';
import PhillyRoll from '../images/PhillyRoll.png';
import RainbowRoll from '../images/RainbowRoll.jpg';
import SpicyTuna from '../images/SpicyTuna.jpg';

export default function Home() {
    return (
        <div>
            <div className='carousel'>
                <Carousel wrap fade>
                    <Carousel.Item interval={3000}>
                        <div>
                            <img
                            src={DragonRoll}
                            alt="Dragon+Roll"
                            height="250px"
                            width="auto"
                            />
                        </div>
                        <Carousel.Caption style={{color: "black"}}>
                            <p><strong>DragonRoll</strong></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        src={Sake}
                        alt="Sake"
                        align="center"
                        height="300"
                        width="auto"
                        
                        />
                        <Carousel.Caption style={{color: "black"}}>
                            <p><strong>Sake</strong></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        src={AlaskaRoll}
                        alt="AlaskaRoll"
                        height="300"
                        width="auto"
                        />
                        <Carousel.Caption style={{color: "black"}}>
                            <p><strong>Alaska Roll</strong></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        src={Maguro}
                        alt="Maguro"
                        height="300"
                        width="auto"
                        />
                        <Carousel.Caption style={{color: "black"}}>
                            <p><strong>Maguro</strong></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        src={Saba}
                        alt="Saba"
                        height="300"
                        width="auto"
                        />
                        <Carousel.Caption style={{color: "black"}}>
                            <p><strong>Saba</strong></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        src={BostonRoll}
                        alt="BostonRoll"
                        height="350px"
                        width="auto"
                        />
                        <Carousel.Caption style={{color: "black"}}>
                            <p><strong>Boston Roll</strong></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        src={Hamachi}
                        alt="Hamachi"
                        height="300"
                        width="auto"
                        />
                        <Carousel.Caption style={{color: "black"}}>
                            <p><strong>Hamachi</strong></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        src={PhillyRoll}
                        alt="PhillyRoll"
                        height="300px"
                        width="auto"
                        />
                        <Carousel.Caption style={{color: "black"}}>
                            <p><strong>Philidalphia Roll</strong></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        src={RainbowRoll}
                        alt="RainbowRoll"
                        height="300"
                        width="auto"
                        />
                        <Carousel.Caption style={{color: "black"}}>
                            <p><strong>Rainbow Roll</strong></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        src={Tai}
                        alt="Tai"
                        height="250"
                        width="auto"
                        />
                        <Carousel.Caption style={{color: "black"}}>
                            <p><strong>Tai</strong></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        src={SpicyTuna}
                        alt="SpicyTuna"
                        height="300px"
                        width="auto"
                        />
                        <Carousel.Caption style={{color: "black"}}>
                            <p><strong>Spicy Tuna Roll</strong></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <footer>
                <div>
                Icons made by 
                <span>
                    <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons" class="footer-link"> Smashicons </a>
                </span>
                and 
                <span><a href="https://www.freepik.com" title="Freepik" class="footer-link"> Freepik </a></span>
                from 
                <a href="https://www.flaticon.com/" title="Flaticon" class="footer-link"> www.flaticon.com </a>
                </div>
            </footer>
        </div>
    )
}
