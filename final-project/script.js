// SheetDB API URL
const sheetAPI = 'https://sheetdb.io/api/v1/f50avh96ekym2';

// 검색 결과를 표시할 섹션
const section = document.querySelector('#results');

// 검색 버튼 클릭 시 실행되는 함수
document.querySelector('#btn').addEventListener('click', async () => {
  const keyword = document.querySelector('#search').value.trim().toLowerCase(); // 검색어 입력

  if (!keyword) {
    section.innerHTML = `<p>Please Enter Keyword!</p>`;
    return;
  }

  try {
    // SheetDB API에서 데이터 가져오기
    const res = await fetch(sheetAPI);
    const data = await res.json();

    // 검색어가 Content에 포함된 항목 필터링 + 하이라이트 추가
    const results = data.filter(chapter => {
      const content = chapter.Content || '';
      if (content.toLowerCase().includes(keyword)) {
        // 하이라이트 처리: 검색어를 <span>으로 감싸기
        chapter.HighlightedContent = content.replace(
          new RegExp(`(${keyword})`, 'gi'),
          `<span class="highlight">$1</span>`
        );
        return true;
      }
      return false;
    });

    // 결과 출력
    if (results.length > 0) {
        section.innerHTML = `
          <h1>Search Results for "${keyword}"</h1>
          ${results.map(chapter => `
            <div class="result-item">
              <h3 class="search-title">
                [ ${chapter['Book Title']} ] : ${chapter['Chapter Title']}<br><span class="italic">${chapter['Chapter Title (English)']}</span>
              </h3>
              <p class="description">${chapter.HighlightedContent}</p>
            </div>
          `).join('')}
        `;
        section.scrollIntoView({ behavior: 'smooth' });
      } else {
        section.innerHTML = `<p>Keyword "${keyword}" not found</p>`;
      }
      

  } catch (error) {
    console.error('There was an error during the search:', error);
    section.innerHTML = '<p>Error. Please try again</p>';
  }
});


function flipCard(box) {
    box.classList.toggle('flipped'); 
}    

document.querySelector('#search').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    document.querySelector('#btn').click();
  }
});



