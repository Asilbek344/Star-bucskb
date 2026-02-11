import React, { useState, useEffect } from "react";
import "./Praducs.css";
import Cv from "./imeges/Cv.png";
import Ds from "./imeges/Ds.png";
import Str from "./imeges/Str.png";

const products = [
    { img: Cv, title: "Cappuccino", desc: "Our cafe will serve you quickly", price: "7,45$" },
    { img: Ds, title: "Latte", desc: "Enjoy a fresh coffee", price: "6,50$" },
    { img: Str, title: "Espresso", desc: "Strong and aromatic", price: "5,00$" },
    { img: Cv, title: "Mocha", desc: "Chocolate coffee treat", price: "6,80$" },
];

const Praducs = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % products.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main>
            <section id="Fet">
                <div className="container cvbn">

                    <div className="carousel-container">
                        {products.map((product, i) => (
                            <div
                                key={i}
                                className={`cvb ${i === index ? "active" : "inactive"}`}
                            >
                                <img src={product.img} alt={product.title} />
                                <h1 className="tex-c">{product.title}</h1>
                                <p>{product.desc}</p>
                                <h3>{product.price}</h3>
                                <button className="btn-3">Buy Product</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Praducs;
