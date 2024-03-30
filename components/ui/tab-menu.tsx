'use client';
import React, { useEffect } from 'react';
import { cn } from 'zero-cnn';

const TabMenuContext = React.createContext<boolean | undefined>(undefined);

const useTabMenuContext = () => {
    const isHover = React.useContext(TabMenuContext);
    if (typeof isHover === 'boolean') return isHover;
    if (!isHover) throw new Error('TabMenuContext is not provided');
};

interface TabMenuProps<T = string> {
    children: React.ReactNode;
    className?: T;
}

export const TabMenu = ({ children }: TabMenuProps) => {
    const [isHover, setIsHover] = React.useState(false);
    return (
        <TabMenuContext.Provider value={isHover}>
            <div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className="relative bg-red-200 "
            >
                {children}
            </div>
        </TabMenuContext.Provider>
    );
};

const Trigger = ({ children }: TabMenuProps) => {
    return <div>{children}</div>;
};

interface ContentProps extends TabMenuProps {
    sideOffset?: 'left' | 'right' | 'top' | 'bottom';
}

const Content = ({ children, className, sideOffset }: ContentProps) => {
    const isOpen = useTabMenuContext();
    const [offset, setOffset] = React.useState({
        top: 0,
        left: 0,
    });
    useEffect(() => {
        switch (sideOffset) {
            case 'left':
                setOffset({
                    top: 0,
                    left: -100,
                });
                break;
        }
    }, [sideOffset]);
    return (
        <div
            className={`${
                isOpen ? 'block' : 'block'
            }   absolute top-0 right-[100%] transition-all duration-1000`}
        >
            <div
                className={cn(
                    'relative inset-0   border w-52 bg-black text-white',
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
};

TabMenu.displayName = 'TabMenu';
TabMenu.Trigger = Trigger;
TabMenu.Content = Content;
