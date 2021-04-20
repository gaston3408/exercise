import React from 'react'
import Card from '../Components/Card'

const HomeTemplates = ({data, title}) => {
    return (
        <>
            <Card
                data={data}
                title={title}
                className={data > 2000 ? "fondo" : ""}
            />
        </>
    )
}

export default HomeTemplates
