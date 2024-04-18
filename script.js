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
class DM {
    constructor(t, m){
        this.title = t;
        this.main =m;
    }
    static loveDisneyMovies (){
    return 'I love Disney Movies!!!!'
}
}
//4b.
DM.prototype.storyline = function() {
return 'The movie ${this.title} is about ${this.main}'
}

//4c. 
const mulan2 = new DM('Mulan','Fa Mulan')

//4d. 
const tangled2 = new DM('Tangled', 'Rapunzel')

//4e. 
//in 4a. 

//4f. 
console.log(DM.loveDisneyMovies());

//5a. 
class DMcast extends DM {
    constructor(t, m, c){
        super(t,m),
        this.cast = c

    }
}

//5b.
//in 5a

//5c. 
//in 5a 

//5d.
const mulan3 = new DMcast('Mulan','Fa Mulan',{mulan: 'Wing Na Wen', mushu: 'Eddie Murphy', shang: 'BD Wong', theemperor: 'Pat Morita'})

//5e. 
const rapunzel3 = new DMcast('Tangled','Rapunzel',{rapunzel: 'Mandy Moore',flynnryder:'Zachary levi',mothergotel:'Donna Murphy'})
