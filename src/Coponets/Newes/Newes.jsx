import React from 'react'
import "./Newes.css"
import Lk from "./imeges/Lk.png"
import Hl from "./imeges/Hl.png"
import Rl from "./imeges/Rl.png"
import Fe from "./imeges/Fe.png"
import Jl from "./imeges/Jl.png"
const Newes = () => {
    return (
        <main>
            <section id='New'>
                <div className="container nw-m">
                    <div className='news-d'>
                        <div className='m'>
                            <p>Only in 2021 we have made more than 100,000  <br /> orders for you, your loved ones, all of you, and in <br /> 2022 we are ready to destroy the market</p>
                        </div>
                        <div className='l'>
                            <h1>Our New<span>Events</span></h1>
                        </div>
                    </div>
                </div>
            </section>
            <section id='move'>
                <div className="container c">
                    <div className="img-m">
                        <div className='ftr'>
                            <img className='bc' src={Lk} alt="" />
                            <img className='nk' src={Hl} alt="" />
                        </div>
                        <div className='mnb'>
                            <img className='get' src={Rl} alt="" />
                            <img className='get' src={Jl} alt="" />
                            <img className='get' src={Fe} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Newes
