'use client';
import React from 'react';
import { Plus } from 'lucide-react';
import { cn } from 'zero-cnn';

// Todo: 아코디언 타입 single or multi
interface AccordionProps {
    id: string;
    title: string;
    description: string;
}

export const Accordion = ({ description, id, title }: AccordionProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <ul className="border-x border-t w-full">
            <Trigger onClick={() => setIsOpen((p) => !p)}>
                <Header title={title} />
            </Trigger>
            <Item description={description} isOpen={isOpen} />
        </ul>
    );
};

const Trigger = ({
    children,
    onClick,
}: // title,
{
    children: React.ReactNode;
    onClick: () => void;
    // title: string;
}) => {
    return (
        <li
            onClick={onClick}
            // data-title={title}
            className={`cursor-pointer flex justify-start items-center border-b pl-2 py-1
            data-[title=non]:bg-red-500
            `}
        >
            <Plus className="size-5 inline-block border rounded-full  p-1 mr-2" />
            {children}
        </li>
    );
};
const Header = ({ title }: { title: string }) => {
    return <h3>{title}</h3>;
};

const Item = ({
    description,
    isOpen,
}: {
    isOpen: boolean;
    description: string;
}) => {
    const ref = React.useRef<HTMLDivElement>(null);
    ref.current?.addEventListener('beforematch', () => {});
    return (
        <div
            ref={ref}
            className={cn(
                'overflow-hidden transition-all px-2 bg-blue-100 selection:bg-red-100 ',
                isOpen ? 'h-fit border-b py-4' : 'h-0 '
            )}
        >
            {description}
        </div>
    );
};

/**
 *@param TODO : COMPOSE Pattern
 const AccordianContext = React.createContext<AccordionProps | undefined>(
    undefined
);

const useAccordionContext = () => {
    const value = React.useContext(AccordianContext);
    if (!value)
        throw new Error(
            'useAccordionContext must be used within a AccordionProvider'
        );
    return value;
};

export const Accordion = ({ children }: { children: React.ReactNode }) => {
    return <div className="border">{children}</div>;
};

const Trigger = ({ children }: { children: React.ReactNode }) => {

    return <div className='p-2'>{children}</div>;
};

const Header = ({ text }: { text: string }) => {
    return <div>{text}</div>;
};

const Item = () => {
    return <div>Item</div>;
};

Accordion.Triger = Trigger;
Accordion.Header = Header;
Accordion.Item = Item;

 */
