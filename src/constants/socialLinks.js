import React from "react"
import { Tooltip } from '@material-ui/core'
import {
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaDribbbleSquare,
  FaTwitterSquare,
} from "react-icons/fa"
import ResumeIcon from '../assets/ResumeIcon'

const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Tooltip title="LinkedIn profile">
          <a href="https://linkedin.com/in/stevehanphoto">
            <FaLinkedin className="social-icon linkedin-icon"></FaLinkedin>
          </a>
        </Tooltip>
      </li>
      <li>
        <Tooltip title="Github profile">
          <a href="https://github.com/stevehanstudio">
            <FaGithubSquare className="social-icon github-icon"></FaGithubSquare>
          </a>
        </Tooltip>
      </li>
      <li>
        <Tooltip title="Resume">
          <a href="https://twitter.com">
            <ResumeIcon
              className="social-icon resume-icon"
              color="white"
            ></ResumeIcon>
          </a>
        </Tooltip>
      </li>
    </ul>
  )
}
export default SocialLinks
