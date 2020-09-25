import React from 'react'
import Image from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import { Grid, Paper, Card, Typography, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
//import { Link } from 'gatsby'
//import { Link } from 'gatsby-theme-material-ui'
import { FaRegClock } from 'react-icons/fa'
import { IoMdArrowRoundForward } from 'react-icons/io'
import styled from 'styled-components'
import SocialLinks from '../../constants/socialLinks'
/*
const fadeIn = keyframes`
  from {
    background-color: rgb(255,255,255,0.2)
  }
  to {
    background-color: 'rbg(0.0.0.0.4'
  }
`
*/
const useStyles = makeStyles(theme => ({
  projContainer: {
    placeItems: 'center',
    display: 'flex',
    minHeight: '250px',
    //alignItems: 'center',
    textDecoration: 'none',
    width: '100%',
    height: '100%',
    borderRadius: '15px',
    //background: 'rgb(255,255,255,0.6)',
    background: 'rgb(0,0,0,0.6)',
    transition: '0.7s',
    transitionTimingFunction: 'ease-in-out',
    '&:hover': {
      boxSizing: 'padding-box',
      opacity: '0',
      //border: '10px solid white',
      outline: 'thick solid #00ff00',
      //outlineStyle: 'outset',
      boxShadow: '1px 1px 2px grey, 0 0 25px orange, 0 0 5px white',
    },
  },
  projTitle: {
    //placeItems: 'center',
    display: 'flex',
    width: '100%',
    height: '100%',
    borderRadius: '15px',
    //margin: '0 auto',
    color: theme.palette.text.primary,
    //color: 'white',
    //    color: 'black',
    fontWeight: '500',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    letterSpacing: '0.2rem',
  },
  image: {
    height: '100%',
    backgroundSize: '',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '250px',
    borderRadius: '15px',
    overflow: 'hidden',
    //objectFit: 'cover',
    placeItems: 'center',
  },
}))

const Project = ({ frontmatter, excerpt }) => {
  const { title, image, slug, date, skills } = frontmatter;
//  const test_string = slug
  const classes = useStyles()
//  console.log(frontmatter)
  
  return (
    <>
      <BackgroundImage
        //Tag="div"
        className={classes.image}
        fluid={image.childImageSharp.fluid}
        //backgroundColor={`#040e18`}
        //preserveStackingContext={true}
      >
        <a href={`/projects/${slug}`} className={classes.projContainer}>
          <Typography variant="h5" className={classes.projTitle}>{title}</Typography>
        </a>
        {/*<SocialLinks styleClass="proj-icons" />*/}
      </BackgroundImage>
    </>
  )
}
/*
const Wrapper = styled.article`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 1rem;
  background: black;
  .proj-container {
    height: 17rem;
    width: 24rem;
  }
  .proj-container::before {
    border-radius: 4px;
  }
  .proj-title::before {
    margin-top: 5rem;
    padding-top: 5rem;
  }
  .proj-title {
    color: rgba(0, 0, 0, 0.3);
    text-align: center;
    vertical-align: middle;
    justify-content: center;
    align-content: center;
    align-items: center;
  /*  line-height: 5rem;
    padding-top: 2rem;
    margin-top: 2rem;*/
/*    position: absolute;
    top: 32%;
    left: 27%;
  }
  .proj-title:hover {
    color: rgba(255, 255, 255, 0.8);
  }
  .proj-icons {
    display: flex;
    justify-content: flex-end;
    align-content: flex-end;
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  .proj-icons a {
    font-size: 1.5rem;
    margin: 0 0.5rem;
    transition: var(--transition);
  }
  .proj-icons li {
    transition: var(--transition);
  }
  .proj-icons li:hover {
    transform: translateY(-10%);
  }
  .info {
    text-align: center;
  }
  .img {
    margin-bottom: 1rem;
    border-radius: var(--radius);
    height: 17rem;
  }
  .category {
    display: inline-block;
    margin-bottom: 1rem;
    background: var(--clr-grey-10);
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
  }
  h3 {
    font-weight: 400;
    margin-bottom: 1rem;
    text-transform: initial;
  }
  .underline {
    width: 5rem;
    height: 1px;
    background: var(--clr-grey-9);
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  p {
    color: var(--clr-grey-5);
    line-height: 1.8;
  }
  .link {
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    font-weight: 700;
    color: var(--clr-primary-5);
    padding-bottom: 0.1rem;
    display: flex;
    align-items: center;
    svg {
      margin-left: 0.25rem;
      font-size: 1.2rem;
    }
  }
  .link:hover {
    border-color: var(--clr-primary-8);
    color: var(--clr-primary-8);
  }
  footer {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid var(--clr-grey-9);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--clr-grey-5);

    & .date {
      display: flex;
      align-items: center;
      & .icon {
        color: var(--clr-primary-5);
        margin-right: 0.5rem;
      }
    }
  }
  @media (min-width: 600px) {
    .img {
      height: 20rem;
    }
  }
  @media (min-width: 800px) {
    .img {
      height: 25rem;
    }
  }
  @media (min-width: 992px) {
    & {
      display: grid;
      grid-template-columns: 30rem 1fr;
      column-gap: 1.5rem;
      .info {
        text-align: left;
      }
      .img {
        height: 100%;
        max-height: 20rem;
      }
      .underline {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
`
*/
export default Project
