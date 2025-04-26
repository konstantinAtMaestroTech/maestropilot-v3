import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import scheme from '../assets/Scheme.png'

const Vision = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  // Parallax effects for staggered elements
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const lineHeight = useTransform(scrollYProgress, [0, 0.5], [0.9, 1.1])

  return (
    <section className="relative py-24 bg-background overflow-hidden" id="vision">
        <div 
            ref={ref} 
            className="grid grid-cols-1 sm:gap-5 md:gap-8 lg:gap-20 items-center px-4 "
        >
            <motion.div 
                style={{ opacity }}
                className='grid grid-cols-1 gap-5 md:grid-cols-2 w-full'
            >
                <motion.div
                    style={{y: titleY}}
                    className='flex justify-center items-center content-center px-6'
                >
                    <motion.h3 
                        style={{ lineHeight }}
                        className="text-5xl md:text-7xl text-left  text-align text-white"
                    >
                        Power your operation with technology
                    </motion.h3>
                </motion.div>
                <motion.p 
                    className="text-xl md:text-2xl text-white px-4"
                >
                    Prefabricated construction has long promised faster delivery and lower costs. Turning that promise into reality demands perfectly coordinated operations—from design to assembly.
                </motion.p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.5,
                  delay: 0
                }} 
                className="relative rounded-xl overflow-hidden"
            >
                <img 
                src={scheme} 
                alt="Unified Namespace" 
                className="w-full h-[300px] md:h-[500px] object-contain"
                />
                <div className="absolute inset-0" />
            </motion.div>
        </div>
    </section>
  )
}

export default Vision 