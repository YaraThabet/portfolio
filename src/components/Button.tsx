import React from 'react'
interface Iprops{
    text:string,
    className?: string,
    id:string
}
const Button = (props:Iprops) => {
  return (
    <a className={`${props.className ?? ''} cta-wrapper `}>
        <div className="cta-button group">
            <div className="bg-circle"/>
                <p className='text'>{props.text}</p>
                <div className='arrow-wrapper'>
                    <img src='/images/arrow-down.svg' alt='arrow'/>
                </div>
        </div>
    </a>
  )
}

export default Button
