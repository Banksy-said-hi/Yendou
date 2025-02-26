'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { toaster } from "@/components/ui/toaster"

interface CounterContextType {
    count: number;
    increment: () => void;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider = ({ children }: { children: ReactNode }) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    useEffect(() => {
        if (count > 0) {
            toaster.create({
                title: `Incremented`,
                description: `Counter is now ${count}`,
            });
        }
    }, [count]);

    return (
        <CounterContext.Provider value={{ count, increment }}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error('useCounter must be used within a CounterProvider');
    }
    return context;
};