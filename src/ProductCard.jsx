import ChannelMobile from "./images/image-product-mobile.jpg";
import ChannelDesktop from "./images/image-product-desktop.jpg";
import cart from "./images/icon-cart.svg";
import React from 'react'

function ProductCard() {

    return(

        <div className="container max-w-[90%] rounded-xl">

            <div>

                <picture>

                    <source media="(min-width: 650px)" srcset={ChannelDesktop} />
                    <img src={ChannelMobile} alt="Mobile view" className="w-[100%] rounded-t-xl" />

                </picture>

            </div>

            <div className="content px-5 py-7">

                <h4 className="uppercase tracking-[.25rem] mb-4">perfume</h4>

                <h1 className="leading-8 mb-4">Gabrielle Essence Eau De Parfum</h1>

                <p className="mb-4">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>

                <div className="flex items-center mb-4 gap-5">

                    <h2>$149.99</h2>
                    <h4 className="line-through">$169.99</h4>

                </div>

                <button className="w-[100%] rounded-[5px] py-3 text-[14px] flex justify-center items-center gap-4 cursor-pointer"><img src={cart} alt="shopping cart" className="inline" />Add to Cart</button>

            </div>

        </div>

    );
}

export default ProductCard;