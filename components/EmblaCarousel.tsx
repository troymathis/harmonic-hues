"use client"

import React, { FC, useEffect } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { type slide } from './Slides'
import Image from 'next/image'
import { PropsWithChildren } from 'react'


type Props = PropsWithChildren 

const OPTIONS: EmblaOptionsType = {dragFree: true, containScroll: 'trimSnaps', loop: true }
const AUTOPLAYOPTIONS = {
  delay: 4000,
  jump: false
}

export const EmblaCarousel = ({children}: Props) => {

const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay(AUTOPLAYOPTIONS)])

  return (
    <div  className="embla overflow-hidden h-full w-full fixed top-0 left-0 opacity-30 z-10"  ref={emblaRef}>
      <div className='flex'>{children}</div>
    </div>
  )
}

