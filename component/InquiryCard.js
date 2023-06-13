import Link from "next/link";
import { useRouter } from "next/router";

export default function InquiryBox({index}) {
    return (
        <div className="inquiryCard">
            {index}
            <style jsx>{`
                .inquiryCard {
                    width: 500px;
                    height: 300px;
                    margin: 10px 10px 0px 0px;
                    border: 1px solid #000;
                }
            `}</style>
        </div>
    );
}