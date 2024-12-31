import { BiCalendar } from 'react-icons/bi';
import Misc from '../assets/images/misc.png';

export const deliveryinputs = [
    {
        name: 'Payment Terms',
        value: 'Net 30'
    },
    {
        name: 'Delivery Schedule',
        value: 'Immediate Delivery'
    },
    {
        name: 'Shipping Method',
        value: 'Courier Services'
    },
    {
        name: 'Lead Time',
        value: '10 days'
    }
]

export const inputs = [
    {
        name: 'RFQ No',
        placeholder: 'RGQ-10234',
        type: 'text'
    },
    {
        name: 'Title',
        placeholder: 'Request for Equipments',
        type: 'text'
    },
    {
        name: 'Department',
        placeholder: 'Maternity',
        type: ''
    },
    {
        name: 'Expected Delivery Date',
        placeholder: '2024-12-02',
        type: 'date',
        icon: <BiCalendar size={10} className='text-slate-300' />
    }
]

export const dataInput = [
    {
        name: 'Oxygen Concentrate',
        image: Misc,
        id: '#28373',
        variant: 'Blue',
        quantity: '100',
        unit: 'Pack',
        price: 200.00,
        amount: 2000.00,
        delivery: '2024-08-07'
    },
    {
        name: 'Mechanical Ventilator',
        image: Misc,
        id: '#28373',
        variant: 'Blue',
        quantity: '45',
        unit: 'Pack',
        price: 350.00,
        amount: 2500.00,
        delivery: '2024-08-07'
    },
    {
        name: 'Patient Monitor',
        image: Misc,
        id: '#28373',
        variant: 'Blue',
        quantity: '30',
        unit: 'Pack',
        price: 300.00,
        amount: 1500.00,
        delivery: '2024-08-07'
    },
    {
        name: 'Mechanical Ventilator',
        image: Misc,
        id: '#28373',
        variant: 'Blue',
        quantity: '35',
        unit: 'Pack',
        price: 200.00,
        amount: 1500.00,
        delivery: '2024-08-07'
    }
]


export const dataItems = [
    {
        name: 'Oxygen Concentrate',
        image: Misc,
        id: '#28373',
        variant: 'Blue',
        quantity: '100 Pieces',
        price: 200.00,
        amount: 2000.00,
        delivery: '2024-08-07'
    },
    {
        name: 'Mechanical Ventilator',
        image: Misc,
        id: '#28373',
        variant: 'NIL',
        quantity: '45 Kg',
        price: 350.00,
        amount: 2500.00,
        delivery: '2024-08-07'
    },
    {
        name: 'Patient Monitor',
        image: Misc,
        id: '#28373',
        variant: 'Blue',
        quantity: '30 Units',
        price: 300.00,
        amount: 1500.00,
        delivery: '2024-08-07'
    },
    {
        name: 'Mechanical Ventilator',
        image: Misc,
        id: '#28373',
        variant: 'Blue',
        quantity: '35 Units',
        price: 200.00,
        amount: 1500.00,
        delivery: '2024-08-07'
    }
]

export const requestInfo = [
    { 
        name: 'Title',
        value: 'Request for Equipments'
    },
    {
        name: 'RFQ No',
        value: 'RQ #01234'
    },
    {
        name: 'Requestor',
        value: 'Jane Doe',
        tag: 'JD',
        role: 'Head Nurse, Paediatrics'
    },
    {
        name: 'Department',
        value: 'Maternity'
    },
    {
        name: 'Expected Delivery Date',
        value: '2024-12-02'
    }
]

export const quoteInfo = [
        { 
            name: 'Title',
            value: 'Request for Equipments'
        },
        {
            name: 'RFQ No',
            value: 'RQ #01234'
        },
        {
            name: 'Requestor',
            value: 'Jane Doe',
            tag: 'JD',
            role: 'Head Nurse, Paediatrics'
        },
        {
            name: 'Status',
            value: 'Awaiting'
        },
        {
            name: 'Department',
            value: 'Maternity'
        }
    ];
