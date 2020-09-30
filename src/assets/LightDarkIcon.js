import * as React from 'react'

function LightDarkIcon(props) {
   const {color, background, width, height} = props
	      
 /*style={{ fill: color }}*/
        
	return (
    <svg
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 578.405 578.405"
		fill='rgba(255,255,255,0.6)'
    >
      <g>
        <g>
          <path
            d="M289.203,0C129.736,0,0,129.736,0,289.203C0,448.67,129.736,578.405,289.203,578.405
				c159.467,0,289.202-129.735,289.202-289.202C578.405,129.736,448.67,0,289.203,0z M28.56,289.202
				C28.56,145.48,145.481,28.56,289.203,28.56l0,0v521.286l0,0C145.485,549.846,28.56,432.925,28.56,289.202z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  )
}

export default LightDarkIcon

/*
    <svg
      viewBox="0 0 118 150"
      width="118"
      height="150"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M90.064 0H10C4.477 0 0 4.477 0 10v130c0 5.523 4.477 10 10 10h98c5.523 0 10-4.477 10-10V22.807L90.064 0zM18 85a5 5 0 00-5 5v1a5 5 0 005 5h75a5 5 0 005-5v-1a5 5 0 00-5-5H18zm-5 26a5 5 0 015-5h75a5 5 0 015 5v1a5 5 0 01-5 5H18a5 5 0 01-5-5v-1zm6 14a5 5 0 00-5 5v1a5 5 0 005 5h75a5 5 0 005-5v-1a5 5 0 00-5-5H19zm24-82.057c4.77-2.813 8-8.226 8-14.443C51 19.387 44.06 12 35.5 12 26.94 12 20 19.387 20 28.5c0 6.217 3.23 11.63 8 14.443V55h.439L12.55 68.5h45.9L42.56 55H43V42.943z"
        fill={color}
      />
    </svg>
*/