"use client";
import {lazy, Suspense} from 'react'
import { Loader2Icon } from "lucide-react"
import { Button } from "@/components/ui/button";
import Link from "next/link";
const ImageLoader = lazy(() => import("@/shared/ImageLoader"))
export default function Header () {
    return (<div className="py-3 px-4 w-[82%] flex flex-row justify-between border-gray-100 rounded-full shadow-2xl bg-slate mx-auto">
        <div><Link href={"/"}><ImageContent /> </Link></div>
        <div><Button color="primary" className="rounded-full p-4 bg-green-600 text-md">Login</Button></div>
    </div>)
}

const ImageContent = () => {
    return (
        <div className="min-h-[50px] relative">
            <Suspense
                fallback={
                    <div className="absolute inset-0 flex items-center justify-center bg-transparent">
                        <Loader2Icon className="animate-spin h-8 w-8" />
                    </div>
                }>
                <div className="flex flex-row inset-0 justify-center items-center">
                    <ImageLoader
                        src="/assets/placom_logo.png"
                        alt="Placom_Logo"
                        width={60}
                        height={60}
                        sizes="(max-width: 640px) 100vw, 
                   (max-width: 1024px) 80vw,
                   60vw"
                        priority
                        className="object-fit"
                    />
                    <span className='text-lg'>Placom</span>
                </div>
            </Suspense>
        </div>
    );
};