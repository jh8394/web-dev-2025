
const manuscripts = [
    {
        title: "Jiudian",
        chineseTitle: "九店楚簡",
        timeOrigin: "Warring States Period",
        placeOrigin: "Jiangling, Hubei",
        timeExcavation: "1981",
        genre: ["Technical"],
        link: "https://baike.baidu.com/item/%E4%B9%9D%E5%BA%97%E6%A5%9A%E7%B0%A1/8762760",
    },
    {
        title: "Fangmatan",
        chineseTitle: "放馬灘秦簡",
        timeOrigin: "Warring States Period",
        placeOrigin: "Tiansui, Gansu",
        timeExcavation: "1986",
        genre: ["Biography","Technical"],
        link: "https://baike.baidu.com/item/%E6%94%BE%E9%A9%AC%E6%BB%A9%E7%A7%A6%E7%AE%80?fromModule=lemma_search-box",
    },
    {
        title: "Guodian",
        chineseTitle: "郭店楚簡",
        timeOrigin: "Warring States Period",
        placeOrigin: "Jingmen, Hubei",
        timeExcavation: "1993",
        genre: ["Philosophy"],
        link: "https://baike.baidu.com/item/%E9%83%AD%E5%BA%97%E6%A5%9A%E5%A2%93%E7%AB%B9%E7%AE%80/2784428?fromtitle=%E9%83%AD%E5%BA%97%E6%A5%9A%E7%AE%80&fromid=9763013&fromModule=lemma_search-box",
    },
    {
        title: "Wangjiatai",
        chineseTitle: "王家台秦簡",
        timeOrigin: "Warring States Period",
        placeOrigin: "Jiangling, Hubei",
        timeExcavation: "1993",
        genre: ["Law and Administration", "Technical"],
        link: "https://baike.baidu.com/item/%E7%8E%8B%E5%AE%B6%E5%8F%B0%E7%A7%A6%E7%AE%80?fromModule=lemma_search-box",
    },
    {
        title: "Shuihudi",
        chineseTitle: "睡虎地秦簡",
        timeOrigin: "Qin",
        placeOrigin: "Yunmeng, Hubei",
        timeExcavation: "1975",
        genre: ["Annals","Law and Administration","Politics","Technical"],
        link: "https://baike.baidu.com/item/%E7%9D%A1%E8%99%8E%E5%9C%B0%E7%A7%A6%E5%A2%93%E7%AB%B9%E7%AE%80/2059545?fromtitle=%E7%9D%A1%E8%99%8E%E5%9C%B0%E7%A7%A6%E7%AE%80&fromid=9762944&fromModule=lemma_search-box",
    },
    {
        title: "Zhoujiatai",
        chineseTitle: "周家台秦簡",
        timeOrigin: "Qin",
        placeOrigin: "Jingzhou, Hubei",
        timeExcavation: "1993",
        genre: ["Annals","Technical"],
        link:"https://baike.baidu.com/item/%E5%91%A8%E5%AE%B6%E5%8F%B0%E7%A7%A6%E7%AE%80?fromModule=lemma_search-box",
    },
    {
        title: "Peking",
        chineseTitle: "北大秦簡",
        timeOrigin: "Qin",
        placeOrigin: "Looted",
        timeExcavation: "unknown",
        genre: ["Politics","Technical"],
        link: "https://baike.baidu.com/item/%E5%8C%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E8%97%8F%E7%A7%A6%E7%AE%80%E7%89%8D/6265465?fromtitle=%E5%8C%97%E5%A4%A7%E7%A7%A6%E7%AE%80&fromid=11224873&fromModule=lemma_search-box",
    },
    {
        title: "Yuelu",
        chineseTitle: "岳麓秦簡",
        timeOrigin: "Qin",
        placeOrigin: "Looted",
        timeExcavation: "unknown",
        genre: ["Law and Administration","Politics","Technical"],
        link: "https://baike.baidu.com/item/%E5%B2%B3%E9%BA%93%E4%B9%A6%E9%99%A2%E8%97%8F%E7%A7%A6%E7%AE%80/6626684?fromtitle=%E5%B2%B3%E9%BA%93%E7%A7%A6%E7%AE%80&fromid=16199009&fromModule=lemma_search-box",
    },
    {
        title: "Yueshan",
        chineseTitle: "嶽山秦簡	",
        timeOrigin: "Qin",
        placeOrigin: "Jiangling, Hubei",
        timeExcavation: "1986",
        genre: ["Technical"],
        link: "https://image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&ie=utf8&fr=ala&ala=1&alatpl=normal&pos=3&dyTabStr=MCwzLDEsMiwxMyw3LDYsNSwxMiw5&word=%E5%B2%B3%E5%B1%B1%E7%A7%A6%E7%AE%80",
    },
    {
        title: "Kongjiapo",
        chineseTitle: "孔家坡漢簡",
        timeOrigin: "Han",
        placeOrigin: "Suizhou, Hubei",
        timeExcavation: "2000",
        genre: ["Technical","Annals","Funerary"],
        link: "https://www.baidu.com/link?url=Gdai5ttgNuWArBJJvkqeYgtrCJnUABxLYwDb3KmhCT7GnWcmaIPpJOX5BNdUQ2Lh3FO2ON3do0G14YaCNi1QetbBMgnGkUFVXOXet_O3co3hG-BF-_CTIvI_K84cH0ka&wd=&eqid=de2e41a200fe97cb0000000667f5d78a",
    },
    {
        title: "Xuanquan",
        chineseTitle: "懸泉漢簡	",
        timeOrigin: "Han",
        placeOrigin: "Xiaogu,Gansu",
        timeExcavation: "1990",
        genre: ["Law and Administration","Technical"],
        link: "https://baike.baidu.com/item/%E6%82%AC%E6%B3%89%E6%B1%89%E7%AE%80/63229458",
    },
    {
        title: "Juyan",
        chineseTitle: "居延漢簡",
        timeOrigin: "Han",
        placeOrigin: "Dunhuang, Gansu",
        timeExcavation: "1972",
        genre: ["Law and Administration","Letter","Technical"],
        link: "https://baike.baidu.com/item/%E5%B1%85%E5%BB%B6%E6%B1%89%E7%AE%80/4194287",
    },
    {
        title: "Mawangdui",
        chineseTitle: "馬王堆帛書",
        timeOrigin: "Han",
        placeOrigin: "Changsha, Hunan",
        timeExcavation: "1972",
        genre: ["History", "Philosophy", "Technical"],
        link: "https://baike.baidu.com/item/%E9%A9%AC%E7%8E%8B%E5%A0%86%E5%B8%9B%E4%B9%A6?fromModule=lemma_search-box",
    },
    {
        title: "Wuwei",
        chineseTitle: "武威漢簡",
        timeOrigin: "Han",
        placeOrigin: "Wuwei, Gansu",
        timeExcavation: "1957",
        genre: ["Technical", "Ritual"],
        link: "https://baike.baidu.com/item/%E6%AD%A6%E5%A8%81%E6%B1%89%E7%AE%80/8283314",
    },
    {
        title: "Yinwan",
        chineseTitle: "尹灣漢簡",
        timeOrigin: "Han",
        placeOrigin: "Donghai, Jiangsu",
        timeExcavation: "1997",
        genre: ["Law and Administration", "Funerary", "Technical", "Annals"],
        link: "https://baike.baidu.com/item/%E5%B0%B9%E6%B9%BE%E6%B1%89%E7%AE%80?fromModule=lemma_search-box",
    },
    {
        title: "Zhangjiashan",
        chineseTitle: "張家山漢簡",
        timeOrigin: "Han",
        placeOrigin: "Jiangling Hubei",
        timeExcavation: "1983",
        genre: ["Annals", "Law and Administration", "Technical", "Funerary", "Military"],   
        link: "https://baike.baidu.com/item/%E5%BC%A0%E5%AE%B6%E5%B1%B1%E6%B1%89%E7%AE%80?fromModule=lemma_search-box",
    },
];


/// Wrapper Display

let wrapper = document.querySelector(".wrapper");

let displayManuscripts = (data) => {
data.forEach((manuscript) => {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("data-genre", manuscript.genre.join(", "));
    newDiv.setAttribute("data-period", manuscript.timeOrigin);
    
    let borderColor;
        if (manuscript.timeOrigin === "Warring States Period") {
            borderColor = "#d1e0e1";  
        } else if (manuscript.timeOrigin === "Qin") {
            borderColor = "#d1d8e1";  
        } else if (manuscript.timeOrigin === "Han") {
            borderColor = "#e7dbda";  
        }
    newDiv.style.border = `4px solid ${borderColor}`;  
    newDiv.style.borderRadius = "10px";

    newDiv.innerHTML = `<a href="${manuscript.link || '#'}" target="_blank"><h3>${manuscript.title}</h3></a><br>${manuscript.chineseTitle}</br><p style="all: unset; margin-top: 15px">${manuscript.placeOrigin}</p>`;
    newDiv.style.display = "flex";
    newDiv.style.flexDirection = "column";  
    newDiv.style.justifyContent = "center"; 
    newDiv.style.alignItems = "center";    
    newDiv.style.lineHeight = "1";  
    newDiv.style.marigin= "10px";
    newDiv.style.textAlign = "center";  
    newDiv.style.color="#353433";
    wrapper.append(newDiv);
    });
};

displayManuscripts(manuscripts);


/// Filter : Genre
let filters = document.querySelectorAll(".filter");

const genres = ["Annals", "Biography", "Funerary", "History", "Law and Administration", "Letter", "Military", "Philosophy", "Politics", "Ritual", "Technical"];
let genreSelection = document.querySelector("#genre");

genres.forEach((genre) => {
    let option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreSelection.appendChild(option);
});


/// Filter : Periods
const periods = ["Warring States Period", "Qin", "Han"];
let periodSelection = document.querySelector("#period");

periods.forEach((period) => {
    let option = document.createElement("option");
    option.value = period;
    option.textContent = period;
    periodSelection.appendChild(option);
}
);

/// Filter : Event Listener
let changeData = (e) => {
    let selectedGenre = genreSelection.value;
    let selectedPeriod = periodSelection.value;  
    let manuscriptDivs = document.querySelectorAll(".wrapper div");

    manuscriptDivs.forEach((manuscript) => {
        let genreMatch = selectedGenre === "All Genres" || manuscript.getAttribute("data-genre").split(', ').includes(selectedGenre);
        let periodMatch = selectedPeriod === "All Periods" || manuscript.getAttribute("data-period") === selectedPeriod;

        if (genreMatch && periodMatch) {
            manuscript.style.display = "block";
        } else {
            manuscript.style.display = "none";
        }
    });
};

genreSelection.addEventListener("change", changeData);
periodSelection.addEventListener("change", changeData);
