'use client'
import { Header } from '@/components'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PropsWithChildren, useRef } from 'react'

const Slide = ({
  children,
  container,
}: PropsWithChildren<{ container: any }>) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    container,
    layoutEffect: false,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '60vh'])
  return (
    <div ref={ref} className="scroll-item min-h-screen">
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}

export default function Home() {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <>
      <Header />
      <main ref={ref} className="scroll h-screen overflow-scroll">
        <Slide container={ref}>
          <img
            className="w-full object-cover"
            src="http://placekitten.com/1480/800?image=1"
          />
        </Slide>
        <Slide container={ref}>
          <img
            className="w-full object-cover"
            src="http://placekitten.com/1480/800?image=2"
          />
        </Slide>
        <Slide container={ref}>
          <img
            className="w-full object-cover"
            src="http://placekitten.com/1480/800?image=3"
          />
        </Slide>
      </main>
    </>
  )
}
