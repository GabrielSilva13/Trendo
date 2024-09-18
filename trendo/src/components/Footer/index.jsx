import React from 'react';
import Newsletter from './Newsletter';
import { useParams, useHref } from 'react-router-dom';


function Footer() {
    const { productId } = useParams()
    const link = useHref()

    const isCart = link.replace('/', '') === 'cart'


    const getCurrentYear = new Date().getFullYear()

    if(isCart) return null

    return (
        <footer
            className='bg-customOrange py-6 font-barlow w-full bottom-0'
            style={{
                height: productId === undefined ? 'auto' : '6.5rem',
            }}
        >
            {productId === undefined &&
                <div className='wrapper flex flex-col lg:flex-row lg:justify-between mx-auto w-full'>
                    <h3 className='text-left text-lg 2xl:text-xl font-bold my-4 lg:my-0'>Trendo</h3>

                    <div className='flex w-full lg:w-1/2 flex-col lg:flex-row lg:justify-between text-left'>

                        <div className='flex flex-col gap-1.5 lg:gap-3 mb-5'>
                            <h4 className='font-medium 2xl:text-lg'>Terms</h4>
                            <p className='text-sm lg:text-base'>Copyright © {getCurrentYear} Trendo</p>
                            <p className='text-sm lg:text-base'>Terms & conditions</p>
                            <p className='text-sm lg:text-base'>Privacy policy</p>
                        </div>

                        <div className='flex flex-col gap-1.5 lg:gap-3 mb-5'>
                            <h4 className='font-medium 2xl:text-lg'>Contact</h4>
                            <p className='text-sm lg:text-base'>Contact us</p>
                            <p className='text-sm lg:text-base'>FAQ</p>
                            <p className='text-sm lg:text-base'>Phone: +47 65 76 78 76</p>
                            <p className='text-sm lg:text-base'>Mail: <span className='underline'>support@trendo.com</span></p>
                        </div>

                        <div className='flex flex-col gap-1.5 lg:gap-3 mb-5'>
                            <h4 className='font-medium 2xl:text-lg lg:pb-3'>Newsletter</h4>
                            <p className='text-sm lg:text-base'>Join the Trendo-club to get exclusive</p>
                            <p className='text-sm lg:text-base'>offers and get updated about latest trends.</p>

                            <Newsletter />
                        </div>
                    </div>
                </div>
            }
        </footer>
    )
}

export default Footer;