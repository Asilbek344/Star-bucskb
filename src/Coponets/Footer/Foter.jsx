import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";
import "./Foter.css"
const Foter = () => {
    return (
        <footer>
            <section id='foter'>
                <div className="container ft-cn">
                    <h1 className='logo'>StarBucks </h1>
                    <ul>
                        <li>
                            <a href="">Main</a>
                        </li>
                        <li>
                            <a href="">We make</a>
                        </li>
                        <li>
                            <a href="">Praducs</a>
                        </li>
                        <li>
                            <a href="">Ewets</a>
                        </li>
                        <li>
                            <a href="">ontacts</a>
                        </li>
                        <a href=""><FaLongArrowAltUp className='fer' />
                        </a>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Foter
