import jsIcon from '../images/icons/javascript.svg'
import reactIcon from '../images/icons/react.svg'
import nodeIcon from '../images/icons/node.svg'
import astroIcon from '../images/icons/astro.svg'
import expressIcon from '../images/icons/express.svg'
import nextIcon from '../images/icons/nextjs.svg'
import jestIcon from '../images/icons/jest.svg'
import gitIcon from '../images/icons/git.svg'
import githubIcon from '../images/icons/github.svg'
import viteIcon from '../images/icons/vite.svg'
import npmIcon from '../images/icons/npm.svg'
import webpackIcon from '../images/icons/webpack.svg'
import mongoIcon from '../images/icons/mongodb.svg'
import htmlIcon from '../images/icons/html.svg'
import cssIcon from '../images/icons/css3.svg'
import tailwindIcon from '../images/icons/tailwind.svg'
import vscodeIcon from '../images/icons/vscode.svg'
import markdownIcon from '../images/icons/markdown.svg'
import eslintIcon from '../images/icons/eslint.svg'
import prettierIcon from '../images/icons/prettier.svg'

const javascript = {
  title: 'JavaScript',
  img: {
    src: jsIcon,
    alt: 'JS icon',
  },
  mini: false,
}
const react = {
  title: 'React',
  img: {
    src: reactIcon,
    alt: 'React icon',
  },
  mini: false,
}
const node = {
  title: 'Node.js',
  img: {
    src: nodeIcon,
    alt: 'Node icon',
  },
  mini: false,
}
const astro = {
  title: 'Astro',
  img: {
    src: astroIcon,
    alt: 'Astro icon',
  },
  mini: false,
}
const express = {
  title: 'Express',
  img: {
    src: expressIcon,
    alt: 'Express icon',
  },
  mini: false,
}
const next = {
  title: 'Next.js',
  img: {
    src: nextIcon,
    alt: 'Next icon',
  },
  mini: false,
}
const jest = {
  title: 'Jest',
  img: {
    src: jestIcon,
    alt: 'Jest icon',
  },
  mini: false,
}
const git = {
  title: 'Git',
  img: {
    src: gitIcon,
    alt: 'Git icon',
  },
  mini: false,
}
const github = {
  title: 'GitHub',
  img: {
    src: githubIcon,
    alt: 'GitHub icon',
  },
  mini: false,
}
const vite = {
  title: 'Vite',
  img: {
    src: viteIcon,
    alt: 'Vite icon',
  },
  mini: false,
}
const npm = {
  title: 'npm',
  img: {
    src: npmIcon,
    alt: 'npm icon',
  },
  mini: false,
}
const webpack = {
  title: 'Webpack',
  img: {
    src: webpackIcon,
    alt: 'Webpack icon',
  },
  mini: false,
}
const mongo = {
  title: 'MongoDB',
  img: {
    src: mongoIcon,
    alt: 'MongoDB icon',
  },
  mini: false,
}
const html = {
  title: 'HTML5',
  img: {
    src: htmlIcon,
    alt: 'HTML5 icon',
  },
  mini: false,
}
const css = {
  title: 'CSS3',
  img: {
    src: cssIcon,
    alt: 'CSS3 icon',
  },
  mini: false,
}
const tailwind = {
  title: 'TailwindCSS',
  img: {
    src: tailwindIcon,
    alt: 'Tailwind icon',
  },
  mini: false,
}
const vscode = {
  title: 'VSCode',
  img: {
    src: vscodeIcon,
    alt: 'VSCode icon',
  },
  mini: false,
}
const markdown = {
  title: 'Markdown',
  img: {
    src: markdownIcon,
    alt: 'Markdown icon',
  },
  mini: false,
}
const eslint = {
  title: 'ESLint',
  img: {
    src: eslintIcon,
    alt: 'ESLint icon',
  },
  mini: false,
}
const prettier = {
  title: 'Prettier',
  img: {
    src: prettierIcon,
    alt: 'Prettier icon',
  },
  mini: false,
}

const siteTools = [
  { ...react, mini: true },
  { ...tailwind, mini: true },
  { ...eslint, mini: true },
  { ...prettier, mini: true },
  { ...git, mini: true },
]
const tools = [
  javascript,
  react,
  node,
  astro,
  express,
  next,
  jest,
  git,
  github,
  vite,
  npm,
  webpack,
  mongo,
  html,
  css,
  tailwind,
  vscode,
  markdown,
  eslint,
  prettier,
]

export { tools, siteTools }
