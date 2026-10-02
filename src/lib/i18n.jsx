import { createContext, useContext, useEffect, useState } from 'react'

const titles = {
  en: 'Colin Tang (唐济舟) | Product Engineer & Photographer',
  zh: '唐济舟 Colin Tang | 个人主页',
}

const LangContext = createContext({ lang: 'en', setLang: () => {} })

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('lang') === 'zh' ? 'zh' : 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
    document.title = titles[lang]
    try {
      localStorage.setItem('lang', lang)
    } catch {}
  }, [lang])

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)

export function useT() {
  const { lang } = useLang()
  return (value) => (value && typeof value === 'object' && 'en' in value ? value[lang] : value)
}

export const ui = {
  work: { en: 'Work', zh: '作品' },
  experience: { en: 'Experience', zh: '经历' },
  research: { en: 'Research', zh: '研究' },
  education: { en: 'Education', zh: '教育' },
  photography: { en: 'Photography', zh: '摄影' },
  archive: { en: 'Archive', zh: '存档' },
  resume: { en: 'Résumé', zh: '简历' },
  seeAll: { en: 'See all', zh: '查看全部' },
  sayHi: { en: 'Say hi.', zh: '联系我' },
  switchLang: { en: '中文', zh: 'EN' },
  switchLangLabel: { en: 'Switch to Chinese', zh: 'Switch to English' },
  all: { en: 'All', zh: '全部' },
  photos: { en: 'Photos', zh: '照片' },
  videos: { en: 'Videos', zh: '视频' },
  photoCount: { en: (n) => `${n} photos`, zh: (n) => `${n} 张` },
  film: { en: 'Film', zh: '影片' },
  notFound: { en: 'Collection not found', zh: '没找到这个合集' },
  archiveIntro: {
    en: 'Earlier versions of this site, kept the way they looked.',
    zh: '这个网站以前的样子，原样保存。',
  },
  open: { en: 'Open', zh: '打开' },
}
