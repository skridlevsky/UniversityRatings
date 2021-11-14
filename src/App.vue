<template>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <div id="app">
    <Navigation/>
      <router-view/>
    <Footer/>
  </div>
</template>

<script>

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default {
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>
