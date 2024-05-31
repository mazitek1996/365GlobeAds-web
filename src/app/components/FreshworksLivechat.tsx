
// FreshworksLivechat.tsx
"use client"
import { useEffect } from 'react';

const FreshworksLivechat = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//fw-cdn.com/11473888/4138785.js';
        script.setAttribute('chat', 'true');
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
};

export default FreshworksLivechat;
