import React from 'react'
import {useFetch} from 'use-http'
import Nav from '../Components/Nav'
import MeditionsTemplate from '../Templates/MeditionsTemplate'
import { apiEnv } from '../utils/constants'

const MeditionsPage = () => {
    const {data = [], error, loading } = useFetch(`${apiEnv}/t`, [])

    return (
        <>
            <Nav/>
            {
                !error && !loading && data &&
                                <MeditionsTemplate
                                    data={data}
                                />
            }
        </>
    )
}

export default MeditionsPage
