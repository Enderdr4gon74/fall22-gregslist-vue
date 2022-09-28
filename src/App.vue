<template>
  <main class="container-fluid">
    <div class="row">
      <div class="col-md-2 d-none d-md-block bg-dark text-light sidebar p-3 ps-4">
        <Login />

        <div class="d-flex flex-column align-items-start border-start mt-4 ps-2">
          <button class="btn my-2" data-bs-target="#classifiedsCanvas" data-bs-toggle="offcanvas" v-if="account.id">
            <span class="text-success lighten-30 selectable text-uppercase">
              Add a Listing
            </span>
          </button>
        </div>
        <div class="d-flex flex-column align-items-start border-start mt-4 ps-2">
          <button class="btn mb-4" @click="filterCars">
            <span class="text-success lighten-30 selectable text-uppercase">
              Cars
            </span>
          </button>
  
          <button class="btn mb-4" @click="filterJobs">
            <span class="text-success lighten-30 selectable text-uppercase">
              Jobs
            </span>
          </button>
  
          <button class="btn mb-4" @click="filterHouses">
            <span class="text-success lighten-30 selectable text-uppercase">
              Houses
            </span>
          </button>
  
          <button class="btn" @click="showAll">
            <span class="text-success lighten-30 selectable text-uppercase">
              All
            </span>
          </button>
        </div>

      </div>
      <div class="col-md-10 main-content">
        <router-view />
      </div>
    </div>
  </main>


  <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
    id="classifiedsCanvas" aria-labelledby="classifiedsCanvasLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="classifiedsCanvasLabel">Add your Listing</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ClassifiedForm />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import ClassifiedForm from './components/ClassifiedForm.vue'
import Login from './components/Login.vue'
import Navbar from './components/Navbar.vue'
import { classifiedsService } from './services/ClassifiedsService.js'

export default {
  setup() {
    return {
      appState: computed(() => AppState),
      account: computed(() => AppState.account),
      async filterCars() {
        const res = await classifiedsService.getClassifieds()
        console.log(res.filter(c => c.listingType == 'Car'))
      }, async filterJobs() {
        const res = await classifiedsService.getClassifieds()
        console.log(res.filter(c => c.listingType == 'Job'))
      }, async filterHouses() {
        const res = await classifiedsService.getClassifieds()
        console.log(res.filter(c => c.listingType == 'House'))
      }, async showAll() {
        await classifiedsService.getClassifieds()
      }
    }
  },
  components: { Navbar, Login, ClassifiedForm }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.sidebar {
  height: 100vh;
}

.main-content {
  height: 100vh;
  overflow-y: auto;
}
</style>
