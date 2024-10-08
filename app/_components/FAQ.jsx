'use client'
import React, { useState } from "react";

const Accordion = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQs
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Check out our most commonly asked questions if there's something you need answering or use our contact form to ask us any questions.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="Can I categorize my expenses?"
              text="Yes, our tracker allows you to create custom categories to track specific types of spending."
            />
            <AccordionItem
              header="Can I set budgets?"
              text="Yes, our tracker allows you to set budgets for different categories and track your progress towards those goals"
            />
            <AccordionItem
              header="Can I export my data?"
              text="No, our tracker is not able to export your data at the moment, but we are currently working on implementing this!"
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="Can I connect my bank accounts?"
              text="No, our tracker is not able to connect to your bank account at the moment. However, we will be working on this soon!"
            />
            <AccordionItem
              header="Can I share my data with others or add my friends?"
              text="No, our tracker does not currently allow sharing but we are working on implementing this soon!"
            />
            <AccordionItem
            header="Is there a cost associated with using our expense tracker?"
            text="Our expense tracker is completely free! However, this may change in the future, but we are not planning on adding a subscription at the moment. Regardless, we plan to keep a free tier that will not limit a user's ability to keep track of their finances."
            linkText="here"
            linkUrl="https://forms.gle/AX2Hwp9ZrMcuHbwbA"
          />
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Accordion;

const AccordionItem = ({ header, text, linkText, linkUrl }) => {
    const [active, setActive] = useState(false);
  
    const handleToggle = () => {
      event.preventDefault();
      setActive(!active);
    };
  
    return (
      <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
        <button
          className={`faq-btn flex w-full text-left`}
          onClick={() => handleToggle()}
        >
          <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-red-50 text-white dark:bg-white/5">
            <svg
              className={`fill-white stroke-white duration-200 ease-in-out ${
                active ? "rotate-180" : ""
              }`}
              width="17"
              height="10"
              viewBox="0 0 17 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                fill="black"
                stroke="black"
              />
            </svg>
          </div>
  
          <div className="w-full">
            <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white">
              {header}
            </h4>
          </div>
        </button>
  
        <div
          className={`pl-[62px] duration-200 ease-in-out ${
            active ? "block" : "hidden"
          }`}
        >
          <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
            {text
              .split(linkText)
              .map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index < text.split(linkText).length - 1 && (
                    <a href={linkUrl} className="text-primary underline">
                      {linkText}
                    </a>
                  )}
                </React.Fragment>
              ))}
          </p>
        </div>
      </div>
    );
  };