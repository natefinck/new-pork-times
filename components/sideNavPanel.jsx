import React from 'react';
import Link from 'next/link'

export default function sideNavPanel({setmenuopen}) {

    const navLinks = [
        {'displayText': 'Home', 'href': '/'},
        {'displayText': 'World', 'href': '/'},
        {'displayText': 'Business', 'href': '/'},
        {'displayText': 'Politics', 'href': '/'},
        {'displayText': 'U.S.', 'href': '/'},
        {'displayText': 'Sports', 'href': '/'},
        {'displayText': 'Health', 'href': '/'},
        {'displayText': 'N.Y.', 'href': '/'},
        {'displayText': 'Opinion', 'href': '/'},
        {'displayText': 'Tech', 'href': '/'},
        {'displayText': 'Science', 'href': '/'},
        {'displayText': 'Art', 'href': '/'},
        {'displayText': 'Books', 'href': '/'},
        {'displayText': 'Style', 'href': '/'},
        {'displayText': 'Food', 'href': '/'},
        {'displayText': 'Travel', 'href': '/'},
        {'displayText': 'Magazine', 'href': '/'},
        {'displayText': 'Real Estate', 'href': '/'},
        {'displayText': 'Obituaries', 'href': '/'},
        {'displayText': 'Video', 'href': '/'}
    ]

    return (
        <>
            <ul>
                {navLinks.map((l) => 
                    <li key={l.displayText}>
                        <Link href={l.href}>
                            <a>{l.displayText}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </>
    )
}