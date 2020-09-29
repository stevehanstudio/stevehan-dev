import React from "react"
import {
  Grid,
  Tooltip,
  IconButton,
  SvgIcon,
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
/*import {
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa"*/
import ResumeIcon from '../assets/ResumeIcon'
//import { GitHubIcon, LinkedInIcon } from 'gatsby-theme-material-ui'
import { socialLinks } from '../constants/links'

const useStyles = makeStyles(theme => ({
  tooltip: {
    background: theme.palette.text.primary,
    color: theme.palette.background.paper,
    fontSize: '0.7rem',
    opacity: 0.65,
    borderRadius: '2px',
  },
  socialIcon: {
    fontSize: '24px',
    //fontSize: '1.5rem',
    color: theme.palette.text.primary,
    background: theme.palette.background.paper,
    borderRadius: '10px',
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  iconButton: {
    width: '44px',
    height: '44px',
    paddingBottom: '5px',
  },
  resumeIcon: {
    color: theme.palette.text.primary,
//    fontSize: '1.5rem',
    fontSize: '24px',
    //    paddingBottom: '1.5px',
    width: '33px',
    height: '33px',
    left: '8px',
    bottom: '6px',
    position: 'relative',
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
}))

const SocialLinks = () => {
  //const theme = useTheme()
  const classes = useStyles()

//  console.log('socialLinks', socialLinks)
  return (
    <Grid container>
      {socialLinks.map(socialLink => {
        const { title, icon, url } = socialLink
        return (
          <Tooltip
            classes={{ tooltip: classes.tooltip }}
            title={`${title} profile`}
            arrow
            square
            placement="top-start"
            PopperProps={{
              modifiers: {
                offset: {
                  enabled: true,
                  offset: '25px,-12px',
                },
              },
            }}
          >
            <IconButton className={classes.iconButton}>
              <a
                href={url}
                className={classes.socialIcon}
                target="_BLANK"
                rel="noreferrer noopener"
              >
                {icon}
              </a>
            </IconButton>
          </Tooltip>
        )
      })}
      <Tooltip
        classes={{ tooltip: classes.tooltip }}
        title="Resume"
        arrow
        placement="top-start"
        PopperProps={{
          modifiers: {
            offset: {
              enabled: true,
              offset: '25px,-12px',
            },
          },
        }}
      >
        <IconButton className={classes.iconButton}>
          <a
            href="./SteveHanDevResume.pdf"
            target="_BLANK"
            rel="noreferrer noopener"
          >
            <SvgIcon
              component={ResumeIcon}
              className={classes.resumeIcon}
              viewBox="0 0 228 50"
            />
          </a>
        </IconButton>
      </Tooltip>
    </Grid>
  )
}

export default SocialLinks

/*

      <Tooltip
        classes={{ tooltip: classes.tooltip }}
        title="LinkedIn profile"
        arrow
        square
        placement="top-start"
        PopperProps={{
          modifiers: {
            offset: {
              enabled: true,
              offset: '25px,-12px',
            },
          },
        }}
      >
        <IconButton className={classes.iconButton}>
          <a href="https://linkedin.com/in/stevehanphoto" target="_BLANK">
            <FaLinkedin className={classes.socialIcon}></FaLinkedin>
          </a>
        </IconButton>
      </Tooltip>
      <Tooltip
        classes={{ tooltip: classes.tooltip }}
        title="Github profile"
        arrow
        placement="top-start"
        PopperProps={{
          modifiers: {
            offset: {
              enabled: true,
              offset: '25px,-12px',
            },
          },
        }}
      >
        <IconButton className={classes.iconButton}>
          <a href="https://github.com/stevehanstudio" target="_BLANK">
            <FaGithubSquare className={classes.socialIcon}></FaGithubSquare>
          </a>
        </IconButton>
      </Tooltip>
      <Tooltip
        classes={{ tooltip: classes.tooltip }}
        title="Resume"
        arrow
        placement="top-start"
        PopperProps={{
          modifiers: {
            offset: {
              enabled: true,
              offset: '25px,-12px',
            },
          },
        }}
      >
        <IconButton className={classes.iconButton}>
          <a href="./SteveHanDevResume.pdf" target="_BLANK">
             
          </a>
        </IconButton>
      </Tooltip>
*/


  /*        <SocialIconTooltip 
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
        </SocialIconTooltip>*/
