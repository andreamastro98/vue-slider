const { createApp } = Vue

  createApp({
    data() {
      return {
        //variabili vue 3
        currentActive: 0, //settiamo currentActive di default a 0
        autoscroll: null, ////settiamo autoscroll di default a 0

        slides:[
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new  hero masters incredible, explosive new powers to become  his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as   they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games    Fortnite, a massive 100 - player face - off that combines  looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle   an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person,     action-adventure game that combines an original,    cinematic story with single-player and co-operative    gameplay.',
                }
        ]
      }
    },
    created(){
        //impostiamo lo scroll automatico delle thumb  all'apertura della page
        this.autoScroll()
    },
    methods: {
        //funzioni vue 3
        prev(){
            //alla pressione del prev facciamo -1 al currentActive
            this.currentActive--
            //se currentActive diventa <0 quest'ultimo diventa il numero index dell'ultimo oggetto dell'array
            if( this.currentActive < 0){
                this.currentActive = this.slides.length - 1
            }
        },
        
        next(){
            //alla pressione del next facciamo +1 al currentActive
            this.currentActive++
            //se currentActive diventa > dell'ultimo oggetto dell'array quest'ultimo diventa 0 
            if( this.currentActive > this.slides.length -1){
                this.currentActive = 0            
            }
        },

        changeImg(i){
            //alla pressione della singola thumb il currentActive diventa l'index dell'immagine cliccata
            this.currentActive = i
        },

        autoScroll(){
            //settiamo l'autoscroll delle thumb a 3 secondi
            this.autoscroll = setInterval(() => {
                this.next()
            }, 3000);
        },

        stopScroll(){
            //stoppiamo l'autoscroll automatico
            clearInterval( this.autoscroll )
            this.autoscroll = null
        }        
    }
  }).mount('#app')
