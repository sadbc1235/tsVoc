import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();

    return (
        <nav>
            <div className="logo">
                <Link href="/">
                    TS VOC
                </Link>
            </div>
            <div className="btnBox">
                <div className="btn">ADD</div>
                &nbsp;&nbsp;
                {
                router.pathname === '/' 
                 ?  <Link href="/setting">
                        <div>SETTING</div>
                    </Link>
                 :  <Link href="/">
                        <div>REPORT</div>
                    </Link>
                }
                
            </div>
            <style jsx>{`
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