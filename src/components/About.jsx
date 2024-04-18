import ExternalLink from './ExternalLink'
import { Link } from 'react-router-dom'
import lake from "../images/gallery/lake.jpg"
import ac from "../images/gallery/a&c.jpg"

const AboutComp = () => {

  const top = {
    text: 'The Odin Project',
    url: 'https://www.theodinproject.com',
    style: 'ml-1 hover:underline'
  }
  const gh = {
    text: 'GitHub',
    url: 'https://github.com/connorwarme',
    style: 'hover:underline'
  }
  const aw = {
    text: 'Amity Warme',
    url: 'https://amitywarme.com',
    style: 'hover:underline',
  }

  return (
    <div className="font-play p-4 bg-midnight-green/75 whitespace-pre-wrap sm:px-8 md:rounded-b-md">
      <h2 className="text-xl font-semibold text-center p-2 pb-4">Background</h2>
      <p className='pb-2'>
        &#0009;My education prepared me for work as a chaplain or pastor -
        I have a Masters of Divinity from Princeton Theological Seminary.
        I&#39;m quite capable, gifted even, but found myself wrestling with
        fundamental questions, and eventually decided I could no longer be a
        genuine leader in the faith. I subsequently learned a new craft and
        worked as a finish carpenter, installing exquisite millwork in homes
        worth many millions.
      </p>
      <p className='pb-2'>
        &#0009;I&#39;ve always been
        technologically-inclined; growing up I was always the family&#39;s
        &quot;resident IT expert&quot; and troubleshooter extraordinaire. In my
        preteen years, I bought a &quot;How to Build a PC for Dummies&quot; book
        and proceeded to buy all the parts and assemble my own desktop!
      </p>
      <p className='pb-2'>
        &#0009;I began my coding journey in late 2021. I found 
        <ExternalLink link={top} />, a web development curriculum curated by others who had taught
        themselves the requisite coding skills to switch careers. It has been as
        an invaluable resource on my journey, providing a trajectory, learning
        content, and project ideas to practice along the way. I&#39;m currently
        looking for work! You can view my <Link to={'/#portfolio'} className='underline'>portfolio</Link>, <ExternalLink link={gh} /> or <Link to={'../contact'} className='underline'>contact me</Link>.
      </p>
      <p className='mb-4 md:mb-8'>
        &#0009;When not at the computer, I&#39;m often supporting my wife, <ExternalLink link={aw} />, a professional rock climber. I
        enjoy pursuing mountain adventures (primarily skiing and climbing). 
        I also enjoy spending quality time with family and friends,
        scheming and dreaming about our next adventures, and reading.
      </p>
      <img src={ac} alt="Amity and Connor in Yosemite" className='w-dvw object-fit rounded-sm'/>
      <p className='m-1 pb-2 text-center md:m-2 md:pb-6'>Amity and Connor in Yosemite, USA</p>
      <img src={lake} alt="Connor climbing at Lake Louise" className='w-dvw object-fit rounded-sm' />
      <p className='m-1 pb-2 text-center'>Connor climbing at Lake Louise, CA</p>
    </div>
  )
}

export default AboutComp
