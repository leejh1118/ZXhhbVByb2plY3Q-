import { useState } from 'react';
import { useEffect } from 'react';

export default function RoomD() {
  const [list, setList] = useState([]);
  const [lang, setLang] = useState("eng");
  const [searchInput, setSearchInput] = useState('');
  const langList = ["eng", "kor", "ara","bre","ces","cym","deu","est","fin","fra","hrv","hun","ita","jpn","nld","per","pol","por","rus","slk","spa","srp","swe","tur","urd","zho"]

  function getList() {
    fetch("https://restcountries.com/v3.1/all", {
      method: "GET"
    }).then(res => res.json())
    .then(res => setList(res))
  }

  const handleChangeLang = (e) => {
    setLang(e.target.value);
  }

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  }


  useEffect(() => {
    getList();
  }, [])
  console.log(list[0]);
  return (
    <>
    <div id="roomd_wrap">
      <section className="notice">
        <div className="page-title">
              <div className="container">
                  <h3>리 스 트</h3>
            </div>
            <div className='select-box'>
                <select className='btn btn-dark' onChange={handleChangeLang}>
                  {langList.map((i,idx)=>{
                    return (
                      <option key={"option" + idx} value={i}>{i}</option>
                    )
                  })}
                </select>
              </div>
          </div>

          {/* <!-- board seach area --> */}
          <div id="board-search">
              <div className="container">
                  <div className="search-window">
                      <div className="search-wrap">
                          {/* <label for="search" className="blind">공지사항 내용 검색</label> */}
                <input
                  id="search"
                  type="search"
                  value={searchInput}
                  placeholder="검색어를 입력해주세요."
                  onChange={handleSearch}/>
                {/* <button type="submit" className="btn btn-dark">검색</button> */}
                
              </div>
              
                  </div>
              </div>
          </div>
        
        {/* <!-- board list area --> */}
          <div id="board-list">
              <div className="container">
                  <table className="board-table">
                      <thead>
                      <tr>
                          <th scope="col" className="th-num">NO</th>
                          <th scope="col" className="th-title">국가 이름</th>
                          <th scope="col" className="th-date">인구수</th>
                      </tr>
                      </thead>
              <tbody>
                {list
                  .filter(item => {
                    const officialName = lang === "eng" ? item.name.official : item.translations[lang].official;
                    return officialName.toLowerCase().includes(searchInput.toLowerCase());
                  })
                  .map((i, idx) => {
                  return (
                    <tr key={"number" + idx}>
                      <td>{idx+1 }</td>
                      <th>
                        {lang == "eng" ? 
                          <a href={`https://restcountries.com/v3.1/name/${i.name.official }`}>{i.name.official }</a>
                        : 
                          <a href={`https://restcountries.com/v3.1/name/${i.name.official }`}>{i.translations[lang].official }</a>
                        }
                    </th>
                    <td>{i.population.toLocaleString()}</td>
                </tr>
                  )
                }) }
                    
                     
                      </tbody>
                  </table>
              </div>
          </div>

      </section>
      </div>
      </>
  )
}