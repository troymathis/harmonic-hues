"use client"

import React, { FC, useEffect } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { type slide } from './Slides'
import Image from 'next/image'
import { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'


interface Props extends PropsWithChildren {
  className: string
}

const OPTIONS: EmblaOptionsType = {dragFree: true, containScroll: 'trimSnaps', loop: true }
const AUTOPLAYOPTIONS = {
  delay: 4000,
  jump: false
}

export const EmblaCarousel: FC<Props> = ({children, className}) => {

const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay(AUTOPLAYOPTIONS)])

  return (
    <div  className={cn(className, "embla overflow-hidden")}  ref={emblaRef}>
      <div className='flex'>{children}</div>
    </div>
  )
}

