import React from 'react';
import Link from 'next/link'

export default function sideNavPanel({navLinks}) {
    return (
        <>
            <div className='sideNavPanelContainer'>
                <ul>
                    {navLinks.map((l) => 
                        <Link key={l.displayText} href={l.href}>
                            <li className="links">
                                <a>{l.displayText}</a>
                            </li>
                        </Link>
                    )}
                </ul>
            </div>
            <style jsx>{`
                .sideNavPanelContainer {
                    margin-top: 3rem;
                    overflow: scroll;
                }

                .links {
                    cursor: pointer;
                }
            `}</style>
        </>
    )
}