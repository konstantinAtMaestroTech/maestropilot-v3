import { motion } from 'framer-motion'
import { useRef } from 'react'

const AboutUs = () => {

  const ref = useRef<HTMLDivElement>(null)

  return (
    <motion.section 
      className="py-24 overflow-hidden" 
      id="about"
      initial={{ backgroundColor: '#1E1E1E' }}
      whileInView={{ backgroundColor: '#646E6E' }}
      transition={{ delay: 0.5, duration: 1.2 }}
      viewport={{ once: true }}
    >
      <div ref={ref}>
        <div 
          className="flex justify-start mb-16 text-left px-10"
        >
          <motion.h2 
            className="text-5xl block md:text-7xl md:max-w-1/2 text-white mb-4 pl-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Power your operation with tomorrow's industry standard
          </motion.h2>
        </div>

        <div className="flex flex-col md:grid md:grid-rows-2 md:grid-cols-2 gap-10 px-10 relative text-white">
          <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1.0]
              }}
              viewport={{ once: true }}
              className='flex flex-col w-full h-full'
          >
            <div
              className='border rounded-2xl p-7 h-full'
            >
              <p className="text-5xl mb-8">
                  Project setup in under an hour. 
              </p>
              <p className="text-2xl mb-10">
                  We support 26 different model types & provide simple tools to organise your logistics and create an assembly plan. From there, its all about time savings: no more drafting installation plans, no more reporting paperwork & less time spent on site.
              </p>
            </div>
          </motion.div>

          <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.5,
                ease: [0.25, 0.1, 0.25, 1.0]
              }}
              viewport={{ once: true }}
              className='flex flex-col w-full h-full'
          >
            <div
              className='border rounded-2xl p-7 h-full'
            >
              <p className="text-5xl mb-8">
                  Accessible anywhere, anytime.  
              </p>
              <p className="text-2xl mb-10">
                  Maestro Pilot is 100% web-based, allowing your teams to collaborate on model-set up, and site crews to access the latest data from any device.
              </p>
            </div>
          </motion.div>

          <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.7,
                ease: [0.25, 0.1, 0.25, 1.0]
              }}
              viewport={{ once: true }}
              className='flex flex-col w-full h-full'
          >
            <div
              className='border rounded-2xl p-7 h-full'
            >
              <p className="text-5xl mb-8">
                  Artificial Intelligence in your tool belt.
              </p>
              <p className="text-2xl mb-10">
                  Enjoy predictive logistics, automated progress tracking, and AI-driven delay prevention—so you can spot issues early and keep your project on course.
              </p>
            </div>
          </motion.div>

          <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.9,
                ease: [0.25, 0.1, 0.25, 1.0]
              }}
              viewport={{ once: true }}
              className='flex flex-col w-full h-full'
          >
            <div
              className='border rounded-2xl p-7 h-full'
            >
              <p className="text-5xl mb-8">
                  Integrated with your <span className='block md:inline break-words hyphens-auto' >infra&shy;structure.</span>  
              </p>
              <p className="text-2xl mb-10">
                  Looking to optimise your operation, but don't want to substitute tried and tested tools? Inquire about seamless integration with warehousing & ERP systems.
              </p>
            </div>
          </motion.div>

        </div>

        <div className="flex justify-start mt-16 mb-16 text-left px-10 w-full">
          <motion.h2 
            className="text-5xl md:text-7xl text-white mb-4 md:max-w-1/2 pl-2 flex w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get started and build a dedicated tool to power your operation
          </motion.h2>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 px-10 relative text-white">
          <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1.0]
              }}
              viewport={{ once: true }}
              className='flex flex-col w-full h-full'
          >
            <div
              className='border rounded-2xl p-7 h-full'
            >
              <p className="text-3xl md:text-5xl mb-8">
                For <span className="font-semibold">manufacturers</span>: optimise your operations
              </p>
              <p className="text-2xl mb-10">
                Upload your production models, plan logistics and assembly, and equip your crews with the real-time data they need to get the job done—faster and more accurately.
              </p>
            </div>
          </motion.div>

          <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.5,
                ease: [0.25, 0.1, 0.25, 1.0]
              }}
              viewport={{ once: true }}
              className='flex flex-col w-full h-full'
          >
            <div
              className='border rounded-2xl p-7 h-full'
            >
              <p className="text-3xl md:text-5xl mb-8">
                For <span className="font-semibold">GCs</span>, <span className="font-semibold">PMs</span> and <span className="font-semibold">Developers</span>: master the complexity of your project  
              </p>
              <p className="text-2xl mb-10">
                Specify Maestro Pilot in your tender and let software be your boots on the ground: track production progress, manage complex scope splits and ensure assembly goes to plan.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    
    </motion.section>
  )
}

export default AboutUs 


