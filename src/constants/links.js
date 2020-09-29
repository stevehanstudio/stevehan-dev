import React from "react"
//import { Link } from "gatsby"
/*import {
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa"*/
import { Home, Info, LinkedIn, GitHub } from '@material-ui/icons'
import ResumeIcon from '../assets/ResumeIcon'

//import { GitHubIcon, LinkedInIcon } from 'gatsby-theme-material-ui'

export const navLinks = [
  {
    title: "Home",
    icon: <Home />,
    pageUrl: "/" 
  },
  {
    title: "About",
    icon: <Info />,
    pageUrl: "/about"
  }
]

export const socialLinks = [
  {
    title: "Linkedin",
//    icon: <FaLinkedin />,
    icon: <LinkedIn />,
    url: "https://linkedin.com/in/stevehanphoto"
  },
  {
    title: "Github",
    //icon: <FaGithubSquare />,
    icon: <GitHub />,
    url: "https://github.com/stevehanstudio"
  },
/*  {
    title: "Resume",
    icon: <ResumeIcon />,
    url: "./SteveHanDevResume.pdf"
  },*/
]
