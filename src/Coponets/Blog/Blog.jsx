import React from 'react'
import "./Blog.css"
import { FaInstagram } from "react-icons/fa";
import { BsTelephoneInbound } from "react-icons/bs";
import Mx from "./imeges/Mx.png"

const Blog = () => {
    return (
        <main>
            <section id='Blog'>
                <div className="container blog-cn">
                    <div className='blog-tex' >
                        <h1>Our <br /> <span>Contacts</span></h1>
                        <p>Have time to buy the most harmonious <br /> drinks in the new Starbucks coffee and <br /> don't forget about the discount!</p>
                        <div className='vet'>
                            <div className="Insta">
                                <div className="icon-wrapper">
                                    <FaInstagram className="icon" />
                                </div>
                                <h1>@supercoffee</h1>
                            </div>
                            <div className="Insta">
                                <div className='icon-wrapper'>
                                    <BsTelephoneInbound className='icon' />
                                </div>
                                <h1>+7-999-999-99-99</h1>
                            </div>
                        </div>
                    </div>
                    <img src={Mx} alt="" />
                </div>
            </section>
        </main>
    )
}

export default Blog
