import React from 'react'
import Card from '../Components/Card'

const HomeTemplates = ({data, title}) => {
    return (
        <>
            <Card
                data={data}
                title={title}
            />
        </>
    )
}

export default HomeTemplates
