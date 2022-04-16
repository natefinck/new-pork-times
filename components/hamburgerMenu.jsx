import { Fade } from 'hamburger-react'

export default function Hamburger(props) {
    return (
        <>
            <div className='menuContainer'>
                <Fade toggled={props.menuopen}/>
            </div>

            <style jsx>{`
                .menuContainer {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    z-index: 11;
                }
            `}</style>
        </>
    )
}