
export default function Hamburger() {
    return (
        <>
            <div className="hamburger">
                <div className="burger"></div>
                <div className="burger"></div>
                <div className="burger"></div>
            </div>

            <style jsx>{`
                .hamburger {
                    width 2rem;
                    height: 2rem;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    z-index: 10;
                    // display: none;
                }

                .burger {
                    width: 2rem;
                    height: .25rem;
                    border-radius: 10px;
                    background-color: var(--main-black);
                    transform-origin: 1px;
                    transition: all 3s linear;
                }

                @media (max-width: 767px) {

                    .hamburger {
                        display: fixed;
                        padding-top: 10px;
                        margin-left: 10px;
                        z-index: 10;
                    }
                }

            `}</style>
        </>
    )

}