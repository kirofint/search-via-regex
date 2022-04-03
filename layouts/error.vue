<template>
  <v-app dark>
    <v-layout align-center justify-center fill-height>
      <div>
        <v-col class="text-center">
          <h1 v-if="error.statusCode === 404">
            {{ pageNotFound }}
          </h1>
          <h1 v-else>
            {{ otherError }}
          </h1>
        </v-col>

        <v-col>
          <v-btn
            large
            href="/"
            color="blue-grey darken-3"
          >
            Go Home
            <v-icon right size="24">mdi-home</v-icon>
          </v-btn>
        </v-col>
      </div>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'Some error'
    }
  },
  head () {
    return {
      title: this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
