import React from "react"
import { Tooltip, withStyles } from '@material-ui/core'
import {
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa"
import ResumeIcon from '../assets/ResumeIcon'

const SocialIconTooltip = withStyles(theme => ({
  Tooltip: {
    backgroundColor: 'white',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 11,
  },
}))(Tooltip)

const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <SocialIconTooltip
          title="LinkedIn profile"
          arrow
          placement="top-start"
          PopperProps={{
            modifiers: {
              offset: {
                enabled: true,
                offset: '25px,-15px',
              },
            },
          }}
        >
          <a href="https://linkedin.com/in/stevehanphoto">
            <FaLinkedin className="social-icon"></FaLinkedin>
          </a>
        </SocialIconTooltip>
      </li>
      <li>
        <SocialIconTooltip 
          title="Github profile"
          arrow
          placement="top-start"
          PopperProps={{
            modifiers: {
              offset: {
                enabled: true,
                offset: '25px,-15px',
              },
            },
          }}
        >
          <a href="https://github.com/stevehanstudio">
            <FaGithubSquare className="social-icon"></FaGithubSquare>
          </a>
        </SocialIconTooltip>
      </li>
      <li>
        <SocialIconTooltip 
          title="Resume"
          arrow
          placement="top-start"
          PopperProps={{
            modifiers: {
              offset: {
                enabled: true,
                offset: '25px,-15px',
              },
            },
          }}
        >
          <a href="https://twitter.com">
            <ResumeIcon
              className="social-icon resume-icon"
              color="white"
            ></ResumeIcon>
          </a>
        </SocialIconTooltip>
      </li>
    </ul>
  )
}
export default SocialLinks
