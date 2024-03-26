import Tools from './Tools'
import ExternalLink from './ExternalLink'
import { Link } from 'react-router-dom'

const AboutComp = () => {

  const top = {
    text: 'The Odin Project',
    url: 'https://www.theodinproject.com',
    style: 'ml-1'
  }
  const gh = {
    text: 'GitHub',
    url: 'https://github.com/connorwarme',
    style: ''
  }

  return (
    <div className="font-play p-2 bg-midnight-green/75 rounded-md whitespace-pre-wrap">
      <h3 className="text-lg font-semibold pt-3 pb-3 text-center">
        Hi, I&#39;m Connor - a software developer with full-stack experience.
      </h3>
      <Tools className="bg-wave-spray" />
      <h2 className="text-md font-semibold text-center">Background</h2>
      <p>
        &#0009;My education prepared me for work as a chaplain or pastor -
        I have a Masters of Divinity from Princeton Theological Seminary.
        I&#39;m quite capable, gifted even, but found myself wrestling with
        fundamental questions, and eventually decided I could no longer be a
        genuine leader in the faith. I subsequently learned a new craft and
        worked as a finish carpenter, installing exquisite millwork in homes
        worth many millions.
      </p>
      <p>
        &#0009;I&#39;ve always been
        technologically-inclined; growing up I was always the family&#39;s
        &quot;resident expert&quot; and troubleshooter extraordinaire. In my
        preteen years, I bought a &quot;How to Build a PC for Dummies&quot; book
        and proceeded to buy all the parts and assemble my own desktop!
      </p>
      <p className=''>
        &#0009;I began my coding journey in late 2021. I found 
        <ExternalLink link={top} />, a web development curriculum curated by others who had taught
        themselves the requisite coding skills to switch careers. It has been as
        an invaluable resource on my journey, providing a trajectory, learning
        content, and project ideas to practice along the way. I&#39;m currently
        looking for work! You can view my <Link to={'/#portfolio'} className='underline'>portfolio</Link>, <ExternalLink link={gh} /> or <Link to={'../contact'} className='underline'>contact me</Link>.
      </p>
      <p>
        &#0009;When not at the computer, I&#39;m often supporting (and trying to keep
        up with) my wife, Amity Warme, a professional rock climber. I
        enjoy pursuing mountain adventures (primarily skiing and climbing). 
        I also enjoy spending quality time with family and friends,
        scheming and dreaming about our next adventures, and reading.
      </p>
    </div>
  )
}

export default AboutComp
