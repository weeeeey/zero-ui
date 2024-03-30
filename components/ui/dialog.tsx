'use client';
import React, { useEffect } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from 'zero-cnn';
import { X } from 'lucide-react';
import {
    CustomDomComponent,
    motion,
    useAnimate,
    useInView,
} from 'framer-motion';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const Root = DialogPrimitive.Root;
const Portal = DialogPrimitive.Portal;
const Trigger = DialogPrimitive.Trigger;
const Close = DialogPrimitive.Close;

const Overlay = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => {
    return (
        <DialogPrimitive.Overlay
            ref={ref}
            className="bg-black/50 data-[state=open]:animate-in fixed inset-0"
            {...props}
        />
    );
});
Overlay.displayName = 'Overlay';

const DialogClose = () => {
    return (
        <DialogPrimitive.Close className="absolute top-4 right-4 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="size-4" />
        </DialogPrimitive.Close>
    );
};

const MotionContent = motion(DialogPrimitive.Content);
type MotionContentType = CustomDomComponent<
    DialogPrimitive.DialogContentProps & React.RefAttributes<HTMLDivElement>
>;

const Content = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<MotionContentType>
>(({ children, className, ...props }, ref) => {
    return (
        <Portal>
            <Overlay />
            <MotionContent
                initial={{
                    scale: 0.5,
                    top: '40%',
                    backgroundColor: 'blue',
                }}
                animate={{ scale: 1, top: '50%', backgroundColor: 'red' }}
                style={{
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                className={cn(
                    // -translate-x-1/2 -translate-y-1/2
                    'transition-all  fixed  left-[50%] h-1/3 max-h-xl w-3/4 sm:w-2/3 sm:max-w-2xl lg:w-1/3 lg:max-w-xl  rounded-lg p-6 shadow-[10px_10px_10px_black] focus:outline-none',
                    className
                )}
                {...props}
            >
                {children}
                <DialogClose />
            </MotionContent>
        </Portal>
    );
});
Content.displayName = 'Content';

// const MotionContent = motion(DialogPrimitive.Content);

// type MotionContentType = CustomDomComponent<
//     DialogPrimitive.DialogContentProps & React.RefAttributes<HTMLDivElement>
// >;
// export const AAContent = React.forwardRef<
//     React.ElementRef<typeof DialogPrimitive.Content>,
//     React.ComponentPropsWithoutRef<MotionContentType>
// >(({ children, className, ...props }, ref) => {
//     const containerRef = React.useRef<HTMLDivElement>(null);
//     // const inView = useInView(containerRef, { amount: 0.2 });
//     // console.log(inView);

//     const [isOk, setIsOk] = React.useState(false);
//     return (
//         <Portal>
//             <Overlay />

//             <MotionContent
//                 ref={containerRef}
//                 // initial={{ scale: 0.5 }}
//                 // whileHover={{ scale: 1.5 }}
//                 className={cn(
//                     'transition-all -translate-x-1/2 -tray12 fixed top-[50%] left-[50%]  h-1/3 max-h-xl w-3/4 sm:w-2/3 sm:max-w-2xl lg:w-1/3 lg:max-w-xl rounded-lg bg-white p-6 shadow-[10px_10px_10px_black] focus:outline-none',
//                     className
//                 )}
//                 {...props}
//             >
//                 {children}

//                 <DialogClose />
//             </MotionContent>
//         </Portal>
//     );
// });
// AAContent.displayName = 'Content';

const Header = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                'flex flex-col justify-center items-start px-2',
                className
            )}
        >
            {children}
        </div>
    );
};
const Title = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ children, ...props }, ref) => {
    return (
        <DialogPrimitive.Title
            ref={ref}
            className={cn('text-xl font-bold ')}
            {...props}
        >
            {children}
        </DialogPrimitive.Title>
    );
});
Title.displayName = 'Title';

const Description = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ children, className, ...props }, ref) => {
    return (
        <DialogPrimitive.Description
            ref={ref}
            className={cn('text-md  mb-5 text-slate-500 ', className)}
            {...props}
        >
            {children}
        </DialogPrimitive.Description>
    );
});
Description.displayName = 'Description';

const Footer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn('mt-5 flex justify-end items-center', className)}>
            {children}
        </div>
    );
};

const DialogOverlay = Overlay;
const DialogContent = Content;
const DialogHeader = Header;
const DialogTitle = Title;
const DialogDescription = Description;
const DialogFooter = Footer;

export {
    Dialog,
    DialogTrigger,
    DialogPortal,
    DialogOverlay,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
    //
    Root,
    Trigger,
    Portal,
    Overlay,
    Content,
    Header,
    Title,
    Description,
    Close,
    Footer,
};
