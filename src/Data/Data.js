// Sidebar imports

import{ 
    UilDashboard,
    UilFile,
    UilApps,
    UilToggleOn,
    UilFileCheckAlt,
    UilChart,
    UilBrowser,
} from '@iconscout/react-unicons'

export const SidebarData = [
    {
        icon: UilDashboard,
        heading: 'Dashboard'
    },

    {
        icon: UilFile   ,
        heading: 'Pages'
    },

    {
        icon: UilApps,
        heading: 'Applications'
    },

    {
        icon: UilBrowser,
        heading: 'UIComponent'
    },

    {
        icon: UilToggleOn,
        heading: 'Widgets'
    },

    {
        icon: UilFileCheckAlt,
        heading: 'Forms'
    },

    {
        icon: UilChart,
        heading: 'Charts'
    }
];

export const CardsData = [
    {
        title: 'Total Income',
        color:{
            backGround: 'linear-gradient(180deg, #4d4df0 0%, #4d4df0 100%)',
            boxShadow: '0px 10px 20px 0px #e0c6f5',
        },
        value: '$579,000',
        saving: 'Saved 25%'
    },
    {
        title: 'Total Expenses',
        color:{
            backGround: 'linear-gradient(180deg, #40e0d0 -146.42%, #40e0d0 -46.42%)',
            boxShadow: '0px 10px 20px 0px #e0c6f5',
        },
        value: '$79,000',
        saving: 'Saved 25%'
    },
    {
        title: 'Cash on Hand',
        color:{
            backGround: 'linear-gradient(180deg, #ab59c6 0%, #ab59c6 100%)',
            boxShadow: '0px 10px 20px 0px #e0c6f5',
        },
        value: '$92,000',
        saving: 'Saved 25%'
    },
    {
        title: 'Net Profit Margin',
        color:{
            backGround: 'linear-gradient(180deg, #21db9a 0%, #21db9a 100%)',
            boxShadow: '0px 10px 20px 0px #e0c6f5',
        },
        value: '$179,000',
        saving: 'Saved 63%'
    },
];

export const ReportData = [
    {
        title: '% of Income Budget',
        balance: '$18,670',
        submit: 'View Full Report',
        barValue: 67,
        color:{
            backGround: 'linear-gradient(180deg, #f7fdf3, #f7fdf3)',
            boxShadow: '0px 10px 20px 0px #e0c6f5',
        }
    },
    {
        title: '% of Income Budget',
        balance: '$18,670',
        submit: 'View Full Report',
        barValue: 48,
        color:{
            backGround: 'linear-gradient(180deg, #f7fdf3,#f7fdf3)',
            boxShadow: '0px 10px 20px 0px #e0c6f5',
        }
    }
];

export const HistData = [
    {
        title: 'AP and AR Balance',
        balance: 'Avg. $5,309',
        color:{
            backGround: 'linear-gradient(180deg, #f7fdf3,#f7fdf3)',
            boxShadow: '0px 10px 20px 0px #e0c6f5',
        }
    }
]; 
