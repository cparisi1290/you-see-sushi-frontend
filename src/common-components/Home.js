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
                    <Carousel.Item interval={3000} >
                        <img
                        src={DragonRoll}
                        alt="Dragon+Roll"
                        height="350px"
                        width="auto"
                        />
                        <Carousel.Caption style={{color: "black"}}>
                            <p><strong>DragonRoll</strong></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        src={Sake}
                        alt="Sake"
                        align="center"
                        height="400"
                        width="600"
                        />
                        <Carousel.Caption style={{color: "black"}}>
                            <p><strong>Sake</strong></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        src={AlaskaRoll}
                        alt="AlaskaRoll"
                        />
                        <Carousel.Caption style={{color: "black"}}>
                            <p><strong>Alaska Roll</strong></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        src={Maguro}
                        alt="Maguro"
                        />
                        <Carousel.Caption style={{color: "black"}}>
                            <p><strong>Maguro</strong></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        src={Saba}
                        alt="Saba"
                        />
                        <Carousel.Caption style={{color: "black"}}>
                            <p><strong>Saba</strong></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        src={BostonRoll}
                        alt="BostonRoll"
                        height="450px"
                        width="500"
                        />
                        <Carousel.Caption style={{color: "black"}}>
                            <p><strong>Boston Roll</strong></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        src={Hamachi}
                        alt="Hamachi"
                        />
                        <Carousel.Caption style={{color: "black"}}>
                            <p><strong>Hamachi</strong></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        src={PhillyRoll}
                        alt="PhillyRoll"
                        height="450px"
                        width="650"
                        />
                        <Carousel.Caption style={{color: "black"}}>
                            <p><strong>Philidalphia Roll</strong></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        src={RainbowRoll}
                        alt="RainbowRoll"
                        />
                        <Carousel.Caption style={{color: "black"}}>
                            <p><strong>Rainbow Roll</strong></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        src={Tai}
                        alt="Tai"
                        />
                        <Carousel.Caption style={{color: "black"}}>
                            <p><strong>Tai</strong></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        src={SpicyTuna}
                        alt="SpicyTuna"
                        height="450px"
                        width="500"
                        />
                        <Carousel.Caption style={{color: "white"}}>
                            <p><strong>Spicy Tuna Roll</strong></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
