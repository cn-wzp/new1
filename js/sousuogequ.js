const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');
const apiURL = "https://api.lyrics.ovh";

function tianjiajiedian(data) {
    result.innerHTML = `<ul class="songs">
    ${ data.data
        .map(song=>`<li>
    <span><strong>${song.artist.name}</strong>-${song.title}</span>
    <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
    </li>`).join('')}
    </ul>`;
    if(data.prev || data.next){
        more.innerHTML=`
        ${ data.prev ? `<button class="btn" onclick="huoqugequ('${data.prev}')">Prev</button>` : ''}
        ${ data.next ? `<button class="btn" onclick="huoqugequ('${data.next}')">Next</button>` : ''}
        `;
    }else{
        more.innerHTML=" ";
    }
}

async function huoqugequ(url){
    const res=await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
    const data=await res.json();
    tianjiajiedian(data);
}
async function sousuogequ(a){
    const res=await fetch(`${apiURL}/suggest/${a}`);
    const data=await res.json();
    tianjiajiedian(data);
}
async function huoquxinxi(artist,songTitle){
    const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
    const data = await res.json();
    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
    result.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle}</h2>
    <span>${lyrics}</span>`;
    more.innerHTML = '';
}
result.addEventListener('click',e=>{
    const click1= e.target;
    if(click1.tagName==="BUTTON"){
        const artist=click1.getAttribute('data-artist');
        const songTitle=click1.getAttribute('data-songtitle');
        huoquxinxi(artist,songTitle);
    }
});
form.addEventListener('submit',e=>{
    e.preventDefault();
    const sousuo=search.value.trim();
    if(!sousuo){
        alert(`请重新搜索关键词`);
    }else{
        sousuogequ(sousuo);
    }
});