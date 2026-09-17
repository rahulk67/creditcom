import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <section className="bg-white">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg ">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Welcome to Incredibles – your gateway to smart and rewarding shopping!</h2>
                        <p className="mb-4">At Incredibles, we believe that your credit card should be more than just a payment tool; it should be your ticket to exclusive benefits, exciting cashback offers, and maximized profits. We are dedicated to bringing you the best deals, making every purchase count by offering you incredible rewards with every swipe.

                            Our mission is simple: to help you save more while you spend. We work closely with top financial institutions and brands to bring you a platform where you can easily find and redeem the best cashback offers available on credit cards.

                            Whether it's for your everyday shopping, dining, travel, or online splurges, Incredibles is here to turn your credit card transactions into rewarding experiences. We are constantly evolving to bring more exciting offers and tailor our services to your needs, ensuring that you always stay ahead in the game of smart spending.</p>
                    </div>




                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs