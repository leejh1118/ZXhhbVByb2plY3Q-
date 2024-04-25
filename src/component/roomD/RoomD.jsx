import { useState } from 'react';
import '../../../public/resources/css/roomD.css';
import { useEffect } from 'react';

export default function RoomD() {
  const [list, setList] = useState([]);

  function getList() {
    fetch("https://restcountries.com/v3.1/all", {
      method: "GET"
    }).then(res => res.json())
    .then(res => setList(res))
  }

  useEffect(() => {
    getList();
  }, [])

  
  console.log(list);

  return (
    <div id="roomd_wrap">
      <section class="notice">
        <div class="page-title">
              <div class="container">
                  <h3>맘대로해</h3>
              </div>
          </div>

          {/* <!-- board seach area --> */}
          <div id="board-search">
              <div class="container">
                  <div class="search-window">
                      <div class="search-wrap">
                          <label for="search" class="blind">공지사항 내용 검색</label>
                          <input id="search" type="search" name="" placeholder="검색어를 입력해주세요." value="" />
                          <button type="submit" class="btn btn-dark">검색</button>
                      </div>
                  </div>
              </div>
          </div>
        
        {/* <!-- board list area --> */}
          <div id="board-list">
              <div class="container">
                  <table class="board-table">
                      <thead>
                      <tr>
                          <th scope="col" class="th-num">번호</th>
                          <th scope="col" class="th-title">국가 이름</th>
                          <th scope="col" class="th-date">인구수</th>
                      </tr>
                      </thead>
              <tbody>
                {list.map((i, idx) => {
                  return (
                    <tr>
                      <td>{idx+1 }</td>
                    <th>
                        <a href="#!">{i.name.common }</a>
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
  )
}