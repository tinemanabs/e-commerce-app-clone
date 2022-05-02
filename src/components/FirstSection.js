import React from 'react'

const FirstSection = () => {
    return (
        <div className='first-section flex justify-center'>
            <div className='bg-center bg-auto bg-no-repeat bg-top h-4/5' style={{ width: "90rem", backgroundImage: 'url("https://www.funko.com/craftmin/backgrounds/v2Background-Asset-Funko_DSMM-095c426bc590a3f0e1b9e4a3ae8453de.png?")' }}>
                <div className='grid sm:grid-cols-2 justify-items-start items-center p-9'>
                    <div className='flex flex-column'>
                        <div className='ff-norms-regular text-uppercase text-white text-base'>Just Dropped: Doctor Strange</div>
                        <div className='ff-norms-black text-white text-uppercase text-2xl'>Time waits for no one</div>

                        <div className='ff-norms-regular text-lg text-white py-3'>Explore the New Realities With Collectibles From Marvel Studios’ Doctor Strange in the Multiverse of Madness.</div>
                        <div className='py-2'>

                            <button className='ff-open-sans-light text-base bg-white text-black rounded-full px-4 py-2'>SHOP COLLECTION</button>
                        </div>
                    </div>
                    <img src="https://www.funko.com/craftmin/assets/Feature-Product_Funko_DSMM-507eff2cf5b48bf6f7430f7dd63d12b1.png?" alt="" />
                </div>
            </div>

        </div>
    )
}

export default FirstSection