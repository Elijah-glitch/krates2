<template>
  <section class="relative">
    <div class="max-w-5xl mx-auto px-4 mt-10">
      <div class="pb-12 md:pb-20">
        <div class="text-center">
          <h1
            class="
              text-5xl
              md:text-8xl
              font-extrabold
              leading-tighter
              tracking-tighter
              mb-4
              dark:text-white
            "
            data-aos="zoom-y-out"
          >
            The JSON
          </h1>
          <h1
            class="
              text-5xl
              md:text-8xl
              font-extrabold
              leading-tighter
              tracking-tighter
              mb-2
              md:mb-4
              bg-clip-text
              text-transparent
              bg-gradient-to-r
              from-green-400
              to-blue-500
            "
          >
            “ Database ”
          </h1>
          <h1
            class="
              text-5xl
              md:text-8xl
              font-extrabold
              leading-tighter
              tracking-tighter
              mb-4
              dark:text-white
              leading-tight
            "
          >
            for your projects
          </h1>
          <div class="max-w-3xl mx-auto my-14">
            <p class="text-lg sm:text-xl text-gray-500 mb-8">
              Krates is an HTTP-based JSON database service to help you
              get started with your projects easily and for free!
            </p>

            <div class="mt-16 sm:mt-20 flex flex-wrap justify-center">
              <NuxtLink to="/dashboard" class="p-2">
                <zi-button type="primary">Get Started</zi-button></NuxtLink
              >
              <a href="https://docs.krat.es" target="_blank" class="p-2">
                <zi-button type="normal">Read the docs</zi-button></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style scoped>
.zi-btn {
  height: 56px !important;
  font-size: 16px !important;
}
</style>
