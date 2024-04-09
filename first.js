// calling API
// const URL = `https://api.currencyapi.com/v3/latest?apikey=cur_live_7PytwmuDwClyCbRayfYo9tuZP3D5ZitTyPZG6Xt7`;
const URL = `https://api.exchangerate-api.com/v4/latest/`;

// this function is for getting the response of this API

// all countries and their currency's code
const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };

//   my all varaibles

// this variable is for accessing the user amount's input
let userAmt = document.querySelector("#user-amt");

// this variable is for accessing the select tags of HTML
let options = document.querySelectorAll(".options");

// this variable is for accessing the final msg's peragraph's tag of html
let finalMsg = document.querySelector("#msg");

// this variable is for accessing the get exchange rate button of html
let btn = document.querySelector("#btn");


// this outer loop is for applying functionality on select tags of HTML
for (select of options) {

  // this inner loop is also for applying functionality on select tags of HTML
  for (currencyCode in countryList) {

    // this line is for creating option elements in select tag
    let createNewOption = document.createElement("option");

    // this line is for assigning the currency code in option elements as their inner text
    createNewOption.innerText = currencyCode;

    // this line is for assigning the currency code in option elements as their value
    createNewOption.value = currencyCode;

    // this line is for adding the option element in select tag
    select.append(createNewOption);

    // this condition is for showing US dollars and US flag as bydefault in From section
    if (select.name === "from" && currencyCode === "USD") {
      createNewOption.selected = "selected";
      let img = select.parentElement.querySelector("img");
      let imgNewSrc = `https://flagsapi.com/US/flat/64.png`;
      img.src = imgNewSrc;
    }
    
    // this condition is for showing PKR and PK flag as bydefault in to section
    else if (select.name === "to" && currencyCode === "PKR") {
      createNewOption.selected = "selected";
      let img = select.parentElement.querySelector("img");
      let imgNewSrc = `https://flagsapi.com/PK/flat/64.png`;
      img.src = imgNewSrc;
    }
  }

  // this line is for targeting the select elements when they will be chenge
  select.addEventListener("change" , (evt) => {
    updateFlag(evt.target);
  });
};

// this function is for updating flag for every country when user will select any currency code in selects.
const updateFlag = (element) => {
  let currencyCode = element.value;
  let countryCode = countryList[currencyCode];
  let img = element.parentElement.querySelector("img");
  let imgNewSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  img.src = imgNewSrc;
};

// this function is for updating exchange rate when user will click on get exchange rate button
const updateExchangeRate = async () => {
  let fromCurrency = document.querySelector("#from").value;
  let toCurrency = document.querySelector("#to").value;
  const newURL = `${URL}${fromCurrency}`;
  let response = await fetch(newURL);
  let finalData = await response.json();
  let rateOfCurrencies = finalData.rates;
  for (const rateOfCurrency in rateOfCurrencies) {
    if (rateOfCurrency === toCurrency) {
      let exchangeRate = userAmt.value * rateOfCurrencies[rateOfCurrency];
      finalMsg.innerText = `${userAmt.value} ${fromCurrency} = ${exchangeRate} ${toCurrency}`;
    }
  }
};

// this event listener is for removing all bydefault methods on get exchange rate button and applying update exchange rate function on that button on click
btn.addEventListener("click" , (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

// this event listener is for applying update exchange rate function on window when it will be load 
Window.addEventListener("load" , updateExchangeRate());