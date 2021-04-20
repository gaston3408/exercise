import React from 'react'
import Reloj from './Reloj'

const Card = ({data, title, index = 0, className = ""}) => {
    return (
        <>
            <h2 style={{marginTop: 30}}>{title}</h2>
                <div className={"reloj-container"}>
                    <Reloj
                        medition={data}
                        index={index}
                        className={className}
                    />
                </div>
        </>
    )
}

export default Card
