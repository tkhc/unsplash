import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
function About() {
 return (
  <div id="about">
   <p>This photo stock app allows infinite scroll. Well, technically not infinitely, as it is defaulted to 10 pages.
    </p>
   <p> Use the search box to look for your favorite Unsplash high quality photos. Have fun! </p>
   <p>
    Find me on Github <a href="https://github.com/tkhc" target="blank"><FaGithub /></a> or LinkedIn <a href="https://www.linkedin.com/in/terrencekhchan/" target="blank"><FaLinkedin /></a>
   </p>
  </div>
 )
}

export default About