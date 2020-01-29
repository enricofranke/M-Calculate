<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-text-field outlined rounded solo :placeholder="firstCurrency"></v-text-field>
      </v-col>
      <v-col class="d-flex" cols="12" sm="6">
        <v-select v-model="firstCurrency" :items="items" label="Outlined style" outlined></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-text-field outlined rounded solo :placeholder="secondCurrency"></v-text-field>
      </v-col>
      <v-col class="d-flex" cols="12" sm="6">
        <v-select v-model="secondCurrency" :items label="Outlined style" outlined></v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CurrencyService from "../services/currencyService";
export default {
  name: "Calculator",
  data() {
    return {
      firstCurrency: "EUR",
      secondCurrency: "USD",
      stuff: [
        {
          id: 1,
          description: "Euro",
          shortCut: "EUR"
        },
        {
          id: 2,
          description: null,
          shortCut: "GBP "
        },
        {
          id: 3,
          description: null,
          shortCut: "HKD"
        }
      ]
    };
  },
  methods: {
    fetchData() {
      CurrencyService.getCurrencies(
        this.firstCurrency,
        this.secondCurrency
      ).then(Response => {
        this.data = Response.data;
      });
    }
  }
};
</script>

<style>
</style>