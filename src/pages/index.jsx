import About from "../components/About";
import portraitPhoto from "../images/gallery/grin.jpg"

const Home = () => {
  // about me
  // Hi, I'm Connor - a versatile, hardworking software developer who's committed to building a successful career in software development.
  // I'm proficient in full-stack JavaScript (including React, Next.js, Node.js, Express, and Jest), (maybe include SOLID principles) including testing, debugging, and data handling. 
  // I'm eager for an opportunity to apply and grow my software development knowledge and skills!
  //
  // Tools and Technologies:
  // JavaScript, React, Node.js, Express, Next.js, Astro, Git, Jest, npm, Webpack, CSS, HTML, VSCode
  // 
  // My educational background prepared me for work as a chaplain or pastor - I have a Masters of Divinity from Princeton Theological Seminary. I'm quite capable, gifted even, but found myself wrestling with fundamental questions (theodicy - the problem of evil, the influence of empire, the subjectivity of translation and interpretation), and eventually decided I could no longer be a genuine leader in the faith. 
  // I subsequently learned a new craft and worked as a finish carpenter, installing exquisite millwork in homes worth many millions.  
  // 
  // I began my coding journey in late 2021. I had always been technologically-inclined; growing up I was always the family's "resident expert" and troubleshooter extraordinaire. 
  // In my preteen years, I bought a "How to Build a PC for Dummies" book and proceeded to buy all the parts and assemble my own desktop, which served me faithfully for the better part of a decade.  
  // I found The Odin Project, a web development curriculum curated by others who had taught themselves the requisite coding skills to switch careers. It has been as an invaluable resource on my journey, providing a trajectory, learning content, and project ideas to practice along the way. 
  // I'm currently looking for work! You can view my portfolio or contact me.
  //
  // When not at the computer, I'm often supporting (and trying to keep up with) Amity Warme, a professional rock climber. We travel across the western US in search of epic climbing objectives and suitable weather. 
  // I enjoy pursuing mountain adventures (skiing, climbing, biking, trail running), often with friends or family. 
  // I also enjoy spending quality time with family, scheming and dreaming about our next adventure rig, and reading.  
  //
  return ( 
    <>
      <h1 className="text-4xl">Connor Warme</h1>
      <div className="w-dvw flex justify-center">
        <img src={portraitPhoto} alt="Portrait of Connor" className="h-40 object-cover rounded-lg" />
      </div>
      <ul>
        <li>
          <img />
          <p>
            <em>compassionate human</em>
            {` // a kind and caring presence`}
          </p>
        </li>
        <li>
          <img />
          <p>
            <em>critical thinker</em>
            {` // a problem-solver`}
          </p>
        </li>
        <li>
          <img />
          <p>
            <em>collaborator</em>
            {` // empathetic listener and effective communicator`}
          </p>
        </li>
        <li>
          <img />
          <p>
            <em>coder</em>
            {` // hardworking and detail-driven full-stack developer`}
          </p>
        </li>
        <li>
          <img />
          <p>
            <em>committed to excellence</em>
            {` // in everything I do`}
          </p>
        </li>
      </ul>
      <About />
    </>
   );
}
 
export default Home;