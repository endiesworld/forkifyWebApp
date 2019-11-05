// Global app controller
//1532efdf1e45f0102e639656ee0ca9e6
//https://www.food2fork.com/api/search
import axios from 'axios';
async function getResults(params){
    const key = '1532efdf1e45f0102e639656ee0ca9e6' ;
    const result = await  axios(`https://www.food2fork.com/api/search?key=${key}&q=${params}`) ;
    console.log(result);
}
getResults() ;