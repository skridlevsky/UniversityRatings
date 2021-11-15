<template>
<section class="relative pt-36 pb-36 bg-gray-50">
  <img class="hidden lg:block absolute top-0 left-0 mt-16" src="zeus-assets/icons/dots/blue-dot-left-bars.svg" alt="">
  <img class="hidden lg:block absolute bottom-0 right-0 mb-20" src="zeus-assets/icons/dots/yellow-dot-right-shield.svg" alt="">
  
  <div class="container px-4 mx-auto">

    <div class="max-w-sm mx-auto rounded-lg text-center">
      <h3 class="mb-12 text-3xl font-semibold font-heading">Izveidot kontu</h3>

       <div v-if="error" class="alert alert-danger">{{error}}</div>

      <form action="#" @submit.prevent="submit">
          <div class="relative flex flex-wrap mb-6">
            <input class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border-2 rounded" type="text" value required autofocus v-model="form.name" placeholder="Tavs vārds (redzams visiem)">
            <span class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-600 text-sm">Vārds</span>
          </div>
        
        <div class="relative flex flex-wrap mb-6">
          <input class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border-2 rounded" type="email" required v-model="form.email" placeholder="janis.berzins@gmail.com">
          <span class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-600 text-sm">Epasta adrese</span>
        </div>

        <div class="relative flex flex-wrap mb-6">
          <input class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border-2 rounded" type="password" required v-model="form.password" placeholder="********">
          <span class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-600 text-sm">Parole</span>
        </div>

        <label class="inline-flex mb-10 text-left">
          <input class="mr-2" type="checkbox" name="terms" value="1">
          <span class="-mt-1 inline-block text-sm text-gray-600">Piekrītu sistēmas <a class="hover:underline text-indigo-600" href="#">noteikumiem, privātuma politikai</a> un <a class="hover:underline text-indigo-600" href="#">sīkdatnēm</a>.</span>
        </label>

        <button type="submit" class="w-full inline-block py-4 mb-4 text-sm text-white font-medium leading-normal rounded transition duration-200 bg-indigo-600 hover:bg-indigo-700">Reģistrēties</button>
      </form>

      <p class="text-sm text-gray-500">
        <span>Esi jau reģistrējies? </span>
        <a class="font-semibold hover:underline text-indigo-600" href="#">Autorizēties</a>
      </p>

    </div>
  </div>

</section>
</template>

<script>
import { LockClosedIcon } from '@heroicons/vue/solid'
import firebase from "firebase";

export default {
  components: {
    LockClosedIcon
  },
    data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {});
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
}
</script>