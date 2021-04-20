import React from 'react'
import { useFetch } from 'use-http'
import { apiEnv, defaultHeaders, meditions } from '../utils/constants'
import HomeTemplates from '../Templates/HomeTemplates'
import Nav from '../Components/Nav'

const HomePage = () => {
    const {data = [], error, loading } = useFetch(`${apiEnv}/presionDirecta`, [])

    return (
        <>
            <Nav/>
            {
                !error && !loading &&
                                <HomeTemplates
                                    data={data[meditions[0].data]}
                                    title={meditions[0].data}
                                />
            }
        </>
    )
}

export default HomePage
