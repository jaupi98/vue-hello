
const  { createApp } = Vue; 
// utilizzare la funzione create app
createApp({
    // definire il data con il suo oggetto
    data(){
        return{
            // al interno del return definire le variabili di cui abbaimo bisogno
            message:'Hello veujs'
        }
    }
 }).mount('#app'); //collegare con l'elemento