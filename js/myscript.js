let app = new Vue ({
    el : '#miapp',
    data : {
        corrente: 0,
        scorri: null,
        elementi : [
            {
                image : 'img/01.jpg',
                titolo: 'Svezia',
                testo : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image : 'img/02.jpg',
                titolo: 'Svizzera',
                testo : 'Lorem ipsum',
            },
            {
                image : 'img/03.jpg',
                titolo: 'Gran Bretagna',
                testo : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image : 'img/04.jpg',
                titolo: 'Germania',
                testo : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                image : 'img/05.jpg',
                titolo: 'Paradise',
                testo : 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            }
        ]
    } ,
    
    methods: {
        isCorrente: function(indexImmagini){
            if(indexImmagini == this.corrente){
                return "active";
            }
            return "";
        },
        next: function(){
            this.corrente++;
            if(this.corrente == this.elementi.length){
                this.corrente = 0;
            }
        },
        prev: function(){
            this.corrente --;
            if (this.corrente < 0){
                this.corrente = this.elementi.length -1;
            }
        },
        imageSelect:function(posizione){
            this.corrente=posizione;
        },
        autoplay: function(){
            this.scorri=setInterval(this.next,3000);
        },
        stoplay: function(){
            clearInterval(this.scorri);
            this.scorri=null;
        }
    }
});

//Bonus 3
// mouseOn: function(){
//     this.timer = setInterval(function() {
//     start.next();
//     }, 3000);
// },
// mouseOff: function(){
//     clearInterval(this.timer);
// }


// const items = [
//     'img/01.jpg',
//     'img/02.jpg',
//     'img/03.jpg',
//     'img/04.jpg',
//     'img/05.jpg'
// ];

// const title = [
//     'Svezia',
//     'Svizzera',
//     'Gran Bretagna',
//     'Germania',
//     'Paradise'
// ]

// const text = [
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//     'Lorem ipsum',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
//     'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
// ]

// let elementActive=0;
// let immaginiGrandi = '';

// for(let i=0; i < items.length; i++){
//     immaginiGrandi += `
//     <div class="grande item" id="item-${i}">
//         <img src= "${items[i]}">
//         <div class="text">
//             <h1>${title[i]}</h1>
//             <h2 >${text[i]}</h2>
//         </div>
//     </div>
//     `
// }

// let contenitore = document.querySelector ('.immagine-grande');
// contenitore.innerHTML= immaginiGrandi;




// let immagini = '';
// for(let i=0; i < items.length; i++){
//     immagini += 
//     `<div class="piccola" >
//         <img class="pic" id="item-${i}" src= "${items[i]}">
//     </div>
//     `
// }
// immagini += `
//     <div class="up"><i class="fas fa-chevron-up"></i></div>
//     <div class="down"><i class="fas fa-chevron-down"></i></div>
// `
// let sideImg = document.querySelector ('.immagine-piccola');
// sideImg.innerHTML= immagini;


// let itemActive = document.getElementById('item-'+elementActive);
// itemActive.classList.add('active');



// const up = document.querySelector('.up')
// const down = document.querySelector('.down')

// up.addEventListener('click',function(){
//     if(elementActive !=0){
//         elementActive--;
//         itemActive.classList.remove('active');
//         itemActive=document.getElementById('item-'+elementActive);
//         itemActive.classList.add('active');
//     }
// });

     
// down.addEventListener('click',function(){
//     if(elementActive<items.length-1){
//         elementActive++;
//         itemActive.classList.remove('active');
//         itemActive= document.getElementById('item-'+elementActive);
//         itemActive.classList.add('active');
// }
// });
