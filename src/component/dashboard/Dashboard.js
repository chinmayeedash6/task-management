import React from 'react'
import  Sidebar  from '../sidebar/Sidebar'

const Dashboard = () => {

    const dashboardContent={padding:'0px 20px'}
    const dashboard ={display:'flex'}
    return (
        <>
            <div style={dashboard}>
                <Sidebar /> 

                <div style={dashboardContent} >
                    <h2>Welcome to Dashboard</h2>  
                </div>
            </div>                      
        </>
    )
}

export default Dashboard
