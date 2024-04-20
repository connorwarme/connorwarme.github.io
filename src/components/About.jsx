import ExternalLink from './ExternalLink.jsx'
import { Link } from 'react-router-dom'
import lake from '../images/gallery/lake.jpg'
import ac from '../images/gallery/a&c.jpg'

const AboutComp = () => {
  const top = {
    text: 'The Odin Project',
    url: 'https://www.theodinproject.com',
    style:
      'inline-block transition ease-in-out duration-150 ml-1 hover:underline',
  }
  const gh = {
    text: 'GitHub',
    url: 'https://github.com/connorwarme',
    style: 'inline-block transition ease-in-out duration-150 hover:underline',
  }
  const aw = {
    text: 'Amity Warme',
    url: 'https://amitywarme.com',
    style: 'inline-block transition ease-in-out duration-150 hover:underline',
  }
  const ts = {
    text: 'Taylor Shaffer',
    url: 'https://www.taylorshaffer.com/',
    style:
      'inline-block transition ease-in-out duration-150 hover:underline pl-1',
  }

  return (
    <div className="whitespace-pre-wrap bg-midnight-green/75 p-4 font-play shadow-lg shadow-gunmetal/20 sm:px-8 md:rounded-b-md">
      <h2 className="p-2 pb-4 text-center text-xl font-semibold">Background</h2>
      <p className="pb-2">
        &#0009;My education prepared me for work as a chaplain or pastor - I
        have a Masters of Divinity from Princeton Theological Seminary. I&#39;m
        quite capable, gifted even, but found myself wrestling with fundamental
        questions, and eventually decided I could no longer be a genuine leader
        in the faith. I subsequently learned a new craft and worked as a finish
        carpenter, installing exquisite millwork in homes worth many millions.
      </p>
      <p className="pb-2">
        &#0009;I&#39;ve always been technologically-inclined; growing up I was
        always the family&#39;s &quot;resident IT expert&quot; and
        troubleshooter extraordinaire. In my preteen years, I bought a &quot;How
        to Build a PC for Dummies&quot; book and proceeded to buy all the parts
        and assemble my own desktop!
      </p>
      <p className="pb-2">
        &#0009;I began my coding journey in late 2021. I found
        <ExternalLink link={top} />, a web development curriculum curated by
        others who had taught themselves the requisite coding skills to switch
        careers. It has been as an invaluable resource on my journey, providing
        a trajectory, learning content, and project ideas to practice along the
        way. I&#39;m currently looking for work! You can view my{' '}
        <Link to={'/#portfolio'} className="underline">
          portfolio
        </Link>
        , <ExternalLink link={gh} /> or{' '}
        <Link to={'../contact'} className="underline">
          contact me
        </Link>
        .
      </p>
      <p className="mb-4 md:mb-8">
        &#0009;When not at the computer, I&#39;m often supporting my wife,{' '}
        <ExternalLink link={aw} />, a professional rock climber. I enjoy
        pursuing mountain adventures (primarily skiing and climbing). I also
        enjoy spending quality time with family and friends, scheming and
        dreaming about our next adventures, and reading.
      </p>
      <img
        src={ac}
        alt="Amity and Connor in Yosemite"
        className="object-fit w-dvw rounded-sm shadow-lg shadow-gunmetal/20"
      />
      <div className="flex flex-wrap justify-center pb-2 md:m-2 md:pb-6">
        <p className="m-1">Amity and Connor in Yosemite, USA.</p>
        <p className="m-1">
          Photo:
          <ExternalLink link={ts} />
        </p>
      </div>
      <img
        src={lake}
        alt="Connor climbing at Lake Louise"
        className="object-fit w-dvw rounded-sm shadow-lg shadow-gunmetal/20"
      />
      <p className="m-1 mt-2 pb-2 text-center">
        Connor climbing at Lake Louise, CA
      </p>
    </div>
  )
}

export default AboutComp
