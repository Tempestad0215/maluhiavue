<script setup lang='ts'>
import MsjError from '@/components/Msj-Error.vue';
import { axiosInstance} from '@/global/axiosIns';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();
// Datos del formularios
const form = reactive({
    email: '',
    password:''
});
// Error de todo
const errors = reactive({
    email: [],
    password: []
});
// Toggle para password
const isPasswod = ref(false);

// Funciones
const submit = async()=>{
    // HAcer la peticion al backend
    axiosInstance.post('/user/login',{
        email: form.email.toLocaleLowerCase(),
        password: form.password

    }).then(({data})=>{
        // Crear las cookie
        localStorage.setItem('token',JSON.stringify(data.data.token));
        // Nombre de usuario
        localStorage.setItem('user_name', JSON.stringify(data.data.user_name));
        // Redirigir a la pagina de inicio
        router.push({name: 'Start'});

    }).catch(({response})=>{
        // Poner los errores de cada
        if(response !== undefined)
        {
            errors.email = response.data.errors.email ?? [];
            errors.password = response.data.errors.password ?? [];
        }
    });
}
// Limpiar los errores
const clearError = ()=>{
    errors.email = [];
    errors.password = [];
}

</script>

<template>
    <div>
        <form
            @submit.prevent="submit"
            class="px-3 mt-10"
            action="">
            <!-- Logo de la empresa -->
            <div>
                <img
                    class="mx-auto"
                    width="200"
                    src="/src/assets/logo.svg"
                    alt="logo de la empresa">

            </div>
            <!-- Titulo de la app -->
            <h3 class="text-3xl font-bold text-center">Login</h3>
            <!-- Email -->
            <div>
                <label
                    class=" label"
                    for="email">Correo</label>
                <input
                    required
                    class=" input w-full"
                    type="email"
                    v-model="form.email"
                    @focus="clearError()"
                    placeholder="ejemplo@ejemplo.com">
                <!-- Mensajde de error -->
                <MsjError :data="errors.email" />
            </div>
            <!-- Password -->
            <div class="mt-3 ">
                <label
                    class="label"
                    for="password">Contraseña</label>
                <div class="relative">
                    <input
                        required
                        v-model="form.password"
                        @focus="clearError()"
                        class="input w-full pr-7"
                        :type="isPasswod ? 'text': 'password'">
                    <!-- Para mostrar los mensaje -->
                    <i
                        @click="isPasswod = !isPasswod "
                        :class="[
                            isPasswod ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye',
                            'absolute inset-y-0 right-2 flex items-center'
                            ]">
                    </i>
                </div>
                <!-- Mensaje de rror -->
                <MsjError :data="errors.password"/>

            </div>

            <!-- Boton para Iniciar -->
            <div class="mt-3 text-right">
                <button
                    class="bg-orange-400 px-3 rounded-md"
                    type="submit">
                    Iniciar
                </button>
            </div>
        </form>
    </div>
</template>

