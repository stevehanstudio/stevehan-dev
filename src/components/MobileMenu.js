import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Drawer, List, ListItem, IconButton, SvgIcon, Divider, Switch } from '@material-ui/core' 
import { makeStyles } from '@material-ui/core/styles'
import { Close } from '@material-ui/icons'
import { GatsbyContext } from '../context/context'
import { navLinks, socialLinks } from '../constants/links'
import ResumeIcon from '../assets/ResumeIcon'
import LightDarkIcon from '../assets/LightDarkIcon'
import ResumePdf from '../assets/SteveHanDevResume.pdf'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
  },
  switch: {
    flex: '0 1 auto',
    width: 48,
    height: 26,
    padding: 0,
    marginRight: theme.spacing(2),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(22px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    //    justifyContent: 'flex-end',
    //background: 'white',
    //borderBottom: `5px solid ${theme.palette.text.primary}`,
    minHeight: '100vh',
  },
  mobileMenuItem: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '1.1rem',
    paddingLeft: theme.spacing(2),
    //    lineHeight: 1,
    color: theme.palette.text.primary,
    opacity: 0.7,
    textDecoration: 'none',
    padding: '0.8rem 0',
    marginBottom: 0,
    borderBottom: '1px solid rgba(255,255,255,0.3)',
    '&:hover': {
      opacity: 1,
      textDecoration: 'none',
    },
    '&:active': {
      opacity: 1,
    },
  },
  socialLinks: {
    display: 'flex',
    flexDirection: 'column',
  },
  close: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'flex-end',
    borderBottom: '1px solid rgba(255,255,255,0.3)',
  },
  socialIcon: {
    fontSize: '24px',
    //fontSize: '1.5rem',
    color: theme.palette.text.primary,
    background: theme.palette.background.paper,
    borderRadius: '10px',
    paddingRight: '0.5rem',
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  resumeIcon: {
    color: theme.palette.text.primary,
    //    fontSize: '1.5rem',
    fontSize: '24px',
    //    paddingBottom: '1.5px',
    width: '33px',
    height: '33px',
    left: '3px',
    bottom: '6px',
    position: 'relative',
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  lightDarkIcon: {
    flex: '0 1 auto',
    fill: 'white',
    color: theme.palette.text.primary,
    //    fontSize: '1.5rem',
    fontSize: '24px',
    //    paddingBottom: '1.5px',
    paddingRight: '20px',
    width: '22px',
    height: '22px',
    //    left: '3px',
    //    bottom: '6px',
    position: 'relative',
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  lightDarkIconText: {
    flex: '1 2 auto',
    paddingLeft: '0.6rem',
  },
}))

const MobileMenu = ({ themeMode, handleToggleThemeMode }) => {
  const { isMobileMenuOpen, hideMobileMenu } = useContext(GatsbyContext)
  //const theme = useTheme()
  const classes = useStyles(themeMode)

  //   console.log("MobileMenu", isMobileMenuOpen)
  return (
    <Drawer
      anchor="top"
      className={classes.root}
      open={isMobileMenuOpen}
    >
      <List className="classes.mobileMenu">
        <ListItem className={classes.close}>
          <IconButton onClick={hideMobileMenu}>
            <Close />
          </IconButton>
        </ListItem>
        {navLinks.map(navLink => {
          const { title, icon, pageUrl } = navLink
          return (
            <Link to={pageUrl}>
              <ListItem className={classes.mobileMenuItem}>
                <span className={classes.socialIcon}>{icon}</span>
                <span className={classes.menuText}>{title}</span>
              </ListItem>
            </Link>
          )
        })}
        {socialLinks.map(socialLink => {
          const { title, icon, url } = socialLink
          return (
            <a href={url} target="_BLANK" rel="noreferrer noopener">
              <ListItem className={classes.mobileMenuItem}>
                <span className={classes.socialIcon}>{icon}</span>
                <span className={classes.menuText}></span>
                {title}
              </ListItem>
            </a>
          )
        })}
        <a href={ResumePdf} target="_BLANK">
          <ListItem className={classes.mobileMenuItem}>
            <SvgIcon
              component={ResumeIcon}
              className={classes.resumeIcon}
              viewBox="0 0 228 50"
              color="white"
              fill="white"
            />
            <span className={classes.menuText}>Resume</span>
          </ListItem>
        </a>
        <ListItem className={classes.mobileMenuItem}>
          <SvgIcon
            component={LightDarkIcon}
            className={classes.lightDarkIcon}
            viewBox="0 0 228 50"
            width="22px"
            height="22px"
            color="white"
            background="yellow"
          />
          <span className={classes.lightDarkIconText}>Light / Dark Switch</span>
          <Switch
            classes={{
              root: classes.switch,
              switchBase: classes.switchBase,
              thumb: classes.thumb,
              track: classes.track,
              checked: classes.checked,
            }}
            checked={themeMode}
            onChange={handleToggleThemeMode}
          />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default MobileMenu
