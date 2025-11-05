'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card'
import { Code, Coffee, Lightbulb, Users } from 'lucide-react'

export function AboutSection() {
  const features = [
    {
      icon: Code,
      title: 'Código Limpo',
      description: 'Escrevendo código manutenível, escalável e eficiente que resiste ao teste do tempo.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Sempre explorando novas tecnologias e soluções criativas para problemas complexos.'
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Trabalhando efetivamente com equipes para entregar experiências excepcionais ao usuário.'
    },
    {
      icon: Coffee,
      title: 'Dedicação',
      description: 'Comprometido com o aprendizado contínuo e a atualização sobre as tendências do setor.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-900 dark:bg-gray-900 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white dark:text-white text-gray-900 mb-6">Sobre mim</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl text-white dark:text-white text-gray-900 mb-4">
              Apaixonado por criar experiências digitais que importam
            </h3>
            <p className="text-gray-300 dark:text-gray-300 text-gray-700 leading-relaxed">
              Com mais de 5 anos de experiência em desenvolvimento web, tive o privilégio de trabalhar com
              startups e empresas estabelecidas para dar vida às suas visões digitais. Minha jornada começou
              com uma curiosidade sobre como os sites funcionam, e evoluiu para uma paixão por criar
              seamless, performant applications.
            </p>
            <p className="text-gray-300 dark:text-gray-300 text-gray-700 leading-relaxed">
              Eu me especializo em React, Node.js e frameworks modernos de JavaScript, mas estou sempre ansioso para
              aprender novas tecnologias que possam me ajudar a construir melhores soluções. Quando não estou codificando, você
              pode me encontrar contribuindo para projetos de código aberto, escrevendo artigos técnicos ou explorando o
              que há de mais recente em tecnologias web.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mt-6"
            >
              {['Resolvedor de problemas', 'Trabalhador em equipe', 'Aprendiz rápido', 'Orientado a detalhes'].map((trait, index) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-emerald-500/20 dark:bg-emerald-500/20 bg-emerald-100 text-emerald-400 dark:text-emerald-400 text-emerald-700 rounded-full text-sm border border-emerald-500/30 dark:border-emerald-500/30 border-emerald-300"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-black/50 dark:bg-black/50 bg-gray-50 border-white/10 dark:border-white/10 border-gray-200 hover:border-emerald-500/50 transition-all duration-300 group">
                  <div className="text-emerald-400 dark:text-emerald-400 text-emerald-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-white dark:text-white text-gray-900 text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-400 dark:text-gray-400 text-gray-600 text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}