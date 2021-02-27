// import { Title } from '@material-ui/icons'
import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

export const SidebarData =
[
    {

        title:"Dashboard",
        icon:<DashboardIcon />,
        link:"/dashboard"
     },
    
     {
    
        title:"Task",
        icon:<AssignmentIndIcon />,
        link:"/addnewtask"
     },
    
     {
    
        title:"existingTask",
        icon:<AssignmentTurnedInIcon />,
        link:"/existingTask"
     }
]



