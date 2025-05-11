// SheetDB API URL
const sheetAPI = 'https://sheetdb.io/api/v1/1b245b51zxbs8';
const section = document.querySelector('#results');
let curentPage = 1;
const itemsPerPage = 5;

// Add event listener to the button to perform search function
document.querySelector('#btn').addEventListener('click', async () => {
  const keyword = document.querySelector('#search').value.trim();
  const selectedPeriod = document.querySelector('#periodSelect').value;
  

  // If keyword is empty, show a message
  if (!keyword) {
    section.innerHTML = `<p>Please Enter Keyword!</p>`;
    return;  
  }

  try {
    // Fetch data from the Sheet DB API
    const res = await fetch(sheetAPI);
    const data = await res.json();

    // Filter the keyword from the API data
    const results = data.filter(chapter => {
      const content = chapter.Content || '';
      const period = chapter['Period'] || '';

      const periodMatch = selectedPeriod ? period === selectedPeriod : true;

      const keywordMatch = content.includes(keyword);

      if (periodMatch && keywordMatch) {
        // Highlight the keyword in the content using HTML span
        chapter.HighlightedContent = content.replace(
          new RegExp(`(${keyword})`, 'gi'),
          `<span class="highlight">$1</span>`
        );
        return true;
      }
      return false;
    });

    // Retrieve Results in the format of [Book Title] : Chapter Title
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


// Add event listener to the search input to perform search function on Enter key
document.querySelector('#search').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    document.querySelector('#btn').click();
  }
});

// Add function to open PDF file
function openPDF(pdfName) {
  window.open(pdfName, '_blank');
}

// Add event listener to perform period select when the button is clicked
document.querySelector('#periodSelect').addEventListener('change', () => {
  document.querySelector('#btn').click();
});

