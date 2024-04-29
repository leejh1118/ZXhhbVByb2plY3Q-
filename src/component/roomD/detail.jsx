import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function detail() {
  const [data, setData] = useState([]);
  const { name } = useParams();
  const [lang, setLang] = useState("eng");
  const langList = ["eng", "kor", "ara","bre","ces","cym","deu","est","fin","fra","hrv","hun","ita","jpn","nld","per","pol","por","rus","slk","spa","srp","swe","tur","urd","zho"]
  useEffect(() => {
    getData(); 
  }, [])
  // console.log("query :: " + query); 
  console.log("falgs :: ", data[0]?.flags.png);
  
  const handleChangeLang = (e) => {
    setLang(e.target.value);
  }

  function getData() {
    fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`, {
      method: "GET"
    }).then(res => res.json())
    .then(res => setData(res))
  }
  return (
    <>
      <div className='select-box'>
                <select className='btn btn-dark' onChange={handleChangeLang}>
                  {langList.map((i,idx)=>{
                    return (
                      <option key={"option" + idx} value={i}>{i}</option>
                    )
                  })}
                </select>
              </div>
              
      <h1>{data[0]?.name.common}</h1>
      <img src={data[0]?.flags.png}/>
    </>
  ) 
}
