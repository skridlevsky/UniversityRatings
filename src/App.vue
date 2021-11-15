<template>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <body class="flex flex-col min-h-screen">
    <header><Navigation/></header>
    <main class="flex-grow">
    <router-view/>
    </main>
    <Footer/>
  </body>
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
