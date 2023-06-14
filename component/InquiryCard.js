import Link from "next/link";
import { useRouter } from "next/router";

export default function InquiryBox({index}) {
    return (
        <div className="inquiryCard">
            
            <table>
                <colgroup>
                    <col width="15%"/>
                    <col width="35%"/>
                    <col width="15%"/>
                    <col width="35%"/>
                </colgroup>

                <tr>
                    <th>고객사</th>
                    <td>대구테크노파크</td>
                    <th>문의대상</th>
                    <td>김은수</td>
                </tr>

                <tr>
                    <th>문의사항</th>
                    <td colSpan={3}>today im gonna make voc on web!!</td>
                </tr>

                <tr>
                    <th>상태</th>
                    <td>문의중</td>
                    <th>문의일자</th>
                    <td>2023.06.14</td>
                </tr>

                <tr>
                    <th>답변자</th>
                    <td>김은수</td>
                    <th>완료일자</th>
                    <td>2023.06.15</td>
                </tr>
            </table>

            <style jsx>{`
                .inquiryCard {
                    width: 500px;
                    height: 300px;
                    margin: 10px 10px 0px 0px;
                    border: 1px solid #000;
                }

                table {
                    width: 100%;
                    height: 100%;
                    border-collapse: collapse;
                }

                table, th, td {
                    border: 1px solid #000;
                }
            `}</style>
        </div>
    );
}