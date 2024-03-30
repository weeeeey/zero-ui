'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

import React from 'react';

const HomePage = () => {
    return (
        <div className="w-full h-full px-10 py-10 space-y-4">
            <h2 className="font-semibold text-xl">React</h2>

            <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Title</DialogTitle>
                        <DialogDescription>description</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <div className="text-right">Name</div>
                            <input
                                id="name"
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <div className="text-right">Username</div>
                            <input
                                id="username"
                                defaultValue="@peduarte"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>Save changes</DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default HomePage;
