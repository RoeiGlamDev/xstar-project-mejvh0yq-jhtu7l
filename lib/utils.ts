import React from 'react';

export const formatReviewDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

export const calculateRatingAverage = (reviews: { rating: number }[]): number => {
    const total = reviews.reduce((acc, review) => acc + review.rating, 0);
    return reviews.length ? total / reviews.length : 0;
};

export const truncateText = (text: string, maxLength: number): string => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

export const getUniqueReviews = (reviews: { id: string }[]): { id: string }[] => {
    const uniqueIds = new Set();
    return reviews.filter(review => {
        if (uniqueIds.has(review.id)) {
            return false;
        }
        uniqueIds.add(review.id);
        return true;
    });
};

export const scrollToElement = (elementId: string): void => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

export const isEmailValid = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const getCurrentYear = (): number => {
    return new Date().getFullYear();
};

export default {
    formatReviewDate,
    calculateRatingAverage,
    truncateText,
    getUniqueReviews,
    scrollToElement,
    isEmailValid,
    getCurrentYear,
};