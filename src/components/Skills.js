import React, { useState } from 'react'
import { Paper, Typography, Grid, Chip, Collapse } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { Divider } from '@material-ui/core'
//import SearchBox from '../components/SearchBox'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
   root: {
      flexGrow: 1,
      marginBottom: '50px'
   },
   skillsBtn: {
      margin: '5px',
      backgroundColor: 'blue',
      border: '2px solid lightgrey'
   },
   selectedBtn: {
      opacity: '1',
   },
   unselectedBtn: {
      backgroundColor: 'transparent',
      opacity: '0.5',
   },
   projectsTitle: {
      /*font-weight: 700;*/
      textTransform: 'uppercase',
      marginBottom: '1.2rem',
   },
   projectsContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      //columnGap: '1rem',
   },
   closeBtn: {
      paddingLeft: '1.2rem',
      float: 'right',
      opacity: 0.5,
      "&:hover": {
         opacity: 1,
         cursor: 'pointer'
      }
   },
   showSkills: {
      opacity: 0.8,
      "&:hover": {
         opacity: 1,
         cursor: 'pointer'
      }
   }
}))

const Skills = ({ featuredSkills, moreSkills, skills, handleToggleSkill, title }) => {
   const classes = useStyles()
   const [showMoreSkills, setShowMoreSkills] = useState(false)

   return (
      <Paper square elevation={0} className={classes.root}>
         <Typography variant="h4" className={classes.projectsTitle}>
            {title}
         </Typography>
         <Grid container spacing={2} direction="row" >
            {featuredSkills.map(featuredSkill => {
               console.log(featuredSkill)
               return (
                  <Chip
                     className={`${classes.skillsBtn} ${skills[featuredSkill] ? classes.selectedBtn : classes.unselectedBtn}`}
                     label={featuredSkill}
                     onDelete={() => handleToggleSkill(featuredSkill)}
                  />
               )
            })}
            <Grid className={`$classes.moreSkills`} container direction="row">
               {!showMoreSkills &&
                  <Grid className={`${classes.showSkills}`} container item justify="center" onClick={() => setShowMoreSkills(!showMoreSkills)}>
                  <ExpandMoreIcon />Show more skills
                  </Grid>
               }
               {showMoreSkills &&
                  <Collapse in={showMoreSkills}>
                  <Grid container>
                     {moreSkills.map(moreSkill => {
                        console.log(moreSkill)
                        return (
                           <Chip
                              className={`${classes.skillsBtn} ${skills[moreSkill] ? classes.selectedBtn : classes.unselectedBtn}`}
                              label={moreSkill}
                              onDelete={() => handleToggleSkill(moreSkill)}
                           />
                        )
                     })}
                     <Grid className={`${classes.showSkills}`}container item justify="center" onClick={() => setShowMoreSkills(!showMoreSkills)}>
                        <ExpandLessIcon />Show only featured skills
                     </Grid>
                  </Grid>
                  </Collapse>
               }
            </Grid>
         </Grid>
      </Paper>
   )
}

export default Skills

/*
           {Object.keys().map(skill => {
               console.log(skill)
               return (
                  <Chip
                     className={`${classes.skillsBtn} ${skills[skill] ? classes.selectedBtn : classes.unselectedBtn}`}
                     onClick={() => handleToggleSkill(skill)}
                     label={skill}
                  />
               )
            })}
*/
