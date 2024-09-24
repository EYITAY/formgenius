import React from 'react'
import Image from 'next/image'
import FormGenerator from '../form-generator'
import PlausibleProvider from 'next-plausible'
import Footer from '@/components/ui/footer'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <PlausibleProvider domain={process.env.PLAUSIBLE_DOMAIN || ""}>
      <section className="flex flex-col items-center justify-center space-y-4 pt-4 sm:pt-24 w-full bg-[url('/grid.svg')]" id="hero">
      <Image
            src={"/fmlogo.png"}
            width={250}
            height={250}
            className="w-40"
            alt="image"
          />{" "}
        <h1 className='text-4xl font-bold text-center tracking-tighter sm:text-5xl md:text-6xl leading-6'>Create your forms <br></br>in seconds not hours</h1>
        <p className='max-w-[600px] mt-4 text-center text-gray-500 md:textl-xl'>
          Generate, publish and share your form right away with AI. Dive into insightful results, charts and analytics.
        </p>
        <FormGenerator />


        <Image
              src="/images/app/demo6.png"
              width="8000"
              height="8000"
              alt="create a form"
              className='bg-white p-4 shadow-sm border rounded-md'
            />

        <div className='w-full bg-gradient-to-b from-transparent to-white h-24'></div>
      </section>
      <section className='flex flex-col items-center justify-center space-y-4 mt-12 pb-24' id="features">
        <h2 className='text-3xl font-bold text-center tracking-tighter sm:text-4xl md:text-5xl'>How It Works</h2>
        <ul className='grid gap-4 grid-cols-1 md:gridcols-2 lg:grid-cols-3 w-full max-w-5xl text-center'>
          <li className='flex flex-col items-center space-y-4 relative'>
            <Image
              src="/images/app/demo2.png"
              width="1000"
              height="1000"
              alt="create a form"
              className='bg-white p-4 shadow-sm border rounded-md'
            />
           
            <p>1. Add a prompt and describe the requirements for your form.</p>
          </li>
          <li className='flex flex-col items-center space-y-4 relative'>
            <Image
              src="/images/app/demo5.png"
              width="1000"
              height="1000"
              alt="update the form"
              className='bg-white p-4 shadow-sm border rounded-md'
            />
          
            <p>2. Generate the form.</p>
          </li>
          <li className='flex flex-col items-center space-y-4 relative'>
            <Image
              src="/images/app/demo7.png"
              width="1000"
              height="1000"
              alt="check the analytics"
              className='bg-white p-4 shadow-sm border rounded-md'
            />
            <p>3. Check results, analytics and more.</p>
          </li>
        </ul>
      </section>

      <Footer/>

    </PlausibleProvider>
    
  )
}

export default LandingPage