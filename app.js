/* Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus (fatelo):
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

const app = new Vue ({
    el: '#app',
    data: {
        h1_text: 'Welcome VueJS :)',
        image_link: 'https://picsum.photos/',
        likes: 0,
        pic_h: '',
        pic_w: ''
        //final_image: image_link + pic
    },
    methods: {
        liked(){
            this.likes += 1
            console.log(this.likes);
        },
        randomPic(){
            this.image_link = 'https://picsum.photos/'
            this.image_link += this.pic_h + '/' + this.pic_w
            const generatedImage = document.getElementById('generatedImage')
            console.log(generatedImage);
            generatedImage.classList.remove('d_none')
        }
    }
})

