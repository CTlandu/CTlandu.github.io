import { Link } from 'react-router-dom'
import { Mail, Phone, Instagram, Linkedin, Github, ExternalLink } from 'lucide-react'
// 图片应该放在 public 目录下，直接使用路径引用
const profilePic = '/assets/img/prof_pic.png'

export default function Home() {
  return (
    <div className="space-y-12">
      {/* 简介部分 */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, this is <span className="text-primary-600 dark:text-primary-400">Colin Tang</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I'm currently a 1st year Master's student at the{' '}
            <a 
              href="https://www.wm.edu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              College of William & Mary
            </a>{' '}
            , specializing in {' '}
            <a 
              href="https://www.wm.edu/as/mathematics/graduate/cor/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              Computational Operations Research
            </a>{' '}
            , and I also graduated from W&M with a B.S. in Computer Science and a minor in Arts & Art History.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <a
              href="/assets/pdf/Colin_Tang_NG_resume_1-17-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              View Resume <ExternalLink size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/colin-tang-983771180/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com/CTlandu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I'm currently looking for a position in the field of Software Development.
          </p>
        </div>

        <div className="md:w-64 flex-shrink-0">
          <img
            src={profilePic}
            alt="Colin Tang"
            className="rounded-lg shadow-lg w-full"
          />
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Phone size={16} />
              <span>757-332-3947</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Mail size={16} />
              <a href="mailto:jizhoutang@outlook.com" className="hover:text-primary-600 dark:hover:text-primary-400">
                jizhoutang@outlook.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Instagram size={16} />
              <a 
                href="https://www.instagram.com/ctphotography77/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-600 dark:hover:text-primary-400"
              >
                @ctphotography77
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 技术经验 */}
      <section>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <span className="text-2xl">💻</span> Technical Experience
        </h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="font-semibold text-lg mb-1">Web Development Lead</h3>
            <p className="text-gray-700 dark:text-gray-300">
              @ <a href="https://www.waveformai.wm.edu" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Waveform.ai</a>
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="font-semibold text-lg mb-1">Founder & Full-Stack Developer</h3>
            <p className="text-gray-700 dark:text-gray-300">
              @ <a href="https://www.photobuddies.org" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">PhotoBuddies</a>,{' '}
              <a href="https://tldrnewsletter.cn" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">TLDR Bilingual TechNews</a>
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="font-semibold text-lg mb-1">Ex-Web Developer Intern</h3>
            <p className="text-gray-700 dark:text-gray-300">
              @ <a href="https://dgs.virginia.gov/division-of-consolidated-laboratory-services" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Virginia Department of General Services</a>
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="font-semibold text-lg mb-1">Ex-Software Engineering Intern</h3>
            <p className="text-gray-700 dark:text-gray-300">
              @ <a href="https://www.saicmotor.com/english/index.shtml" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">SAIC Motor (Shanghai)</a>
            </p>
          </div>
        </div>
      </section>

      {/* 其他兴趣 */}
      <section>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <span className="text-2xl">❤️</span> Besides Coding
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          I'm also a photographer and video creator. I like playing pickleball, snowboarding, swimming, gyming, and hiking in my free time.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          For Photography Works, please see{' '}
          <Link to="/photography" className="text-primary-600 dark:text-primary-400 hover:underline">
            Photography
          </Link>{' '}
          or my{' '}
          <a 
            href="https://www.instagram.com/ctphotography77/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            Instagram Page
          </a>
        </p>
        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">🎉 Recent photography award:</span>{' '}
            <a 
              href="https://www.instagram.com/p/C_twhg3oUM2/?igsh=MWt5MjVlMmJlbmZuNA==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              Winner of AAP Magazine 41 B&W
            </a>
          </p>
        </div>
      </section>

      {/* 技术栈 */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
        <div className="flex flex-wrap gap-4 text-4xl">
          <span title="Python">🐍</span>
          <span title="JavaScript">📘</span>
          <span title="Node.js">🟢</span>
          <span title="MongoDB">🍃</span>
          <span title="React">⚛️</span>
          <span title="Docker">🐳</span>
          <span title="TailwindCSS">💨</span>
          <span title="Git">📦</span>
          <span title="Java">☕</span>
          <span title="Linux">🐧</span>
          <span title="AWS">☁️</span>
          <span title="Figma">🎨</span>
        </div>
      </section>

      {/* Fun Fact */}
      <section className="p-6 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
        <p className="text-gray-700 dark:text-gray-300 italic">
          Fun fact: I share the same last name with my mom but not my dad!
        </p>
      </section>
    </div>
  )
}

