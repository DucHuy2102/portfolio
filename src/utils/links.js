import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const MENU_LIST = [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About' },
    { url: '/portfolio', title: 'Portfolio' },
    { url: '/contact', title: 'Contact' },
];

export const SOCIAL_LIST = [
    {
        url: 'https://github.com/DucHuy2102',
        icon: <FaGithub size={24} className='hover:text-black' />,
    },
    {
        url: 'https://www.facebook.com/Duc.Huy2102',
        icon: <FaFacebook size={24} className='hover:text-blue-500' />,
    },
    {
        url: 'https://www.instagram.com/d_huy02/',
        icon: (
            <FaInstagram
                size={24}
                className='hover:bg-gradient-to-tr hover:from-yellow-400 rounded-md 
                hover:via-pink-500 hover:to-purple-600 hover:text-white'
            />
        ),
    },
    {
        url: 'https://www.linkedin.com/in/duchuy2102/',
        icon: <FaLinkedin size={24} className='hover:text-blue-800' />,
    },
];

export const topVariant = {
    close: { rotate: 0 },
    open: { rotate: 45, backgroundColor: 'rgb(255,255,255)' },
};

export const centerVariant = {
    close: { opacity: 1 },
    open: { opacity: 0 },
};

export const bottomVariant = {
    close: { rotate: 0 },
    open: { rotate: -45, backgroundColor: 'rgb(255,255,255)' },
};

export const listVariant = {
    close: { x: '100vw' },
    open: {
        x: 0,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.2,
        },
    },
};

const listItemVariant = {
    close: { x: -10, opacity: 0 },
    open: { x: 0, opacity: 1 },
};
