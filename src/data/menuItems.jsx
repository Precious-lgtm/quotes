// Higher Menu
import { ReactComponent as DashboardIcon } from '../assets/icon/dashboard.svg';
import { ReactComponent as InventoryIcon } from '../assets/icon/box.svg';
import { ReactComponent as ProcurementIcon } from '../assets/icon/cart.svg';
import { ReactComponent as FinanceIcon } from '../assets/icon/money-1.svg';
import { ReactComponent as ChatIcon } from '../assets/icon/chats.svg';
import { ReactComponent as CalendarIcon } from '../assets/icon/calendar.svg';
import { ReactComponent as ContactIcon } from '../assets/icon/sign-doc.svg';

// Lower Menu
import { ReactComponent as SupportIcon } from '../assets/icon/question-circle.svg';
import { ReactComponent as SettingsIcon } from '../assets/icon/sign-doc.svg';

export const menuItems = [
    {
        name: 'Dashboard',
        icon: DashboardIcon,
        children: []
    },
    {
        name: 'Inventory',
        icon: InventoryIcon,
        children: []
    },
    {
        name: 'Procurement',
        icon: ProcurementIcon,
        children: [
            {
                name: 'Quotes',
                url: '/',
            },
            {
                name: 'Orders',
                url: '/'
            }
        ]
    },
    {
        name: 'Finance',
        icon: FinanceIcon,
        children: []
    },
    {
        name: 'Communication',
        icon: ChatIcon,
        children: [],
        alerts: 10
    },
    {
        name: 'Calendar',
        icon: CalendarIcon,
        children: [],
        alerts: 10
    },
    {
        name: 'Contacts',
        icon: ContactIcon,
        children: []
    }
]

export const menuItems2 = [
    {
        name: 'Support',
        icon: SupportIcon,
        url: '/'
    },
    {
        name: 'Settings',
        icon: SettingsIcon,
        url: '/'
    }
]