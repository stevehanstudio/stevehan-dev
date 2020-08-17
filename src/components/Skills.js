import React from 'react'
import { Paper, Typography, Grid, Chip } from '@material-ui/core'
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
      padding: '15px',
      backgroundColor: 'blue',
      color: 'white'
   },
   selectedBtn: {
      opacity: '1',
   },
   unselectedBtn: {
      opacity: '0.3',
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
}))

const Skills = ({ skills, handleToggleSkill, title }) => {
   const classes = useStyles()

   return (
      <Paper square elevation={0} className={classes.root}>
         <Typography variant="h4" className={classes.projectsTitle}>
            {title}
         </Typography>
         <Grid container spacing={2}>
            {Object.keys(skills).map(skill => {
               console.log(skill)
               return (
                  <Chip 
                     className={`${classes.skillsBtn} ${skills[skill] ? classes.selectedBtn : classes.unselectedBtn}`} 
                     onClick={() => handleToggleSkill(skill)} 
                     label={skill} 
                  />
               )
            })}

            {JSON.stringify(skills)}
            {/*{skills.map(skill => {
               return (
                  <Chip className={classes.skillBtn} label={skill} />
               )
            })}*/}
         </Grid>
      </Paper>
   )
}

export default Skills
