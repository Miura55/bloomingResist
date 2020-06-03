<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <h3><v-btn class="btn btn-success" @click="loginAction">LINEログイン</v-btn></h3>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  created () {
    this.initializeLiff()
  },
  methods: {
    initializeLiff: function () {
      var me = this
      liff.init(
        {
          liffId: "1653851902-k6abNz2a"
        },
        data => {
          if (liff.isLoggedIn()) {
            // ログイン済み
            me.$router.push({ name: 'Form' })
          }
        },
        err => {
          console.log('LIFF initialization failed', err)
        }
      )
    },
    loginAction: function () {
      // ログインまだ
      if (!liff.isLoggedIn()) {
        liff.login()
      }
    },
  }
}
</script>