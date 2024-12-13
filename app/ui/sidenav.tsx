'use client';

import Link from 'next/link';
import {usePathname} from "next/navigation";
import clsx from 'clsx';

export default function Sidenav() {
    const pathname = usePathname();

    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link
                className="mb-2 flex items-end justify-start rounded-md p-4"
                href="/"
            >
                <div className="w-32 md:w-40">
                    Shortbox
                </div>
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <Link
                    key={"impress"}
                    href={"/impress"}
                    className={clsx(
                        'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                        {
                            'bg-sky-100 text-blue-600': pathname === '/impress',
                        },
                    )}
                >

                    <p className="hidden md:block">{"Impressum"}</p>
                </Link>
            </div>
        </div>
    );
}




