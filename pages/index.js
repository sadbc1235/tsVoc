import InquiryBox from "@/component/InquiryCard";

export default function Home() {
  const indexList = [{i: 1}, {i: 2}, {i: 3}]

  return (
    <div id="inquiryBox">
    {
      indexList.map( item => (
        <InquiryBox index={item.i} key={item.i}/>
      ))
    }
      

      <style jsx>{`
        #inquiryBox {
          width: 100%;
          padding: 0px 10px;
          display: flex;
          flex-wrap: wrap;
        }          
      `}</style>
    </div>
  )
}
