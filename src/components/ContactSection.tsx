'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Github, Linkedin, Mail, Twitter, MapPin, Phone } from 'lucide-react'

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gr.albuquerq@gmail.com',
      href: 'mailto:gr.albuquerq@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+55 (61) 984479799',
      href: 'tel:+5561984479799'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Brasília, Brazil',
      href: 'https://www.google.com.br/maps/place/Bras%C3%ADlia+-+Plano+Piloto,+Bras%C3%ADlia+-+DF/@-15.721487,-48.1021702,11z/data=!3m1!4b1!4m6!3m5!1s0x935a3d18df9ae275:0x738470e469754a24!8m2!3d-15.7975154!4d-47.8918874!16zL20vMDFoeV8?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D'
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/GeorgeAlbuquerq', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/george-albuquerque/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:gr.albuquerq@gmail.com', label: 'Email' }
  ]

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">Entre em contato</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Estou sempre interessado em novas oportunidades e projetos interessantes.
            Vamos discutir como podemos trabalhar juntos!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gray-900/50 border-white/10">
              <h3 className="text-2xl text-white mb-6">Envie-me uma mensagem</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">Primeiro Nome</label>
                    <Input
                      placeholder="Seu primeiro nome"
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">Último Nome</label>
                    <Input
                      placeholder="Seu último nome"
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="seuemail@gmail.com"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Objeto</label>
                  <Input
                    placeholder="Discussão do projeto"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Mensagem</label>
                  <Textarea
                    placeholder="Fale-me sobre seu projeto..."
                    rows={5}
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500 resize-none"
                  />
                </div>
                
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3">
                  Envie-me uma mensagem
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-white mb-6">Vamos nos conectar</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Estou atualmente disponível para trabalhos e oportunidades em tempo integral.
                Sinta-se à vontade para me contatar através do formulário ou por meio das minhas redes sociais.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/30 transition-all duration-300">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-white text-lg mb-4">Me siga</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-emerald-500 hover:text-white transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-16 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2025 George Albuquerque. Construído usando React e Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  )
}