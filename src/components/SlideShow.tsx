"use client"

import { useEffect, useState } from "react"

const SEC_TO_MS = 1_000

interface SlideShowProps {
    slides: ReadonlyArray<string>,
    alt?: string,
    delay?: number, // seconds
}

export default function SlideShow({ slides, alt, delay = 0 }: SlideShowProps) {

    const [presentedSlide, setPresentedSlide] = useState(0)

    function loop() {
        setPresentedSlide(curr => (
            curr >= slides.length - 1 ? 0 : curr + 1
        ))
    }

    useEffect(() => {

        let interval: NodeJS.Timeout;
        const timeout = setTimeout(() => {
            interval = setInterval(loop, 5_000)
        }, delay * SEC_TO_MS)

        return () => {
            clearTimeout(timeout)
            clearInterval(interval)
        }
    }, [slides, slides.length])

    if (!slides.length) return <></>

    if (slides.length == 1) return <img src={slides[0]} alt={alt} />

    return slides.map((slide, index) => (
        <img src={slide} alt={alt} className={`slide ${index == presentedSlide ? 'show' : ''}`} />
    ))
}