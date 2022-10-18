const league =document.querySelectorAll('#leagueSelection')
const leagueName = document.querySelectorAll('.leagueName');
const select= document.getElementById('selection')
const fixture = document.getElementById('fixture')

let result={};
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3d5c3ec1cfmsh0755d05bf41270cp1c3d7cjsnbac58ba95d5c',
        'X-RapidAPI-Host': 'football98.p.rapidapi.com'
    }
};
Array.from(league).forEach((data,i) => {
    data.onclick=()=>{
      
        fixture.innerHTML=""
              select.innerText=leagueName[i].innerHTML;
              let leagueNm= leagueName[i].innerHTML
             
              fetch(`https://football98.p.rapidapi.com/${leagueNm}/fixtures` ,options)
              .then(response => response.json())
              .then(response => {
          
               result =response[0][' Matchday 2 ']
               for(let i=0 ; i< result.length ; i++){
                

                fixture.innerHTML +=` <span> <img src='${result[i]['homeLogo']}'/> ${result[i]['homeTeam']}  (${result[i]['MatchDay']}) ${result[i]['awayTeam']} <img src='${result[i]['awayLogo']}'/> </span><br>`

               }
                
              })
              .catch(err => console.error(err));
    }
})



