import NavBar from "./NavBar";

export default function Layout( {children} ) {
    return (
        <>
            <NavBar />
            <div>{children}</div>
            <style global jsx>{`
                * {
                    margin: 0px;
                    padding: 0px;
                    box-sizing: border-box;
                }
                a {
                    text-decoration: none;
                    color: #000;
                }
            `}</style>
        </>
    );
}