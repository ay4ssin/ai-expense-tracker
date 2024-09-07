import React from 'react'
import Image from "next/image";

function Hero() {
  
  return (
    <section className="flex items-center flex-col">
  <div className="mx-auto max-w-screen-xl px-4 py-32 
  lg:flex">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
      Manage Your Expenses
        <strong className="font-extrabold text-primary sm:block"> Control your Money
</strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      Plan your spending, Save more and Stress less with CoinKitty.


      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary px-12 py-3
           text-sm font-medium text-white shadow hover:bg-red-300 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="/sign-in"
        >
          Get Started
        </a>

      
      </div>
    </div>
  </div>
  <Image src='/dashboard2.png' alt='dashboard'
  width={1000}
  height={700}
  className='-mt-9 mb-8 rounded-xl border-2'
  />
</section>
  )
}

export default Hero