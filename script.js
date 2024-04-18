//1a.
const mulan = {
    title: 'Mulan',
    main: 'Fa Mulan',
    quote (){
        return 'Dishonor! Dishonor on your whole family!!'
    },
    storyline (){
        return 'The movie ${this.title} is about {this.main}'
    }
}
//1b. 
//look at 1a 
console.log(mulan.quote);

//1c. 
// also kinda in 1a
console.log(mulan.storyline);

//2a. 
const tangled = {
    title: 'Tangled',
    main: 'Rapunzel',
    quote(){
 return 'I CANT BELIEVE I DID THIS! I CANNOT BELIEVE I DID THIS!!!'
    },
    storyline(){
        'The movie ${this.title} is about ${this.main}'
    }
}
//2b.
// in 2a

//2c. 
//in 2a

//3a. 
function disneymovie(t, m){
    this.title = t,
    this.main = m 
}

//3b. 
disneymovie.prototype.storyline = function () {
return 'The movie ${this.title} is about ${this.main}'
}

//3c. 
const mulan1 = new disneymovie('Mulan')

//3c. 

const tangled1= new disneymovie('Tangled')

//4a. 
