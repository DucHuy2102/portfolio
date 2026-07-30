export type Service = {
    id: string;
    title: string;
    type: 'Personal' | 'Farm';
    price: string;
    description: string;
    features: string[];
};

export const servicesData: Service[] = [
    {
        id: '1',
        title: 'ChatGPT Pro',
        type: 'Personal',
        price: '$20/mo',
        description: 'Premium AI assistant for personal use with advanced features.',
        features: ['GPT-4 Access', 'Faster response speed', 'Priority access to new features', 'No usage limits'],
    },
    {
        id: '2',
        title: 'Tool Add Farm',
        type: 'Farm',
        price: '$50/mo',
        description: 'Automated tool for farming accounts with high efficiency.',
        features: ['Multi-threading support', 'Proxy integration', '24/7 Uptime', 'Anti-ban mechanisms'],
    },
    {
        id: '3',
        title: 'Custom MMO Script',
        type: 'Farm',
        price: 'Contact',
        description: 'Custom automation scripts tailored for your specific MMO needs.',
        features: ['Custom logic', 'Full source code provided', '1 month free support', 'High performance'],
    }
];
