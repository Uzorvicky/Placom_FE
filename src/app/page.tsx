"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Building2, CheckCircle, Heart, ShoppingCart, Sprout, Star, Store, UserCheck, Warehouse } from "lucide-react"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  const testimonials = [
    {
      name: "Miriam D.",
      role: "Potato Farmer, Bokkos",
      date: "April 2023",
      rating: 5,
      image: "/impactUser.png",
      testimonial:
        "I used to worry every harvest season. Sometimes, I'd lose over half of my potatoes due to poor storage or lack of buyers. PLACOM changed that story. Now, my produce goes from farm to warehouse, and from there to buyers I never had access to before. I even got a better price than the local market! For the first time in years, my farm is profitable.",
    },
    {
      name: "Bulus G.",
      role: "Onion Farmer, Shendam",
      date: "April 2023",
      rating: 5,
      image: "/impactUser.png",
      testimonial:
        "In the past, we just sold to middlemen who paid whatever they wanted. With PLACOM, I got trained on proper packaging and grading. The platform connected me to a distributor in Abuja who now buys my onions in bulk. My children no longer have to miss school during harvest just to help with selling. We are moving forward!",
    },
    {
      name: "Hannatu I.",
      role: "Mixed Crop Farmer, Riyom",
      date: "April 2023",
      rating: 5,
      image: "/impactUser.png",
      testimonial:
        "I attended one of the sensitization meetings hosted by PLACOM in my LGA and I was skeptical. But everything they said, they did. I now store my onions in the new facility and access market pricing through the platform. It's like stepping into a new world of farming where the farmer finally has power and clarity.",
    },
    {
      name: "Salome J.",
      role: "Produce Supplier, Jos Main Market",
      date: "April 2023",
      rating: 5,
      image: "/impactUser.png",
      testimonial:
        "I've been sourcing potatoes from Plateau farmers for over a decade, but the experience was often chaotic. With PLACOM, the quality is consistent, and the process is smoother. I simply log in, request volume, and get updates from warehouse dispatch. It has brought professionalism into the value chain.",
    },
  ]

  const products = [
    {
      name: "Onions",
      userImage: "/userImg.jpg",
      farmer: "Ushaseer Farms",
      verified: true,
      location: "Benue",
      price: "NGN5,000",
      originalPrice: "NGN5,000",
      discount: "-5%",
      image: "/product.jpg",
      inStock: true,
      favourite: true,
    },
    {
      name: "Onions",
      userImage: "/userImg.jpg",
      farmer: "Ushaseer Farms",
      verified: true,
      location: "Benue",
      price: "NGN5,000",
      originalPrice: "NGN5,000",
      discount: "-5%",
      image: "/product.jpg",
      inStock: true,
      favourite: true,
    },
    {
      name: "Onions",
      userImage: "/userImg.jpg",
      farmer: "Ushaseer Farms",
      verified: true,
      location: "Benue",
      price: "NGN5,000",
      originalPrice: "NGN5,000",
      discount: "-5%",
      image: "/product.jpg",
      inStock: true,
      favourite: false,
    },
    {
      name: "Onions",
      userImage: "/userImg.jpg",
      farmer: "Ushaseer Farms",
      verified: true,
      location: "Benue",
      price: "NGN5,000",
      originalPrice: "NGN5,000",
      discount: "-5%",
      image: "/product.jpg",
      inStock: true,
      favourite: false,
    },
    {
      name: "Onions",
      userImage: "/userImg.jpg",
      farmer: "Ushaseer Farms",
      verified: true,
      location: "Benue",
      price: "NGN5,000",
      originalPrice: "NGN5,000",
      discount: "-5%",
      image: "/product.jpg",
      inStock: true,
      favourite: true,
    },
  ]

  const stores = [
    {
      name: "Dung Farms",
      verified: true,
      products: "30 bags Onions",
      rating: 3.5,
      reviews: 123,
      image: "/product.jpg",
      favourite: true,
    },
    {
      name: "Dung Farms",
      verified: true,
      products: "30 bags Onions",
      rating: 4.5,
      reviews: 123,
      image: "/product.jpg",
      favourite: false,
    },
    {
      name: "Dung Farms",
      verified: true,
      products: "30 bags Onions",
      rating: 4.5,
      reviews: 123,
      image: "/product.jpg",
      favourite: true,
    },
    {
      name: "Dung Farms",
      verified: true,
      products: "30 bags Onions",
      rating: 4.5,
      reviews: 123,
      image: "/product.jpg",
      favourite: true,
    },
  ]

  const partnerColors = ["primary", "amber-600", "red-500", "indigo-600", "purple-600", "yellow-600"]

  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen bg-gradient-to-br from-teal-400 via-green-300 to-blue-400">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-100">
        {/* <div className="w-full h-full bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center"></div> */}
        <Image
          src="/homeHero.png"
          alt="PLACOM Logo"
          fill
          className="mx-auto mb-4 object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto md:pt-8">
        <nav className="bg-white/80 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-4 shadow-lg w-full max-w-screen-xl mx-auto md:mt-4 md:rounded-full">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Logo + Brand */}
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="PLACOM Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-primary">PLACOM</span>
            </div>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden focus:outline-none"
            >
              {menuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
            </button>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="#about" className="hover:text-teal-600 transition-colors">
                About Us
              </a>
              <a href="#marketplace" className="hover:text-teal-600 transition-colors">
                Marketplace
              </a>
              <a href="#sellers" className="hover:text-teal-600 transition-colors">
                Sellers
              </a>
              <a href="#warehouse" className="hover:text-teal-600 transition-colors">
                Warehouse
              </a>
              <a href="#corporate" className="hover:text-teal-600 transition-colors">
                Corporate
              </a>
              <a href="#contact" className="hover:text-teal-600 transition-colors">
                Contact Us
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <Button variant="secondary" className="rounded-full px-5 py-2 text-sm">
                Login
              </Button>
              <Button variant="default" className="rounded-full px-5 py-2 text-sm">
                Register
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="md:hidden mt-4 space-y-4"
              >
                <div className="flex flex-col gap-4 text-primary">
                  <a href="#about" className="hover:text-teal-600 transition-colors">
                    About Us
                  </a>
                  <a href="#marketplace" className="hover:text-teal-600 transition-colors">
                    Marketplace
                  </a>
                  <a href="#sellers" className="hover:text-teal-600 transition-colors">
                    Sellers
                  </a>
                  <a href="#warehouse" className="hover:text-teal-600 transition-colors">
                    Warehouse
                  </a>
                  <a href="#corporate" className="hover:text-teal-600 transition-colors">
                    Corporate
                  </a>
                  <a href="#contact" className="hover:text-teal-600 transition-colors">
                    Contact Us
                  </a>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <Button variant="secondary" className="w-full rounded-full text-sm">
                    Login
                  </Button>
                  <Button variant="default" className="w-full rounded-full text-sm">
                    Register
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <div className="min-h-[80vh] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[100px]">
          <div className="relative text-center my-12 mx-auto max-w-3xl ">
            <div className="absolute -top-4/3 -left-3 md:-top-2/2 md:-left-1/2 bg-radial-[at_50%_40%] md:bg-radial-[at_50%_50%] from-[#FFFFFF] via-[rgba(255,255,255,.03)] to-[] to-90% -z-1 rounded-full w-screen h-screen md:p-40"></div>
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-tight mb-6"
          >
            Empowering Plateau's Farmers,
            Connecting to Global Markets
          </motion.h1>
          </div>
          <div className="bg-white/80 rounded-3xl py-5 md:py-12 m-auto text-center shadow-2xl">
            <p className="text-base md:text-xl text-primary mb-5 mx-auto px-2 md:px-10">
              PLACOM is bridging the gap between local agricultural producers and high-value markets by reducing
              post-harvest losses, improving logistics, and transforming the way potatoes and onions are marketed from
              Plateau State.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-5 md:px-0">
              <Button variant={"default"} className="px-8 py-6 text-lg rounded-sm flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 1200 1200">
                  <path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0m3.955 209.912l94.556 295.239l309.889 6.958l-251.588 181.055l89.136 296.924l-249.976-183.325l-254.81 176.587l97.119-294.434l-246.68-187.793l310.034 1.392z"></path>
                </svg>
                Get Started with PLACOM
              </Button>
              <Button
                variant="secondary"
                className="px-8 py-6 text-lg rounded-sm"
              >
                Learn How It Works
              </Button>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-5 items-center md:mx-[100px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-left flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">About PLACOM</h2>
              <h3 className="text-xl sm:text-3xl font-bold text-primary mb-2">
                A State-Driven Vision for Agricultural Prosperity
              </h3>

              <p className="text-primary text-base md:text-lg mb-6">
                The Plateau State Commodity and Marketing Company Limited (PLACOM) is a government-backed initiative
                launched under the leadership of Governor Caleb Mutfwang. It is a dedicated Special Purpose Vehicle (SPV)
                designed to solve the marketing and post-harvest challenges faced by Plateau State's farmers. PLACOM is
                focused on increasing the income of local farmers, promoting food security, and connecting communities
                with sustainable market opportunities.
              </p>
            </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] m-auto">
                <Image
                  src="/governor.jpg"
                  alt="Governor with PLACOM officials"
                  width={400}
                  height={400}
                  className="rounded-full max-w-[250px] h-[250px] md:max-w-[362px] md:h-[362px] z-10 absolute left-10 object-cover border-10 border-white"
                />
                <div className="hidden md:block absolute bottom-4 right-10 text-white p-2 z-10 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 24 24">
                    <path fill="#1B7B44" d="M12.65 3.797c.487.131.908.458 1.42.854l.297.23c.243.187.301.23.359.261a1 1 0 0 0 .196.081c.063.019.134.03.438.07l.373.047c.642.082 1.17.149 1.607.4c.383.22.7.537.92.92c.251.436.318.965.4 1.607l.048.373c.039.304.05.375.069.438q.03.102.08.196c.032.058.075.116.262.359l.23.297c.396.512.723.933.854 1.42a2.5 2.5 0 0 1 0 1.3c-.131.487-.458.908-.854 1.42l-.23.297c-.187.243-.23.301-.261.359q-.051.094-.081.196c-.019.063-.03.134-.07.438l-.047.373c-.082.642-.149 1.17-.4 1.607a2.5 2.5 0 0 1-.92.92c-.436.251-.965.318-1.607.4l-.373.048c-.304.039-.375.05-.438.069q-.102.03-.196.08c-.058.032-.116.075-.359.262l-.297.23c-.512.396-.933.723-1.42.854a2.5 2.5 0 0 1-1.3 0c-.487-.131-.908-.458-1.42-.854l-.297-.23c-.243-.187-.301-.23-.359-.261a1 1 0 0 0-.196-.081c-.063-.019-.134-.03-.438-.07l-.373-.047c-.642-.082-1.17-.149-1.607-.4a2.5 2.5 0 0 1-.92-.92c-.251-.436-.318-.965-.4-1.607l-.048-.373c-.039-.304-.05-.375-.069-.438a1 1 0 0 0-.08-.196c-.032-.058-.075-.116-.262-.359l-.23-.297c-.396-.512-.723-.933-.854-1.42a2.5 2.5 0 0 1 0-1.3c.131-.487.458-.908.854-1.42l.23-.297c.187-.243.23-.301.261-.359a1 1 0 0 0 .081-.196c.019-.063.03-.134.07-.438l.047-.373c.082-.642.149-1.17.4-1.607a2.5 2.5 0 0 1 .92-.92c.436-.251.965-.318 1.607-.4l.373-.048c.304-.039.375-.05.438-.069a1 1 0 0 0 .196-.08c.058-.032.116-.075.359-.262l.297-.23c.512-.396.933-.723 1.42-.854a2.5 2.5 0 0 1 1.3 0m3.057 5.496a1 1 0 0 0-1.414 0L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414"></path>
                  </svg>
                </div>
                <div className="md:hidden absolute bottom-4 right-7 text-white p-2 z-10 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24">
                    <path fill="#1B7B44" d="M12.65 3.797c.487.131.908.458 1.42.854l.297.23c.243.187.301.23.359.261a1 1 0 0 0 .196.081c.063.019.134.03.438.07l.373.047c.642.082 1.17.149 1.607.4c.383.22.7.537.92.92c.251.436.318.965.4 1.607l.048.373c.039.304.05.375.069.438q.03.102.08.196c.032.058.075.116.262.359l.23.297c.396.512.723.933.854 1.42a2.5 2.5 0 0 1 0 1.3c-.131.487-.458.908-.854 1.42l-.23.297c-.187.243-.23.301-.261.359q-.051.094-.081.196c-.019.063-.03.134-.07.438l-.047.373c-.082.642-.149 1.17-.4 1.607a2.5 2.5 0 0 1-.92.92c-.436.251-.965.318-1.607.4l-.373.048c-.304.039-.375.05-.438.069q-.102.03-.196.08c-.058.032-.116.075-.359.262l-.297.23c-.512.396-.933.723-1.42.854a2.5 2.5 0 0 1-1.3 0c-.487-.131-.908-.458-1.42-.854l-.297-.23c-.243-.187-.301-.23-.359-.261a1 1 0 0 0-.196-.081c-.063-.019-.134-.03-.438-.07l-.373-.047c-.642-.082-1.17-.149-1.607-.4a2.5 2.5 0 0 1-.92-.92c-.251-.436-.318-.965-.4-1.607l-.048-.373c-.039-.304-.05-.375-.069-.438a1 1 0 0 0-.08-.196c-.032-.058-.075-.116-.262-.359l-.23-.297c-.396-.512-.723-.933-.854-1.42a2.5 2.5 0 0 1 0-1.3c.131-.487.458-.908.854-1.42l.23-.297c.187-.243.23-.301.261-.359a1 1 0 0 0 .081-.196c.019-.063.03-.134.07-.438l.047-.373c.082-.642.149-1.17.4-1.607a2.5 2.5 0 0 1 .92-.92c.436-.251.965-.318 1.607-.4l.373-.048c.304-.039.375-.05.438-.069a1 1 0 0 0 .196-.08c.058-.032.116-.075.359-.262l.297-.23c.512-.396.933-.723 1.42-.854a2.5 2.5 0 0 1 1.3 0m3.057 5.496a1 1 0 0 0-1.414 0L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414"></path>
                  </svg>
                </div>
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
                              fill={products[0].favourite ? "#FF2200":"#FFFFFF"}
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
              </motion.div>
          </div>
        </div>
      </section>
      
      <section className="bg-[#8AC73C40] h-[1050px] md:h-fit overflow-hidden mt-20 md:mt-0">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[100px]">
            <div className="flex flex-col-reverse md:flex-row items-center gap-4 py-10 md:py-0">
              <div className="relative flx-1">
                <Image
                  src="/authImgTrans.png"
                  alt="Farmer with mobile app interface"
                  width={450}
                  height={620}
                  className="relative top-20 -left-8 md:top-50 z-10 rounded-lg max-w-[450px] max-h-[620px] object-contain"
                />
                <div className="absolute top-10 md:top-30 left-20 md:-bottom-8 md:left-0">
                  <Card className="bg-white w-[180px] md:min-w-[240px] shadow-none border-none group py-0">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={products[0].image || ""}
                          alt={products[0].name}
                          width={300}
                          height={200}
                          className="w-full h-30 md:h-35 object-cover rounded-t"
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
                              fill={products[0].favourite ? "#FF2200":"#FFFFFF"}
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
                <div className="absolute z-100 top-40 md:top-60 left-55">
                  <Card className="bg-white w-[150px] md:w-[180px] shadow-none border-none group py-0">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={"/product2.jpg"}
                          alt={products[0].name}
                          width={300}
                          height={200}
                          className="w-full h-20 object-cover rounded-t"
                        />
                        <div className="absolute top-3 right-3 bg-secondary text-white px-1 py-1 rounded text-xs font-semibold">
                          {products[0].discount}
                        </div>
                      </div>

                      <div className="px-4 py-2">
                        <div className="flex items-center justify-between">
                            <div>
                            <h3 className="font-semibold text-xs">{products[0].name}</h3>
                            <div className="flex items-center justify-between gap-1 mb-2">
                              <div className="flex items-center"> 
                                <span className="text-[8px] text-[#717171]">{products[0].farmer}</span>
                              </div>
                              <div className="flex items-center">
                                {products[0].verified && <svg xmlns="http://www.w3.org/2000/svg" className="w-[10px] h-[10px]" viewBox="0 0 24 24">
                                  <path fill="#0F6862" d="M12.65 3.797c.487.131.908.458 1.42.854l.297.23c.243.187.301.23.359.261a1 1 0 0 0 .196.081c.063.019.134.03.438.07l.373.047c.642.082 1.17.149 1.607.4c.383.22.7.537.92.92c.251.436.318.965.4 1.607l.048.373c.039.304.05.375.069.438q.03.102.08.196c.032.058.075.116.262.359l.23.297c.396.512.723.933.854 1.42a2.5 2.5 0 0 1 0 1.3c-.131.487-.458.908-.854 1.42l-.23.297c-.187.243-.23.301-.261.359q-.051.094-.081.196c-.019.063-.03.134-.07.438l-.047.373c-.082.642-.149 1.17-.4 1.607a2.5 2.5 0 0 1-.92.92c-.436.251-.965.318-1.607.4l-.373.048c-.304.039-.375.05-.438.069q-.102.03-.196.08c-.058.032-.116.075-.359.262l-.297.23c-.512.396-.933.723-1.42.854a2.5 2.5 0 0 1-1.3 0c-.487-.131-.908-.458-1.42-.854l-.297-.23c-.243-.187-.301-.23-.359-.261a1 1 0 0 0-.196-.081c-.063-.019-.134-.03-.438-.07l-.373-.047c-.642-.082-1.17-.149-1.607-.4a2.5 2.5 0 0 1-.92-.92c-.251-.436-.318-.965-.4-1.607l-.048-.373c-.039-.304-.05-.375-.069-.438a1 1 0 0 0-.08-.196c-.032-.058-.075-.116-.262-.359l-.23-.297c-.396-.512-.723-.933-.854-1.42a2.5 2.5 0 0 1 0-1.3c.131-.487.458-.908.854-1.42l.23-.297c.187-.243.23-.301.261-.359a1 1 0 0 0 .081-.196c.019-.063.03-.134.07-.438l.047-.373c.082-.642.149-1.17.4-1.607a2.5 2.5 0 0 1 .92-.92c.436-.251.965-.318 1.607-.4l.373-.048c.304-.039.375-.05.438-.069a1 1 0 0 0 .196-.08c.058-.032.116-.075.359-.262l.297-.23c.512-.396.933-.723 1.42-.854a2.5 2.5 0 0 1 1.3 0m3.057 5.496a1 1 0 0 0-1.414 0L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414"></path>
                                </svg>}
                                <span className="text-[8px] text-[#717171]">• {products[0].location}</span>
                              </div>
                            </div>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] w-[10px] h-[10px]"
                          >
                            <path
                              fill={products[0].favourite ? "#FF2200":"#FFFFFF"}
                              d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="">
                            <p className="text-xs">{products[0].price}</p>
                            <p className="text-xs text-[#171C26] line-through">{products[0].originalPrice}</p>
                          </div>
                          <div className="hover:bg-[#F6FFE9] rounded-full transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[15px] h-[15px]" viewBox="0 0 24 24">
                              <path fill="#8AC73C" d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute z-100 top-13 md:top-33 left-67 md:left-63">
                  <div className="border-10 w-[100px] border-white rounded-lg">
                    <Image
                      src="/product3.jpg"
                      alt={products[0].name}
                      width={300}
                      height={200}
                      className="w-full h-20 object-cover rounded-t"
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-2xl flex-1">
                <h3 className="text-3xl font-bold text-primary mb-2">Why PLACOM Exists</h3>
                <p className="text-xl text-primary mb-8 font-semibold">Built to Solve Real Problems Facing Farmers</p>

                <div className="space-y-2">
                  <div className="flex items-start gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24">
                      <path fill="#1B7B44" d="M12.65 3.797c.487.131.908.458 1.42.854l.297.23c.243.187.301.23.359.261a1 1 0 0 0 .196.081c.063.019.134.03.438.07l.373.047c.642.082 1.17.149 1.607.4c.383.22.7.537.92.92c.251.436.318.965.4 1.607l.048.373c.039.304.05.375.069.438q.03.102.08.196c.032.058.075.116.262.359l.23.297c.396.512.723.933.854 1.42a2.5 2.5 0 0 1 0 1.3c-.131.487-.458.908-.854 1.42l-.23.297c-.187.243-.23.301-.261.359q-.051.094-.081.196c-.019.063-.03.134-.07.438l-.047.373c-.082.642-.149 1.17-.4 1.607a2.5 2.5 0 0 1-.92.92c-.436.251-.965.318-1.607.4l-.373.048c-.304.039-.375.05-.438.069q-.102.03-.196.08c-.058.032-.116.075-.359.262l-.297.23c-.512.396-.933.723-1.42.854a2.5 2.5 0 0 1-1.3 0c-.487-.131-.908-.458-1.42-.854l-.297-.23c-.243-.187-.301-.23-.359-.261a1 1 0 0 0-.196-.081c-.063-.019-.134-.03-.438-.07l-.373-.047c-.642-.082-1.17-.149-1.607-.4a2.5 2.5 0 0 1-.92-.92c-.251-.436-.318-.965-.4-1.607l-.048-.373c-.039-.304-.05-.375-.069-.438a1 1 0 0 0-.08-.196c-.032-.058-.075-.116-.262-.359l-.23-.297c-.396-.512-.723-.933-.854-1.42a2.5 2.5 0 0 1 0-1.3c.131-.487.458-.908.854-1.42l.23-.297c.187-.243.23-.301.261-.359a1 1 0 0 0 .081-.196c.019-.063.03-.134.07-.438l.047-.373c.082-.642.149-1.17.4-1.607a2.5 2.5 0 0 1 .92-.92c.436-.251.965-.318 1.607-.4l.373-.048c.304-.039.375-.05.438-.069a1 1 0 0 0 .196-.08c.058-.032.116-.075.359-.262l.297-.23c.512-.396.933-.723 1.42-.854a2.5 2.5 0 0 1 1.3 0m3.057 5.496a1 1 0 0 0-1.414 0L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414"></path>
                    </svg>
                    <div>
                      <h4 className="text-lg font-semibold text-primary">Post-Harvest Management:</h4>
                      <p className="text-primary">
                        Modern handling and storage systems that drastically reduce losses and spoilage.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24">
                      <path fill="#1B7B44" d="M12.65 3.797c.487.131.908.458 1.42.854l.297.23c.243.187.301.23.359.261a1 1 0 0 0 .196.081c.063.019.134.03.438.07l.373.047c.642.082 1.17.149 1.607.4c.383.22.7.537.92.92c.251.436.318.965.4 1.607l.048.373c.039.304.05.375.069.438q.03.102.08.196c.032.058.075.116.262.359l.23.297c.396.512.723.933.854 1.42a2.5 2.5 0 0 1 0 1.3c-.131.487-.458.908-.854 1.42l-.23.297c-.187.243-.23.301-.261.359q-.051.094-.081.196c-.019.063-.03.134-.07.438l-.047.373c-.082.642-.149 1.17-.4 1.607a2.5 2.5 0 0 1-.92.92c-.436.251-.965.318-1.607.4l-.373.048c-.304.039-.375.05-.438.069q-.102.03-.196.08c-.058.032-.116.075-.359.262l-.297.23c-.512.396-.933.723-1.42.854a2.5 2.5 0 0 1-1.3 0c-.487-.131-.908-.458-1.42-.854l-.297-.23c-.243-.187-.301-.23-.359-.261a1 1 0 0 0-.196-.081c-.063-.019-.134-.03-.438-.07l-.373-.047c-.642-.082-1.17-.149-1.607-.4a2.5 2.5 0 0 1-.92-.92c-.251-.436-.318-.965-.4-1.607l-.048-.373c-.039-.304-.05-.375-.069-.438a1 1 0 0 0-.08-.196c-.032-.058-.075-.116-.262-.359l-.23-.297c-.396-.512-.723-.933-.854-1.42a2.5 2.5 0 0 1 0-1.3c.131-.487.458-.908.854-1.42l.23-.297c.187-.243.23-.301.261-.359a1 1 0 0 0 .081-.196c.019-.063.03-.134.07-.438l.047-.373c.082-.642.149-1.17.4-1.607a2.5 2.5 0 0 1 .92-.92c.436-.251.965-.318 1.607-.4l.373-.048c.304-.039.375-.05.438-.069a1 1 0 0 0 .196-.08c.058-.032.116-.075.359-.262l.297-.23c.512-.396.933-.723 1.42-.854a2.5 2.5 0 0 1 1.3 0m3.057 5.496a1 1 0 0 0-1.414 0L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414"></path>
                    </svg>
                    <div>
                      <h4 className="text-lg font-semibold text-primary">Market Access:</h4>
                      <p className="text-primary">
                        Strategic linkages to local and international buyers through our integrated marketplace.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24">
                      <path fill="#1B7B44" d="M12.65 3.797c.487.131.908.458 1.42.854l.297.23c.243.187.301.23.359.261a1 1 0 0 0 .196.081c.063.019.134.03.438.07l.373.047c.642.082 1.17.149 1.607.4c.383.22.7.537.92.92c.251.436.318.965.4 1.607l.048.373c.039.304.05.375.069.438q.03.102.08.196c.032.058.075.116.262.359l.23.297c.396.512.723.933.854 1.42a2.5 2.5 0 0 1 0 1.3c-.131.487-.458.908-.854 1.42l-.23.297c-.187.243-.23.301-.261.359q-.051.094-.081.196c-.019.063-.03.134-.07.438l-.047.373c-.082.642-.149 1.17-.4 1.607a2.5 2.5 0 0 1-.92.92c-.436.251-.965.318-1.607.4l-.373.048c-.304.039-.375.05-.438.069q-.102.03-.196.08c-.058.032-.116.075-.359.262l-.297.23c-.512.396-.933.723-1.42.854a2.5 2.5 0 0 1-1.3 0c-.487-.131-.908-.458-1.42-.854l-.297-.23c-.243-.187-.301-.23-.359-.261a1 1 0 0 0-.196-.081c-.063-.019-.134-.03-.438-.07l-.373-.047c-.642-.082-1.17-.149-1.607-.4a2.5 2.5 0 0 1-.92-.92c-.251-.436-.318-.965-.4-1.607l-.048-.373c-.039-.304-.05-.375-.069-.438a1 1 0 0 0-.08-.196c-.032-.058-.075-.116-.262-.359l-.23-.297c-.396-.512-.723-.933-.854-1.42a2.5 2.5 0 0 1 0-1.3c.131-.487.458-.908.854-1.42l.23-.297c.187-.243.23-.301.261-.359a1 1 0 0 0 .081-.196c.019-.063.03-.134.07-.438l.047-.373c.082-.642.149-1.17.4-1.607a2.5 2.5 0 0 1 .92-.92c.436-.251.965-.318 1.607-.4l.373-.048c.304-.039.375-.05.438-.069a1 1 0 0 0 .196-.08c.058-.032.116-.075.359-.262l.297-.23c.512-.396.933-.723 1.42-.854a2.5 2.5 0 0 1 1.3 0m3.057 5.496a1 1 0 0 0-1.414 0L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414"></path>
                    </svg>
                    <div>
                      <h4 className="text-lg font-semibold text-primary">Farmer Empowerment:</h4>
                      <p className="text-primary">
                        Training, sensitization, and financial facilitation to boost farmer productivity and business
                        readiness.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24">
                      <path fill="#1B7B44" d="M12.65 3.797c.487.131.908.458 1.42.854l.297.23c.243.187.301.23.359.261a1 1 0 0 0 .196.081c.063.019.134.03.438.07l.373.047c.642.082 1.17.149 1.607.4c.383.22.7.537.92.92c.251.436.318.965.4 1.607l.048.373c.039.304.05.375.069.438q.03.102.08.196c.032.058.075.116.262.359l.23.297c.396.512.723.933.854 1.42a2.5 2.5 0 0 1 0 1.3c-.131.487-.458.908-.854 1.42l-.23.297c-.187.243-.23.301-.261.359q-.051.094-.081.196c-.019.063-.03.134-.07.438l-.047.373c-.082.642-.149 1.17-.4 1.607a2.5 2.5 0 0 1-.92.92c-.436.251-.965.318-1.607.4l-.373.048c-.304.039-.375.05-.438.069q-.102.03-.196.08c-.058.032-.116.075-.359.262l-.297.23c-.512.396-.933.723-1.42.854a2.5 2.5 0 0 1-1.3 0c-.487-.131-.908-.458-1.42-.854l-.297-.23c-.243-.187-.301-.23-.359-.261a1 1 0 0 0-.196-.081c-.063-.019-.134-.03-.438-.07l-.373-.047c-.642-.082-1.17-.149-1.607-.4a2.5 2.5 0 0 1-.92-.92c-.251-.436-.318-.965-.4-1.607l-.048-.373c-.039-.304-.05-.375-.069-.438a1 1 0 0 0-.08-.196c-.032-.058-.075-.116-.262-.359l-.23-.297c-.396-.512-.723-.933-.854-1.42a2.5 2.5 0 0 1 0-1.3c.131-.487.458-.908.854-1.42l.23-.297c.187-.243.23-.301.261-.359a1 1 0 0 0 .081-.196c.019-.063.03-.134.07-.438l.047-.373c.082-.642.149-1.17.4-1.607a2.5 2.5 0 0 1 .92-.92c.436-.251.965-.318 1.607-.4l.373-.048c.304-.039.375-.05.438-.069a1 1 0 0 0 .196-.08c.058-.032.116-.075.359-.262l.297-.23c.512-.396.933-.723 1.42-.854a2.5 2.5 0 0 1 1.3 0m3.057 5.496a1 1 0 0 0-1.414 0L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414"></path>
                    </svg>
                    <div>
                      <h4 className="text-lg font-semibold text-primary">Trust & Transparency:</h4>
                      <p className="text-primary">
                        Backed by the Plateau State Government to ensure accountability and efficiency across all
                        operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      
      <section className="pt-20">
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
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[100px]">
          {/* Top selling products */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-xl md:text-3xl font-bold text-primary">Top selling products handpicked for you</h2>
            <Button variant="link" className="text-primary hover:text-teal-700 flex items-center gap-2">
              <span className="hidden md:block">Explore all products</span> <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="overflow-x-auto">
            <div className="flex gap-6 md:gap-4 px-2 md:px-0 pb-5">
            {products.map((product, index) => (
              <Card key={index} className="bg-white min-w-[280px] md:min-w-[280px] shadow-none border-none group py-0">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={product.image || ""}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-t"
                    />
                    <div className="absolute top-3 right-3 bg-secondary text-white px-2 py-1 rounded text-sm font-semibold">
                      {product.discount}
                    </div>
                  </div>

                  <div className="px-4 py-2">
                    <div className="flex items-center justify-between">
                        <div>
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <div className="flex items-center justify-between gap-1 mb-2">
                          <div className="flex items-center">
                            <Image
                              src={product.userImage || "/default-farmer.png"}
                              alt={product.farmer}
                              width={24}
                              height={24}
                              className="rounded-full object-cover h-6 w-6 mr-2"
                            />
                            <span className="text-xs text-[#717171]">{product.farmer}</span>
                          </div>
                          <div className="flex items-center">
                            {product.verified && <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24">
                              <path fill="#0F6862" d="M12.65 3.797c.487.131.908.458 1.42.854l.297.23c.243.187.301.23.359.261a1 1 0 0 0 .196.081c.063.019.134.03.438.07l.373.047c.642.082 1.17.149 1.607.4c.383.22.7.537.92.92c.251.436.318.965.4 1.607l.048.373c.039.304.05.375.069.438q.03.102.08.196c.032.058.075.116.262.359l.23.297c.396.512.723.933.854 1.42a2.5 2.5 0 0 1 0 1.3c-.131.487-.458.908-.854 1.42l-.23.297c-.187.243-.23.301-.261.359q-.051.094-.081.196c-.019.063-.03.134-.07.438l-.047.373c-.082.642-.149 1.17-.4 1.607a2.5 2.5 0 0 1-.92.92c-.436.251-.965.318-1.607.4l-.373.048c-.304.039-.375.05-.438.069q-.102.03-.196.08c-.058.032-.116.075-.359.262l-.297.23c-.512.396-.933.723-1.42.854a2.5 2.5 0 0 1-1.3 0c-.487-.131-.908-.458-1.42-.854l-.297-.23c-.243-.187-.301-.23-.359-.261a1 1 0 0 0-.196-.081c-.063-.019-.134-.03-.438-.07l-.373-.047c-.642-.082-1.17-.149-1.607-.4a2.5 2.5 0 0 1-.92-.92c-.251-.436-.318-.965-.4-1.607l-.048-.373c-.039-.304-.05-.375-.069-.438a1 1 0 0 0-.08-.196c-.032-.058-.075-.116-.262-.359l-.23-.297c-.396-.512-.723-.933-.854-1.42a2.5 2.5 0 0 1 0-1.3c.131-.487.458-.908.854-1.42l.23-.297c.187-.243.23-.301.261-.359a1 1 0 0 0 .081-.196c.019-.063.03-.134.07-.438l.047-.373c.082-.642.149-1.17.4-1.607a2.5 2.5 0 0 1 .92-.92c.436-.251.965-.318 1.607-.4l.373-.048c.304-.039.375-.05.438-.069a1 1 0 0 0 .196-.08c.058-.032.116-.075.359-.262l.297-.23c.512-.396.933-.723 1.42-.854a2.5 2.5 0 0 1 1.3 0m3.057 5.496a1 1 0 0 0-1.414 0L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414"></path>
                            </svg>}
                            <span className="text-xs text-[#717171]">• {product.location}</span>
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
                          fill={product.favourite ? "#FF2200":"#FFFFFF"}
                          d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="">
                        <p className="text-sm">{product.price}</p>
                        <p className="text-sm text-[#171C26] line-through">{product.originalPrice}</p>
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
            ))}
          </div>
          </div>

          {/* Stores */}
          <div className="flex justify-between items-center my-12">
            <h2 className="text-xl md:text-3xl font-bold text-primary">Stores</h2>
            <Button variant="link" className="text-primary hover:text-teal-700 flex items-center gap-2">
              <span className="hidden md:block">See stores</span> <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="overflow-x-auto">
            <div className="flex gap-6 md:gap-8 px-2 md:px-0 pb-5">
              {stores.map((store, index) => (
                <Card
                  key={index}
                  className="bg-white min-w-[280px] md:min-w-[400px] shadow-none border-none group py-0"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={store.image || "/placeholder.svg"}
                        alt={store.name}
                        width={300}
                        height={200}
                        className="w-full h-48 md:h-[300px] object-cover rounded-t-lg"
                      />
                    </div>

                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1">
                          <h3 className="font-semibold text-lg">{store.name}</h3>
                          {store.verified && <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24">
                            <path fill="#0F6862" d="M12.65 3.797c.487.131.908.458 1.42.854l.297.23c.243.187.301.23.359.261a1 1 0 0 0 .196.081c.063.019.134.03.438.07l.373.047c.642.082 1.17.149 1.607.4c.383.22.7.537.92.92c.251.436.318.965.4 1.607l.048.373c.039.304.05.375.069.438q.03.102.08.196c.032.058.075.116.262.359l.23.297c.396.512.723.933.854 1.42a2.5 2.5 0 0 1 0 1.3c-.131.487-.458.908-.854 1.42l-.23.297c-.187.243-.23.301-.261.359q-.051.094-.081.196c-.019.063-.03.134-.07.438l-.047.373c-.082.642-.149 1.17-.4 1.607a2.5 2.5 0 0 1-.92.92c-.436.251-.965.318-1.607.4l-.373.048c-.304.039-.375.05-.438.069q-.102.03-.196.08c-.058.032-.116.075-.359.262l-.297.23c-.512.396-.933.723-1.42.854a2.5 2.5 0 0 1-1.3 0c-.487-.131-.908-.458-1.42-.854l-.297-.23c-.243-.187-.301-.23-.359-.261a1 1 0 0 0-.196-.081c-.063-.019-.134-.03-.438-.07l-.373-.047c-.642-.082-1.17-.149-1.607-.4a2.5 2.5 0 0 1-.92-.92c-.251-.436-.318-.965-.4-1.607l-.048-.373c-.039-.304-.05-.375-.069-.438a1 1 0 0 0-.08-.196c-.032-.058-.075-.116-.262-.359l-.23-.297c-.396-.512-.723-.933-.854-1.42a2.5 2.5 0 0 1 0-1.3c.131-.487.458-.908.854-1.42l.23-.297c.187-.243.23-.301.261-.359a1 1 0 0 0 .081-.196c.019-.063.03-.134.07-.438l.047-.373c.082-.642.149-1.17.4-1.607a2.5 2.5 0 0 1 .92-.92c.436-.251.965-.318 1.607-.4l.373-.048c.304-.039.375-.05.438-.069a1 1 0 0 0 .196-.08c.058-.032.116-.075.359-.262l.297-.23c.512-.396.933-.723 1.42-.854a2.5 2.5 0 0 1 1.3 0m3.057 5.496a1 1 0 0 0-1.414 0L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414"></path>
                          </svg>}
                        </div>
                        <p className="text-sm text-[#222222]">{store.products}</p>
                        <div className="flex items-center gap-1">
                          <div className="flex gap-0">
                            {[...Array(5)].map((_, i) => (
                              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(store.rating) ? "fill-primary text-primary" : "text-[#ABABAB] fill-[#ABABAB]"
                                }`}>
                                <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"></path>
                              </svg>
                              // <Star
                              //   key={i}
                              //   className={`w-4 h-4 ${
                              //     i < Math.floor(store.rating) ? "fill-primary text-primary" : "text-[#ABABAB] fill-[#ABABAB]"
                              //   }`}
                              // />
                            ))}
                          </div>
                          <span className="text-sm text-[#222222]">({store.reviews})</span>
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
                          fill={store.favourite ? "#FF2200":"#FFFFFF"}
                          d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
                        ></path>
                      </svg>
                    </div>
                    <div className="h-2 bg-secondary rounded-b-lg mt-3"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section className="py-20">
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
                            fill={products[0].favourite ? "#FF2200":"#FFFFFF"}
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
                        className={`w-4 h-4 ${
                          i < Math.floor(testimonial.rating) ? "fill-secondary text-secondary" : "text-[#ABABAB] fill-[#ABABAB]"
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
      </section>

      <section className="py-20 bg-primary relative overflow-hidden">
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
            {partnerColors.map((color, index) => (
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
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-12 mb-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[100px]">
            <div className="lg:col-span-4 m-auto mt-0 mb-8 lg:mb-0 w-fit">
              <div className="flex items-center gap-1 mb-3">
                <Image
                  src="/logo.png"
                  alt="PLACOM Logo"
                  width={50}
                  height={50}
                  className="rounded-full w-[70px] h-[70px] object-cover"
                />
                <span className="text-5xl font-bold">PLACOM</span>
              </div>

              <p className="text-gray-300 text-base leading-relaxed mb-6">
                PLACOM stands for the Plateau State Commodity and Marketing Company Limited. It's a state-owned company in
                Plateau State, Nigeria, established to facilitate the marketing of agricultural produce, with a focus on
                potatoes and onions. The company aims to improve market access for farmers, manage post-harvest logistics,
                and connect farmers with local and international markets.
              </p>
            </div>

            <div className="w-fit md:m-auto mt-2 md:mt-5 lg:col-span-5 mb-8 lg:mb-0">
              <h3 className="text-xl font-semibold mb-3">Location</h3>
              <div className="space-y-2 text-base text-gray-300">
                <p>Plateau State Commodity and</p>
                <p>Marketing Company Limited</p>
                <p>[Phone Number]</p>
                <p>[Email Address]</p>
                <p>[Physical Office Address]</p>
              </div>

              <div className="flex justify-start gap-2 mt-6">
                <div className="rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 256 256">
                    <path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"></path>
                    <path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"></path>
                  </svg>
                </div>
                <div className="rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 256 256">
                    <g fill="none">
                      <rect width={256} height={256} fill="#fff" rx={60}></rect>
                      <rect width={256} height={256} fill="#1d9bf0" rx={60}></rect>
                      <path fill="#fff" d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677q4.379.525 8.79.533a74.15 74.15 0 0 0 45.865-15.839a36.98 36.98 0 0 1-34.501-25.645a36.8 36.8 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.7 36.7 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.8 104.8 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.1 74.1 0 0 0 23.451-8.965a37.06 37.06 0 0 1-16.234 20.424A73.5 73.5 0 0 0 218 72.282a75 75 0 0 1-18.428 19.13"></path>
                    </g>
                  </svg>
                </div>
                <div className="rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 256 256">
                    <g fill="none">
                      <rect width={256} height={256} fill="url(#skillIconsInstagram0)" rx={60}></rect>
                      <rect width={256} height={256} fill="url(#skillIconsInstagram1)" rx={60}></rect>
                      <path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"></path>
                      <defs>
                        <radialGradient id="skillIconsInstagram0" cx={0} cy={0} r={1} gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#fd5"></stop>
                          <stop offset={0.1} stopColor="#fd5"></stop>
                          <stop offset={0.5} stopColor="#ff543e"></stop>
                          <stop offset={1} stopColor="#c837ab"></stop>
                        </radialGradient>
                        <radialGradient id="skillIconsInstagram1" cx={0} cy={0} r={1} gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#3771c8"></stop>
                          <stop offset={0.128} stopColor="#3771c8"></stop>
                          <stop offset={1} stopColor="#60f" stopOpacity={0}></stop>
                        </radialGradient>
                      </defs>
                    </g>
                  </svg>
                </div>
                <div className="rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 256 256">
                    <g fill="none">
                      <rect width={256} height={256} fill="#fff" rx={60}></rect>
                      <rect width={256} height={256} fill="#0a66c2" rx={60}></rect>
                      <path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-fit md:m-auto mt-5 lg:col-span-3">
              <h3 className="text-xl font-semibold mb-3">Quick Access</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
                <a href="#marketplace" className="block text-gray-300 hover:text-white transition-colors">
                  Marketplace
                </a>
                <a href="#seller" className="block text-gray-300 hover:text-white transition-colors">
                  Seller
                </a>
                <a href="#warehouse" className="block text-gray-300 hover:text-white transition-colors">
                  Warehouse
                </a>
                <a href="#corporate" className="block text-gray-300 hover:text-white transition-colors">
                  Corporate
                </a>
                <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>


          <div className="text-center text-gray-400 border-t border-gray-800 pt-8">
            <p>
              © 2025 <span className="text-green-400">PLACOM</span>. All Rights Reserved.
            </p>
          </div>
      </footer>

    </main>
  );
}
