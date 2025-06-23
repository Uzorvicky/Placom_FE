"use client"
import { Card, CardContent } from "@/components/ui/card"
// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import {products, ProductProps, testimonials, TestimonialsProp} from"@/lib/data/products"


interface SixSectionProps {
  products?: ProductProps[];
  testimonials?: TestimonialsProp[]
}



const Six_Section: React.FC<SixSectionProps> = () => {
    return       (<section className="py-20">
            <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[100px]">
              <div className="flex flex-col md:flex-row gap-10 items-start max-w-7xl mx-auto">
                <div className="md:flex-2 mb-0 md:mb-12 lg:mb-0">
                  <h2 className="text-2xl md:text-4xl font-bold text-primary md:mb-6">Farmer Impact Stories</h2>
                  <h3 className="text-lg md:text-2xl font-semibold text-primary mb-4 md:mb-8">Voices from the field</h3>
    
                  <p className="text-primary text-base md:text-lg leading-relaxed mb-8">
                    At PLACOM, the true measure of our success lies not just in systems or platforms, but in the transformed
                    lives of the people we serve. From remote farming communities in Barkin Ladi to bustling produce markets
                    in Jos, the stories of growth, stability, and renewed hope are many.
                  </p>
    
                  <p className="text-primary text-base md:text-lg leading-relaxed">
                    Whether it's through access to warehouses that protect their produce, direct market linkages, financial
                    facilitation, or logistics support, these testimonials reveal how PLACOM is helping reshape the narrative
                    for agricultural communities across Plateau State.
                  </p>
                </div>
    
                <div className="md:flex-1 relative w-[280px] h-[280px] md:w-[360px] md:h-[340px] m-auto mt-0 rounded-full">
                  <Image
                    src="/impactImg.jpg"
                    alt="Happy farmer with fresh produce"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full rounded-full z-1000 absolute top-0 left-5 border-10 border-white"
                  />
                  <div className="absolute -bottom-20 left-3 md:-bottom-8 md:left-0">
                    <Card className="bg-white min-w-[200px] md:min-w-[280px] shadow-none border-none group py-0">
                      <CardContent className="p-0">
                        <div className="relative">
                          <Image
                            src={products[0].image || ""}
                            alt={products[0].name}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover rounded-t"
                          />
                          <div className="absolute top-3 right-3 bg-secondary text-white px-2 py-1 rounded text-sm font-semibold">
                            {products[0].discount}
                          </div>
                        </div>
    
                        <div className="px-4 py-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold text-lg">{products[0].name}</h3>
                              <div className="flex items-center justify-between gap-1 mb-2">
                                <div className="flex items-center">
                                  <span className="text-xs text-[#717171]">{products[0].farmer}</span>
                                </div>
                                <div className="flex items-center">
                                  {products[0].verified && <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24">
                                    <path fill="#0F6862" d="M12.65 3.797c.487.131.908.458 1.42.854l.297.23c.243.187.301.23.359.261a1 1 0 0 0 .196.081c.063.019.134.03.438.07l.373.047c.642.082 1.17.149 1.607.4c.383.22.7.537.92.92c.251.436.318.965.4 1.607l.048.373c.039.304.05.375.069.438q.03.102.08.196c.032.058.075.116.262.359l.23.297c.396.512.723.933.854 1.42a2.5 2.5 0 0 1 0 1.3c-.131.487-.458.908-.854 1.42l-.23.297c-.187.243-.23.301-.261.359q-.051.094-.081.196c-.019.063-.03.134-.07.438l-.047.373c-.082.642-.149 1.17-.4 1.607a2.5 2.5 0 0 1-.92.92c-.436.251-.965.318-1.607.4l-.373.048c-.304.039-.375.05-.438.069q-.102.03-.196.08c-.058.032-.116.075-.359.262l-.297.23c-.512.396-.933.723-1.42.854a2.5 2.5 0 0 1-1.3 0c-.487-.131-.908-.458-1.42-.854l-.297-.23c-.243-.187-.301-.23-.359-.261a1 1 0 0 0-.196-.081c-.063-.019-.134-.03-.438-.07l-.373-.047c-.642-.082-1.17-.149-1.607-.4a2.5 2.5 0 0 1-.92-.92c-.251-.436-.318-.965-.4-1.607l-.048-.373c-.039-.304-.05-.375-.069-.438a1 1 0 0 0-.08-.196c-.032-.058-.075-.116-.262-.359l-.23-.297c-.396-.512-.723-.933-.854-1.42a2.5 2.5 0 0 1 0-1.3c.131-.487.458-.908.854-1.42l.23-.297c.187-.243.23-.301.261-.359a1 1 0 0 0 .081-.196c.019-.063.03-.134.07-.438l.047-.373c.082-.642.149-1.17.4-1.607a2.5 2.5 0 0 1 .92-.92c.436-.251.965-.318 1.607-.4l.373-.048c.304-.039.375-.05.438-.069a1 1 0 0 0 .196-.08c.058-.032.116-.075.359-.262l.297-.23c.512-.396.933-.723 1.42-.854a2.5 2.5 0 0 1 1.3 0m3.057 5.496a1 1 0 0 0-1.414 0L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414"></path>
                                  </svg>}
                                  <span className="text-xs text-[#717171]">• {products[0].location}</span>
                                </div>
                              </div>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={25}
                              height={25}
                              viewBox="0 0 24 24"
                              className="filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                            >
                              <path
                                fill={products[0].favourite ? "#FF2200" : "#FFFFFF"}
                                d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="">
                              <p className="text-sm">{products[0].price}</p>
                              <p className="text-sm text-[#171C26] line-through">{products[0].originalPrice}</p>
                            </div>
                            <div className="hover:bg-[#F6FFE9] rounded-full transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24">
                                <path fill="#8AC73C" d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
    
              <div className="grid md:grid-cols-2 gap-8 mt-25 md:mt-16">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-none shadow-none border-none">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-4 mb-2 md:mb-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full object-cover w-[31px] h-[31px]"
                        />
                        <div>
                          <h4 className="font-semibold text-sm md:text-base text-gray-900">
                            {testimonial.name} – {testimonial.role}
                          </h4>
                          <p className="text-xs md:text-sm text-[#171C26]">{testimonial.date}</p>
                        </div>
                      </div>
    
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" key={i}
                            className={`w-4 h-4 ${i < Math.floor(testimonial.rating) ? "fill-secondary text-secondary" : "text-[#ABABAB] fill-[#ABABAB]"
                              }`}>
                            <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"></path>
                          </svg>
                        ))}
                      </div>
    
                      <p className="text-[#717171] text-base leading-relaxed">{testimonial.testimonial}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>)
}
export default Six_Section