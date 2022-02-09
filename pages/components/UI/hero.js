import React from 'react'
import Subscriber from '../Forms/subscriber';
import Footer from './footer'
const Hero = () => {
    return (
        <div className="hero min-h-screen front-bg" >
            <div class="hero-overlay bg-opacity-50"></div>
            <div className="text-center hero-content mb-40 shadow-2xl card bg-base-200">
                <div className="max-w-lg card-body">
                    <h1 className="mb-5 text-5xl font-bold">
                        Coming Soon
                    </h1>
                    <p className="mb-5">
                        We're currently working on creating a new plataform and plugin Wodpress
                        We'll be lauching soon, please subcribe to be notified.
                    </p>
                    <Subscriber />
                </div>
            </div>

            <div className="mt-80 z-10">
                <Footer />
            </div>
        </div >

    )
}

export default Hero;

