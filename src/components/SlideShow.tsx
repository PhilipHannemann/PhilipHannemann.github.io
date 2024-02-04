"use client"

import { useCallback, useEffect, useState } from "react"

const SEC_TO_MS = 1_000

interface SlideShowProps {
    slides: ReadonlyArray<string>,
    alt: string,
    delay?: number, // seconds
}

export default function SlideShow({ slides, alt, delay = 0 }: SlideShowProps) {

    const [presentedSlide, setPresentedSlide] = useState(0)

    const loop = useCallback(() => {
        setPresentedSlide(curr => (
            curr >= slides.length - 1 ? 0 : curr + 1
        ))
    }, [slides.length])

    useEffect(() => {
        if (slides.length <= 1) {
            return setPresentedSlide(0)
        }

        let interval: NodeJS.Timeout;
        const timeout = setTimeout(() => {
            interval = setInterval(loop, 5_000)
        }, delay * SEC_TO_MS)

        return () => {
            clearTimeout(timeout)
            clearInterval(interval)
        }
    }, [slides, slides.length, delay, loop])

    if (!slides.length) return <></>

    return slides.map((slide, index) => (
        <img key={index} src={slide} alt={alt} className={`slide ${index == presentedSlide ? 'show' : ''}`} />
    ))
}