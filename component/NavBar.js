import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();

    return (
        <nav>
            <div className="logo">TS VOC</div>
            <div className="btnBox">
                <div className="btn">ADD</div>
                &nbsp;&nbsp;
                <Link href="/setting">
                    <div className="btn">SETTING</div>
                </Link>
            </div>
            <style jsx>{`
                * {
                    margin: 0px;
                    padding: 0px;
                    box-sizing: border-box;
                }
                a {
                    text-decoration: none;
                    color: #000;
                }
                nav {
                    border-bottom: 1px solid #000;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 20px;
                    height: 30px;
                }
                .btnBox {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .btn {
                    cursor: pointer;
                }
            `}</style>
        </nav>
    );
}