// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//     allowedDevOrigins: ['192.168.2.3'],
// };

// export default nextConfig;


import type { NextConfig } from 'next';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';
import os from 'os';

function getLocalIPv4(): string | null {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]!) {
            if (iface.family === 'IPv4' && !iface.internal) return iface.address;
        }
    }
    return null;
}

export default (phase: typeof PHASE_DEVELOPMENT_SERVER) => {
    const nextConfig: NextConfig = {

    };

    if (phase === PHASE_DEVELOPMENT_SERVER) {
        const currentLanIP = getLocalIPv4();
        if (currentLanIP) {
            nextConfig.allowedDevOrigins = [currentLanIP];
        }
    }

    return nextConfig;
};