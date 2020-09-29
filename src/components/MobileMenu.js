import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Drawer, List, ListItem, IconButton, SvgIcon } from '@material-ui/core' 
import { makeStyles } from '@material-ui/core/styles'
import { Close } from '@material-ui/icons'
import { GatsbyContext } from '../context/context'
import { navLinks, socialLinks } from '../constants/links'
import ResumeIcon from '../assets/ResumeIcon'

const useStyles = makeStyles(theme => ({
  root: {
    border: `2px solid ${theme.palette.text.primary}`,
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    justifyContent: 'flex-end',
  },
  mobileMenuItem: {
    fontSize: '1.1rem',
    paddingLeft: theme.spacing(2),
    //    lineHeight: 1,
    color: theme.palette.text.primary,
    opacity: 0.7,
    textDecoration: 'none',
    padding: '0.8rem 0',
    marginBottom: 0,
    border: '1px solid rgba(255,255,255,0.3)',
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
}))

const MobileMenu = () => {
   const { isMobileMenuOpen, hideMobileMenu } = useContext(GatsbyContext)
   //const theme = useTheme()
   const classes = useStyles()

//   console.log("MobileMenu", isMobileMenuOpen)
   return (
     <Drawer
       variant="persistent"
       className="classes.root"
       anchor="top"
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
                 {title}
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
                 {title}
               </ListItem>
             </a>
           )
         })}
         <a href="./SteveHanDevResume.pdf" target="_BLANK">
           <ListItem className={classes.mobileMenuItem}>
             <SvgIcon
               component={ResumeIcon}
               className={classes.resumeIcon}
               viewBox="0 0 228 50"
             /> 
             Resume
           </ListItem>
         </a>
       </List>
     </Drawer>
   )   
}

export default MobileMenu
