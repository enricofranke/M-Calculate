import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.ratesapi.io/api",
  withCredentials: false
});

const CurrencyService = {
  getCurrencies(firstCurrency, secondCurrency) {
    return apiClient.get("latest?base=" +firstCurrency + "&symbols=" + secondCurrency);
    //TODO wie kann man USD bZW GPB hier benutzten die USD und GPB währen in 2 variablen im VUEX storrage benutzt
    //daher muss diese von dort nach hier gelangen
  }
};


export default CurrencyService;
