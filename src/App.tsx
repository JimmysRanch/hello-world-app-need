import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            repeating-radial-gradient(circle at 20% 30%, oklch(0.80 0.15 65 / 0.1) 0px, transparent 100px),
            repeating-radial-gradient(circle at 80% 70%, oklch(0.65 0.18 25 / 0.15) 0px, transparent 120px)
          `
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="relative z-10 text-center px-8"
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold tracking-tight"
          style={{
            background: 'linear-gradient(135deg, oklch(0.65 0.18 25), oklch(0.80 0.15 65))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em'
          }}
          animate={{
            y: [0, -8, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Hello World
        </motion.h1>
      </motion.div>
    </div>
  )
}

export default App