'use client'
import React from 'react';
import { Button } from "@/components/ui/button"

const Fourth_Section: React.FC = () => {
    return (<section className="pt-20">
            <div className="mx-auto">
              <div className="text-center mb-10">
                <div className="rounded-lg p-8 mx-auto">
                  <h2 className="text-4xl font-bold text-primary mb-4">Key Services and Features</h2>
                  <p className="text-xl text-primary font-semibold">What You Can Do on PLACOM</p>
                </div>
              </div>
    
              <div className="mx-auto">
                <div className="bg-[#0F68621A] grid md:grid-cols-2 md:gap-12 mx-5 md:mx-0 md:px-[250px]">
                  <div className="">
                    <div className="p-2 py-8 md:p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-2 bg-[#55B80245] rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 48 48">
                            <g fill="#55B802">
                              <path fillRule="evenodd" d="M9.263 6c-.378 0-.715.262-.845.656L6.11 13.667a2.2 2.2 0 0 0-.11.687v2.789C6 18.72 7.151 20 8.571 20s2.572-1.28 2.572-2.857c0 1.578 1.151 2.857 2.571 2.857s2.572-1.28 2.572-2.857c0 1.578 1.151 2.857 2.571 2.857s2.57-1.278 2.572-2.855C21.429 18.722 22.58 20 24 20s2.571-1.28 2.571-2.857c0 1.578 1.152 2.857 2.572 2.857s2.57-1.278 2.571-2.855C31.715 18.722 32.866 20 34.286 20s2.571-1.28 2.571-2.857c0 1.578 1.151 2.857 2.572 2.857C40.849 20 42 18.72 42 17.143v-2.789a2.2 2.2 0 0 0-.11-.687l-2.308-7.01c-.13-.395-.467-.657-.845-.657z" clipRule="evenodd"></path>
                              <path fillRule="evenodd" d="M10 21.23V29H7.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h33a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H38v-7.77a3.9 3.9 0 0 1-1.143-.703a4 4 0 0 1-.857.576V29H12v-7.897a4 4 0 0 1-.857-.576c-.336.295-.72.535-1.143.703m26-1.957q.127-.127.24-.273H36zM37.474 19a2.8 2.8 0 0 0 .526.519V19zM10 19.519a2.6 2.6 0 0 0 .526-.519H10zM11.76 19H12v.273a3 3 0 0 1-.24-.273M8.5 33a.5.5 0 0 0-.5.5V41a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1v-7.5a.5.5 0 0 0-.5-.5z" clipRule="evenodd"></path>
                              <path d="M14 26.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z"></path>
                              <path d="M16 27.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm8 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></path>
                            </g>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg md:text-2xl font-bold text-primary mb-2">Marketplace Platform:</h3>
                          <p className="text-primary text-base md:text-lg mb-5">
                            A trusted digital hub where commodities meet demand—locally and beyond borders.
                          </p>
                          <Button variant={"default"} className="py-5">Enter Markets</Button>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div className="">
                    <div className="p-2 py-8 md:p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-[10px] bg-[#8AC73C33] rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 512 512">
                            <path fill="#8AC73C" d="M247.759 14.358L16 125.946V184h480v-58.362ZM464 152H48v-5.946l200.241-96.412L464 146.362ZM16 496h480V392H16Zm32-72h416v40H48Zm24-216h32v160H72zm336 0h32v160h-32zm-224 0h32v160h-32zm112 0h32v160h-32z"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-primary mb-2">Corporate Entity Integration:</h3>
                          <p className="text-primary text-lg mb-5">
                            Designed for agro-companies, cooperatives, and NGOs to manage bulk purchases, track commodities, and
                            support farmers.
                          </p>
                          <Button variant={"default"} className="py-5">Get Started</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    
                <div className="bg-[#F6FFE9] grid md:grid-cols-2 md:gap-12 mx-5 md:mx-0 md:px-[250px]">
                  <div className="">
                    <div className="p-2 py-8 md:p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-2 bg-[#8AC73C33] rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 48 48">
                            <path fill="none" stroke="#0F6862" strokeLinecap="round" strokeLinejoin="round" d="M24 31.68V16.319m-3.936 12.479c.775.98 1.746 1.346 3.098 1.346h1.87c1.741 0 3.152-1.375 3.152-3.072h0c0-1.697-1.41-3.072-3.152-3.072h-2.066c-1.74 0-3.152-1.375-3.152-3.072h0c0-1.697 1.41-3.072 3.152-3.072h1.87c1.353 0 2.324.365 3.099 1.346m-3.874 14.96v7.592m19.44-30.21v19.27L24.965 41.517a1.81 1.81 0 0 1-1.81 0L4.5 30.745V11.474m26.448 7.318L43.5 11.545l-9.12-5.266h0l-6.426 3.71c-2.183 1.26-5.732 1.254-7.929-.014L13.56 6.242L4.5 11.474l12.552 7.247" strokeWidth={2}></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg md:text-2xl font-bold text-secondary mb-2">Seller Feature:</h3>
                          <p className="text-primary text-base md:text-lg mb-5">
                            Register as a verified seller, list your commodities, and connect with reliable buyers seamlessly.
                          </p>
                          <Button variant={"secondary"} className="py-5">Start Selling</Button>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div className="">
                    <div className="p-2 py-8 md:p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-[10px] bg-[#0F686233] rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 640 512">
                            <path fill="#0F6862" d="M0 488V171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0l267.9 107.1c24.3 9.7 40.2 33.3 40.2 59.4V488c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24V224c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32v264c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24m488 24H152c-13.3 0-24-10.7-24-24v-56h384v56c0 13.3-10.7 24-24 24M128 400v-64h384v64zm0-96v-80h384v80z"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg md:text-2xl font-bold text-secondary mb-2">Warehouse Facility:</h3>
                          <p className="text-primary text-base md:text-lg mb-5">
                            Secure, climate-optimized storage for your harvested produce with real-time tracking and access.
                          </p>
                          <Button variant={"secondary"} className="py-5">Learn more...</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>)
}
export default Fourth_Section