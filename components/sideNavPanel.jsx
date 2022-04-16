import React from 'react';
import Link from 'next/link'

export default function sideNavPanel({navLinks}) {

    return (
        <>
            <div className='sideNavPanelContainer'>
                <ul>
                    {navLinks.map((l) => 
                        <li key={l.displayText}>
                            <Link href={l.href}>
                                <a>{l.displayText}</a>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
            <style jsx>{`
                .sideNavPanelContainer {
                    margin-top: 3rem;
                    overflow: scroll;
                }
            `}</style>
        </>
    )
}