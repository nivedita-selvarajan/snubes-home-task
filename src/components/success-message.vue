<template>
  <v-card class="px-sm-12 py-5 mx-auto" max-width="550" :elevation="$vuetify.breakpoint.mdAndUp ? 2 : 0">
    <h2 pt-5 class="text-center px-12 py-4">Thank you for your request!</h2>
    <p class="text-center mx-5 py-2">You’ve taken the first step. Our experts will get in touch with you soon.</p>
		<v-divider class="mx-5 mb-4"></v-divider>
		<v-container class="mx-4">
			<v-row
				v-for="(item, index) in information"
				:key="index"
				class="justify-center d-block d-sm-flex">
				<v-col xs="12" sm="3" class="pb-0">{{ item.label }}</v-col>
				<v-col xs="12" sm="6" class="font-weight-bold pt-0 pt-sm-3">{{ item.value }}</v-col>
			</v-row>
		</v-container>
  </v-card>
</template>

<script>
export default {
  name: 'SuccessMessage',
	computed: {
		information () {
			let info = this.$store.getters.getInformation
			let infoArray = [
				{
					label: 'Company',
					value: info.companyName
				},
				{
					label: 'Name',
					value: info.name
				},
				{
					label: 'Phone',
					value: info.phoneNumber
				},
				{
					label: 'E-mail',
					value: info.email
				}
			]
			return infoArray
		}
	}
}
</script>
