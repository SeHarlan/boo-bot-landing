"use client";

import { LongCross } from '@/svg/pixelElements';
import { Disclosure, Transition } from '@headlessui/react'
import { ReactNode } from 'react';

const FAQ = () => {
  return (
    <div id="faq" className="standardContainer [scroll-margin:100px]">
      <div className="bg-themeWhite/10 rounded-2xl px-6 py-8">
        <h3 className="text-4xl underline text-center mb-8">Have Any Questions?</h3>
        <div className=''>
          <FAQItem
            question="What is Boo Bot?"
            answer={<p>
              Boo Bot is a discord bot built for Web3 projects.
              <br /> <br/>
              It enables project teams to create a community economy on Discord, where members can earn points through participation, complete bounties to earn more, and be rewarded for their loyalty.
              It's a tool that fosters active community engagement, streamlines project tasks, and automates rewards distribution.
            </p>}
          />
          <FAQItem
            question="How do I install Boo Bot?"
            answer={<p>
              First, you need to select your preferred Boo Bot version and set up a payment plan.
              Then, choose your desired blockchain (Solana, Near, Sui, or None) and click on the 'Install Boo Bot' button.
              This will guide you through the installation process on Discord.
            </p>}
          />
          <FAQItem
            question="Can I change my Boo Bot version later?"
            answer={<p>
              Yes, you can upgrade or downgrade your Boo Bot version later from within your account settings.
              <br/><br/>
              Please note, changes will be reflected from the next billing cycle.
            </p>}
          />
          <FAQItem
            question="What is the Boo Bot affiliate program?"
            answer={<p>
              The Boo Bot affiliate program is an opportunity to earn rewards by referring others to Boo Bot.
              <br/><br/>
              You can join during the onboarding process or later from your account.
              When your friends subscribe to Boo Bot using your referral link, you earn 30% of their subscription or prepayment.
            </p>}
          />
          <FAQItem
            question="What if I encounter issues or need help with Boo Bot?"
            answer={<p>
              We're here to help!
              <br/><br/>
              Our support team is available 24/7 to assist with any issues you may encounter.
              You can reach us via email, Twitter, or Discord.
            </p>}
          />
        </div>
      </div>
    </div>
  )
}

export default FAQ

const FAQItem = ({ question, answer }: { question: string, answer: ReactNode }) => { 
  return (
    <div className='border-b py-5'>
      <Disclosure>
        <Disclosure.Button className="flex items-center gap-3">
          <LongCross colorClass='fill-themeSkyBlue' className='flex-shrink-0'/>
          <h4 className='text-left text-2xl font-bold'>{question}</h4>
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform -translate-y-5 opacity-0"
          enterTo="transform translate-y-0 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform translate-y-0  opacity-100"
          leaveTo="transform -translate-y-5 opacity-0"
        >
          <Disclosure.Panel className="mt-5 md:pl-9">
            {answer}
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </div>
  )
}