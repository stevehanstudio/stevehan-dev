import React from 'react'
import styled from 'styled-components'

     
       /*<themeButton>
       <div className="ball">S</div>
     </themeButton>*/
     

const ThemeSwitch = () => {
   return (
      <themeButton>
        <CheckBox id="checkbox" type="checkbox" />
        <CheckBoxLabel htmlFor="checkbox" />
      </themeButton>
   )
}

const themeButton = styled.div`
  position: relative;
`

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 10px;
  /*left: 100vw-10px;*/
  right: 20px;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`

/*const themeButton = styled.div`
  background-color: red;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  height: 26px;
  width: 50px;
  transform: scale(1.5);
  .ball {
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    height: 22px;
    width: 22px;
    transform: translateX(0px);
    transition: transform 0.2s linear;
  }
`
*/

export default ThemeSwitch
