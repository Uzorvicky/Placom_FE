"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"

  const partnerColors = ["primary", "amber-600", "red-500", "indigo-600", "purple-600", "yellow-600"]

const Seventh_Section: React.FC = () => {
    return       (<section className="py-20 bg-primary relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -bottom-85 -left-20 w-1/3 h-100 border-100 border-secondary rounded-full transform -rotate-[60]"></div>
            <div className="absolute -bottom-75 -right-120 w-2/3 h-100 border-80 border-secondary rounded-full transform "></div>
    
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2 md:mb-4">Government & NGO Partnerships</h2>
                <h3 className="text-lg md:text-2xl font-semibold text-white mb-2 md:mb-6">
                  Together, We Are Building a Stronger Agricultural Economy
                </h3>
                <p className="text-white/90 text-base md:text-lg md:max-w-4xl mx-auto">
                  PLACOM actively collaborates with international NGOs, development organizations, and private sector actors
                  to scale impact, foster innovation, and expand value chains in Plateau State.
                </p>
              </div>
    
              <div className="flex justify-center gap-1 md:gap-5 mb-10">
                {partnerColors.map((_color, index) => (
                  <div key={index} className={`w-15 h-15 md:w-20 md:h-20 bg-white rounded-lg md:rounded-2xl flex items-center justify-center shadow-lg`}>
                    <Image
                      src={`/partners.png`}
                      alt={`Partner ${index + 1}`}
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
    
              <div className="text-center">
                <Button className="bg-secondary hover:bg-green-500 text-white px-8 py-6 text-lg rounded-md">
                  Become a partner
                </Button>
              </div>
            </div>
          </section>)
}
export default Seventh_Section