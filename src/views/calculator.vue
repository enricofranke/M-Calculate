<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-text-field outlined rounded solo :placeholder="firstCurrency"></v-text-field>
      </v-col>
      <v-col class="d-flex" cols="12" sm="6">
        <v-select v-model="firstCurrency" @change="fetchDataCurrency" :items="items"  label="Outlined style" outlined></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-text-field outlined rounded solo :placeholder="secondCurrency"></v-text-field>
      </v-col>
      <v-col class="d-flex" cols="12" sm="6">
        <v-select v-model="secondCurrency" @change="fetchDataCurrency" :items="items" label="Outlined style" outlined></v-select>
      </v-col>
    </v-row>
     <v-btn small @click="fetchDataCurrency">Normal</v-btn>
     <p>{{datae }}</p>
  </div>
</template>

<script>
import CurrencyService from "../services/currencyService";
export default {
  props:{
   datae:[]
  },
  name: "Calculator",
  data() {
    return {
      firstCurrency: "EUR",
      secondCurrency: "USD",
      items:["CAD", "HKD", "ISK", "PHP"]
    }
  },
  methods: {
    fetchDataCurrency() {
      CurrencyService.getCurrencies(
        this.firstCurrency,
        this.secondCurrency
      ).then(Response => {
        this.datae = Response.data.rates;
      });
    }
  }
};
</script>

<style>
</style>