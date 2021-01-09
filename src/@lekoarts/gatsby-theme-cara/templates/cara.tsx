import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../../../../node_modules/@lekoarts/gatsby-theme-cara/src/components/layout"
import Hero from "../../../../node_modules/@lekoarts/gatsby-theme-cara/src/components/hero"
import Projects from "../../../../node_modules/@lekoarts/gatsby-theme-cara/src/components/projects"
import Projects2 from "../components/projects2"
import About from "../../../../node_modules/@lekoarts/gatsby-theme-cara/src/components/about"
import Contact from "../../../../node_modules/@lekoarts/gatsby-theme-cara/src/components/contact"


const isMobile = window.matchMedia("(max-width: 400px)").matches;

const Cara = () => (
  <Layout>
    <Parallax pages={isMobile? 8:7}>
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={2} />

      <Projects2 offset={isMobile? 3.5:3} factor={isMobile? 3.5:2} />

      <About offset={isMobile? 6.6:5} factor={1} />
      <Contact offset={isMobile? 7:6} factor={1} />
    </Parallax>
  </Layout>
)

// const Cara = () => (
//   <Layout>
//     <Parallax pages={7}>
//       <Hero offset={0} factor={1} />
//       <Projects offset={1} factor={2} />

//       <Projects2 offset={3} factor={2} />

//       <About offset={5} factor={1} />
//       <Contact offset={6} factor={1} />
//     </Parallax>
//   </Layout>
// )


// const Cara = () => (
//   <Layout>
//     <Parallax pages={5}>
//       <Hero offset={0} factor={1} />
//       <Projects offset={1} factor={2} />
//       <About offset={3} factor={1} />
//       <Contact offset={4} factor={1} />
//     </Parallax>
//   </Layout>
// )

export default Cara
