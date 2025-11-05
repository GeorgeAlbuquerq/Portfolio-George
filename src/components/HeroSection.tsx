'use client'

import { motion } from 'motion/react'
import { Button } from './ui/button'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black dark:from-black dark:via-gray-900 dark:to-black from-gray-50 via-gray-100 to-gray-50 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 dark:bg-white/20 bg-gray-800/20 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-emerald-400 dark:text-emerald-400 text-emerald-600 text-lg tracking-wider"
          >
            Olá, eu sou
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl text-white dark:text-white text-gray-900 mb-6"
          >
            George Albuquerque
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-4xl text-gray-300 dark:text-gray-300 text-gray-700 mb-8"
          >
            Sou um{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              Sou Desenvolvedor front-end
            </span>
            {' '}especializado em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Aplicações Web Modernas
            </span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-gray-400 dark:text-gray-400 text-gray-600 text-lg max-w-2xl mx-auto mb-8"
          >
            Eu crio experiências digitais envolventes e responsivas que conectam marcas ao seu público-alvo.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button
              onClick={scrollToProjects}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Ver meu trabalho
            </Button>
            
            <div className="flex items-center space-x-4">
              {[
                { icon: Github, href: 'https://github.com/GeorgeAlbuquerq' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/george-albuquerque/' },
                { icon: Mail, href: 'mailto:gr.albuquerq@gmail.com' }
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="w-12 h-12 bg-white/10 dark:bg-white/10 bg-gray-800/10 rounded-full flex items-center justify-center text-white dark:text-white text-gray-900 hover:bg-white/20 dark:hover:bg-white/20 hover:bg-gray-800/20 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 dark:text-white/60 text-gray-900/60"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}