<script>
import axios from "axios";

import { authUserMethods, notificationMethods } from "@/state/helpers";
import Layout from "../../layouts/auth";
import appConfig from "@/app.config";
import { mapState } from "vuex";

import { required, email } from "vuelidate/lib/validators";

/**
 * Register component
 */
export default {
  page: {
    title: "Register",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },

  components: {
    Layout,
  },
  data() {
    return {
      user: {
        fname: "jhon",
        lname: "diaz",
        email: "systemaf2@gmail.com",
        phone: "573103680442",
        password: "My$tandard15",
        dob: "1964-01-24",
        domicile: "US",
        language: "eng",
        preferred_currency: "United States Of America (The)|US Dollar|USD",
      },
      submitted: false,
      regError: null,
      tryingToRegister: false,
      isRegisterError: false,
      registerSuccess: false,
      selectdomilicile:null
    };
  },
  validations: {
    user: {
      fname: {
        required,
      },
      lname: {
        required,
      },
      phone: {
        required,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
  computed: {
    ...mapState("authuser", ["status"]),
    notification() {
      return this.$store ? this.$store.state.notification : null;
    },
  },
  created() {
  //  console.log(this.getDomilicile());
  },

  methods: {
    ...authUserMethods,
    ...notificationMethods,
    // Try to register the user in with the email, username
    // and password they provided.
    tryToRegisterIn() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      } else {
        console.log("Regirter");
        axios
          .post("https://bloxcross-dev.uc.r.appspot.com/register", {
            fname: this.user.fname,
            lname: this.user.lname,
            email: this.user.email,
            phone: this.user.phone,
            password: this.user.password,
            dob: "1964-01-24",
            domicile: "US",
            language: "eng",
            preferred_currency: "United States Of America (The)|US Dollar|USD",
          })
          .then((res) => {
            console.log(res);
            return res;
          });
      }
    },

    getDomilicile() {
      return JSON.parse(`{
  "Mauritius": {
    "gec": "MP",
    "iso_3166_2": "MU",
    "iso_3166_3": "MUS"
  },
  "Mayotte": {
    "gec": "MF",
    "iso_3166_2": "YT",
    "iso_3166_3": "MYT"
  },
  "Mexico": {
    "gec": "MX",
    "iso_3166_2": "MX",
    "iso_3166_3": "MEX"
  },
  "Federated States of Micronesia": {
    "gec": "FM",
    "iso_3166_2": "FM",
    "iso_3166_3": "FSM"
  },
  "Moldova": {
    "gec": "MD",
    "iso_3166_2": "MD",
    "iso_3166_3": "MDA"
  },
  "Monaco": {
    "gec": "MN",
    "iso_3166_2": "MC",
    "iso_3166_3": "MCO"
  },
  "Mongolia": {
    "gec": "MG",
    "iso_3166_2": "MN",
    "iso_3166_3": "MNG"
  },
  "Montenegro": {
    "gec": "MJ",
    "iso_3166_2": "ME",
    "iso_3166_3": "MNE"
  },
  "Montserrat": {
    "gec": "MH",
    "iso_3166_2": "MS",
    "iso_3166_3": "MSR"
  },
  "Morocco": {
    "gec": "MO",
    "iso_3166_2": "MA",
    "iso_3166_3": "MAR"
  },
  "Mozambique": {
    "gec": "MZ",
    "iso_3166_2": "MZ",
    "iso_3166_3": "MOZ"
  },
  "Namibia": {
    "gec": "WA",
    "iso_3166_2": "NA",
    "iso_3166_3": "NAM"
  },
  "Nauru": {
    "gec": "NR",
    "iso_3166_2": "NR",
    "iso_3166_3": "NRU"
  },
  "Nepal": {
    "gec": "NP",
    "iso_3166_2": "NP",
    "iso_3166_3": "NPL"
  },
  "Netherlands": {
    "gec": "NL",
    "iso_3166_2": "NL",
    "iso_3166_3": "NLD"
  },
  "New Caledonia": {
    "gec": "NC",
    "iso_3166_2": "NC",
    "iso_3166_3": "NCL"
  },
  "New Zealand": {
    "gec": "NZ",
    "iso_3166_2": "NZ",
    "iso_3166_3": "NZL"
  },
  "Nicaragua": {
    "gec": "NU",
    "iso_3166_2": "NI",
    "iso_3166_3": "NIC"
  },
  "Niger": {
    "gec": "NG",
    "iso_3166_2": "NE",
    "iso_3166_3": "NER"
  },
  "Nigeria": {
    "gec": "NI",
    "iso_3166_2": "NG",
    "iso_3166_3": "NGA"
  },
  "Niue": {
    "gec": "NE",
    "iso_3166_2": "NU",
    "iso_3166_3": "NIU"
  },
  "Norfolk Island": {
    "gec": "NF",
    "iso_3166_2": "NF",
    "iso_3166_3": "NFK"
  },
  "North Macedonia": {
    "gec": "MK",
    "iso_3166_2": "MK",
    "iso_3166_3": "MKD"
  },
  "Northern Mariana Islands": {
    "gec": "CQ",
    "iso_3166_2": "MP",
    "iso_3166_3": "MNP"
  },
  "Norway": {
    "gec": "NO",
    "iso_3166_2": "NO",
    "iso_3166_3": "NOR"
  },
  "Oman": {
    "gec": "MU",
    "iso_3166_2": "OM",
    "iso_3166_3": "OMN"
  },
  "Pakistan": {
    "gec": "PK",
    "iso_3166_2": "PK",
    "iso_3166_3": "PAK"
  },
  "Palau": {
    "gec": "PS",
    "iso_3166_2": "PW",
    "iso_3166_3": "PLW"
  },
  "Panama": {
    "gec": "PM",
    "iso_3166_2": "PA",
    "iso_3166_3": "PAN"
  },
  "Papua New Guinea": {
    "gec": "PP",
    "iso_3166_2": "PG",
    "iso_3166_3": "PNG"
  },
  "Paraguay": {
    "gec": "PA",
    "iso_3166_2": "PY",
    "iso_3166_3": "PRY"
  },
  "Peru": {
    "gec": "PE",
    "iso_3166_2": "PE",
    "iso_3166_3": "PER"
  },
  "Philippines": {
    "gec": "RP",
    "iso_3166_2": "PH",
    "iso_3166_3": "PHL"
  },
  "Pitcairn Islands": {
    "gec": "PC",
    "iso_3166_2": "PN",
    "iso_3166_3": "PCN"
  },
  "Poland": {
    "gec": "PL",
    "iso_3166_2": "PL",
    "iso_3166_3": "POL"
  },
  "Portugal": {
    "gec": "PO",
    "iso_3166_2": "PT",
    "iso_3166_3": "PRT"
  },
  "Puerto Rico": {
    "gec": "RQ",
    "iso_3166_2": "PR",
    "iso_3166_3": "PRI"
  },
  "Qatar": {
    "gec": "QA",
    "iso_3166_2": "QA",
    "iso_3166_3": "QAT"
  },
  "Romania": {
    "gec": "RO",
    "iso_3166_2": "RO",
    "iso_3166_3": "ROU"
  },
  "Russia": {
    "gec": "RS",
    "iso_3166_2": "RU",
    "iso_3166_3": "RUS"
  },
  "Rwanda": {
    "gec": "RW",
    "iso_3166_2": "RW",
    "iso_3166_3": "RWA"
  },
  "Saint Helena and Ascension and Tristan da Cunha": {
    "gec": "SH",
    "iso_3166_2": "SH",
    "iso_3166_3": "SHN"
  },
  "Saint Kitts and Nevis": {
    "gec": "SC",
    "iso_3166_2": "KN",
    "iso_3166_3": "KNA"
  },
  "Saint Lucia": {
    "gec": "ST",
    "iso_3166_2": "LC",
    "iso_3166_3": "LCA"
  },
  "Saint Pierre and Miquelon": {
    "gec": "SB",
    "iso_3166_2": "PM",
    "iso_3166_3": "SPM"
  },
  "Saint Vincent and the Grenadines": {
    "gec": "VC",
    "iso_3166_2": "VC",
    "iso_3166_3": "VCT"
  },
  "Samoa": {
    "gec": "WS",
    "iso_3166_2": "WS",
    "iso_3166_3": "WSM"
  },
  "San Marino": {
    "gec": "SM",
    "iso_3166_2": "SM",
    "iso_3166_3": "SMR"
  },
  "Sao Tome and Principe": {
    "gec": "TP",
    "iso_3166_2": "ST",
    "iso_3166_3": "STP"
  },
  "Saudi Arabia": {
    "gec": "SA",
    "iso_3166_2": "SA",
    "iso_3166_3": "SAU"
  },
  "Senegal": {
    "gec": "SG",
    "iso_3166_2": "SN",
    "iso_3166_3": "SEN"
  },
  "Reunion": {
    "gec": "RE",
    "iso_3166_2": "RE",
    "iso_3166_3": "REU"
  },
  "Serbia": {
    "gec": "RI",
    "iso_3166_2": "RS",
    "iso_3166_3": "SRB"
  },
  "Seychelles": {
    "gec": "SE",
    "iso_3166_2": "SC",
    "iso_3166_3": "SYC"
  },
  "Sierra Leone": {
    "gec": "SL",
    "iso_3166_2": "SL",
    "iso_3166_3": "SLE"
  },
  "Singapore": {
    "gec": "SN",
    "iso_3166_2": "SG",
    "iso_3166_3": "SGP"
  },
  "Slovakia": {
    "gec": "LO",
    "iso_3166_2": "SK",
    "iso_3166_3": "SVK"
  },
  "Slovenia": {
    "gec": "SI",
    "iso_3166_2": "SI",
    "iso_3166_3": "SVN"
  },
  "Solomon Islands": {
    "gec": "BP",
    "iso_3166_2": "SB",
    "iso_3166_3": "SLB"
  },
  "Somalia": {
    "gec": "SO",
    "iso_3166_2": "SO",
    "iso_3166_3": "SOM"
  },
  "South Africa": {
    "gec": "SF",
    "iso_3166_2": "ZA",
    "iso_3166_3": "ZAF"
  },
  "South Georgia and the Islands": {
    "gec": "SX",
    "iso_3166_2": "GS",
    "iso_3166_3": "SGS"
  },
  "South Sudan": {
    "gec": "OD",
    "iso_3166_2": "SS",
    "iso_3166_3": "SSD"
  },
  "Spain": {
    "gec": "SP",
    "iso_3166_2": "ES",
    "iso_3166_3": "ESP"
  },
  "Sri Lanka": {
    "gec": "CE",
    "iso_3166_2": "LK",
    "iso_3166_3": "LKA"
  },
  "Suriname": {
    "gec": "NS",
    "iso_3166_2": "SR",
    "iso_3166_3": "SUR"
  },
  "Svalbard": {
    "gec": "SV",
    "iso_3166_2": "SJ",
    "iso_3166_3": "SJM"
  },
  "Sweden": {
    "gec": "SW",
    "iso_3166_2": "SE",
    "iso_3166_3": "SWE"
  },
  "Switzerland": {
    "gec": "SZ",
    "iso_3166_2": "CH",
    "iso_3166_3": "CHE"
  },
  "Syria": {
    "gec": "SY",
    "iso_3166_2": "SY",
    "iso_3166_3": "SYR"
  },
  "Taiwan": {
    "gec": "TW",
    "iso_3166_2": "TW",
    "iso_3166_3": "TWN"
  },
  "Tajikistan": {
    "gec": "TI",
    "iso_3166_2": "TJ",
    "iso_3166_3": "TJK"
  },
  "Tanzania": {
    "gec": "TZ",
    "iso_3166_2": "TZ",
    "iso_3166_3": "TZA"
  },
  "Thailand": {
    "gec": "TH",
    "iso_3166_2": "TH",
    "iso_3166_3": "THA"
  },
  "Timor-Leste": {
    "gec": "TT",
    "iso_3166_2": "TL",
    "iso_3166_3": "TLS"
  },
  "Togo": {
    "gec": "TO",
    "iso_3166_2": "TG",
    "iso_3166_3": "TGO"
  },
  "Tokelau": {
    "gec": "TL",
    "iso_3166_2": "TK",
    "iso_3166_3": "TKL"
  },
  "Tonga": {
    "gec": "TN",
    "iso_3166_2": "TO",
    "iso_3166_3": "TON"
  },
  "Trinidad and Tobago": {
    "gec": "TD",
    "iso_3166_2": "TT",
    "iso_3166_3": "TTO"
  },
  "Tunisia": {
    "gec": "TS",
    "iso_3166_2": "TN",
    "iso_3166_3": "TUN"
  },
  "Turkey": {
    "gec": "TU",
    "iso_3166_2": "TR",
    "iso_3166_3": "TUR"
  },
  "Turkmenistan": {
    "gec": "TX",
    "iso_3166_2": "TM",
    "iso_3166_3": "TKM"
  },
  "Turks and Caicos Islands": {
    "gec": "TK",
    "iso_3166_2": "TC",
    "iso_3166_3": "TCA"
  },
  "Tuvalu": {
    "gec": "TV",
    "iso_3166_2": "TV",
    "iso_3166_3": "TUV"
  },
  "The Bahamas": {
    "gec": "BF",
    "iso_3166_2": "BS",
    "iso_3166_3": "BHS"
  },
  "Bahrain": {
    "gec": "BA",
    "iso_3166_2": "BH",
    "iso_3166_3": "BHR"
  },
  "Bangladesh": {
    "gec": "BG",
    "iso_3166_2": "BD",
    "iso_3166_3": "BGD"
  },
  "Barbados": {
    "gec": "BB",
    "iso_3166_2": "BB",
    "iso_3166_3": "BRB"
  },
  "Belarus": {
    "gec": "BO",
    "iso_3166_2": "BY",
    "iso_3166_3": "BLR"
  },
  "Belgium": {
    "gec": "BE",
    "iso_3166_2": "BE",
    "iso_3166_3": "BEL"
  },
  "Belize": {
    "gec": "BH",
    "iso_3166_2": "BZ",
    "iso_3166_3": "BLZ"
  },
  "Benin": {
    "gec": "BN",
    "iso_3166_2": "BJ",
    "iso_3166_3": "BEN"
  },
  "Bermuda": {
    "gec": "BD",
    "iso_3166_2": "BM",
    "iso_3166_3": "BMU"
  },
  "Bhutan": {
    "gec": "BT",
    "iso_3166_2": "BT",
    "iso_3166_3": "BTN"
  },
  "Bolivia": {
    "gec": "BL",
    "iso_3166_2": "BO",
    "iso_3166_3": "BOL"
  },
  "Bosnia and Herzegovina": {
    "gec": "BK",
    "iso_3166_2": "BA",
    "iso_3166_3": "BIH"
  },
  "Botswana": {
    "gec": "BC",
    "iso_3166_2": "BW",
    "iso_3166_3": "BWA"
  },
  "Bouvet Island": {
    "gec": "BV",
    "iso_3166_2": "BV",
    "iso_3166_3": "BVT"
  },
  "Brazil": {
    "gec": "BR",
    "iso_3166_2": "BR",
    "iso_3166_3": "BRA"
  },
  "British Indian Ocean Territory": {
    "gec": "IO",
    "iso_3166_2": "IO",
    "iso_3166_3": "IOT"
  },
  "British Virgin Islands": {
    "gec": "VI",
    "iso_3166_2": "VG",
    "iso_3166_3": "VGB"
  },
  "Brunei": {
    "gec": "BX",
    "iso_3166_2": "BN",
    "iso_3166_3": "BRN"
  },
  "Bulgaria": {
    "gec": "BU",
    "iso_3166_2": "BG",
    "iso_3166_3": "BGR"
  },
  "Burkina Faso": {
    "gec": "UV",
    "iso_3166_2": "BF",
    "iso_3166_3": "BFA"
  },
  "Burma": {
    "gec": "BM",
    "iso_3166_2": "MM",
    "iso_3166_3": "MMR"
  },
  "Burundi": {
    "gec": "BY",
    "iso_3166_2": "BI",
    "iso_3166_3": "BDI"
  },
  "Uganda": {
    "gec": "UG",
    "iso_3166_2": "UG",
    "iso_3166_3": "UGA"
  },
  "Ukraine": {
    "gec": "UP",
    "iso_3166_2": "UA",
    "iso_3166_3": "UKR"
  },
  "United Arab Emirates": {
    "gec": "AE",
    "iso_3166_2": "AE",
    "iso_3166_3": "ARE"
  },
  "United Kingdom": {
    "gec": "UK",
    "iso_3166_2": "GB",
    "iso_3166_3": "GBR"
  },
  "United States": {
    "gec": "US",
    "iso_3166_2": "US",
    "iso_3166_3": "USA"
  },
  "Uruguay": {
    "gec": "UY",
    "iso_3166_2": "UY",
    "iso_3166_3": "URY"
  },
  "Uzbekistan": {
    "gec": "UZ",
    "iso_3166_2": "UZ",
    "iso_3166_3": "UZB"
  },
  "Vanuatu": {
    "gec": "NH",
    "iso_3166_2": "VU",
    "iso_3166_3": "VUT"
  },
  "Venezuela": {
    "gec": "VE",
    "iso_3166_2": "VE",
    "iso_3166_3": "VEN"
  },
  "Vietnam": {
    "gec": "VM",
    "iso_3166_2": "VN",
    "iso_3166_3": "VNM"
  },
  "Virgin Islands": {
    "gec": "VQ",
    "iso_3166_2": "VI",
    "iso_3166_3": "VIR"
  },
  "Wallis and Futuna": {
    "gec": "WF",
    "iso_3166_2": "WF",
    "iso_3166_3": "WLF"
  },
  "West Bank": {
    "gec": "WE",
    "iso_3166_2": "PS",
    "iso_3166_3": "PSE"
  },
  "Western Sahara": {
    "gec": "WI",
    "iso_3166_2": "EH",
    "iso_3166_3": "ESH"
  },
  "Yemen": {
    "gec": "YM",
    "iso_3166_2": "YE",
    "iso_3166_3": "YEM"
  },
  "Zambia": {
    "gec": "ZA",
    "iso_3166_2": "ZM",
    "iso_3166_3": "ZMB"
  },
  "Zimbabwe": {
    "gec": "ZI",
    "iso_3166_2": "ZW",
    "iso_3166_3": "ZWE"
  },
  "Cabo Verde": {
    "gec": "CV",
    "iso_3166_2": "CV",
    "iso_3166_3": "CPV"
  },
  "Cambodia": {
    "gec": "CB",
    "iso_3166_2": "KH",
    "iso_3166_3": "KHM"
  },
  "Cameroon": {
    "gec": "CM",
    "iso_3166_2": "CM",
    "iso_3166_3": "CMR"
  },
  "Canada": {
    "gec": "CA",
    "iso_3166_2": "CA",
    "iso_3166_3": "CAN"
  },
  "Cayman Islands": {
    "gec": "CJ",
    "iso_3166_2": "KY",
    "iso_3166_3": "CYM"
  },
  "Central African Republic": {
    "gec": "CT",
    "iso_3166_2": "CF",
    "iso_3166_3": "CAF"
  },
  "Chad": {
    "gec": "CD",
    "iso_3166_2": "TD",
    "iso_3166_3": "TCD"
  },
  "Chile": {
    "gec": "CI",
    "iso_3166_2": "CL",
    "iso_3166_3": "CHL"
  },
  "China": {
    "gec": "CH",
    "iso_3166_2": "CN",
    "iso_3166_3": "CHN"
  },
  "Christmas Island": {
    "gec": "KT",
    "iso_3166_2": "CX",
    "iso_3166_3": "CXR"
  },
  "Cocos (Keeling) Islands": {
    "gec": "CK",
    "iso_3166_2": "CC",
    "iso_3166_3": "CCK"
  },
  "Colombia": {
    "gec": "CO",
    "iso_3166_2": "CO",
    "iso_3166_3": "COL"
  },
  "Comoros": {
    "gec": "CN",
    "iso_3166_2": "KM",
    "iso_3166_3": "COM"
  },
  "Democratic Republic of the Congo": {
    "gec": "CG",
    "iso_3166_2": "CD",
    "iso_3166_3": "COD"
  },
  "Republic of the Congo": {
    "gec": "CF",
    "iso_3166_2": "CG",
    "iso_3166_3": "COG"
  },
  "Cook Islands": {
    "gec": "CW",
    "iso_3166_2": "CK",
    "iso_3166_3": "COK"
  },
  "Costa Rica": {
    "gec": "CS",
    "iso_3166_2": "CR",
    "iso_3166_3": "CRI"
  },
  "Cote d'Ivoire": {
    "gec": "IV",
    "iso_3166_2": "CI",
    "iso_3166_3": "CIV"
  },
  "Croatia": {
    "gec": "HR",
    "iso_3166_2": "HR",
    "iso_3166_3": "HRV"
  },
  "Cuba": {
    "gec": "CU",
    "iso_3166_2": "CU",
    "iso_3166_3": "CUB"
  },
  "Cyprus": {
    "gec": "CY",
    "iso_3166_2": "CY",
    "iso_3166_3": "CYP"
  },
  "Czechia": {
    "gec": "EZ",
    "iso_3166_2": "CZ",
    "iso_3166_3": "CZE"
  },
  "Denmark": {
    "gec": "DA",
    "iso_3166_2": "DK",
    "iso_3166_3": "DNK"
  },
  "Djibouti": {
    "gec": "DJ",
    "iso_3166_2": "DJ",
    "iso_3166_3": "DJI"
  },
  "Dominica": {
    "gec": "DO",
    "iso_3166_2": "DM",
    "iso_3166_3": "DMA"
  },
  "Dominican Republic": {
    "gec": "DR",
    "iso_3166_2": "DO",
    "iso_3166_3": "DOM"
  },
  "Ecuador": {
    "gec": "EC",
    "iso_3166_2": "EC",
    "iso_3166_3": "ECU"
  },
  "Egypt": {
    "gec": "EG",
    "iso_3166_2": "EG",
    "iso_3166_3": "EGY"
  },
  "El Salvador": {
    "gec": "ES",
    "iso_3166_2": "SV",
    "iso_3166_3": "SLV"
  },
  "Equatorial Guinea": {
    "gec": "EK",
    "iso_3166_2": "GQ",
    "iso_3166_3": "GNQ"
  },
  "Eritrea": {
    "gec": "ER",
    "iso_3166_2": "ER",
    "iso_3166_3": "ERI"
  },
  "Estonia": {
    "gec": "EN",
    "iso_3166_2": "EE",
    "iso_3166_3": "EST"
  },
  "Eswatini": {
    "gec": "WZ",
    "iso_3166_2": "SZ",
    "iso_3166_3": "SWZ"
  },
  "Ethiopia": {
    "gec": "ET",
    "iso_3166_2": "ET",
    "iso_3166_3": "ETH"
  },
  "Falkland Islands (Islas Malvinas)": {
    "gec": "FK",
    "iso_3166_2": "FK",
    "iso_3166_3": "FLK"
  },
  "Faroe Islands": {
    "gec": "FO",
    "iso_3166_2": "FO",
    "iso_3166_3": "FRO"
  },
  "Fiji": {
    "gec": "FJ",
    "iso_3166_2": "FJ",
    "iso_3166_3": "FJI"
  },
  "Finland": {
    "gec": "FI",
    "iso_3166_2": "FI",
    "iso_3166_3": "FIN"
  },
  "France": {
    "gec": "FR",
    "iso_3166_2": "FR",
    "iso_3166_3": "FRA"
  },
  "French Polynesia": {
    "gec": "FP",
    "iso_3166_2": "PF",
    "iso_3166_3": "PYF"
  },
  "French Southern and Antarctic Lands": {
    "gec": "FS",
    "iso_3166_2": "TF",
    "iso_3166_3": "ATF"
  },
  "Gabon": {
    "gec": "GB",
    "iso_3166_2": "GA",
    "iso_3166_3": "GAB"
  },
  "The Gambia": {
    "gec": "GA",
    "iso_3166_2": "GM",
    "iso_3166_3": "GMB"
  },
  "Gaza Strip": {
    "gec": "GZ",
    "iso_3166_2": "PS",
    "iso_3166_3": "PSE"
  },
  "Georgia": {
    "gec": "GG",
    "iso_3166_2": "GE",
    "iso_3166_3": "GEO"
  },
  "Germany": {
    "gec": "GM",
    "iso_3166_2": "DE",
    "iso_3166_3": "DEU"
  },
  "Ghana": {
    "gec": "GH",
    "iso_3166_2": "GH",
    "iso_3166_3": "GHA"
  },
  "Gibraltar": {
    "gec": "GI",
    "iso_3166_2": "GI",
    "iso_3166_3": "GIB"
  },
  "Greece": {
    "gec": "GR",
    "iso_3166_2": "GR",
    "iso_3166_3": "GRC"
  },
  "Greenland": {
    "gec": "GL",
    "iso_3166_2": "GL",
    "iso_3166_3": "GRL"
  },
  "Grenada": {
    "gec": "GJ",
    "iso_3166_2": "GD",
    "iso_3166_3": "GRD"
  },
  "Guadeloupe": {
    "gec": "GP",
    "iso_3166_2": "GP",
    "iso_3166_3": "GLP"
  },
  "Guam": {
    "gec": "GQ",
    "iso_3166_2": "GU",
    "iso_3166_3": "GUM"
  },
  "Guatemala": {
    "gec": "GT",
    "iso_3166_2": "GT",
    "iso_3166_3": "GTM"
  },
  "Guernsey": {
    "gec": "GK",
    "iso_3166_2": "GG",
    "iso_3166_3": "GGY"
  },
  "Guinea": {
    "gec": "GV",
    "iso_3166_2": "GN",
    "iso_3166_3": "GIN"
  },
  "Guinea-Bissau": {
    "gec": "PU",
    "iso_3166_2": "GW",
    "iso_3166_3": "GNB"
  },
  "Guyana": {
    "gec": "GY",
    "iso_3166_2": "GY",
    "iso_3166_3": "GUY"
  },
  "Haiti": {
    "gec": "HA",
    "iso_3166_2": "HT",
    "iso_3166_3": "HTI"
  },
  "Heard Island and McDonald Islands": {
    "gec": "HM",
    "iso_3166_2": "HM",
    "iso_3166_3": "HMD"
  },
  "Holy See (Vatican City)": {
    "gec": "VT",
    "iso_3166_2": "VA",
    "iso_3166_3": "VAT"
  },
  "Honduras": {
    "gec": "HO",
    "iso_3166_2": "HN",
    "iso_3166_3": "HND"
  },
  "Hong Kong": {
    "gec": "HK",
    "iso_3166_2": "HK",
    "iso_3166_3": "HKG"
  },
  "Hungary": {
    "gec": "HU",
    "iso_3166_2": "HU",
    "iso_3166_3": "HUN"
  },
  "Iceland": {
    "gec": "IC",
    "iso_3166_2": "IS",
    "iso_3166_3": "ISL"
  },
  "India": {
    "gec": "IN",
    "iso_3166_2": "IN",
    "iso_3166_3": "IND"
  },
  "Indonesia": {
    "gec": "ID",
    "iso_3166_2": "ID",
    "iso_3166_3": "IDN"
  },
  "Iran": {
    "gec": "IR",
    "iso_3166_2": "IR",
    "iso_3166_3": "IRN"
  },
  "Iraq": {
    "gec": "IZ",
    "iso_3166_2": "IQ",
    "iso_3166_3": "IRQ"
  },
  "Ireland": {
    "gec": "EI",
    "iso_3166_2": "IE",
    "iso_3166_3": "IRL"
  },
  "Isle of Man": {
    "gec": "IM",
    "iso_3166_2": "IM",
    "iso_3166_3": "IMN"
  },
  "Israel": {
    "gec": "IS",
    "iso_3166_2": "IL",
    "iso_3166_3": "ISR"
  },
  "Italy": {
    "gec": "IT",
    "iso_3166_2": "IT",
    "iso_3166_3": "ITA"
  },
  "Jamaica": {
    "gec": "JM",
    "iso_3166_2": "JM",
    "iso_3166_3": "JAM"
  },
  "Japan": {
    "gec": "JA",
    "iso_3166_2": "JP",
    "iso_3166_3": "JPN"
  },
  "Jersey": {
    "gec": "JE",
    "iso_3166_2": "JE",
    "iso_3166_3": "JEY"
  },
  "Jordan": {
    "gec": "JO",
    "iso_3166_2": "JO",
    "iso_3166_3": "JOR"
  },
  "Afghanistan": {
    "gec": "AF",
    "iso_3166_2": "AF",
    "iso_3166_3": "AFG"
  },
  "Albania": {
    "gec": "AL",
    "iso_3166_2": "AL",
    "iso_3166_3": "ALB"
  },
  "Algeria": {
    "gec": "AG",
    "iso_3166_2": "DZ",
    "iso_3166_3": "DZA"
  },
  "American Samoa": {
    "gec": "AQ",
    "iso_3166_2": "AS",
    "iso_3166_3": "ASM"
  },
  "Andorra": {
    "gec": "AN",
    "iso_3166_2": "AD",
    "iso_3166_3": "AND"
  },
  "Kazakhstan": {
    "gec": "KZ",
    "iso_3166_2": "KZ",
    "iso_3166_3": "KAZ"
  },
  "Kenya": {
    "gec": "KE",
    "iso_3166_2": "KE",
    "iso_3166_3": "KEN"
  },
  "Kiribati": {
    "gec": "KR",
    "iso_3166_2": "KI",
    "iso_3166_3": "KIR"
  },
  "North Korea": {
    "gec": "KN",
    "iso_3166_2": "KP",
    "iso_3166_3": "PRK"
  },
  "South Korea": {
    "gec": "KS",
    "iso_3166_2": "KR",
    "iso_3166_3": "KOR"
  },
  "Kuwait": {
    "gec": "KU",
    "iso_3166_2": "KW",
    "iso_3166_3": "KWT"
  },
  "Kyrgyzstan": {
    "gec": "KG",
    "iso_3166_2": "KG",
    "iso_3166_3": "KGZ"
  },
  "Laos": {
    "gec": "LA",
    "iso_3166_2": "LA",
    "iso_3166_3": "LAO"
  },
  "Latvia": {
    "gec": "LG",
    "iso_3166_2": "LV",
    "iso_3166_3": "LVA"
  },
  "Lebanon": {
    "gec": "LE",
    "iso_3166_2": "LB",
    "iso_3166_3": "LBN"
  },
  "Lesotho": {
    "gec": "LT",
    "iso_3166_2": "LS",
    "iso_3166_3": "LSO"
  },
  "Liberia": {
    "gec": "LI",
    "iso_3166_2": "LR",
    "iso_3166_3": "LBR"
  },
  "Libya": {
    "gec": "LY",
    "iso_3166_2": "LY",
    "iso_3166_3": "LBY"
  },
  "Liechtenstein": {
    "gec": "LS",
    "iso_3166_2": "LI",
    "iso_3166_3": "LIE"
  },
  "Lithuania": {
    "gec": "LH",
    "iso_3166_2": "LT",
    "iso_3166_3": "LTU"
  },
  "Luxembourg": {
    "gec": "LU",
    "iso_3166_2": "LU",
    "iso_3166_3": "LUX"
  },
  "Macau": {
    "gec": "MC",
    "iso_3166_2": "MO",
    "iso_3166_3": "MAC"
  },
  "Madagascar": {
    "gec": "MA",
    "iso_3166_2": "MG",
    "iso_3166_3": "MDG"
  },
  "Malawi": {
    "gec": "MI",
    "iso_3166_2": "MW",
    "iso_3166_3": "MWI"
  },
  "Malaysia": {
    "gec": "MY",
    "iso_3166_2": "MY",
    "iso_3166_3": "MYS"
  },
  "Maldives": {
    "gec": "MV",
    "iso_3166_2": "MV",
    "iso_3166_3": "MDV"
  },
  "Mali": {
    "gec": "ML",
    "iso_3166_2": "ML",
    "iso_3166_3": "MLI"
  },
  "Malta": {
    "gec": "MT",
    "iso_3166_2": "MT",
    "iso_3166_3": "MLT"
  },
  "Marshall Islands": {
    "gec": "RM",
    "iso_3166_2": "MH",
    "iso_3166_3": "MHL"
  },
  "Martinique": {
    "gec": "MB",
    "iso_3166_2": "MQ",
    "iso_3166_3": "MTQ"
  },
  "Mauritania": {
    "gec": "MR",
    "iso_3166_2": "MR",
    "iso_3166_3": "MRT"
  },
  "Angola": {
    "gec": "AO",
    "iso_3166_2": "AO",
    "iso_3166_3": "AGO"
  },
  "Kingman Reef": {
    "gec": "KQ",
    "iso_3166_2": null,
    "iso_3166_3": null
  },
  "Kosovo": {
    "gec": "KV",
    "iso_3166_2": "XK",
    "iso_3166_3": "XKS"
  },
  "Midway Islands": {
    "gec": "MQ",
    "iso_3166_2": null,
    "iso_3166_3": null
  },
  "Navassa Island": {
    "gec": "BQ",
    "iso_3166_2": null,
    "iso_3166_3": null
  },
  "Netherlands Antilles": {
    "gec": "NT",
    "iso_3166_2": null,
    "iso_3166_3": null
  },
  "Palmyra Atoll": {
    "gec": "LQ",
    "iso_3166_2": null,
    "iso_3166_3": null
  },
  "Paracel Islands": {
    "gec": "PF",
    "iso_3166_2": null,
    "iso_3166_3": null
  },
  "Saint Barthelemy": {
    "gec": "TB",
    "iso_3166_2": "BL",
    "iso_3166_3": "BLM"
  },
  "Saint Martin": {
    "gec": "RN",
    "iso_3166_2": "MF",
    "iso_3166_3": "MAF"
  },
  "Sint Maarten": {
    "gec": "NN",
    "iso_3166_2": "SX",
    "iso_3166_3": "SXM"
  },
  "Spratly Islands": {
    "gec": "PG",
    "iso_3166_2": null,
    "iso_3166_3": null
  },
  "Sudan": {
    "gec": "SU",
    "iso_3166_2": "SD",
    "iso_3166_3": "SDN"
  },
  "Baker Island": {
    "gec": "FQ",
    "iso_3166_2": null,
    "iso_3166_3": null
  },
  "Bassas da India": {
    "gec": "BS",
    "iso_3166_2": null,
    "iso_3166_3": null
  },
  "Wake Island": {
    "gec": "WQ",
    "iso_3166_2": null,
    "iso_3166_3": null
  },
  "Clipperton Island": {
    "gec": "IP",
    "iso_3166_2": null,
    "iso_3166_3": null
  },
  "Coral Sea Islands": {
    "gec": "CR",
    "iso_3166_2": null,
    "iso_3166_3": null
  },
  "Curacao": {
    "gec": "UC",
    "iso_3166_2": "CW",
    "iso_3166_3": "CUW"
  },
  "Dhekelia": {
    "gec": "DX",
    "iso_3166_2": null,
    "iso_3166_3": null
  },
  "Glorioso Islands": {
    "gec": "GO",
    "iso_3166_2": null,
    "iso_3166_3": null
  },
  "Howland Island": {
    "gec": "HQ",
    "iso_3166_2": null,
    "iso_3166_3": null
  },
  "Jan Mayen": {
    "gec": "JN",
    "iso_3166_2": null,
    "iso_3166_3": null
  },
  "Jarvis Island": {
    "gec": "DQ",
    "iso_3166_2": null,
    "iso_3166_3": null
  },
  "Johnston Atoll": {
    "gec": "JQ",
    "iso_3166_2": null,
    "iso_3166_3": null
  },
  "Juan de Nova Island": {
    "gec": "JU",
    "iso_3166_2": null,
    "iso_3166_3": null
  },
  "Akrotiri": {
    "gec": "AX",
    "iso_3166_2": null,
    "iso_3166_3": null
  },
  "French Guiana": {
    "gec": "FG",
    "iso_3166_2": "GF",
    "iso_3166_3": "GUF"
  },
  "Ashmore and Cartier Islands": {
    "gec": "AT",
    "iso_3166_2": null,
    "iso_3166_3": null
  },
  "Anguilla": {
    "gec": "AV",
    "iso_3166_2": "AI",
    "iso_3166_3": "AIA"
  },
  "Antarctica": {
    "gec": "AY",
    "iso_3166_2": "AQ",
    "iso_3166_3": "ATA"
  },
  "Antigua and Barbuda": {
    "gec": "AC",
    "iso_3166_2": "AG",
    "iso_3166_3": "ATG"
  },
  "Argentina": {
    "gec": "AR",
    "iso_3166_2": "AR",
    "iso_3166_3": "ARG"
  },
  "Armenia": {
    "gec": "AM",
    "iso_3166_2": "AM",
    "iso_3166_3": "ARM"
  },
  "Aruba": {
    "gec": "AA",
    "iso_3166_2": "AW",
    "iso_3166_3": "ABW"
  },
  "Australia": {
    "gec": "AS",
    "iso_3166_2": "AU",
    "iso_3166_3": "AUS"
  },
  "Austria": {
    "gec": "AU",
    "iso_3166_2": "AT",
    "iso_3166_3": "AUT"
  },
  "Azerbaijan": {
    "gec": "AJ",
    "iso_3166_2": "AZ",
    "iso_3166_3": "AZE"
  }
}`);
    },
      getlanguages() {
      return JSON.parse(`
{
  "Afar": {
    "alpha3_b": "aar",
    "alpha3_t": "null",
    "alpha2": "aa",
    "english": "Afar",
    "french": "afar",
    "german": "Danakil-Sprache",
    "notes": "null"
  },
  "Abkhazian": {
    "alpha3_b": "abk",
    "alpha3_t": "null",
    "alpha2": "ab",
    "english": "Abkhazian",
    "french": "abkhaze",
    "german": "Abchasisch",
    "notes": "null"
  },
  "Achinese": {
    "alpha3_b": "ace",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Achinese",
    "french": "aceh",
    "german": "Aceh-Sprache",
    "notes": "null"
  },
  "Acoli": {
    "alpha3_b": "ach",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Acoli",
    "french": "acoli",
    "german": "Acholi-Sprache",
    "notes": "null"
  },
  "Adangme": {
    "alpha3_b": "ada",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Adangme",
    "french": "adangme",
    "german": "Adangme-Sprache",
    "notes": "null"
  },
  "Adyghe; Adygei": {
    "alpha3_b": "ady",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Adyghe; Adygei",
    "french": "adyghé",
    "german": "Adygisch",
    "notes": "null"
  },
  "Afro-Asiatic languages": {
    "alpha3_b": "afa",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Afro-Asiatic languages",
    "french": "afro-asiatiques, langues",
    "german": "Hamitosemitische Sprachen (Andere)",
    "notes": "null"
  },
  "Afrihili": {
    "alpha3_b": "afh",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Afrihili",
    "french": "afrihili",
    "german": "Afrihili",
    "notes": "null"
  },
  "Afrikaans": {
    "alpha3_b": "afr",
    "alpha3_t": "null",
    "alpha2": "af",
    "english": "Afrikaans",
    "french": "afrikaans",
    "german": "Afrikaans",
    "notes": "null"
  },
  "Ainu": {
    "alpha3_b": "ain",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Ainu",
    "french": "aïnou",
    "german": "Ainu-Sprache",
    "notes": "null"
  },
  "Akan": {
    "alpha3_b": "aka",
    "alpha3_t": "null",
    "alpha2": "ak",
    "english": "Akan",
    "french": "akan",
    "german": "Akan-Sprache",
    "notes": "null"
  },
  "Akkadian": {
    "alpha3_b": "akk",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Akkadian",
    "french": "akkadien",
    "german": "Akkadisch",
    "notes": "null"
  },
  "Albanian": {
    "alpha3_b": "alb",
    "alpha3_t": "sqi",
    "alpha2": "sq",
    "english": "Albanian",
    "french": "albanais",
    "german": "Albanisch",
    "notes": "null"
  },
  "Aleut": {
    "alpha3_b": "ale",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Aleut",
    "french": "aléoute",
    "german": "Aleutisch",
    "notes": "null"
  },
  "Algonquian languages": {
    "alpha3_b": "alg",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Algonquian languages",
    "french": "algonquines, langues",
    "german": "Algonkin-Sprachen (Andere)",
    "notes": "null"
  },
  "Southern Altai": {
    "alpha3_b": "alt",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Southern Altai",
    "french": "altai du Sud",
    "german": "Altaisch",
    "notes": "null"
  },
  "Amharic": {
    "alpha3_b": "amh",
    "alpha3_t": "null",
    "alpha2": "am",
    "english": "Amharic",
    "french": "amharique",
    "german": "Amharisch",
    "notes": "null"
  },
  "English, Old (ca.450-1100)": {
    "alpha3_b": "ang",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "English, Old (ca.450-1100)",
    "french": "anglo-saxon (ca.450-1100)",
    "german": "Altenglisch",
    "notes": "null"
  },
  "Angika": {
    "alpha3_b": "anp",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Angika",
    "french": "angika",
    "german": "Anga-Sprache",
    "notes": "null"
  },
  "Apache languages": {
    "alpha3_b": "apa",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Apache languages",
    "french": "apaches, langues",
    "german": "Apachen-Sprachen",
    "notes": "null"
  },
  "Arabic": {
    "alpha3_b": "ara",
    "alpha3_t": "null",
    "alpha2": "ar",
    "english": "Arabic",
    "french": "arabe",
    "german": "Arabisch",
    "notes": "null"
  },
  "Official Aramaic (700-300 BCE); Imperial Aramaic (700-300 BCE)": {
    "alpha3_b": "arc",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Official Aramaic (700-300 BCE); Imperial Aramaic (700-300 BCE)",
    "french": "araméen d'empire (700-300 BCE)",
    "german": "Aramäisch",
    "notes": "null"
  },
  "Aragonese": {
    "alpha3_b": "arg",
    "alpha3_t": "null",
    "alpha2": "an",
    "english": "Aragonese",
    "french": "aragonais",
    "german": "Aragonesisch",
    "notes": "null"
  },
  "Armenian": {
    "alpha3_b": "arm",
    "alpha3_t": "hye",
    "alpha2": "hy",
    "english": "Armenian",
    "french": "arménien",
    "german": "Armenisch",
    "notes": "null"
  },
  "Mapudungun; Mapuche": {
    "alpha3_b": "arn",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Mapudungun; Mapuche",
    "french": "mapudungun; mapuche; mapuce",
    "german": "Arauka-Sprachen",
    "notes": "null"
  },
  "Arapaho": {
    "alpha3_b": "arp",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Arapaho",
    "french": "arapaho",
    "german": "Arapaho-Sprache",
    "notes": "null"
  },
  "Artificial languages": {
    "alpha3_b": "art",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Artificial languages",
    "french": "artificielles, langues",
    "german": "Kunstsprachen (Andere)",
    "notes": "null"
  },
  "Arawak": {
    "alpha3_b": "arw",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Arawak",
    "french": "arawak",
    "german": "Arawak-Sprachen",
    "notes": "null"
  },
  "Assamese": {
    "alpha3_b": "asm",
    "alpha3_t": "null",
    "alpha2": "as",
    "english": "Assamese",
    "french": "assamais",
    "german": "Assamesisch",
    "notes": "null"
  },
  "Asturian; Bable; Leonese; Asturleonese": {
    "alpha3_b": "ast",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Asturian; Bable; Leonese; Asturleonese",
    "french": "asturien; bable; léonais; asturoléonais",
    "german": "Asturisch",
    "notes": "null"
  },
  "Athapascan languages": {
    "alpha3_b": "ath",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Athapascan languages",
    "french": "athapascanes, langues",
    "german": "Athapaskische Sprachen (Andere)",
    "notes": "null"
  },
  "Australian languages": {
    "alpha3_b": "aus",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Australian languages",
    "french": "australiennes, langues",
    "german": "Australische Sprachen",
    "notes": "null"
  },
  "Avaric": {
    "alpha3_b": "ava",
    "alpha3_t": "null",
    "alpha2": "av",
    "english": "Avaric",
    "french": "avar",
    "german": "Awarisch",
    "notes": "null"
  },
  "Avestan": {
    "alpha3_b": "ave",
    "alpha3_t": "null",
    "alpha2": "ae",
    "english": "Avestan",
    "french": "avestique",
    "german": "Avestisch",
    "notes": "null"
  },
  "Awadhi": {
    "alpha3_b": "awa",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Awadhi",
    "french": "awadhi",
    "german": "Awadhi",
    "notes": "null"
  },
  "Aymara": {
    "alpha3_b": "aym",
    "alpha3_t": "null",
    "alpha2": "ay",
    "english": "Aymara",
    "french": "aymara",
    "german": "Aymará-Sprache",
    "notes": "null"
  },
  "Azerbaijani": {
    "alpha3_b": "aze",
    "alpha3_t": "null",
    "alpha2": "az",
    "english": "Azerbaijani",
    "french": "azéri",
    "german": "Aserbeidschanisch",
    "notes": "null"
  },
  "Banda languages": {
    "alpha3_b": "bad",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Banda languages",
    "french": "banda, langues",
    "german": "Banda-Sprachen (Ubangi-Sprachen)",
    "notes": "null"
  },
  "Bamileke languages": {
    "alpha3_b": "bai",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Bamileke languages",
    "french": "bamiléké, langues",
    "german": "Bamileke-Sprachen",
    "notes": "null"
  },
  "Bashkir": {
    "alpha3_b": "bak",
    "alpha3_t": "null",
    "alpha2": "ba",
    "english": "Bashkir",
    "french": "bachkir",
    "german": "Baschkirisch",
    "notes": "null"
  },
  "Baluchi": {
    "alpha3_b": "bal",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Baluchi",
    "french": "baloutchi",
    "german": "Belutschisch",
    "notes": "null"
  },
  "Bambara": {
    "alpha3_b": "bam",
    "alpha3_t": "null",
    "alpha2": "bm",
    "english": "Bambara",
    "french": "bambara",
    "german": "Bambara-Sprache",
    "notes": "null"
  },
  "Balinese": {
    "alpha3_b": "ban",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Balinese",
    "french": "balinais",
    "german": "Balinesisch",
    "notes": "null"
  },
  "Basque": {
    "alpha3_b": "baq",
    "alpha3_t": "eus",
    "alpha2": "eu",
    "english": "Basque",
    "french": "basque",
    "german": "Baskisch",
    "notes": "null"
  },
  "Basa": {
    "alpha3_b": "bas",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Basa",
    "french": "basa",
    "german": "Basaa-Sprache",
    "notes": "null"
  },
  "Baltic languages": {
    "alpha3_b": "bat",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Baltic languages",
    "french": "baltes, langues",
    "german": "Baltische Sprachen (Andere)",
    "notes": "null"
  },
  "Beja; Bedawiyet": {
    "alpha3_b": "bej",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Beja; Bedawiyet",
    "french": "bedja",
    "german": "Bedauye",
    "notes": "null"
  },
  "Belarusian": {
    "alpha3_b": "bel",
    "alpha3_t": "null",
    "alpha2": "be",
    "english": "Belarusian",
    "french": "biélorusse",
    "german": "Weißrussisch",
    "notes": "null"
  },
  "Bemba": {
    "alpha3_b": "bem",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Bemba",
    "french": "bemba",
    "german": "Bemba-Sprache",
    "notes": "null"
  },
  "Bengali": {
    "alpha3_b": "ben",
    "alpha3_t": "null",
    "alpha2": "bn",
    "english": "Bengali",
    "french": "bengali",
    "german": "Bengali",
    "notes": "null"
  },
  "Berber languages": {
    "alpha3_b": "ber",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Berber languages",
    "french": "berbères, langues",
    "german": "Berbersprachen (Andere)",
    "notes": "null"
  },
  "Bhojpuri": {
    "alpha3_b": "bho",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Bhojpuri",
    "french": "bhojpuri",
    "german": "Bhojpuri",
    "notes": "null"
  },
  "Bihari languages": {
    "alpha3_b": "bih",
    "alpha3_t": "null",
    "alpha2": "bh",
    "english": "Bihari languages",
    "french": "langues biharis",
    "german": "Bihari (Andere)",
    "notes": "null"
  },
  "Bikol": {
    "alpha3_b": "bik",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Bikol",
    "french": "bikol",
    "german": "Bikol-Sprache",
    "notes": "null"
  },
  "Bini; Edo": {
    "alpha3_b": "bin",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Bini; Edo",
    "french": "bini; edo",
    "german": "Edo-Sprache",
    "notes": "null"
  },
  "Bislama": {
    "alpha3_b": "bis",
    "alpha3_t": "null",
    "alpha2": "bi",
    "english": "Bislama",
    "french": "bichlamar",
    "german": "Beach-la-mar",
    "notes": "null"
  },
  "Siksika": {
    "alpha3_b": "bla",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Siksika",
    "french": "blackfoot",
    "german": "Blackfoot-Sprache",
    "notes": "null"
  },
  "Bantu languages": {
    "alpha3_b": "bnt",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Bantu languages",
    "french": "bantou, langues",
    "german": "Bantusprachen (Andere)",
    "notes": "null"
  },
  "Bosnian": {
    "alpha3_b": "bos",
    "alpha3_t": "null",
    "alpha2": "bs",
    "english": "Bosnian",
    "french": "bosniaque",
    "german": "Bosnisch",
    "notes": "null"
  },
  "Braj": {
    "alpha3_b": "bra",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Braj",
    "french": "braj",
    "german": "Braj-Bhakha",
    "notes": "null"
  },
  "Breton": {
    "alpha3_b": "bre",
    "alpha3_t": "null",
    "alpha2": "br",
    "english": "Breton",
    "french": "breton",
    "german": "Bretonisch",
    "notes": "null"
  },
  "Batak languages": {
    "alpha3_b": "btk",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Batak languages",
    "french": "batak, langues",
    "german": "Batak-Sprache",
    "notes": "null"
  },
  "Buriat": {
    "alpha3_b": "bua",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Buriat",
    "french": "bouriate",
    "german": "Burjatisch",
    "notes": "null"
  },
  "Buginese": {
    "alpha3_b": "bug",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Buginese",
    "french": "bugi",
    "german": "Bugi-Sprache",
    "notes": "null"
  },
  "Bulgarian": {
    "alpha3_b": "bul",
    "alpha3_t": "null",
    "alpha2": "bg",
    "english": "Bulgarian",
    "french": "bulgare",
    "german": "Bulgarisch",
    "notes": "null"
  },
  "Burmese": {
    "alpha3_b": "bur",
    "alpha3_t": "mya",
    "alpha2": "my",
    "english": "Burmese",
    "french": "birman",
    "german": "Birmanisch",
    "notes": "null"
  },
  "Blin; Bilin": {
    "alpha3_b": "byn",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Blin; Bilin",
    "french": "blin; bilen",
    "german": "Bilin-Sprache",
    "notes": "null"
  },
  "Caddo": {
    "alpha3_b": "cad",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Caddo",
    "french": "caddo",
    "german": "Caddo-Sprachen",
    "notes": "null"
  },
  "Central American Indian languages": {
    "alpha3_b": "cai",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Central American Indian languages",
    "french": "amérindiennes de L'Amérique centrale, langues",
    "german": "Indianersprachen, Zentralamerika (Andere)",
    "notes": "null"
  },
  "Galibi Carib": {
    "alpha3_b": "car",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Galibi Carib",
    "french": "karib; galibi; carib",
    "german": "Karibische Sprachen",
    "notes": "null"
  },
  "Catalan; Valencian": {
    "alpha3_b": "cat",
    "alpha3_t": "null",
    "alpha2": "ca",
    "english": "Catalan; Valencian",
    "french": "catalan; valencien",
    "german": "Katalanisch",
    "notes": "null"
  },
  "Caucasian languages": {
    "alpha3_b": "cau",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Caucasian languages",
    "french": "caucasiennes, langues",
    "german": "Kaukasische Sprachen (Andere)",
    "notes": "null"
  },
  "Cebuano": {
    "alpha3_b": "ceb",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Cebuano",
    "french": "cebuano",
    "german": "Cebuano",
    "notes": "null"
  },
  "Celtic languages": {
    "alpha3_b": "cel",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Celtic languages",
    "french": "celtiques, langues; celtes, langues",
    "german": "Keltische Sprachen (Andere)",
    "notes": "null"
  },
  "Chamorro": {
    "alpha3_b": "cha",
    "alpha3_t": "null",
    "alpha2": "ch",
    "english": "Chamorro",
    "french": "chamorro",
    "german": "Chamorro-Sprache",
    "notes": "null"
  },
  "Chibcha": {
    "alpha3_b": "chb",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Chibcha",
    "french": "chibcha",
    "german": "Chibcha-Sprachen",
    "notes": "null"
  },
  "Chechen": {
    "alpha3_b": "che",
    "alpha3_t": "null",
    "alpha2": "ce",
    "english": "Chechen",
    "french": "tchétchène",
    "german": "Tschetschenisch",
    "notes": "null"
  },
  "Chagatai": {
    "alpha3_b": "chg",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Chagatai",
    "french": "djaghataï",
    "german": "Tschagataisch",
    "notes": "null"
  },
  "Chinese": {
    "alpha3_b": "chi",
    "alpha3_t": "zho",
    "alpha2": "zh",
    "english": "Chinese",
    "french": "chinois",
    "german": "Chinesisch",
    "notes": "null"
  },
  "Chuukese": {
    "alpha3_b": "chk",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Chuukese",
    "french": "chuuk",
    "german": "Trukesisch",
    "notes": "null"
  },
  "Mari": {
    "alpha3_b": "chm",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Mari",
    "french": "mari",
    "german": "Tscheremissisch",
    "notes": "null"
  },
  "Chinook jargon": {
    "alpha3_b": "chn",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Chinook jargon",
    "french": "chinook, jargon",
    "german": "Chinook-Jargon",
    "notes": "null"
  },
  "Choctaw": {
    "alpha3_b": "cho",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Choctaw",
    "french": "choctaw",
    "german": "Choctaw-Sprache",
    "notes": "null"
  },
  "Chipewyan; Dene Suline": {
    "alpha3_b": "chp",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Chipewyan; Dene Suline",
    "french": "chipewyan",
    "german": "Chipewyan-Sprache",
    "notes": "null"
  },
  "Cherokee": {
    "alpha3_b": "chr",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Cherokee",
    "french": "cherokee",
    "german": "Cherokee-Sprache",
    "notes": "null"
  },
  "Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic": {
    "alpha3_b": "chu",
    "alpha3_t": "null",
    "alpha2": "cu",
    "english": "Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic",
    "french": "slavon d'église; vieux slave; slavon liturgique; vieux bulgare",
    "german": "Kirchenslawisch",
    "notes": "null"
  },
  "Chuvash": {
    "alpha3_b": "chv",
    "alpha3_t": "null",
    "alpha2": "cv",
    "english": "Chuvash",
    "french": "tchouvache",
    "german": "Tschuwaschisch",
    "notes": "null"
  },
  "Cheyenne": {
    "alpha3_b": "chy",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Cheyenne",
    "french": "cheyenne",
    "german": "Cheyenne-Sprache",
    "notes": "null"
  },
  "Chamic languages": {
    "alpha3_b": "cmc",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Chamic languages",
    "french": "chames, langues",
    "german": "Cham-Sprachen",
    "notes": "null"
  },
  "Montenegrin": {
    "alpha3_b": "cnr",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Montenegrin",
    "french": "monténégrin",
    "german": "Montenegrinisch",
    "notes": "null"
  },
  "Coptic": {
    "alpha3_b": "cop",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Coptic",
    "french": "copte",
    "german": "Koptisch",
    "notes": "null"
  },
  "Cornish": {
    "alpha3_b": "cor",
    "alpha3_t": "null",
    "alpha2": "kw",
    "english": "Cornish",
    "french": "cornique",
    "german": "Kornisch",
    "notes": "null"
  },
  "Corsican": {
    "alpha3_b": "cos",
    "alpha3_t": "null",
    "alpha2": "co",
    "english": "Corsican",
    "french": "corse",
    "german": "Korsisch",
    "notes": "null"
  },
  "Creoles and pidgins, English based": {
    "alpha3_b": "cpe",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Creoles and pidgins, English based",
    "french": "créoles et pidgins basés sur l'anglais",
    "german": "Kreolisch-Englisch (Andere)",
    "notes": "null"
  },
  "Sichuan Yi; Nuosu": {
    "alpha3_b": "iii",
    "alpha3_t": "null",
    "alpha2": "ii",
    "english": "Sichuan Yi; Nuosu",
    "french": "yi de Sichuan",
    "german": "Lalo-Sprache",
    "notes": "null"
  },
  "Creoles and pidgins, French-based": {
    "alpha3_b": "cpf",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Creoles and pidgins, French-based",
    "french": "créoles et pidgins basés sur le français",
    "german": "Kreolisch-Französisch (Andere)",
    "notes": "null"
  },
  "Creoles and pidgins, Portuguese-based": {
    "alpha3_b": "cpp",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Creoles and pidgins, Portuguese-based",
    "french": "créoles et pidgins basés sur le portugais",
    "german": "Kreolisch-Portugiesisch (Andere)",
    "notes": "null"
  },
  "Cree": {
    "alpha3_b": "cre",
    "alpha3_t": "null",
    "alpha2": "cr",
    "english": "Cree",
    "french": "cree",
    "german": "Cree-Sprache",
    "notes": "null"
  },
  "Crimean Tatar; Crimean Turkish": {
    "alpha3_b": "crh",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Crimean Tatar; Crimean Turkish",
    "french": "tatar de Crimé",
    "german": "Krimtatarisch",
    "notes": "null"
  },
  "Creoles and pidgins": {
    "alpha3_b": "crp",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Creoles and pidgins",
    "french": "créoles et pidgins",
    "german": "Kreolische Sprachen; Pidginsprachen (Andere)",
    "notes": "null"
  },
  "Kashubian": {
    "alpha3_b": "csb",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Kashubian",
    "french": "kachoube",
    "german": "Kaschubisch",
    "notes": "null"
  },
  "Cushitic languages": {
    "alpha3_b": "cus",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Cushitic languages",
    "french": "couchitiques, langues",
    "german": "Kuschitische Sprachen (Andere)",
    "notes": "null"
  },
  "Czech": {
    "alpha3_b": "cze",
    "alpha3_t": "ces",
    "alpha2": "cs",
    "english": "Czech",
    "french": "tchèque",
    "german": "Tschechisch",
    "notes": "null"
  },
  "Dakota": {
    "alpha3_b": "dak",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Dakota",
    "french": "dakota",
    "german": "Dakota-Sprache",
    "notes": "null"
  },
  "Danish": {
    "alpha3_b": "dan",
    "alpha3_t": "null",
    "alpha2": "da",
    "english": "Danish",
    "french": "danois",
    "german": "Dänisch",
    "notes": "null"
  },
  "Dargwa": {
    "alpha3_b": "dar",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Dargwa",
    "french": "dargwa",
    "german": "Darginisch",
    "notes": "null"
  },
  "Land Dayak languages": {
    "alpha3_b": "day",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Land Dayak languages",
    "french": "dayak, langues",
    "german": "Dajakisch",
    "notes": "null"
  },
  "Delaware": {
    "alpha3_b": "del",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Delaware",
    "french": "delaware",
    "german": "Delaware-Sprache",
    "notes": "null"
  },
  "Slave (Athapascan)": {
    "alpha3_b": "den",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Slave (Athapascan)",
    "french": "esclave (athapascan)",
    "german": "Slave-Sprache",
    "notes": "null"
  },
  "Dogrib": {
    "alpha3_b": "dgr",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Dogrib",
    "french": "dogrib",
    "german": "Dogrib-Sprache",
    "notes": "null"
  },
  "Dinka": {
    "alpha3_b": "din",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Dinka",
    "french": "dinka",
    "german": "Dinka-Sprache",
    "notes": "null"
  },
  "Divehi; Dhivehi; Maldivian": {
    "alpha3_b": "div",
    "alpha3_t": "null",
    "alpha2": "dv",
    "english": "Divehi; Dhivehi; Maldivian",
    "french": "maldivien",
    "german": "Maledivisch",
    "notes": "null"
  },
  "Dogri": {
    "alpha3_b": "doi",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Dogri",
    "french": "dogri",
    "german": "Dogri",
    "notes": "null"
  },
  "Dravidian languages": {
    "alpha3_b": "dra",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Dravidian languages",
    "french": "dravidiennes, langues",
    "german": "Drawidische Sprachen (Andere)",
    "notes": "null"
  },
  "Lower Sorbian": {
    "alpha3_b": "dsb",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Lower Sorbian",
    "french": "bas-sorabe",
    "german": "Niedersorbisch",
    "notes": "null"
  },
  "Duala": {
    "alpha3_b": "dua",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Duala",
    "french": "douala",
    "german": "Duala-Sprachen",
    "notes": "null"
  },
  "Dutch, Middle (ca.1050-1350)": {
    "alpha3_b": "dum",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Dutch, Middle (ca.1050-1350)",
    "french": "néerlandais moyen (ca. 1050-1350)",
    "german": "Mittelniederländisch",
    "notes": "null"
  },
  "Dutch; Flemish": {
    "alpha3_b": "dut",
    "alpha3_t": "nld",
    "alpha2": "nl",
    "english": "Dutch; Flemish",
    "french": "néerlandais; flamand",
    "german": "Niederländisch",
    "notes": "null"
  },
  "Dyula": {
    "alpha3_b": "dyu",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Dyula",
    "french": "dioula",
    "german": "Dyula-Sprache",
    "notes": "null"
  },
  "Dzongkha": {
    "alpha3_b": "dzo",
    "alpha3_t": "null",
    "alpha2": "dz",
    "english": "Dzongkha",
    "french": "dzongkha",
    "german": "Dzongkha",
    "notes": "null"
  },
  "Efik": {
    "alpha3_b": "efi",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Efik",
    "french": "efik",
    "german": "Efik",
    "notes": "null"
  },
  "Egyptian (Ancient)": {
    "alpha3_b": "egy",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Egyptian (Ancient)",
    "french": "égyptien",
    "german": "Ägyptisch",
    "notes": "null"
  },
  "Ekajuk": {
    "alpha3_b": "eka",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Ekajuk",
    "french": "ekajuk",
    "german": "Ekajuk",
    "notes": "null"
  },
  "Elamite": {
    "alpha3_b": "elx",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Elamite",
    "french": "élamite",
    "german": "Elamisch",
    "notes": "null"
  },
  "English": {
    "alpha3_b": "eng",
    "alpha3_t": "null",
    "alpha2": "en",
    "english": "English",
    "french": "anglais",
    "german": "Englisch",
    "notes": "null"
  },
  "English, Middle (1100-1500)": {
    "alpha3_b": "enm",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "English, Middle (1100-1500)",
    "french": "anglais moyen (1100-1500)",
    "german": "Mittelenglisch",
    "notes": "null"
  },
  "Esperanto": {
    "alpha3_b": "epo",
    "alpha3_t": "null",
    "alpha2": "eo",
    "english": "Esperanto",
    "french": "espéranto",
    "german": "Esperanto",
    "notes": "null"
  },
  "Estonian": {
    "alpha3_b": "est",
    "alpha3_t": "null",
    "alpha2": "et",
    "english": "Estonian",
    "french": "estonien",
    "german": "Estnisch",
    "notes": "null"
  },
  "Ewe": {
    "alpha3_b": "ewe",
    "alpha3_t": "null",
    "alpha2": "ee",
    "english": "Ewe",
    "french": "éwé",
    "german": "Ewe-Sprache",
    "notes": "null"
  },
  "Ewondo": {
    "alpha3_b": "ewo",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Ewondo",
    "french": "éwondo",
    "german": "Ewondo",
    "notes": "null"
  },
  "Fang": {
    "alpha3_b": "fan",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Fang",
    "french": "fang",
    "german": "Pangwe-Sprache",
    "notes": "null"
  },
  "Faroese": {
    "alpha3_b": "fao",
    "alpha3_t": "null",
    "alpha2": "fo",
    "english": "Faroese",
    "french": "féroïen",
    "german": "Färöisch",
    "notes": "null"
  },
  "Fanti": {
    "alpha3_b": "fat",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Fanti",
    "french": "fanti",
    "german": "Fante-Sprache",
    "notes": "null"
  },
  "Fijian": {
    "alpha3_b": "fij",
    "alpha3_t": "null",
    "alpha2": "fj",
    "english": "Fijian",
    "french": "fidjien",
    "german": "Fidschi-Sprache",
    "notes": "null"
  },
  "Filipino; Pilipino": {
    "alpha3_b": "fil",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Filipino; Pilipino",
    "french": "filipino; pilipino",
    "german": "Pilipino",
    "notes": "null"
  },
  "Finnish": {
    "alpha3_b": "fin",
    "alpha3_t": "null",
    "alpha2": "fi",
    "english": "Finnish",
    "french": "finnois",
    "german": "Finnisch",
    "notes": "null"
  },
  "Finno-Ugrian languages": {
    "alpha3_b": "fiu",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Finno-Ugrian languages",
    "french": "finno-ougriennes, langues",
    "german": "Finnougrische Sprachen (Andere)",
    "notes": "null"
  },
  "Fon": {
    "alpha3_b": "fon",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Fon",
    "french": "fon",
    "german": "Fon-Sprache",
    "notes": "null"
  },
  "French": {
    "alpha3_b": "fre",
    "alpha3_t": "fra",
    "alpha2": "fr",
    "english": "French",
    "french": "français",
    "german": "Französisch",
    "notes": "null"
  },
  "French, Middle (ca.1400-1600)": {
    "alpha3_b": "frm",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "French, Middle (ca.1400-1600)",
    "french": "français moyen (1400-1600)",
    "german": "Mittelfranzösisch",
    "notes": "null"
  },
  "French, Old (842-ca.1400)": {
    "alpha3_b": "fro",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "French, Old (842-ca.1400)",
    "french": "français ancien (842-ca.1400)",
    "german": "Altfranzösisch",
    "notes": "null"
  },
  "Northern Frisian": {
    "alpha3_b": "frr",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Northern Frisian",
    "french": "frison septentrional",
    "german": "Nordfriesisch",
    "notes": "null"
  },
  "Eastern Frisian": {
    "alpha3_b": "frs",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Eastern Frisian",
    "french": "frison oriental",
    "german": "Ostfriesisch",
    "notes": "null"
  },
  "Western Frisian": {
    "alpha3_b": "fry",
    "alpha3_t": "null",
    "alpha2": "fy",
    "english": "Western Frisian",
    "french": "frison occidental",
    "german": "Friesisch",
    "notes": "null"
  },
  "Fulah": {
    "alpha3_b": "ful",
    "alpha3_t": "null",
    "alpha2": "ff",
    "english": "Fulah",
    "french": "peul",
    "german": "Ful",
    "notes": "null"
  },
  "Friulian": {
    "alpha3_b": "fur",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Friulian",
    "french": "frioulan",
    "german": "Friulisch",
    "notes": "null"
  },
  "Ga": {
    "alpha3_b": "gaa",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Ga",
    "french": "ga",
    "german": "Ga-Sprache",
    "notes": "null"
  },
  "Gayo": {
    "alpha3_b": "gay",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Gayo",
    "french": "gayo",
    "german": "Gayo-Sprache",
    "notes": "null"
  },
  "Gbaya": {
    "alpha3_b": "gba",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Gbaya",
    "french": "gbaya",
    "german": "Gbaya-Sprache",
    "notes": "null"
  },
  "Germanic languages": {
    "alpha3_b": "gem",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Germanic languages",
    "french": "germaniques, langues",
    "german": "Germanische Sprachen (Andere)",
    "notes": "null"
  },
  "Georgian": {
    "alpha3_b": "geo",
    "alpha3_t": "kat",
    "alpha2": "ka",
    "english": "Georgian",
    "french": "géorgien",
    "german": "Georgisch",
    "notes": "null"
  },
  "German": {
    "alpha3_b": "ger",
    "alpha3_t": "deu",
    "alpha2": "de",
    "english": "German",
    "french": "allemand",
    "german": "Deutsch",
    "notes": "null"
  },
  "Geez": {
    "alpha3_b": "gez",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Geez",
    "french": "guèze",
    "german": "Altäthiopisch",
    "notes": "null"
  },
  "Gilbertese": {
    "alpha3_b": "gil",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Gilbertese",
    "french": "kiribati",
    "german": "Gilbertesisch",
    "notes": "null"
  },
  "Gaelic; Scottish Gaelic": {
    "alpha3_b": "gla",
    "alpha3_t": "null",
    "alpha2": "gd",
    "english": "Gaelic; Scottish Gaelic",
    "french": "gaélique; gaélique écossais",
    "german": "Gälisch-Schottisch",
    "notes": "null"
  },
  "Irish": {
    "alpha3_b": "gle",
    "alpha3_t": "null",
    "alpha2": "ga",
    "english": "Irish",
    "french": "irlandais",
    "german": "Irisch",
    "notes": "null"
  },
  "Galician": {
    "alpha3_b": "glg",
    "alpha3_t": "null",
    "alpha2": "gl",
    "english": "Galician",
    "french": "galicien",
    "german": "Galicisch",
    "notes": "null"
  },
  "Manx": {
    "alpha3_b": "glv",
    "alpha3_t": "null",
    "alpha2": "gv",
    "english": "Manx",
    "french": "manx; mannois",
    "german": "Manx",
    "notes": "null"
  },
  "German, Middle High (ca.1050-1500)": {
    "alpha3_b": "gmh",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "German, Middle High (ca.1050-1500)",
    "french": "allemand, moyen haut (ca. 1050-1500)",
    "german": "Mittelhochdeutsch",
    "notes": "null"
  },
  "German, Old High (ca.750-1050)": {
    "alpha3_b": "goh",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "German, Old High (ca.750-1050)",
    "french": "allemand, vieux haut (ca. 750-1050)",
    "german": "Althochdeutsch",
    "notes": "null"
  },
  "Gondi": {
    "alpha3_b": "gon",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Gondi",
    "french": "gond",
    "german": "Gondi-Sprache",
    "notes": "null"
  },
  "Gorontalo": {
    "alpha3_b": "gor",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Gorontalo",
    "french": "gorontalo",
    "german": "Gorontalesisch",
    "notes": "null"
  },
  "Gothic": {
    "alpha3_b": "got",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Gothic",
    "french": "gothique",
    "german": "Gotisch",
    "notes": "null"
  },
  "Grebo": {
    "alpha3_b": "grb",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Grebo",
    "french": "grebo",
    "german": "Grebo-Sprache",
    "notes": "null"
  },
  "Greek, Ancient (to 1453)": {
    "alpha3_b": "grc",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Greek, Ancient (to 1453)",
    "french": "grec ancien (jusqu'à 1453)",
    "german": "Griechisch",
    "notes": "null"
  },
  "Greek, Modern (1453-)": {
    "alpha3_b": "gre",
    "alpha3_t": "ell",
    "alpha2": "el",
    "english": "Greek, Modern (1453-)",
    "french": "grec moderne (après 1453)",
    "german": "Neugriechisch",
    "notes": "null"
  },
  "Guarani": {
    "alpha3_b": "grn",
    "alpha3_t": "null",
    "alpha2": "gn",
    "english": "Guarani",
    "french": "guarani",
    "german": "Guaraní-Sprache",
    "notes": "null"
  },
  "Swiss German; Alemannic; Alsatian": {
    "alpha3_b": "gsw",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Swiss German; Alemannic; Alsatian",
    "french": "suisse alémanique; alémanique; alsacien",
    "german": "Schweizerdeutsch",
    "notes": "null"
  },
  "Gujarati": {
    "alpha3_b": "guj",
    "alpha3_t": "null",
    "alpha2": "gu",
    "english": "Gujarati",
    "french": "goudjrati",
    "german": "Gujarati-Sprache",
    "notes": "null"
  },
  "Gwich'in": {
    "alpha3_b": "gwi",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Gwich'in",
    "french": "gwich'in",
    "german": "Kutchin-Sprache",
    "notes": "null"
  },
  "Haida": {
    "alpha3_b": "hai",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Haida",
    "french": "haida",
    "german": "Haida-Sprache",
    "notes": "null"
  },
  "Haitian; Haitian Creole": {
    "alpha3_b": "hat",
    "alpha3_t": "null",
    "alpha2": "ht",
    "english": "Haitian; Haitian Creole",
    "french": "haïtien; créole haïtien",
    "german": "Haïtien (Haiti-Kreolisch)",
    "notes": "null"
  },
  "Hausa": {
    "alpha3_b": "hau",
    "alpha3_t": "null",
    "alpha2": "ha",
    "english": "Hausa",
    "french": "haoussa",
    "german": "Haussa-Sprache",
    "notes": "null"
  },
  "Hawaiian": {
    "alpha3_b": "haw",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Hawaiian",
    "french": "hawaïen",
    "german": "Hawaiisch",
    "notes": "null"
  },
  "Hebrew": {
    "alpha3_b": "heb",
    "alpha3_t": "null",
    "alpha2": "he",
    "english": "Hebrew",
    "french": "hébreu",
    "german": "Hebräisch",
    "notes": "null"
  },
  "Herero": {
    "alpha3_b": "her",
    "alpha3_t": "null",
    "alpha2": "hz",
    "english": "Herero",
    "french": "herero",
    "german": "Herero-Sprache",
    "notes": "null"
  },
  "Hiligaynon": {
    "alpha3_b": "hil",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Hiligaynon",
    "french": "hiligaynon",
    "german": "Hiligaynon-Sprache",
    "notes": "null"
  },
  "Himachali languages; Western Pahari languages": {
    "alpha3_b": "him",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Himachali languages; Western Pahari languages",
    "french": "langues himachalis; langues paharis occidentales",
    "german": "Himachali",
    "notes": "null"
  },
  "Hindi": {
    "alpha3_b": "hin",
    "alpha3_t": "null",
    "alpha2": "hi",
    "english": "Hindi",
    "french": "hindi",
    "german": "Hindi",
    "notes": "null"
  },
  "Hittite": {
    "alpha3_b": "hit",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Hittite",
    "french": "hittite",
    "german": "Hethitisch",
    "notes": "null"
  },
  "Hmong; Mong": {
    "alpha3_b": "hmn",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Hmong; Mong",
    "french": "hmong",
    "german": "Miao-Sprachen",
    "notes": "null"
  },
  "Hiri Motu": {
    "alpha3_b": "hmo",
    "alpha3_t": "null",
    "alpha2": "ho",
    "english": "Hiri Motu",
    "french": "hiri motu",
    "german": "Hiri-Motu",
    "notes": "null"
  },
  "Croatian": {
    "alpha3_b": "hrv",
    "alpha3_t": "null",
    "alpha2": "hr",
    "english": "Croatian",
    "french": "croate",
    "german": "Kroatisch",
    "notes": "null"
  },
  "Upper Sorbian": {
    "alpha3_b": "hsb",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Upper Sorbian",
    "french": "haut-sorabe",
    "german": "Obersorbisch",
    "notes": "null"
  },
  "Hungarian": {
    "alpha3_b": "hun",
    "alpha3_t": "null",
    "alpha2": "hu",
    "english": "Hungarian",
    "french": "hongrois",
    "german": "Ungarisch",
    "notes": "null"
  },
  "Hupa": {
    "alpha3_b": "hup",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Hupa",
    "french": "hupa",
    "german": "Hupa-Sprache",
    "notes": "null"
  },
  "Iban": {
    "alpha3_b": "iba",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Iban",
    "french": "iban",
    "german": "Iban-Sprache",
    "notes": "null"
  },
  "Igbo": {
    "alpha3_b": "ibo",
    "alpha3_t": "null",
    "alpha2": "ig",
    "english": "Igbo",
    "french": "igbo",
    "german": "Ibo-Sprache",
    "notes": "null"
  },
  "Icelandic": {
    "alpha3_b": "ice",
    "alpha3_t": "isl",
    "alpha2": "is",
    "english": "Icelandic",
    "french": "islandais",
    "german": "Isländisch",
    "notes": "null"
  },
  "Ido": {
    "alpha3_b": "ido",
    "alpha3_t": "null",
    "alpha2": "io",
    "english": "Ido",
    "french": "ido",
    "german": "Ido",
    "notes": "null"
  },
  "Zuni": {
    "alpha3_b": "zun",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Zuni",
    "french": "zuni",
    "german": "Zuñi-Sprache",
    "notes": "null"
  },
  "Ijo languages": {
    "alpha3_b": "ijo",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Ijo languages",
    "french": "ijo, langues",
    "german": "Ijo-Sprache",
    "notes": "null"
  },
  "Inuktitut": {
    "alpha3_b": "iku",
    "alpha3_t": "null",
    "alpha2": "iu",
    "english": "Inuktitut",
    "french": "inuktitut",
    "german": "Inuktitut",
    "notes": "null"
  },
  "Interlingue; Occidental": {
    "alpha3_b": "ile",
    "alpha3_t": "null",
    "alpha2": "ie",
    "english": "Interlingue; Occidental",
    "french": "interlingue",
    "german": "Interlingue",
    "notes": "null"
  },
  "Iloko": {
    "alpha3_b": "ilo",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Iloko",
    "french": "ilocano",
    "german": "Ilokano-Sprache",
    "notes": "null"
  },
  "Interlingua (International Auxiliary Language Association)": {
    "alpha3_b": "ina",
    "alpha3_t": "null",
    "alpha2": "ia",
    "english": "Interlingua (International Auxiliary Language Association)",
    "french": "interlingua (langue auxiliaire internationale)",
    "german": "Interlingua",
    "notes": "null"
  },
  "Indic languages": {
    "alpha3_b": "inc",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Indic languages",
    "french": "indo-aryennes, langues",
    "german": "Indoarische Sprachen (Andere)",
    "notes": "null"
  },
  "Indonesian": {
    "alpha3_b": "ind",
    "alpha3_t": "null",
    "alpha2": "id",
    "english": "Indonesian",
    "french": "indonésien",
    "german": "Bahasa Indonesia",
    "notes": "null"
  },
  "Indo-European languages": {
    "alpha3_b": "ine",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Indo-European languages",
    "french": "indo-européennes, langues",
    "german": "Indogermanische Sprachen (Andere)",
    "notes": "null"
  },
  "Ingush": {
    "alpha3_b": "inh",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Ingush",
    "french": "ingouche",
    "german": "Inguschisch",
    "notes": "null"
  },
  "Inupiaq": {
    "alpha3_b": "ipk",
    "alpha3_t": "null",
    "alpha2": "ik",
    "english": "Inupiaq",
    "french": "inupiaq",
    "german": "Inupik",
    "notes": "null"
  },
  "Iranian languages": {
    "alpha3_b": "ira",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Iranian languages",
    "french": "iraniennes, langues",
    "german": "Iranische Sprachen (Andere)",
    "notes": "null"
  },
  "Iroquoian languages": {
    "alpha3_b": "iro",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Iroquoian languages",
    "french": "iroquoises, langues",
    "german": "Irokesische Sprachen",
    "notes": "null"
  },
  "Italian": {
    "alpha3_b": "ita",
    "alpha3_t": "null",
    "alpha2": "it",
    "english": "Italian",
    "french": "italien",
    "german": "Italienisch",
    "notes": "null"
  },
  "Javanese": {
    "alpha3_b": "jav",
    "alpha3_t": "null",
    "alpha2": "jv",
    "english": "Javanese",
    "french": "javanais",
    "german": "Javanisch",
    "notes": "null"
  },
  "Lojban": {
    "alpha3_b": "jbo",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Lojban",
    "french": "lojban",
    "german": "Lojban",
    "notes": "null"
  },
  "Japanese": {
    "alpha3_b": "jpn",
    "alpha3_t": "null",
    "alpha2": "ja",
    "english": "Japanese",
    "french": "japonais",
    "german": "Japanisch",
    "notes": "null"
  },
  "Judeo-Persian": {
    "alpha3_b": "jpr",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Judeo-Persian",
    "french": "judéo-persan",
    "german": "Jüdisch-Persisch",
    "notes": "null"
  },
  "Judeo-Arabic": {
    "alpha3_b": "jrb",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Judeo-Arabic",
    "french": "judéo-arabe",
    "german": "Jüdisch-Arabisch",
    "notes": "null"
  },
  "Kara-Kalpak": {
    "alpha3_b": "kaa",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Kara-Kalpak",
    "french": "karakalpak",
    "german": "Karakalpakisch",
    "notes": "null"
  },
  "Kabyle": {
    "alpha3_b": "kab",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Kabyle",
    "french": "kabyle",
    "german": "Kabylisch",
    "notes": "null"
  },
  "Kachin; Jingpho": {
    "alpha3_b": "kac",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Kachin; Jingpho",
    "french": "kachin; jingpho",
    "german": "Kachin-Sprache",
    "notes": "null"
  },
  "Kalaallisut; Greenlandic": {
    "alpha3_b": "kal",
    "alpha3_t": "null",
    "alpha2": "kl",
    "english": "Kalaallisut; Greenlandic",
    "french": "groenlandais",
    "german": "Grönländisch",
    "notes": "null"
  },
  "Kamba": {
    "alpha3_b": "kam",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Kamba",
    "french": "kamba",
    "german": "Kamba-Sprache",
    "notes": "null"
  },
  "Kannada": {
    "alpha3_b": "kan",
    "alpha3_t": "null",
    "alpha2": "kn",
    "english": "Kannada",
    "french": "kannada",
    "german": "Kannada",
    "notes": "null"
  },
  "Karen languages": {
    "alpha3_b": "kar",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Karen languages",
    "french": "karen, langues",
    "german": "Karenisch",
    "notes": "null"
  },
  "Kashmiri": {
    "alpha3_b": "kas",
    "alpha3_t": "null",
    "alpha2": "ks",
    "english": "Kashmiri",
    "french": "kashmiri",
    "german": "Kaschmiri",
    "notes": "null"
  },
  "Kanuri": {
    "alpha3_b": "kau",
    "alpha3_t": "null",
    "alpha2": "kr",
    "english": "Kanuri",
    "french": "kanouri",
    "german": "Kanuri-Sprache",
    "notes": "null"
  },
  "Kawi": {
    "alpha3_b": "kaw",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Kawi",
    "french": "kawi",
    "german": "Kawi",
    "notes": "null"
  },
  "Kazakh": {
    "alpha3_b": "kaz",
    "alpha3_t": "null",
    "alpha2": "kk",
    "english": "Kazakh",
    "french": "kazakh",
    "german": "Kasachisch",
    "notes": "null"
  },
  "Kabardian": {
    "alpha3_b": "kbd",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Kabardian",
    "french": "kabardien",
    "german": "Kabardinisch",
    "notes": "null"
  },
  "Khasi": {
    "alpha3_b": "kha",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Khasi",
    "french": "khasi",
    "german": "Khasi-Sprache",
    "notes": "null"
  },
  "Khoisan languages": {
    "alpha3_b": "khi",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Khoisan languages",
    "french": "khoïsan, langues",
    "german": "Khoisan-Sprachen (Andere)",
    "notes": "null"
  },
  "Central Khmer": {
    "alpha3_b": "khm",
    "alpha3_t": "null",
    "alpha2": "km",
    "english": "Central Khmer",
    "french": "khmer central",
    "german": "Kambodschanisch",
    "notes": "null"
  },
  "Khotanese; Sakan": {
    "alpha3_b": "kho",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Khotanese; Sakan",
    "french": "khotanais; sakan",
    "german": "Sakisch",
    "notes": "null"
  },
  "Kikuyu; Gikuyu": {
    "alpha3_b": "kik",
    "alpha3_t": "null",
    "alpha2": "ki",
    "english": "Kikuyu; Gikuyu",
    "french": "kikuyu",
    "german": "Kikuyu-Sprache",
    "notes": "null"
  },
  "Kinyarwanda": {
    "alpha3_b": "kin",
    "alpha3_t": "null",
    "alpha2": "rw",
    "english": "Kinyarwanda",
    "french": "rwanda",
    "german": "Rwanda-Sprache",
    "notes": "null"
  },
  "Kirghiz; Kyrgyz": {
    "alpha3_b": "kir",
    "alpha3_t": "null",
    "alpha2": "ky",
    "english": "Kirghiz; Kyrgyz",
    "french": "kirghiz",
    "german": "Kirgisisch",
    "notes": "null"
  },
  "Kimbundu": {
    "alpha3_b": "kmb",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Kimbundu",
    "french": "kimbundu",
    "german": "Kimbundu-Sprache",
    "notes": "null"
  },
  "Konkani": {
    "alpha3_b": "kok",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Konkani",
    "french": "konkani",
    "german": "Konkani",
    "notes": "null"
  },
  "Komi": {
    "alpha3_b": "kom",
    "alpha3_t": "null",
    "alpha2": "kv",
    "english": "Komi",
    "french": "kom",
    "german": "Komi-Sprache",
    "notes": "null"
  },
  "Kongo": {
    "alpha3_b": "kon",
    "alpha3_t": "null",
    "alpha2": "kg",
    "english": "Kongo",
    "french": "kongo",
    "german": "Kongo-Sprache",
    "notes": "null"
  },
  "Korean": {
    "alpha3_b": "kor",
    "alpha3_t": "null",
    "alpha2": "ko",
    "english": "Korean",
    "french": "coréen",
    "german": "Koreanisch",
    "notes": "null"
  },
  "Kosraean": {
    "alpha3_b": "kos",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Kosraean",
    "french": "kosrae",
    "german": "Kosraeanisch",
    "notes": "null"
  },
  "Kpelle": {
    "alpha3_b": "kpe",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Kpelle",
    "french": "kpellé",
    "german": "Kpelle-Sprache",
    "notes": "null"
  },
  "Karachay-Balkar": {
    "alpha3_b": "krc",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Karachay-Balkar",
    "french": "karatchai balkar",
    "german": "Karatschaiisch-Balkarisch",
    "notes": "null"
  },
  "Karelian": {
    "alpha3_b": "krl",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Karelian",
    "french": "carélien",
    "german": "Karelisch",
    "notes": "null"
  },
  "Kru languages": {
    "alpha3_b": "kro",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Kru languages",
    "french": "krou, langues",
    "german": "Kru-Sprachen (Andere)",
    "notes": "null"
  },
  "Kurukh": {
    "alpha3_b": "kru",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Kurukh",
    "french": "kurukh",
    "german": "Oraon-Sprache",
    "notes": "null"
  },
  "Kuanyama; Kwanyama": {
    "alpha3_b": "kua",
    "alpha3_t": "null",
    "alpha2": "kj",
    "english": "Kuanyama; Kwanyama",
    "french": "kuanyama; kwanyama",
    "german": "Kwanyama-Sprache",
    "notes": "null"
  },
  "Kumyk": {
    "alpha3_b": "kum",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Kumyk",
    "french": "koumyk",
    "german": "Kumükisch",
    "notes": "null"
  },
  "Kurdish": {
    "alpha3_b": "kur",
    "alpha3_t": "null",
    "alpha2": "ku",
    "english": "Kurdish",
    "french": "kurde",
    "german": "Kurdisch",
    "notes": "null"
  },
  "Kutenai": {
    "alpha3_b": "kut",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Kutenai",
    "french": "kutenai",
    "german": "Kutenai-Sprache",
    "notes": "null"
  },
  "Ladino": {
    "alpha3_b": "lad",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Ladino",
    "french": "judéo-espagnol",
    "german": "Judenspanisch",
    "notes": "null"
  },
  "Lahnda": {
    "alpha3_b": "lah",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Lahnda",
    "french": "lahnda",
    "german": "Lahnda",
    "notes": "null"
  },
  "Lamba": {
    "alpha3_b": "lam",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Lamba",
    "french": "lamba",
    "german": "Lamba-Sprache (Bantusprache)",
    "notes": "null"
  },
  "Lao": {
    "alpha3_b": "lao",
    "alpha3_t": "null",
    "alpha2": "lo",
    "english": "Lao",
    "french": "lao",
    "german": "Laotisch",
    "notes": "null"
  },
  "Latin": {
    "alpha3_b": "lat",
    "alpha3_t": "null",
    "alpha2": "la",
    "english": "Latin",
    "french": "latin",
    "german": "Latein",
    "notes": "null"
  },
  "Latvian": {
    "alpha3_b": "lav",
    "alpha3_t": "null",
    "alpha2": "lv",
    "english": "Latvian",
    "french": "letton",
    "german": "Lettisch",
    "notes": "null"
  },
  "Lezghian": {
    "alpha3_b": "lez",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Lezghian",
    "french": "lezghien",
    "german": "Lesgisch",
    "notes": "null"
  },
  "Limburgan; Limburger; Limburgish": {
    "alpha3_b": "lim",
    "alpha3_t": "null",
    "alpha2": "li",
    "english": "Limburgan; Limburger; Limburgish",
    "french": "limbourgeois",
    "german": "Limburgisch",
    "notes": "null"
  },
  "Lingala": {
    "alpha3_b": "lin",
    "alpha3_t": "null",
    "alpha2": "ln",
    "english": "Lingala",
    "french": "lingala",
    "german": "Lingala",
    "notes": "null"
  },
  "Lithuanian": {
    "alpha3_b": "lit",
    "alpha3_t": "null",
    "alpha2": "lt",
    "english": "Lithuanian",
    "french": "lituanien",
    "german": "Litauisch",
    "notes": "null"
  },
  "Mongo": {
    "alpha3_b": "lol",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Mongo",
    "french": "mongo",
    "german": "Mongo-Sprache",
    "notes": "null"
  },
  "Lozi": {
    "alpha3_b": "loz",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Lozi",
    "french": "lozi",
    "german": "Rotse-Sprache",
    "notes": "null"
  },
  "Luxembourgish; Letzeburgesch": {
    "alpha3_b": "ltz",
    "alpha3_t": "null",
    "alpha2": "lb",
    "english": "Luxembourgish; Letzeburgesch",
    "french": "luxembourgeois",
    "german": "Luxemburgisch",
    "notes": "null"
  },
  "Luba-Lulua": {
    "alpha3_b": "lua",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Luba-Lulua",
    "french": "luba-lulua",
    "german": "Lulua-Sprache",
    "notes": "null"
  },
  "Luba-Katanga": {
    "alpha3_b": "lub",
    "alpha3_t": "null",
    "alpha2": "lu",
    "english": "Luba-Katanga",
    "french": "luba-katanga",
    "german": "Luba-Katanga-Sprache",
    "notes": "null"
  },
  "Ganda": {
    "alpha3_b": "lug",
    "alpha3_t": "null",
    "alpha2": "lg",
    "english": "Ganda",
    "french": "ganda",
    "german": "Ganda-Sprache",
    "notes": "null"
  },
  "Luiseno": {
    "alpha3_b": "lui",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Luiseno",
    "french": "luiseno",
    "german": "Luiseño-Sprache",
    "notes": "null"
  },
  "Lunda": {
    "alpha3_b": "lun",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Lunda",
    "french": "lunda",
    "german": "Lunda-Sprache",
    "notes": "null"
  },
  "Luo (Kenya and Tanzania)": {
    "alpha3_b": "luo",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Luo (Kenya and Tanzania)",
    "french": "luo (Kenya et Tanzanie)",
    "german": "Luo-Sprache",
    "notes": "null"
  },
  "Lushai": {
    "alpha3_b": "lus",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Lushai",
    "french": "lushai",
    "german": "Lushai-Sprache",
    "notes": "null"
  },
  "Macedonian": {
    "alpha3_b": "mac",
    "alpha3_t": "mkd",
    "alpha2": "mk",
    "english": "Macedonian",
    "french": "macédonien",
    "german": "Makedonisch",
    "notes": "null"
  },
  "Madurese": {
    "alpha3_b": "mad",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Madurese",
    "french": "madourais",
    "german": "Maduresisch",
    "notes": "null"
  },
  "Magahi": {
    "alpha3_b": "mag",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Magahi",
    "french": "magahi",
    "german": "Khotta",
    "notes": "null"
  },
  "Marshallese": {
    "alpha3_b": "mah",
    "alpha3_t": "null",
    "alpha2": "mh",
    "english": "Marshallese",
    "french": "marshall",
    "german": "Marschallesisch",
    "notes": "null"
  },
  "Maithili": {
    "alpha3_b": "mai",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Maithili",
    "french": "maithili",
    "german": "Maithili",
    "notes": "null"
  },
  "Makasar": {
    "alpha3_b": "mak",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Makasar",
    "french": "makassar",
    "german": "Makassarisch",
    "notes": "null"
  },
  "Malayalam": {
    "alpha3_b": "mal",
    "alpha3_t": "null",
    "alpha2": "ml",
    "english": "Malayalam",
    "french": "malayalam",
    "german": "Malayalam",
    "notes": "null"
  },
  "Mandingo": {
    "alpha3_b": "man",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Mandingo",
    "french": "mandingue",
    "german": "Malinke-Sprache",
    "notes": "null"
  },
  "Maori": {
    "alpha3_b": "mao",
    "alpha3_t": "mri",
    "alpha2": "mi",
    "english": "Maori",
    "french": "maori",
    "german": "Maori-Sprache",
    "notes": "null"
  },
  "Austronesian languages": {
    "alpha3_b": "map",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Austronesian languages",
    "french": "austronésiennes, langues",
    "german": "Austronesische Sprachen (Andere)",
    "notes": "null"
  },
  "Marathi": {
    "alpha3_b": "mar",
    "alpha3_t": "null",
    "alpha2": "mr",
    "english": "Marathi",
    "french": "marathe",
    "german": "Marathi",
    "notes": "null"
  },
  "Masai": {
    "alpha3_b": "mas",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Masai",
    "french": "massaï",
    "german": "Massai-Sprache",
    "notes": "null"
  },
  "Malay": {
    "alpha3_b": "may",
    "alpha3_t": "msa",
    "alpha2": "ms",
    "english": "Malay",
    "french": "malais",
    "german": "Malaiisch",
    "notes": "null"
  },
  "Moksha": {
    "alpha3_b": "mdf",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Moksha",
    "french": "moksa",
    "german": "Mokscha-Sprache",
    "notes": "null"
  },
  "Mandar": {
    "alpha3_b": "mdr",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Mandar",
    "french": "mandar",
    "german": "Mandaresisch",
    "notes": "null"
  },
  "Mende": {
    "alpha3_b": "men",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Mende",
    "french": "mendé",
    "german": "Mende-Sprache",
    "notes": "null"
  },
  "Irish, Middle (900-1200)": {
    "alpha3_b": "mga",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Irish, Middle (900-1200)",
    "french": "irlandais moyen (900-1200)",
    "german": "Mittelirisch",
    "notes": "null"
  },
  "Mi'kmaq; Micmac": {
    "alpha3_b": "mic",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Mi'kmaq; Micmac",
    "french": "mi'kmaq; micmac",
    "german": "Micmac-Sprache",
    "notes": "null"
  },
  "Minangkabau": {
    "alpha3_b": "min",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Minangkabau",
    "french": "minangkabau",
    "german": "Minangkabau-Sprache",
    "notes": "null"
  },
  "Uncoded languages": {
    "alpha3_b": "mis",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Uncoded languages",
    "french": "langues non codées",
    "german": "Einzelne andere Sprachen",
    "notes": "null"
  },
  "Mon-Khmer languages": {
    "alpha3_b": "mkh",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Mon-Khmer languages",
    "french": "môn-khmer, langues",
    "german": "Mon-Khmer-Sprachen (Andere)",
    "notes": "null"
  },
  "Malagasy": {
    "alpha3_b": "mlg",
    "alpha3_t": "null",
    "alpha2": "mg",
    "english": "Malagasy",
    "french": "malgache",
    "german": "Malagassi-Sprache",
    "notes": "null"
  },
  "Maltese": {
    "alpha3_b": "mlt",
    "alpha3_t": "null",
    "alpha2": "mt",
    "english": "Maltese",
    "french": "maltais",
    "german": "Maltesisch",
    "notes": "null"
  },
  "Manchu": {
    "alpha3_b": "mnc",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Manchu",
    "french": "mandchou",
    "german": "Mandschurisch",
    "notes": "null"
  },
  "Manipuri": {
    "alpha3_b": "mni",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Manipuri",
    "french": "manipuri",
    "german": "Meithei-Sprache",
    "notes": "null"
  },
  "Manobo languages": {
    "alpha3_b": "mno",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Manobo languages",
    "french": "manobo, langues",
    "german": "Manobo-Sprachen",
    "notes": "null"
  },
  "Mohawk": {
    "alpha3_b": "moh",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Mohawk",
    "french": "mohawk",
    "german": "Mohawk-Sprache",
    "notes": "null"
  },
  "Mongolian": {
    "alpha3_b": "mon",
    "alpha3_t": "null",
    "alpha2": "mn",
    "english": "Mongolian",
    "french": "mongol",
    "german": "Mongolisch",
    "notes": "null"
  },
  "Mossi": {
    "alpha3_b": "mos",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Mossi",
    "french": "moré",
    "german": "Mossi-Sprache",
    "notes": "null"
  },
  "Multiple languages": {
    "alpha3_b": "mul",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Multiple languages",
    "french": "multilingue",
    "german": "Mehrere Sprachen",
    "notes": "null"
  },
  "Munda languages": {
    "alpha3_b": "mun",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Munda languages",
    "french": "mounda, langues",
    "german": "Mundasprachen (Andere)",
    "notes": "null"
  },
  "Creek": {
    "alpha3_b": "mus",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Creek",
    "french": "muskogee",
    "german": "Muskogisch",
    "notes": "null"
  },
  "Mirandese": {
    "alpha3_b": "mwl",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Mirandese",
    "french": "mirandais",
    "german": "Mirandesisch",
    "notes": "null"
  },
  "Marwari": {
    "alpha3_b": "mwr",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Marwari",
    "french": "marvari",
    "german": "Marwari",
    "notes": "null"
  },
  "Mayan languages": {
    "alpha3_b": "myn",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Mayan languages",
    "french": "maya, langues",
    "german": "Maya-Sprachen",
    "notes": "null"
  },
  "Erzya": {
    "alpha3_b": "myv",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Erzya",
    "french": "erza",
    "german": "Erza-Mordwinisch",
    "notes": "null"
  },
  "Nahuatl languages": {
    "alpha3_b": "nah",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Nahuatl languages",
    "french": "nahuatl, langues",
    "german": "Nahuatl",
    "notes": "null"
  },
  "North American Indian languages": {
    "alpha3_b": "nai",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "North American Indian languages",
    "french": "nord-amérindiennes, langues",
    "german": "Indianersprachen, Nordamerika (Andere)",
    "notes": "null"
  },
  "Neapolitan": {
    "alpha3_b": "nap",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Neapolitan",
    "french": "napolitain",
    "german": "Neapel / Mundart",
    "notes": "null"
  },
  "Nauru": {
    "alpha3_b": "nau",
    "alpha3_t": "null",
    "alpha2": "na",
    "english": "Nauru",
    "french": "nauruan",
    "german": "Nauruanisch",
    "notes": "null"
  },
  "Navajo; Navaho": {
    "alpha3_b": "nav",
    "alpha3_t": "null",
    "alpha2": "nv",
    "english": "Navajo; Navaho",
    "french": "navaho",
    "german": "Navajo-Sprache",
    "notes": "null"
  },
  "Ndebele, South; South Ndebele": {
    "alpha3_b": "nbl",
    "alpha3_t": "null",
    "alpha2": "nr",
    "english": "Ndebele, South; South Ndebele",
    "french": "ndébélé du Sud",
    "german": "Ndebele-Sprache (Transvaal)",
    "notes": "null"
  },
  "Ndebele, North; North Ndebele": {
    "alpha3_b": "nde",
    "alpha3_t": "null",
    "alpha2": "nd",
    "english": "Ndebele, North; North Ndebele",
    "french": "ndébélé du Nord",
    "german": "Ndebele-Sprache (Simbabwe)",
    "notes": "null"
  },
  "Ndonga": {
    "alpha3_b": "ndo",
    "alpha3_t": "null",
    "alpha2": "ng",
    "english": "Ndonga",
    "french": "ndonga",
    "german": "Ndonga",
    "notes": "null"
  },
  "Low German; Low Saxon; German, Low; Saxon, Low": {
    "alpha3_b": "nds",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Low German; Low Saxon; German, Low; Saxon, Low",
    "french": "bas allemand; bas saxon; allemand, bas; saxon, bas",
    "german": "Niederdeutsch",
    "notes": "null"
  },
  "Nepali": {
    "alpha3_b": "nep",
    "alpha3_t": "null",
    "alpha2": "ne",
    "english": "Nepali",
    "french": "népalais",
    "german": "Nepali",
    "notes": "null"
  },
  "Nepal Bhasa; Newari": {
    "alpha3_b": "new",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Nepal Bhasa; Newari",
    "french": "nepal bhasa; newari",
    "german": "Newari",
    "notes": "null"
  },
  "Nias": {
    "alpha3_b": "nia",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Nias",
    "french": "nias",
    "german": "Nias-Sprache",
    "notes": "null"
  },
  "Niger-Kordofanian languages": {
    "alpha3_b": "nic",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Niger-Kordofanian languages",
    "french": "nigéro-kordofaniennes, langues",
    "german": "Nigerkordofanische Sprachen (Andere)",
    "notes": "null"
  },
  "Niuean": {
    "alpha3_b": "niu",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Niuean",
    "french": "niué",
    "german": "Niue-Sprache",
    "notes": "null"
  },
  "Norwegian Nynorsk; Nynorsk, Norwegian": {
    "alpha3_b": "nno",
    "alpha3_t": "null",
    "alpha2": "nn",
    "english": "Norwegian Nynorsk; Nynorsk, Norwegian",
    "french": "norvégien nynorsk; nynorsk, norvégien",
    "german": "Nynorsk",
    "notes": "null"
  },
  "Bokmål, Norwegian; Norwegian Bokmål": {
    "alpha3_b": "nob",
    "alpha3_t": "null",
    "alpha2": "nb",
    "english": "Bokmål, Norwegian; Norwegian Bokmål",
    "french": "norvégien bokmål",
    "german": "Bokmål",
    "notes": "null"
  },
  "Nogai": {
    "alpha3_b": "nog",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Nogai",
    "french": "nogaï; nogay",
    "german": "Nogaisch",
    "notes": "null"
  },
  "Norse, Old": {
    "alpha3_b": "non",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Norse, Old",
    "french": "norrois, vieux",
    "german": "Altnorwegisch",
    "notes": "null"
  },
  "Norwegian": {
    "alpha3_b": "nor",
    "alpha3_t": "null",
    "alpha2": "no",
    "english": "Norwegian",
    "french": "norvégien",
    "german": "Norwegisch",
    "notes": "null"
  },
  "N'Ko": {
    "alpha3_b": "nqo",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "N'Ko",
    "french": "n'ko",
    "german": "N'Ko",
    "notes": "null"
  },
  "Pedi; Sepedi; Northern Sotho": {
    "alpha3_b": "nso",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Pedi; Sepedi; Northern Sotho",
    "french": "pedi; sepedi; sotho du Nord",
    "german": "Pedi-Sprache",
    "notes": "null"
  },
  "Nubian languages": {
    "alpha3_b": "nub",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Nubian languages",
    "french": "nubiennes, langues",
    "german": "Nubische Sprachen",
    "notes": "null"
  },
  "Classical Newari; Old Newari; Classical Nepal Bhasa": {
    "alpha3_b": "nwc",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Classical Newari; Old Newari; Classical Nepal Bhasa",
    "french": "newari classique",
    "german": "Alt-Newari",
    "notes": "null"
  },
  "Chichewa; Chewa; Nyanja": {
    "alpha3_b": "nya",
    "alpha3_t": "null",
    "alpha2": "ny",
    "english": "Chichewa; Chewa; Nyanja",
    "french": "chichewa; chewa; nyanja",
    "german": "Nyanja-Sprache",
    "notes": "null"
  },
  "Nyamwezi": {
    "alpha3_b": "nym",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Nyamwezi",
    "french": "nyamwezi",
    "german": "Nyamwezi-Sprache",
    "notes": "null"
  },
  "Nyankole": {
    "alpha3_b": "nyn",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Nyankole",
    "french": "nyankolé",
    "german": "Nkole-Sprache",
    "notes": "null"
  },
  "Nyoro": {
    "alpha3_b": "nyo",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Nyoro",
    "french": "nyoro",
    "german": "Nyoro-Sprache",
    "notes": "null"
  },
  "Nzima": {
    "alpha3_b": "nzi",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Nzima",
    "french": "nzema",
    "german": "Nzima-Sprache",
    "notes": "null"
  },
  "Occitan (post 1500)": {
    "alpha3_b": "oci",
    "alpha3_t": "null",
    "alpha2": "oc",
    "english": "Occitan (post 1500)",
    "french": "occitan (après 1500)",
    "german": "Okzitanisch",
    "notes": "null"
  },
  "Ojibwa": {
    "alpha3_b": "oji",
    "alpha3_t": "null",
    "alpha2": "oj",
    "english": "Ojibwa",
    "french": "ojibwa",
    "german": "Ojibwa-Sprache",
    "notes": "null"
  },
  "Oriya": {
    "alpha3_b": "ori",
    "alpha3_t": "null",
    "alpha2": "or",
    "english": "Oriya",
    "french": "oriya",
    "german": "Oriya-Sprache",
    "notes": "null"
  },
  "Oromo": {
    "alpha3_b": "orm",
    "alpha3_t": "null",
    "alpha2": "om",
    "english": "Oromo",
    "french": "galla",
    "german": "Galla-Sprache",
    "notes": "null"
  },
  "Osage": {
    "alpha3_b": "osa",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Osage",
    "french": "osage",
    "german": "Osage-Sprache",
    "notes": "null"
  },
  "Ossetian; Ossetic": {
    "alpha3_b": "oss",
    "alpha3_t": "null",
    "alpha2": "os",
    "english": "Ossetian; Ossetic",
    "french": "ossète",
    "german": "Ossetisch",
    "notes": "null"
  },
  "Turkish, Ottoman (1500-1928)": {
    "alpha3_b": "ota",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Turkish, Ottoman (1500-1928)",
    "french": "turc ottoman (1500-1928)",
    "german": "Osmanisch",
    "notes": "null"
  },
  "Otomian languages": {
    "alpha3_b": "oto",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Otomian languages",
    "french": "otomi, langues",
    "german": "Otomangue-Sprachen",
    "notes": "null"
  },
  "Papuan languages": {
    "alpha3_b": "paa",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Papuan languages",
    "french": "papoues, langues",
    "german": "Papuasprachen (Andere)",
    "notes": "null"
  },
  "Pangasinan": {
    "alpha3_b": "pag",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Pangasinan",
    "french": "pangasinan",
    "german": "Pangasinan-Sprache",
    "notes": "null"
  },
  "Pahlavi": {
    "alpha3_b": "pal",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Pahlavi",
    "french": "pahlavi",
    "german": "Mittelpersisch",
    "notes": "null"
  },
  "Pampanga; Kapampangan": {
    "alpha3_b": "pam",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Pampanga; Kapampangan",
    "french": "pampangan",
    "german": "Pampanggan-Sprache",
    "notes": "null"
  },
  "Panjabi; Punjabi": {
    "alpha3_b": "pan",
    "alpha3_t": "null",
    "alpha2": "pa",
    "english": "Panjabi; Punjabi",
    "french": "pendjabi",
    "german": "Pandschabi-Sprache",
    "notes": "null"
  },
  "Papiamento": {
    "alpha3_b": "pap",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Papiamento",
    "french": "papiamento",
    "german": "Papiamento",
    "notes": "null"
  },
  "Palauan": {
    "alpha3_b": "pau",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Palauan",
    "french": "palau",
    "german": "Palau-Sprache",
    "notes": "null"
  },
  "Persian, Old (ca.600-400 B.C.)": {
    "alpha3_b": "peo",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Persian, Old (ca.600-400 B.C.)",
    "french": "perse, vieux (ca. 600-400 av. J.-C.)",
    "german": "Altpersisch",
    "notes": "null"
  },
  "Persian": {
    "alpha3_b": "per",
    "alpha3_t": "fas",
    "alpha2": "fa",
    "english": "Persian",
    "french": "persan",
    "german": "Persisch",
    "notes": "null"
  },
  "Philippine languages": {
    "alpha3_b": "phi",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Philippine languages",
    "french": "philippines, langues",
    "german": "Philippinisch-Austronesisch (Andere)",
    "notes": "null"
  },
  "Phoenician": {
    "alpha3_b": "phn",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Phoenician",
    "french": "phénicien",
    "german": "Phönikisch",
    "notes": "null"
  },
  "Pali": {
    "alpha3_b": "pli",
    "alpha3_t": "null",
    "alpha2": "pi",
    "english": "Pali",
    "french": "pali",
    "german": "Pali",
    "notes": "null"
  },
  "Polish": {
    "alpha3_b": "pol",
    "alpha3_t": "null",
    "alpha2": "pl",
    "english": "Polish",
    "french": "polonais",
    "german": "Polnisch",
    "notes": "null"
  },
  "Pohnpeian": {
    "alpha3_b": "pon",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Pohnpeian",
    "french": "pohnpei",
    "german": "Ponapeanisch",
    "notes": "null"
  },
  "Portuguese": {
    "alpha3_b": "por",
    "alpha3_t": "null",
    "alpha2": "pt",
    "english": "Portuguese",
    "french": "portugais",
    "german": "Portugiesisch",
    "notes": "null"
  },
  "Prakrit languages": {
    "alpha3_b": "pra",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Prakrit languages",
    "french": "prâkrit, langues",
    "german": "Prakrit",
    "notes": "null"
  },
  "Provençal, Old (to 1500); Occitan, Old (to 1500)": {
    "alpha3_b": "pro",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Provençal, Old (to 1500); Occitan, Old (to 1500)",
    "french": "provençal ancien (jusqu'à 1500); occitan ancien (jusqu'à 1500)",
    "german": "Altokzitanisch",
    "notes": "null"
  },
  "Pushto; Pashto": {
    "alpha3_b": "pus",
    "alpha3_t": "null",
    "alpha2": "ps",
    "english": "Pushto; Pashto",
    "french": "pachto",
    "german": "Paschtu",
    "notes": "null"
  },
  "Reserved for local use": {
    "alpha3_b": "qaa-qtz",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Reserved for local use",
    "french": "réservée à l'usage local",
    "german": "Reserviert für lokale Verwendung",
    "notes": "null"
  },
  "Quechua": {
    "alpha3_b": "que",
    "alpha3_t": "null",
    "alpha2": "qu",
    "english": "Quechua",
    "french": "quechua",
    "german": "Quechua-Sprache",
    "notes": "null"
  },
  "Rajasthani": {
    "alpha3_b": "raj",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Rajasthani",
    "french": "rajasthani",
    "german": "Rajasthani",
    "notes": "null"
  },
  "Rapanui": {
    "alpha3_b": "rap",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Rapanui",
    "french": "rapanui",
    "german": "Osterinsel-Sprache",
    "notes": "null"
  },
  "Rarotongan; Cook Islands Maori": {
    "alpha3_b": "rar",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Rarotongan; Cook Islands Maori",
    "french": "rarotonga; maori des îles Cook",
    "german": "Rarotonganisch",
    "notes": "null"
  },
  "Romance languages": {
    "alpha3_b": "roa",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Romance languages",
    "french": "romanes, langues",
    "german": "Romanische Sprachen (Andere)",
    "notes": "null"
  },
  "Romansh": {
    "alpha3_b": "roh",
    "alpha3_t": "null",
    "alpha2": "rm",
    "english": "Romansh",
    "french": "romanche",
    "german": "Rätoromanisch",
    "notes": "null"
  },
  "Romany": {
    "alpha3_b": "rom",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Romany",
    "french": "tsigane",
    "german": "Romani (Sprache)",
    "notes": "null"
  },
  "Romanian; Moldavian; Moldovan": {
    "alpha3_b": "rum",
    "alpha3_t": "ron",
    "alpha2": "ro",
    "english": "Romanian; Moldavian; Moldovan",
    "french": "roumain; moldave",
    "german": "Rumänisch",
    "notes": "null"
  },
  "Rundi": {
    "alpha3_b": "run",
    "alpha3_t": "null",
    "alpha2": "rn",
    "english": "Rundi",
    "french": "rundi",
    "german": "Rundi-Sprache",
    "notes": "null"
  },
  "Aromanian; Arumanian; Macedo-Romanian": {
    "alpha3_b": "rup",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Aromanian; Arumanian; Macedo-Romanian",
    "french": "aroumain; macédo-roumain",
    "german": "Aromunisch",
    "notes": "null"
  },
  "Russian": {
    "alpha3_b": "rus",
    "alpha3_t": "null",
    "alpha2": "ru",
    "english": "Russian",
    "french": "russe",
    "german": "Russisch",
    "notes": "null"
  },
  "Sandawe": {
    "alpha3_b": "sad",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Sandawe",
    "french": "sandawe",
    "german": "Sandawe-Sprache",
    "notes": "null"
  },
  "Sango": {
    "alpha3_b": "sag",
    "alpha3_t": "null",
    "alpha2": "sg",
    "english": "Sango",
    "french": "sango",
    "german": "Sango-Sprache",
    "notes": "null"
  },
  "Yakut": {
    "alpha3_b": "sah",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Yakut",
    "french": "iakoute",
    "german": "Jakutisch",
    "notes": "null"
  },
  "South American Indian languages": {
    "alpha3_b": "sai",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "South American Indian languages",
    "french": "sud-amérindiennes, langues",
    "german": "Indianersprachen, Südamerika (Andere)",
    "notes": "null"
  },
  "Salishan languages": {
    "alpha3_b": "sal",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Salishan languages",
    "french": "salishennes, langues",
    "german": "Salish-Sprache",
    "notes": "null"
  },
  "Samaritan Aramaic": {
    "alpha3_b": "sam",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Samaritan Aramaic",
    "french": "samaritain",
    "german": "Samaritanisch",
    "notes": "null"
  },
  "Sanskrit": {
    "alpha3_b": "san",
    "alpha3_t": "null",
    "alpha2": "sa",
    "english": "Sanskrit",
    "french": "sanskrit",
    "german": "Sanskrit",
    "notes": "null"
  },
  "Sasak": {
    "alpha3_b": "sas",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Sasak",
    "french": "sasak",
    "german": "Sasak",
    "notes": "null"
  },
  "Santali": {
    "alpha3_b": "sat",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Santali",
    "french": "santal",
    "german": "Santali",
    "notes": "null"
  },
  "Sicilian": {
    "alpha3_b": "scn",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Sicilian",
    "french": "sicilien",
    "german": "Sizilianisch",
    "notes": "null"
  },
  "Scots": {
    "alpha3_b": "sco",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Scots",
    "french": "écossais",
    "german": "Schottisch",
    "notes": "null"
  },
  "Selkup": {
    "alpha3_b": "sel",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Selkup",
    "french": "selkoupe",
    "german": "Selkupisch",
    "notes": "null"
  },
  "Semitic languages": {
    "alpha3_b": "sem",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Semitic languages",
    "french": "sémitiques, langues",
    "german": "Semitische Sprachen (Andere)",
    "notes": "null"
  },
  "Irish, Old (to 900)": {
    "alpha3_b": "sga",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Irish, Old (to 900)",
    "french": "irlandais ancien (jusqu'à 900)",
    "german": "Altirisch",
    "notes": "null"
  },
  "Sign Languages": {
    "alpha3_b": "sgn",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Sign Languages",
    "french": "langues des signes",
    "german": "Zeichensprachen",
    "notes": "null"
  },
  "Shan": {
    "alpha3_b": "shn",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Shan",
    "french": "chan",
    "german": "Schan-Sprache",
    "notes": "null"
  },
  "Sidamo": {
    "alpha3_b": "sid",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Sidamo",
    "french": "sidamo",
    "german": "Sidamo-Sprache",
    "notes": "null"
  },
  "Sinhala; Sinhalese": {
    "alpha3_b": "sin",
    "alpha3_t": "null",
    "alpha2": "si",
    "english": "Sinhala; Sinhalese",
    "french": "singhalais",
    "german": "Singhalesisch",
    "notes": "null"
  },
  "Siouan languages": {
    "alpha3_b": "sio",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Siouan languages",
    "french": "sioux, langues",
    "german": "Sioux-Sprachen (Andere)",
    "notes": "null"
  },
  "Sino-Tibetan languages": {
    "alpha3_b": "sit",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Sino-Tibetan languages",
    "french": "sino-tibétaines, langues",
    "german": "Sinotibetische Sprachen (Andere)",
    "notes": "null"
  },
  "Slavic languages": {
    "alpha3_b": "sla",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Slavic languages",
    "french": "slaves, langues",
    "german": "Slawische Sprachen (Andere)",
    "notes": "null"
  },
  "Slovak": {
    "alpha3_b": "slo",
    "alpha3_t": "slk",
    "alpha2": "sk",
    "english": "Slovak",
    "french": "slovaque",
    "german": "Slowakisch",
    "notes": "null"
  },
  "Slovenian": {
    "alpha3_b": "slv",
    "alpha3_t": "null",
    "alpha2": "sl",
    "english": "Slovenian",
    "french": "slovène",
    "german": "Slowenisch",
    "notes": "null"
  },
  "Southern Sami": {
    "alpha3_b": "sma",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Southern Sami",
    "french": "sami du Sud",
    "german": "Südsaamisch",
    "notes": "null"
  },
  "Northern Sami": {
    "alpha3_b": "sme",
    "alpha3_t": "null",
    "alpha2": "se",
    "english": "Northern Sami",
    "french": "sami du Nord",
    "german": "Nordsaamisch",
    "notes": "null"
  },
  "Sami languages": {
    "alpha3_b": "smi",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Sami languages",
    "french": "sames, langues",
    "german": "Saamisch",
    "notes": "null"
  },
  "Lule Sami": {
    "alpha3_b": "smj",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Lule Sami",
    "french": "sami de Lule",
    "german": "Lulesaamisch",
    "notes": "null"
  },
  "Inari Sami": {
    "alpha3_b": "smn",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Inari Sami",
    "french": "sami d'Inari",
    "german": "Inarisaamisch",
    "notes": "null"
  },
  "Samoan": {
    "alpha3_b": "smo",
    "alpha3_t": "null",
    "alpha2": "sm",
    "english": "Samoan",
    "french": "samoan",
    "german": "Samoanisch",
    "notes": "null"
  },
  "Skolt Sami": {
    "alpha3_b": "sms",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Skolt Sami",
    "french": "sami skolt",
    "german": "Skoltsaamisch",
    "notes": "null"
  },
  "Shona": {
    "alpha3_b": "sna",
    "alpha3_t": "null",
    "alpha2": "sn",
    "english": "Shona",
    "french": "shona",
    "german": "Schona-Sprache",
    "notes": "null"
  },
  "Sindhi": {
    "alpha3_b": "snd",
    "alpha3_t": "null",
    "alpha2": "sd",
    "english": "Sindhi",
    "french": "sindhi",
    "german": "Sindhi-Sprache",
    "notes": "null"
  },
  "Soninke": {
    "alpha3_b": "snk",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Soninke",
    "french": "soninké",
    "german": "Soninke-Sprache",
    "notes": "null"
  },
  "Sogdian": {
    "alpha3_b": "sog",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Sogdian",
    "french": "sogdien",
    "german": "Sogdisch",
    "notes": "null"
  },
  "Somali": {
    "alpha3_b": "som",
    "alpha3_t": "null",
    "alpha2": "so",
    "english": "Somali",
    "french": "somali",
    "german": "Somali",
    "notes": "null"
  },
  "Songhai languages": {
    "alpha3_b": "son",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Songhai languages",
    "french": "songhai, langues",
    "german": "Songhai-Sprache",
    "notes": "null"
  },
  "Sotho, Southern": {
    "alpha3_b": "sot",
    "alpha3_t": "null",
    "alpha2": "st",
    "english": "Sotho, Southern",
    "french": "sotho du Sud",
    "german": "Süd-Sotho-Sprache",
    "notes": "null"
  },
  "Spanish; Castilian": {
    "alpha3_b": "spa",
    "alpha3_t": "null",
    "alpha2": "es",
    "english": "Spanish; Castilian",
    "french": "espagnol; castillan",
    "german": "Spanisch",
    "notes": "null"
  },
  "Sardinian": {
    "alpha3_b": "srd",
    "alpha3_t": "null",
    "alpha2": "sc",
    "english": "Sardinian",
    "french": "sarde",
    "german": "Sardisch",
    "notes": "null"
  },
  "Sranan Tongo": {
    "alpha3_b": "srn",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Sranan Tongo",
    "french": "sranan tongo",
    "german": "Sranantongo",
    "notes": "null"
  },
  "Serbian": {
    "alpha3_b": "srp",
    "alpha3_t": "null",
    "alpha2": "sr",
    "english": "Serbian",
    "french": "serbe",
    "german": "Serbisch",
    "notes": "null"
  },
  "Serer": {
    "alpha3_b": "srr",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Serer",
    "french": "sérère",
    "german": "Serer-Sprache",
    "notes": "null"
  },
  "Nilo-Saharan languages": {
    "alpha3_b": "ssa",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Nilo-Saharan languages",
    "french": "nilo-sahariennes, langues",
    "german": "Nilosaharanische Sprachen (Andere)",
    "notes": "null"
  },
  "Swati": {
    "alpha3_b": "ssw",
    "alpha3_t": "null",
    "alpha2": "ss",
    "english": "Swati",
    "french": "swati",
    "german": "Swasi-Sprache",
    "notes": "null"
  },
  "Sukuma": {
    "alpha3_b": "suk",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Sukuma",
    "french": "sukuma",
    "german": "Sukuma-Sprache",
    "notes": "null"
  },
  "Sundanese": {
    "alpha3_b": "sun",
    "alpha3_t": "null",
    "alpha2": "su",
    "english": "Sundanese",
    "french": "soundanais",
    "german": "Sundanesisch",
    "notes": "null"
  },
  "Susu": {
    "alpha3_b": "sus",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Susu",
    "french": "soussou",
    "german": "Susu",
    "notes": "null"
  },
  "Sumerian": {
    "alpha3_b": "sux",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Sumerian",
    "french": "sumérien",
    "german": "Sumerisch",
    "notes": "null"
  },
  "Swahili": {
    "alpha3_b": "swa",
    "alpha3_t": "null",
    "alpha2": "sw",
    "english": "Swahili",
    "french": "swahili",
    "german": "Swahili",
    "notes": "null"
  },
  "Swedish": {
    "alpha3_b": "swe",
    "alpha3_t": "null",
    "alpha2": "sv",
    "english": "Swedish",
    "french": "suédois",
    "german": "Schwedisch",
    "notes": "null"
  },
  "Classical Syriac": {
    "alpha3_b": "syc",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Classical Syriac",
    "french": "syriaque classique",
    "german": "Syrisch",
    "notes": "null"
  },
  "Syriac": {
    "alpha3_b": "syr",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Syriac",
    "french": "syriaque",
    "german": "Neuostaramäisch",
    "notes": "null"
  },
  "Tahitian": {
    "alpha3_b": "tah",
    "alpha3_t": "null",
    "alpha2": "ty",
    "english": "Tahitian",
    "french": "tahitien",
    "german": "Tahitisch",
    "notes": "null"
  },
  "Tai languages": {
    "alpha3_b": "tai",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Tai languages",
    "french": "tai, langues",
    "german": "Thaisprachen (Andere)",
    "notes": "null"
  },
  "Tamil": {
    "alpha3_b": "tam",
    "alpha3_t": "null",
    "alpha2": "ta",
    "english": "Tamil",
    "french": "tamoul",
    "german": "Tamil",
    "notes": "null"
  },
  "Tatar": {
    "alpha3_b": "tat",
    "alpha3_t": "null",
    "alpha2": "tt",
    "english": "Tatar",
    "french": "tatar",
    "german": "Tatarisch",
    "notes": "null"
  },
  "Telugu": {
    "alpha3_b": "tel",
    "alpha3_t": "null",
    "alpha2": "te",
    "english": "Telugu",
    "french": "télougou",
    "german": "Telugu-Sprache",
    "notes": "null"
  },
  "Timne": {
    "alpha3_b": "tem",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Timne",
    "french": "temne",
    "german": "Temne-Sprache",
    "notes": "null"
  },
  "Tereno": {
    "alpha3_b": "ter",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Tereno",
    "french": "tereno",
    "german": "Tereno-Sprache",
    "notes": "null"
  },
  "Tetum": {
    "alpha3_b": "tet",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Tetum",
    "french": "tetum",
    "german": "Tetum-Sprache",
    "notes": "null"
  },
  "Tajik": {
    "alpha3_b": "tgk",
    "alpha3_t": "null",
    "alpha2": "tg",
    "english": "Tajik",
    "french": "tadjik",
    "german": "Tadschikisch",
    "notes": "null"
  },
  "Tagalog": {
    "alpha3_b": "tgl",
    "alpha3_t": "null",
    "alpha2": "tl",
    "english": "Tagalog",
    "french": "tagalog",
    "german": "Tagalog",
    "notes": "null"
  },
  "Thai": {
    "alpha3_b": "tha",
    "alpha3_t": "null",
    "alpha2": "th",
    "english": "Thai",
    "french": "thaï",
    "german": "Thailändisch",
    "notes": "null"
  },
  "Tibetan": {
    "alpha3_b": "tib",
    "alpha3_t": "bod",
    "alpha2": "bo",
    "english": "Tibetan",
    "french": "tibétain",
    "german": "Tibetisch",
    "notes": "null"
  },
  "Tigre": {
    "alpha3_b": "tig",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Tigre",
    "french": "tigré",
    "german": "Tigre-Sprache",
    "notes": "null"
  },
  "Tigrinya": {
    "alpha3_b": "tir",
    "alpha3_t": "null",
    "alpha2": "ti",
    "english": "Tigrinya",
    "french": "tigrigna",
    "german": "Tigrinja-Sprache",
    "notes": "null"
  },
  "Tiv": {
    "alpha3_b": "tiv",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Tiv",
    "french": "tiv",
    "german": "Tiv-Sprache",
    "notes": "null"
  },
  "Tokelau": {
    "alpha3_b": "tkl",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Tokelau",
    "french": "tokelau",
    "german": "Tokelauanisch",
    "notes": "null"
  },
  "Klingon; tlhIngan-Hol": {
    "alpha3_b": "tlh",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Klingon; tlhIngan-Hol",
    "french": "klingon",
    "german": "Klingonisch",
    "notes": "null"
  },
  "Tlingit": {
    "alpha3_b": "tli",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Tlingit",
    "french": "tlingit",
    "german": "Tlingit-Sprache",
    "notes": "null"
  },
  "Tamashek": {
    "alpha3_b": "tmh",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Tamashek",
    "french": "tamacheq",
    "german": "Tamašeq",
    "notes": "null"
  },
  "Tonga (Nyasa)": {
    "alpha3_b": "tog",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Tonga (Nyasa)",
    "french": "tonga (Nyasa)",
    "german": "Tonga (Bantusprache, Sambia)",
    "notes": "null"
  },
  "Tonga (Tonga Islands)": {
    "alpha3_b": "ton",
    "alpha3_t": "null",
    "alpha2": "to",
    "english": "Tonga (Tonga Islands)",
    "french": "tongan (Îles Tonga)",
    "german": "Tongaisch",
    "notes": "null"
  },
  "Tok Pisin": {
    "alpha3_b": "tpi",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Tok Pisin",
    "french": "tok pisin",
    "german": "Neumelanesisch",
    "notes": "null"
  },
  "Tsimshian": {
    "alpha3_b": "tsi",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Tsimshian",
    "french": "tsimshian",
    "german": "Tsimshian-Sprache",
    "notes": "null"
  },
  "Tswana": {
    "alpha3_b": "tsn",
    "alpha3_t": "null",
    "alpha2": "tn",
    "english": "Tswana",
    "french": "tswana",
    "german": "Tswana-Sprache",
    "notes": "null"
  },
  "Tsonga": {
    "alpha3_b": "tso",
    "alpha3_t": "null",
    "alpha2": "ts",
    "english": "Tsonga",
    "french": "tsonga",
    "german": "Tsonga-Sprache",
    "notes": "null"
  },
  "Turkmen": {
    "alpha3_b": "tuk",
    "alpha3_t": "null",
    "alpha2": "tk",
    "english": "Turkmen",
    "french": "turkmène",
    "german": "Turkmenisch",
    "notes": "null"
  },
  "Tumbuka": {
    "alpha3_b": "tum",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Tumbuka",
    "french": "tumbuka",
    "german": "Tumbuka-Sprache",
    "notes": "null"
  },
  "Tupi languages": {
    "alpha3_b": "tup",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Tupi languages",
    "french": "tupi, langues",
    "german": "Tupi-Sprache",
    "notes": "null"
  },
  "Turkish": {
    "alpha3_b": "tur",
    "alpha3_t": "null",
    "alpha2": "tr",
    "english": "Turkish",
    "french": "turc",
    "german": "Türkisch",
    "notes": "null"
  },
  "Altaic languages": {
    "alpha3_b": "tut",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Altaic languages",
    "french": "altaïques, langues",
    "german": "Altaische Sprachen (Andere)",
    "notes": "null"
  },
  "Tuvalu": {
    "alpha3_b": "tvl",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Tuvalu",
    "french": "tuvalu",
    "german": "Elliceanisch",
    "notes": "null"
  },
  "Twi": {
    "alpha3_b": "twi",
    "alpha3_t": "null",
    "alpha2": "tw",
    "english": "Twi",
    "french": "twi",
    "german": "Twi-Sprache",
    "notes": "null"
  },
  "Tuvinian": {
    "alpha3_b": "tyv",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Tuvinian",
    "french": "touva",
    "german": "Tuwinisch",
    "notes": "null"
  },
  "Udmurt": {
    "alpha3_b": "udm",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Udmurt",
    "french": "oudmourte",
    "german": "Udmurtisch",
    "notes": "null"
  },
  "Ugaritic": {
    "alpha3_b": "uga",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Ugaritic",
    "french": "ougaritique",
    "german": "Ugaritisch",
    "notes": "null"
  },
  "Uighur; Uyghur": {
    "alpha3_b": "uig",
    "alpha3_t": "null",
    "alpha2": "ug",
    "english": "Uighur; Uyghur",
    "french": "ouïgour",
    "german": "Uigurisch",
    "notes": "null"
  },
  "Ukrainian": {
    "alpha3_b": "ukr",
    "alpha3_t": "null",
    "alpha2": "uk",
    "english": "Ukrainian",
    "french": "ukrainien",
    "german": "Ukrainisch",
    "notes": "null"
  },
  "Umbundu": {
    "alpha3_b": "umb",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Umbundu",
    "french": "umbundu",
    "german": "Mbundu-Sprache",
    "notes": "null"
  },
  "Undetermined": {
    "alpha3_b": "und",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Undetermined",
    "french": "indéterminée",
    "german": "Nicht zu entscheiden",
    "notes": "null"
  },
  "Urdu": {
    "alpha3_b": "urd",
    "alpha3_t": "null",
    "alpha2": "ur",
    "english": "Urdu",
    "french": "ourdou",
    "german": "Urdu",
    "notes": "null"
  },
  "Uzbek": {
    "alpha3_b": "uzb",
    "alpha3_t": "null",
    "alpha2": "uz",
    "english": "Uzbek",
    "french": "ouszbek",
    "german": "Usbekisch",
    "notes": "null"
  },
  "Vai": {
    "alpha3_b": "vai",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Vai",
    "french": "vaï",
    "german": "Vai-Sprache",
    "notes": "null"
  },
  "Venda": {
    "alpha3_b": "ven",
    "alpha3_t": "null",
    "alpha2": "ve",
    "english": "Venda",
    "french": "venda",
    "german": "Venda-Sprache",
    "notes": "null"
  },
  "Vietnamese": {
    "alpha3_b": "vie",
    "alpha3_t": "null",
    "alpha2": "vi",
    "english": "Vietnamese",
    "french": "vietnamien",
    "german": "Vietnamesisch",
    "notes": "null"
  },
  "Volapük": {
    "alpha3_b": "vol",
    "alpha3_t": "null",
    "alpha2": "vo",
    "english": "Volapük",
    "french": "volapük",
    "german": "Volapük",
    "notes": "null"
  },
  "Votic": {
    "alpha3_b": "vot",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Votic",
    "french": "vote",
    "german": "Wotisch",
    "notes": "null"
  },
  "Wakashan languages": {
    "alpha3_b": "wak",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Wakashan languages",
    "french": "wakashanes, langues",
    "german": "Wakash-Sprachen",
    "notes": "null"
  },
  "Wolaitta; Wolaytta": {
    "alpha3_b": "wal",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Wolaitta; Wolaytta",
    "french": "wolaitta; wolaytta",
    "german": "Walamo-Sprache",
    "notes": "null"
  },
  "Waray": {
    "alpha3_b": "war",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Waray",
    "french": "waray",
    "german": "Waray",
    "notes": "null"
  },
  "Washo": {
    "alpha3_b": "was",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Washo",
    "french": "washo",
    "german": "Washo-Sprache",
    "notes": "null"
  },
  "Welsh": {
    "alpha3_b": "wel",
    "alpha3_t": "cym",
    "alpha2": "cy",
    "english": "Welsh",
    "french": "gallois",
    "german": "Kymrisch",
    "notes": "null"
  },
  "Sorbian languages": {
    "alpha3_b": "wen",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Sorbian languages",
    "french": "sorabes, langues",
    "german": "Sorbisch (Andere)",
    "notes": "null"
  },
  "Walloon": {
    "alpha3_b": "wln",
    "alpha3_t": "null",
    "alpha2": "wa",
    "english": "Walloon",
    "french": "wallon",
    "german": "Wallonisch",
    "notes": "null"
  },
  "Wolof": {
    "alpha3_b": "wol",
    "alpha3_t": "null",
    "alpha2": "wo",
    "english": "Wolof",
    "french": "wolof",
    "german": "Wolof-Sprache",
    "notes": "null"
  },
  "Kalmyk; Oirat": {
    "alpha3_b": "xal",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Kalmyk; Oirat",
    "french": "kalmouk; oïrat",
    "german": "Kalmückisch",
    "notes": "null"
  },
  "Xhosa": {
    "alpha3_b": "xho",
    "alpha3_t": "null",
    "alpha2": "xh",
    "english": "Xhosa",
    "french": "xhosa",
    "german": "Xhosa-Sprache",
    "notes": "null"
  },
  "Yao": {
    "alpha3_b": "yao",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Yao",
    "french": "yao",
    "german": "Yao-Sprache (Bantusprache)",
    "notes": "null"
  },
  "Yapese": {
    "alpha3_b": "yap",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Yapese",
    "french": "yapois",
    "german": "Yapesisch",
    "notes": "null"
  },
  "Yiddish": {
    "alpha3_b": "yid",
    "alpha3_t": "null",
    "alpha2": "yi",
    "english": "Yiddish",
    "french": "yiddish",
    "german": "Jiddisch",
    "notes": "null"
  },
  "Yoruba": {
    "alpha3_b": "yor",
    "alpha3_t": "null",
    "alpha2": "yo",
    "english": "Yoruba",
    "french": "yoruba",
    "german": "Yoruba-Sprache",
    "notes": "null"
  },
  "Yupik languages": {
    "alpha3_b": "ypk",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Yupik languages",
    "french": "yupik, langues",
    "german": "Ypik-Sprachen",
    "notes": "null"
  },
  "Zapotec": {
    "alpha3_b": "zap",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Zapotec",
    "french": "zapotèque",
    "german": "Zapotekisch",
    "notes": "null"
  },
  "Blissymbols; Blissymbolics; Bliss": {
    "alpha3_b": "zbl",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Blissymbols; Blissymbolics; Bliss",
    "french": "symboles Bliss; Bliss",
    "german": "Bliss-Symbol",
    "notes": "null"
  },
  "Zenaga": {
    "alpha3_b": "zen",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Zenaga",
    "french": "zenaga",
    "german": "Zenaga",
    "notes": "null"
  },
  "Standard Moroccan Tamazight": {
    "alpha3_b": "zgh",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Standard Moroccan Tamazight",
    "french": "amazighe standard marocain",
    "german": "null",
    "notes": "null"
  },
  "Zhuang; Chuang": {
    "alpha3_b": "zha",
    "alpha3_t": "null",
    "alpha2": "za",
    "english": "Zhuang; Chuang",
    "french": "zhuang; chuang",
    "german": "Zhuang",
    "notes": "null"
  },
  "Zande languages": {
    "alpha3_b": "znd",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Zande languages",
    "french": "zandé, langues",
    "german": "Zande-Sprachen",
    "notes": "null"
  },
  "Zulu": {
    "alpha3_b": "zul",
    "alpha3_t": "null",
    "alpha2": "zu",
    "english": "Zulu",
    "french": "zoulou",
    "german": "Zulu-Sprache",
    "notes": "null"
  },
  "No linguistic content; Not applicable": {
    "alpha3_b": "zxx",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "No linguistic content; Not applicable",
    "french": "pas de contenu linguistique; non applicable",
    "german": "Kein linguistischer Inhalt",
    "notes": "null"
  },
  "Zaza; Dimili; Dimli; Kirdki; Kirmanjki; Zazaki": {
    "alpha3_b": "zza",
    "alpha3_t": "null",
    "alpha2": "null",
    "english": "Zaza; Dimili; Dimli; Kirdki; Kirmanjki; Zazaki",
    "french": "zaza; dimili; dimli; kirdki; kirmanjki; zazaki",
    "german": "Zazaki",
    "notes": "null"
  }
}
`);
    },
  },
};
</script>

<template>
  <Layout>
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-5">
        <div class="card overflow-hidden">
          <div class="bg-soft bg-primary">
            <div class="row">
              <div class="col-7">
                <div class="text-primary p-4">
                  <h5 class="text-primary">Free Register</h5>
                  <p>Get your free Skote account now.</p>
                </div>
              </div>
              <div class="col-5 align-self-end">
                <img
                  src="@/assets/images/profile-img.png"
                  alt
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
          <div class="card-body pt-0">
            <div>
              <router-link tag="a" to="/">
                <div class="avatar-md profile-user-wid mb-4">
                  <span class="avatar-title rounded-circle bg-light">
                    <img
                      src="@/assets/images/logo.svg"
                      alt
                      class="rounded-circle"
                      height="34"
                    />
                  </span>
                </div>
              </router-link>
            </div>

            <b-alert
              v-model="registerSuccess"
              class="mt-3"
              variant="success"
              dismissible
              >Registration successfull.</b-alert
            >

            <b-alert
              v-model="isRegisterError"
              class="mt-3"
              variant="danger"
              dismissible
              >{{ regError }}</b-alert
            >

            <div
              v-if="notification.message"
              :class="'alert ' + notification.type"
            >
              {{ notification.message }}
            </div>

            <b-form class="p-2" @submit.prevent="tryToRegisterIn">
              <b-form-group
                class="mb-3"
                id="email-group"
                label="Firstname"
                label-for="Firstname"
              >
                <b-form-input
                  id="Firstname"
                  v-model="user.fname"
                  type="text"
                  placeholder="Enter first name"
                  :class="{
                    'is-invalid': submitted && $v.user.fname.$error,
                  }"
                >
                </b-form-input>
                <div
                  v-if="submitted && !$v.user.fname.required"
                  class="invalid-feedback"
                >
                  first name is required.
                </div>
              </b-form-group>

              <b-form-group
                class="mb-3"
                id="email-group"
                label="Lastname"
                label-for="Lastname"
              >
                <b-form-input
                  id="Lastname"
                  v-model="user.lname"
                  type="text"
                  placeholder="Enter last name"
                  :class="{
                    'is-invalid': submitted && $v.user.lname.$error,
                  }"
                ></b-form-input>
                <div
                  v-if="submitted && !$v.user.lname.required"
                  class="invalid-feedback"
                >
                  last name is required.
                </div>
              </b-form-group>

              <b-form-group
                class="mb-3"
                id="fullname-group"
                label="Phone"
                label-for="phone"
              >
                <b-form-input
                  id="Phone"
                  v-model="user.phone"
                  type="Phone"
                  placeholder="Enter phone"
                  :class="{ 'is-invalid': submitted && $v.user.phone.$error }"
                ></b-form-input>
                <div
                  v-if="submitted && $v.user.phone.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.phone.required">phone is required.</span>
                  <span v-if="!$v.user.phone.email"
                    >Please enter valid phone.</span
                  >
                </div>
              </b-form-group>

              <b-form-group
                class="mb-3"
                id="fullname-group"
                label="Email"
                label-for="email"
              >
                <b-form-input
                  id="email"
                  v-model="user.email"
                  type="email"
                  placeholder="Enter email"
                  :class="{ 'is-invalid': submitted && $v.user.email.$error }"
                ></b-form-input>
                <div
                  v-if="submitted && $v.user.email.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.email.required">Email is required.</span>
                  <span v-if="!$v.user.email.email"
                    >Please enter valid email.</span
                  >
                </div>
              </b-form-group>

              <b-form-group
                class="mb-3"
                id="example-date"
                label-cols-sm="2"
                label-cols-lg="2"
                label="Date"
                label-for="date"
              >
                <b-form-input
                  id="date"
                  value="2019-08-19"
                  type="date"
                ></b-form-input>
              </b-form-group>

              <div class="mb-3 row">
                <label class="col-md-3 col-form-label">domicile</label>
                <div class="col-md-9">
               <select v-model="selectdomilicile" class="form-control">
                 <option>Select</option>
                <option v-for="(elemento,index) in getDomilicile()" v-bind:value="elemento.value" v-bind:key="index" >{{ elemento.gec }}</option>
              </select>

                </div>
              </div>

              <div class="mb-3 row">
                <label class="col-md-3 col-form-label">language</label>
                <div class="col-md-9">
                  <select class="form-control">
                    <option>Ingles</option>
                    <option>Español</option>
                    <option>Frances</option>
                  </select>
                </div>
              </div>

              <b-form-group
                class="mb-3"
                id="password-group"
                label="Password"
                label-for="password"
              >
                <b-form-input
                  id="password"
                  v-model="user.password"
                  type="password"
                  placeholder="Enter password"
                  :class="{
                    'is-invalid': submitted && $v.user.password.$error,
                  }"
                ></b-form-input>
                <div
                  v-if="submitted && !$v.user.password.required"
                  class="invalid-feedback"
                >
                  Password is required.
                </div>
              </b-form-group>

              <div class="mt-4 d-grid">
                <b-button type="submit" variant="primary" class="btn-block"
                  >Register</b-button
                >
              </div>

              <div class="mt-4 text-center">
                <h5 class="font-size-14 mb-3">Sign up using</h5>

                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a
                      href="javascript: void(0);"
                      class="
                        social-list-item
                        bg-primary
                        text-white
                        border-primary
                      "
                    >
                      <i class="mdi mdi-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="javascript: void(0);"
                      class="social-list-item bg-info text-white border-info"
                    >
                      <i class="mdi mdi-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="javascript: void(0);"
                      class="
                        social-list-item
                        bg-danger
                        text-white
                        border-danger
                      "
                    >
                      <i class="mdi mdi-google"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="mt-4 text-center">
                <p class="mb-0">
                  By registering you agree to the Skote
                  <a href="javascript: void(0);" class="text-primary"
                    >Terms of Use</a
                  >
                </p>
              </div>
            </b-form>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->

        <div class="mt-5 text-center">
          <p>
            Already have an account ?
            <router-link tag="a" to="/login" class="fw-medium text-primary"
              >Login</router-link
            >
          </p>
          <p>
            © {{ new Date().getFullYear() }} Skote. Crafted with
            <i class="mdi mdi-heart text-danger"></i> by Themesbrand
          </p>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>

<style lang="scss" module></style>
