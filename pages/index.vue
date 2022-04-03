<template>
  <v-layout align-center justify-center fill-height>
    <v-col cols="12" sm="10" md="6" lg="4">
      <v-form @submit.prevent="submitForm">
        <v-textarea
          outlined
          no-resize
          color="light"
          label="Text"
          transition="scale-transition"
          v-model="namesList"
          :height="(needResult && !namesListFocused) ? '10vh' : '100%'"
          :class="{ 'mt-8': $vuetify.breakpoint.smAndDown }"
          @focus="namesListFocused = true"
          @focusout="namesListFocused = false"
        />

        <v-expand-transition>
          <v-textarea
            outlined
            no-resize
            color="light"
            label="Result"
            v-show="needResult"
            :disabled="!resultSearhing.length"
            background-color="blue-grey darken-4"
            append-outer-icon="mdi-content-copy"
            @click:append-outer="copingText"
            v-model="resultText"
          />
        </v-expand-transition>

        <v-text-field
          outlined
          color="light"
          label="Regex"
          v-model="regexText"
          hint="(some_text)|[0-9]|(okay\s)"
        />

        <div class="text-right">
          <v-btn
            outlined
            width="44%"
            type="submit"
            color="primary lighten-3"
          >To Find</v-btn>
        </div>
      </v-form>

    </v-col>
    <v-snackbar
      elevation="24"
      min-height="30px"
      content-class="pa-0"
      color="rgb(44 44 44 / 20%)"
      v-model="prompt"
      :top="$vuetify.breakpoint.smAndDown"
    >
      <div class="text-center"
      >{{ promptMessage }}</div>
    </v-snackbar>

  </v-layout>
</template>

<script>
export default {
  data: () => ({
    prompt: false,
    needResult: false,
    namesListFocused: false,

    promptMessage: '',
    resultSearhing: '',
    namesList: '',
    regexText: '',
    resultText: '',
  }),

  methods: {
    submitForm () {
      const matchEx = new RegExp(this.regexText, 'gi')

      this.resultSearhing =
      this.namesList?.trim()?.split('\n')
      ?.reduce((stack, line) => {
        const splittedLine = line.split(/(?=\s[0-9]{1,4}\.\s)/)
        return [...stack, ...splittedLine]
      }, [])
      .filter(nameline => !!nameline.match(matchEx))
      .map(item => item.trim())
      .join('\n')

      this.needResult = true
      this.resultText = this.resultSearhing?.length ? this.resultSearhing : 'Nothing found'
      localStorage.setItem('savedRegexText', this.regexText)
    },

    copingText () {
      this.$copyText(this.resultText)
      this.promptMessage = 'text copied'
      this.prompt = true
    },
  },

  mounted () {
    this.regexText = localStorage.getItem('savedRegexText')
  },

  head: {
    title: 'Search via Regex'
  },
}
</script>
