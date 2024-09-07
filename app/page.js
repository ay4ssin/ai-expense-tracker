import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Accordion from "./_components/FAQ";

export default function Home() {
  return (
   <div>
      <Header/>
      <Hero/>
      <Accordion/>
      <footer class="bg-secondary text-white py-4 px-3 mt-16">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
            <p class="text-xs text-gray-400 md:text-sm">Copyright 2024 &copy; All Rights Reserved</p>
        </div>
        <div class="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
            <ul class="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSd5Q56yZrB1jZ0xVGtbONujL3nQd2yaXcuKc8-H3OWdzTKlyw/viewform" class="text-gray-400 hover:text-gray-600">Contact Us</a></li>
            </ul>
        </div>
    </div>
</footer>
   </div>
  );
}
