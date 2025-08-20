import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useFadeIn = (duration: number = 1) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (elementRef.current) {
            gsap.fromTo(
                elementRef.current,
                { opacity: 0 },
                { opacity: 1, duration }
            );
        }
    }, [duration]);

    return elementRef;
};

export const useSlideIn = (duration: number = 1, direction: 'left' | 'right' = 'left') => {
    const elementRef = useRef<HTMLDivElement>(null);
    const xValue = direction === 'left' ? -100 : 100;

    useEffect(() => {
        if (elementRef.current) {
            gsap.fromTo(
                elementRef.current,
                { x: xValue, opacity: 0 },
                { x: 0, opacity: 1, duration }
            );
        }
    }, [duration, direction]);

    return elementRef;
};

export default { useFadeIn, useSlideIn };