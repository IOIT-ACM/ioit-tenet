import { FaUsers, FaUserShield, FaCreditCard } from 'react-icons/fa';

export const ESPORTS_FEE = 500;
export const UPI_ID = 'vipulbarmukh-2@okicici';
export const PAYEE_NAME = 'Vipul Barmukh';

export const FORM_STEPS = [
    { id: 'team', title: 'Team Info', icon: FaUsers },
    { id: 'leader', title: 'Leader Details', icon: FaUserShield },
    { id: 'members', title: 'Team Members', icon: FaUsers },
    { id: 'payment', title: 'Payment', icon: FaCreditCard },
];

export const memberFields = [
    { field: 'name', label: 'Full Name', type: 'text' },
    { field: 'ign', label: 'In-Game Name (IGN)', type: 'text' },
    { field: 'ignId', label: 'IGN ID', type: 'text' },
    { field: 'contact', label: 'Contact Number', type: 'tel' },
    { field: 'email', label: 'Email Address', type: 'email', fullWidth: true },
];
