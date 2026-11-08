import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { siteConfig } from "@/lib/site-config"

const faqs = [
  {
    question: "What is diesel fuel injection pump calibration?",
    answer:
      "It's precision testing and adjustment of a diesel engine's fuel injection pump and injectors on a calibration test bench, to restore correct fuel delivery, timing, and spray pattern. Proper calibration affects engine power, fuel economy, smoke, and starting performance.",
  },
  {
    question: "What engine and vehicle brands does Zalven Calibration service?",
    answer: `We work on ${siteConfig.brandsServiced.join(", ")} diesel engines, covering cars, trucks, and heavy equipment.`,
  },
  {
    question: "Do you service heavy equipment, not just vehicles?",
    answer:
      "Yes. In addition to cars and trucks, we service diesel fuel injection pumps and injectors on heavy equipment such as generators, tractors, and other machinery, both in-shop and on-site.",
  },
  {
    question: "What parts do you use for repairs and rebuilds?",
    answer: `We use genuine parts from trusted brands including ${siteConfig.partsBrands.join(", ")}.`,
  },
  {
    question: "Where is Zalven Calibration located?",
    answer: `${siteConfig.address.full}, ${siteConfig.address.country}.`,
  },
  {
    question: "How can I contact Zalven Calibration?",
    answer: `Call ${siteConfig.phone.label}, call or text ${siteConfig.mobile.label}, or message us on Facebook.`,
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold tracking-wide text-brand-orange uppercase">
            FAQ
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion className="mt-10" multiple>
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question} className="border-brand-silver">
              <AccordionTrigger className="text-base font-semibold text-brand-navy">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-brand-steel">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
