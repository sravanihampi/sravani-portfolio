import React from 'react'
import '../styles/Skills.css'
import Lottie from "lottie-react";
import Skilimg from '../Images/react.png'
import Skilimg1 from '../Images/css.png'
import Skilimg2 from '../Images/github.png'
import Skilimg3 from '../Images/html.png'
import Skilimg4 from '../Images/javascript.png'
import Skilimg5 from '../Images/tailwind.jpeg'
import Skilimg6 from '../Images/vs code.jpeg'
import Skilimg7 from '../Images/bootstrap.jpeg'
import Skilimg8 from '../Images/redux.png'

function Skills() {
  return (
    <div className='skilhead'>
        <h1 className='skilheader'>Things I Code With</h1>
        <div className='icons'>
           <div className='logo'><img src={Skilimg} alt='' width={'70rem'} height={'70rem'}/></div>
           <div className='logo'><img src={Skilimg1} alt='' width={'70rem'} height={'70rem'}/></div>
           <div className='logo'><img src={Skilimg2} alt='' width={'70rem'} height={'70rem'}/></div>
        </div>
        <div className='icons1'>
           <div className='logo'><img src={Skilimg3} alt='' width={'70rem'} height={'70rem'}/></div>
           <div className='logo'><img src={Skilimg4} alt='' width={'70rem'} height={'60rem'}/></div>
           <div className='logo'><img src={Skilimg5} alt='' width={'70rem'} height={'70rem'}/></div>
        </div>
        <div className='icons2'>
           <div className='logo'><img src={Skilimg6} alt='' width={'70rem'} height={'80rem'}/></div>
           <div className='logo'><img src={Skilimg7} alt='' width={'70rem'} height={'70rem'}/></div>
           <div className='logo'><img src={Skilimg8} alt='' width={'70rem'} height={'70rem'}/></div>
          
        </div>
    </div>
  )
}

export default Skills