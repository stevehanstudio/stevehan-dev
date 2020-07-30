import React from "react"
import {
  Grid,
  Tooltip,
  //Paper,
  makeStyles,
  IconButton,
  SvgIcon,
} from '@material-ui/core'
import {
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa"
import ResumeIcon from '../assets/ResumeIcon'
import { Link } from 'gatsby-theme-material-ui'
import { Icon } from '@material-ui/icons'
import { GitHubIcon, LinkedInIcon } from 'gatsby-theme-material-ui'

/*
const SocialIconTooltip = withStyles(theme => ({
  Tooltip: {
    backgroundColor: 'white',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 11,
  },
}))(Tooltip)
*/

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
/*  materialIcon: {
    fontFamily: 'Material Icons',
    fontSize: '24px',
  },*/
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
  const classes = useStyles()
  
  return (
    <Grid container>
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
          <Link to="https://linkedin.com/in/stevehanphoto" target="_BLANK">
            <FaLinkedin className={classes.socialIcon}></FaLinkedin>
          </Link>
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
          <Link to="https://github.com/stevehanstudio" target="_BLANK">
            <FaGithubSquare className={classes.socialIcon}></FaGithubSquare>
          </Link>
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
          <Link to="https://github.com/stevehanstudio" target="_BLANK">
            <SvgIcon
              component={ResumeIcon}
              className={classes.resumeIcon}
              viewBox="0 0 228 50"
            />
          </Link>
        </IconButton>
      </Tooltip>
    </Grid>
  )
}

export default SocialLinks

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
