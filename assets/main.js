$(document).ready(function() {

  let app = new Vue({
    el:".cds-container",
    data: {
      documents: []
    },

    mounted(){
      for (let i = 0; i < 10; i++){
        axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then(response => {
          this.documents = response.data.response;
          console.log(response);
        })
      }

    }



  });






});
