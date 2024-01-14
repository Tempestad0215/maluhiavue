import { defineStore } from "pinia";
import { ref } from "vue";



export const useDataStore = defineStore('isAuth',()=>{
    const token = ref('');
    const userName = ref('')

    function getData(){
        // Tomar los datos
        token.value = <string>localStorage.getItem('token');
        userName.value = <string>localStorage.getItem('user_name');
    }

    return {token, userName, getData}

});