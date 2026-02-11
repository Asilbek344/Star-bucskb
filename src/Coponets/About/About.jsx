import React from 'react'
import "./About.css"
import Wh from "./imeges/Wh.png"
import B from "./imeges/B.png"
const About = () => {
    return (
        <main>
            <section id='about'>
                <div className="container about-cn">
                    <img src={Wh} alt="" />
                    <div className='about-x'>
                        <div>
                            <h1>We make <span>delicious</span></h1>
                            <p>Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are ready to destroy the market</p>
                            <img className='m-p' src={B} alt="" />
                            <button className='btn-2'>  Cooking Process</button>
                        </div>
                    </div>
                </div>
            </section>
            <section id='about-tex'>
                <div className="container about-tf">
                    <div>
                        <div className='about-tr'>
                            <h1>New Our<span>Products</span></h1>
                            <p>Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!  Starbucks coffee and don't forget about the discount!</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About
