<template>
  <!-- POST   -->
  <zi-fieldset class="mt-8">
    <zi-grid
      container
      align-items="center"
      :spacing="3"
      justify="center"
      class="py-2"
    >
      <zi-grid :xs="24" :sm="4">
        <p class="text-accent5 font-medium">
          <zi-tag>RECORD ID</zi-tag>
        </p></zi-grid
      >
      <zi-grid :xs="24" :sm="20">
        <zi-textarea
          placeholder="Record ID"
          :rows="1"
          v-model="requestParams.recordId"
        ></zi-textarea
      ></zi-grid>
    </zi-grid>

    <zi-grid
      container
      align-items="center"
      :spacing="3"
      justify="center"
      class="py-2"
    >
      <zi-grid :xs="24">
        <p class="text-accent5 font-medium">
          <zi-tag>PAYLOAD</zi-tag>
        </p></zi-grid
      >
      <zi-grid :xs="24">
        <div class="border border-accent2 rounded-sm">
          <codemirror :options="options" v-model="payload" />
        </div>
      </zi-grid>
    </zi-grid>

    <!-- Footer -->
    <template #footer>
      <p>
        Learn more about
        <zi-link bold href="//docs.krat.es/api/update" more color
          >Updating records</zi-link
        >
      </p>
      <zi-button
        :disabled="!requestParams.recordId"
        type="success"
        @click="sendRequest"
        auto
        :loading="loading"
        >Send
      </zi-button>
    </template></zi-fieldset
  >
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    id: String,
  },
  data() {
    return {
      loading: false,
      payload: '',
      requestParams: {
        recordId: '',
      },
      krateDetails: {
        krateId: '',
        createdAt: '',
        apiKey: '',
        krateName: '',
      },
    }
  },
  computed: {
    options() {
      let isDark = this.$store.getters['theme/getTheme']
      let options = {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        mode: 'application/ld+json',
        matchBrackets: true,
        autoCloseBrackets: true,
        lineWrapping: true,
        theme: 'default',
      }
      if (isDark) {
        options.theme = 'isotope'
        return options
      } else {
        return options
      }
    },
  },

  created() {
    // to reset response payload on every krate change
    this.$store.commit('request/setResponsePayload', undefined)
  },

  methods: {
    buildRequestUrl() {
      this.krateDetails = this.$store.getters['krates/getSelectedKrate']
      return this.krateDetails.krateId + '/' + this.requestParams.recordId
    },

    async sendRequest() {
      try {
        this.loading = true
        await this.$store.dispatch('request/putKrateData', {
          requestUrl: this.buildRequestUrl(),
          payload: JSON.parse(this.payload),
          headers: this.krateDetails.apiKey
            ? { 'x-api-key': this.krateDetails.apiKey }
            : '',
        })
        this.loading = false
      } catch (error: any) {
        ;(this as any).$Toast.show({
          type: 'danger',
          text: error?.response?.data?.message || error,
          duration: 5000,
        })
        this.loading = false
      }
    },
  },
})
</script>
