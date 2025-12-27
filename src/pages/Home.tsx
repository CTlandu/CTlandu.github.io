import { Link } from 'react-router-dom'
import { Mail, Phone, Instagram, Github, Linkedin, FileText } from 'lucide-react'
import profilePic from '../../assets/img/prof_pic.png'
import data from '../data/personal.json'

export default function Home() {
  return (
    <div className="container-content py-12">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* 左侧：个人信息 */}
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-4xl font-bold">Hi, welcome to my personal website!</h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I'm currently a Senior at the{' '}
            <a
              href="https://www.wm.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              College of William & Mary
            </a>{' '}
            pursuing a B.S. in Computer Science and a minor in Arts & Art History.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300">
            Please feel free to check out my{' '}
            <a
              href="/assets/pdf/Colin_Tang_NG_resume_1-17-2025.pdf"
              target="_blank"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              Resume (PDF)
            </a>
            . I'm currently looking for a position in the field of Software Development. My{' '}
            <a
              href="https://www.linkedin.com/in/colin-tang-983771180/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              LinkedIn
            </a>
            , and{' '}
            <a
              href="https://github.com/CTlandu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              Github
            </a>
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <span>💻</span> Technical Experience
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Web Development Lead @{' '}
                <a
                  href="https://www.waveformai.wm.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Waveform.ai
                </a>
              </li>
              <li>
                Founder & Full-Stack Developer @{' '}
                <a
                  href="https://www.photobuddies.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  PhotoBuddies
                </a>
                ,{' '}
                <a
                  href="https://tldrnewsletter.cn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  TLDR Bilingual TechNews
                </a>
              </li>
              <li>
                Ex-Web Developer Intern @{' '}
                <a
                  href="https://dgs.virginia.gov/division-of-consolidated-laboratory-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Virginia Department of General Services
                </a>
              </li>
              <li>
                Ex-Software Engineering Intern @{' '}
                <a
                  href="https://www.saicmotor.com/english/index.shtml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  SAIC Motor (Shanghai)
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <span>❤️</span> Besides Coding:
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              I'm also a 📷 photographer and video creator. I like playing 🏓 pickleball, 🏂
              snowboarding, 🏊 swimming, 💪 gyming, and 🥾 hiking in my free time.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              For Photography Works, please see{' '}
              <Link
                to="/photography"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
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
            <p className="text-gray-700 dark:text-gray-300">
              Recent photography award:{' '}
              <a
                href="https://www.instagram.com/p/C_twhg3oUM2/?igsh=MWt5MjVlMmJlbmZuNA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                🏆 Winner of AAP Magazine 41 B&W
              </a>
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Tech Stack</h2>
            <div className="flex flex-wrap gap-4 text-4xl">
              <span title="Python">🐍</span>
              <span title="JavaScript">📜</span>
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
          </div>

          <p className="text-gray-600 dark:text-gray-400 italic">
            Fun fact of me: I share the same last name with my mom but not my dad!
          </p>
        </div>

        {/* 右侧：个人资料卡片 */}
        <div className="md:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <img
              src={profilePic}
              alt="Colin Tang"
              className="w-full rounded-lg mb-4"
            />
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Phone size={16} />
                <span>757-332-3947</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Mail size={16} />
                <a
                  href="mailto:jizhoutang@outlook.com"
                  className="hover:text-primary-600 dark:hover:text-primary-400"
                >
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
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {data.contactNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

