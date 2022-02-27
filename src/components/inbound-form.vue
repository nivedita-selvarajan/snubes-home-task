<template>
  <v-card class="pa-5 pa-sm-7 mx-auto text-sm-center rounded-lg" max-width="550" :elevation="$vuetify.breakpoint.mdAndUp ? 2 : 0">
    <h2 class="mb-3">Find inbound call centers for your company</h2>
    <p v-if="$vuetify.breakpoint.smAndUp">Use our AI and Big Data driven call center sourcing solution</p>
    <v-form
      ref="form"
      v-model="valid"
      @submit.prevent="validate">
      <v-container>
        <v-row class="d-block d-sm-flex">
          <v-col xs="12" sm="2" class="d-flex justify-sm-end align-center pa-2 ml-sm-4">Company</v-col>
          <v-col xs="12" sm="8" class="pa-2">
            <v-text-field
              :rules="companyNameRules"
              v-model="companyName"
              placeholder="Company"
              outlined
              hide-details
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="d-block d-sm-flex">
          <v-col xs="12" sm="2" class="d-flex justify-sm-end align-center pa-2 ml-sm-4">Name</v-col>
          <v-col xs="12" sm="8" class="pa-2">
            <v-text-field
              :rules="nameRules"
              v-model="name"
              placeholder="Full name"
              outlined
              hide-details
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="d-block d-sm-flex">
          <v-col xs="12" sm="2" class="d-flex justify-sm-end align-center pa-2 ml-sm-4">Phone</v-col>
          <v-col xs="12" sm="8" class="pa-2 d-flex">
            <vue-country-code @onSelect="onSelect" enabledFlags :preferredCountries="['DE']"></vue-country-code>
            <v-text-field
              ref="phoneRef"
              v-model="phoneNumber"
              :rules="phoneNumberRules"
              placeholder="+49"
              outlined
              hide-details
              class="pl-2"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="d-block d-sm-flex">
          <v-col xs="12" sm="2" class="d-flex justify-sm-end align-center pa-2 ml-sm-4">E-mail</v-col>
          <v-col xs="12" sm="8" class="pa-2">
            <v-text-field
              :rules="emailRules"
              v-model="email"
              placeholder="name@mail.com"
              outlined
              hide-details
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center">
            <v-btn
              type="submit"
              color="info"
              class="px-12 ml-6"
            >
              Get informed
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'InboundForm',
  data() {
    return {
      valid: true,
      companyName: '',
      name: '',
      phoneNumber: '',
      countryCode: '',
      email: '',
      companyNameRules: [
        v => !!v || false,
        v => (v && v.length <= 80) || false,
        v => /^([^0-9]*)$/.test(v) || false
      ],
      nameRules: [
        v => !!v || false,
        v => (v && v.length <= 50) || false
      ],
      emailRules: [
        v => !!v || false,
        v => /.+@.+\..+/.test(v) || false
      ],
      phoneNumberRules: [
        v => !!v || false,
        v => (v && v.length > this.countryCode.length) || false,
        v => /^([+][0-9]*)$/.test(v) || false
      ]
    };
  },
  methods: {
    validate () {
      this.$refs.form.validate()
      if (this.valid) {
        let infoObj = {
          name: this.name,
          companyName: this.companyName,
          phoneNumber: this.phoneNumber,
          email: this.email
        }
        this.$store.dispatch('setInformation', infoObj)
        this.$router.push({ name: 'success' })
      }
    },
    onSelect (obj) {
      this.phoneNumber = '+' + obj.dialCode
      this.countryCode = '+' + obj.dialCode
      this.$refs.phoneRef.resetValidation()
    }
  }
}
</script>
<style>
.theme--light.v-text-field>.v-input__control>.v-input__slot {
  min-height: 48px;
}
</style>
