import React from 'react'
import "./Hero.css"
import Cof from "./imeges/Cof.png"
import Li from "./imeges/Li.png"
import Fa from "./imeges/Fa.png"
import Money from "./imeges/Money.png"
const Hero = () => {
    return (
        <main>
            <section id='hero'>
                <div className="container hero-cn">
                    <div>
                        <div className='cafe'>
                            <h1>New Cafe
                                by <span>StarBucks</span> StarBucks</h1>
                            <p>Have time to buy the most harmonious drinks in the <br />
                                new Starbucks coffee and don't forget about the discount!</p>
                        </div>
                        <div className='btnfx'>
                            <button className='btn'>Select a coffee </button>
                            <button className='btn-1'>More</button>
                        </div>
                        <div className='dv'>
                            <div className='fet'>
                                <h1>9k <span>+</span></h1>
                                <h2>Premium Users</h2>
                            </div>
                            <div className='fet'>
                                <h1>2k <span>+</span></h1>
                                <h2>Premium Users</h2>
                            </div>

                            <div className='fet'>
                                <h1>28k <span>+</span></h1>
                                <h2>Premium Users</h2>
                            </div>
                        </div>

                    </div>
                    <img class="Cof-1" src={Cof} id="draggable" alt="Starbucks"></img>
                </div>
            </section>
            <section id='cv-1'>
                <div className="container">
                    <div className='vx'>
                        <div className='card-m'>
                            <img src={Li} alt="" />
                            <h2>Tasty</h2>
                            <p>We have the most delicious coffee</p>
                        </div>

                          <div className='card-m'>
                            <img src={Fa} alt="" />
                            <h2>Tasty</h2>
                            <p>We have the most delicious coffee</p>
                        </div>

                          <div className='card-m'>
                            <img src={Money} alt="" />
                            <h2>Tasty</h2>
                            <p>We have the most delicious coffee</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Hero
