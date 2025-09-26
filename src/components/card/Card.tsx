import Image from 'next/image'
import React from 'react'

interface CardProps {
    color: "green" | "white" | "black";
    title1: string;
    title2: string;
    linkText: string;
    imageSrc: string;
    arrowIconSrc: string
}


export const Card = ({
   color,
   title1,
   title2,
   linkText,
   imageSrc,
   arrowIconSrc = "/arrow.png"
  }: CardProps) => {
  return (


    <div className={`card-container ${
      color === "green" ? "card-green" :
      color === "white" ? "card-white" :
      color === "black" ? "card-black" : ""
    }`}>
      <div className='card_leftSide'>
        <div className='card_leftSide--title'>
          <span className='span1'>{title1}</span>
          <span className='span2'>{title2}</span>
        </div>

        <div className='card_leftSide--container'>
          <div className='card_leftSide--icon'>
            <Image src={arrowIconSrc} alt="arrow" width={24} height={24} />
          </div>
          <div className='card_leftSide--link'>{linkText}</div>
        </div>
      </div>

      <div className='card_rightside'>
        <Image
          className='card_rightside--image'
          alt="aaaa"
          width={200}
          height={200}
          src={imageSrc}
        />
      </div>
    </div>

  );
}


