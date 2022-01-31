import React from 'react'

export const HomepageCard = (props) => {
    return (
    <>
    <div class='HP-container'>
        <img src={props.imageSrc}
               alt={props.imageAlt}
               class={props.imageClass}/>
            
        
        <h1>Header</h1>
        <h2>subheader</h2>
        <p>content</p>
        <footer>footer</footer>
    </div>
    </>
    )
}