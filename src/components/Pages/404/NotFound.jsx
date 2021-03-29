import { Box, Typography } from '@material-ui/core'
import React from 'react'

const NotFound = () => {
    return (
        <Box display='flex' justifyContent='center' my={10}>
            <Typography variant='h4'>
                <Box>Error 404 page not found!</Box>
            </Typography>
        </Box>
    )
}

export default NotFound
