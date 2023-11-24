import React from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const Home = () => {
    const stats = [
        { value: '5M+', text: 'Satisfied Customers' },
        { value: '25K+', text: 'Happy Users' },
        { value: '1K+', text: 'Products' },
        { value: '10+', text: 'Branches' },
    ];

    return (
        <div>
            {/* Home Section */}
            <section className="h-[850px] w-full bg-right bg-cover bg-no-repeat relative text-white pt-[225px] pb-[254px] mb-12 lg:bg-center lg:mb-28" style={{ backgroundImage: "url('bg-img.png')" }}>
                <div className='container mx-auto text-center'>
                    <h1 className='text-2xl mx-auto font-semibold mb-[30px] lg:text-[64px] lg: leading-tight lg:max-w-[888px]'>Creative Home Simplify your Living</h1>
                    <h2 className="mb-[30px] max-w-[627px] mx-auto lg-mb-[65px] lg:text-xl">Enhance your living space with our unique and stylish furniture collections. Experience comfort, elegance, and innovation for your home.</h2>
                    <button className='bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] px-[35px] py-[9px] mb-[160px] text-xl rounded-md backdrop-blur-md transition lg:px-[80px] lg:py-[16px] lg:mb-[194px] '>Shop Now</button>

                    <div className='bg-[#286F6C] rounded-[20px] p-12'>
                        <div className='flex flex-wrap gap-y-8'>
                            {stats.map((item, index) => {
                                return (
                                    <div className='min-h-[70] w-3/6 flex flex-col justify-center mx-auto odd:border-r lg:flex-1 lg:odd:border-r lg:even:border-r lg:even:last:border-none' key={index}>
                                        <div className='text-2xl font-semibold lg:text-4xl'>{item.value}</div>
                                        <div className='text-base font-light max-w-[110px] mx-auto lg:text-xl'>{item.text}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </section>

            {/* Featured Section */}
            <section className='section'>
                <div className='container mx-auto'>
                    <div className="flex flex-col lg:flex-row lg:gap-x-100px">
                        <div className="flex-1 order-1 lg:order-1">
                            <img src="bg-img2.png" alt="Feature" />
                        </div>
                        <div className="flex-1 flex flex-col justify-end text-black">
                            <h2 className="title">Create an Aesthetic Home</h2>
                            <p className="subtitle">Furniture Power provides a versatile software solution for managing various aspects of your business. Elevate your home with our innovative furniture designs and models.</p>
                            <div className="flex mb-6 lg:last:mb-0">
                                <div className="text-2xl mr-4 lg:text-3xl"><IoIosCheckmarkCircle /></div>
                                <div>
                                    <h4 className="text-base lg:text-xl font-semibold mb-3">Valuation Services</h4>
                                    <p>Accurate valuation services to ensure you make informed decisions about your furniture choices.</p>
                                </div>
                                <div className="text-2xl mr-4 lg:text-3xl"><IoIosCheckmarkCircle /></div>
                                <div>
                                    <h4 className="text-base lg:text-xl font-semibold mb-3">Development of Furniture Models</h4>
                                    <p>Innovative furniture models designed to cater to your unique preferences and style.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className='section min-h-[490px]' style={{ backgroundImage: "url('newsletter.png')" }}>
                <div className='container mx-auto flex justify-center lg:justify-end'>
                    <div className='w-full max-w-[558px] text-center text-white lg:text-left'>
                        <h2 className='text-4xl font-semibold max-w-[350px] mx-auto lg:mx-0 mb-5 leading-normal'>Subscribe for Exclusive Discounts</h2>
                        <p className='text-xl font-light mb-10 '>Join our mailing list and be the first to know about our latest products and special offers.</p>
                        <div className='flex flex-col lg:flex-row gap-[22px]'>
                            <input type='text' className='h-[60px] px-6 outline-none placeholder:text-gray-400 text-gray-600 rounded-lg lg:flex-1' placeholder='Your email address' />
                            <button className='bg-[#23262F] h-[60px] hover:bg-slate-900 px-7 rounded-lg font-medium text-xl transition'>Subscribe Now</button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home;