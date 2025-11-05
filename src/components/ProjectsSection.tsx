'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { ImageWithFallback } from './fifig/ImageWithFallback'

export function ProjectsSection() {
  const projects = [
    {
      title: 'Plataforme de E-commerce',
      description: 'Plataforma foi desenvolvida como uma solução de e-commerce completa já integrada da própria nuvemshop.',
      image: 'https://dcdn-us.mitiendanube.com/stores/006/527/479/themes/morelia/2-slide-1761506721409-471555594-23b3562bfdd328faf6c492f9738c72021761506722-1024-1024.webp?1578212422',
      technologies: ['NuvemShop', 'Pós build de Layout','Css', 'Html'],
      github: 'https://github.com/GeorgeAlbuquerq',
      live: 'https://ipebranco.com.br',
      featured: true
    },
    {
      title: 'Aplicativo de Gerenciamento de Projetos',
      description: 'Uma ferramenta de gerenciamento de projetos colaborativa com atualizações em tempo real, funcionalidade de arrastar e soltar e recursos de colaboração em equipe.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'Mysql'],
      github: 'https://github.com/GeorgeAlbuquerq',
      live: '#',
      featured: true
    },
    {
      title: 'Projeto em andamento',
      description: 'Responsivo projeto.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Projeto2 em andamento',
      description: 'Um painel para análise de mídias sociais com processamento de dados em tempo real, visualizações personalizadas e relatórios automatizados.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['Python', 'Django', 'React', 'D3.js'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Projeto3 em andamento',
      description: 'Uma interface de chat inteligente com processamento de linguagem natural, consciência de contexto e suporte a vários idiomas.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
      technologies: ['React', 'OpenAI API', 'Node.js', 'WebSocket'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Site Portfólio Pessoal',
      description: 'A responsive portfolio website with smooth animations, dark theme, and optimized performance built with modern web technologies.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind', 'TypeScript'],
      github: '#',
      live: '#',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 bg-gray-900 dark:bg-gray-900 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white dark:text-white text-gray-900 mb-6">Projetos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
          <p className="text-gray-400 dark:text-gray-400 text-gray-600 mt-6 max-w-2xl mx-auto">
            Aqui estão alguns dos meus projetos recentes que mostram minhas habilidades e paixão pelo desenvolvimento web.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-black/50 dark:bg-black/50 bg-gray-50 border-white/10 dark:border-white/10 border-gray-200 overflow-hidden hover:border-emerald-500/50 transition-all duration-500">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 dark:bg-black/40 bg-black/20 group-hover:bg-black/20 dark:group-hover:bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-black/70 dark:bg-black/70 bg-white/70 rounded-full flex items-center justify-center text-white dark:text-white text-gray-900 hover:bg-emerald-500 hover:text-white transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-black/70 dark:bg-black/70 bg-white/70 rounded-full flex items-center justify-center text-white dark:text-white text-gray-900 hover:bg-emerald-500 hover:text-white transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl text-white dark:text-white text-gray-900 mb-3 group-hover:text-emerald-400 dark:group-hover:text-emerald-400 group-hover:text-emerald-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 dark:text-gray-400 text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-emerald-500/20 dark:bg-emerald-500/20 bg-emerald-100 text-emerald-400 dark:text-emerald-400 text-emerald-700 rounded-full text-sm border border-emerald-500/30 dark:border-emerald-500/30 border-emerald-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl text-white dark:text-white text-gray-900 text-center mb-8">Outros Projetos</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-black/30 border-white/10 hover:border-white/30 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <a
                      href={project.github}
                      className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3"
          >
            Ver todos os projetos
          </Button>
        </motion.div>
      </div>
    </section>
  )
}