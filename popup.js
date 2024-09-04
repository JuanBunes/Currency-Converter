document.addEventListener('DOMContentLoaded', function() {
    const currencyList = [
        "USD (United States Dollar)", "AED (United Arab Emirates Dirham)", "AFN (Afghan Afghani)", "ALL (Albanian Lek)", "AMD (Armenian Dram)",
        "ANG (Netherlands Antillean Guilder)", "AOA (Angolan Kwanza)", "ARS (Argentine Peso)", "AUD (Australian Dollar)", "AWG (Aruban Florin)",
        "AZN (Azerbaijani Manat)", "BAM (Bosnia and Herzegovina Convertible Mark)", "BBD (Barbadian Dollar)", "BDT (Bangladeshi Taka)", "BGN (Bulgarian Lev)",
        "BHD (Bahraini Dinar)", "BIF (Burundian Franc)", "BMD (Bermudian Dollar)", "BND (Brunei Dollar)", "BOB (Bolivian Bolivar)", "BRL (Brazilian Real)",
        "BSD (Bahamian Dollar)", "BTN (Bhutanese Ngultrum)", "BWP (Botswana Pula)", "BYN (Belarusian Ruble)", "BZD (Belize Dollar)", "CAD (Canadian Dollar)",
        "CDF (Congolese Franc)", "CHF (Swiss Franc)", "CLP (Chilean Peso)", "CNY (Chinese Yuan)", "COP (Colombian Peso)", "CRC (Costa Rican Colon)",
        "CUP (Cuban Peso)", "CVE (Cape Verdean Escudo)", "CZK (Czech Koruna)", "DJF (Djiboutian Franc)", "DKK (Danish Krone)", "DOP (Dominican Peso)",
        "DZD (Algerian Dinar)", "EGP (Egyptian Pound)", "ERN (Eritrean Nakfa)", "ETB (Ethiopian Birr)", "EUR (Euro)", "FJD (Fijian Dollar)",
        "FKP (Falkland Islands Pound)", "FOK (Faroese Krona)", "GBP (British Pound Sterling)", "GEL (Georgian Lari)", "GGP (Guernsey Pound)",
        "GHS (Ghanaian Cedi)", "GIP (Gibraltar Pound)", "GMD (Gambian Dalasi)", "GNF (Guinean Franc)", "GTQ (Guatemalan Quetzal)", "GYD (Guyanese Dollar)",
        "HKD (Hong Kong Dollar)", "HNL (Honduran Lempira)", "HRK (Croatian Kuna)", "HTG (Haitian Gourde)", "HUF (Hungarian Forint)", "IDR (Indonesian Rupiah)",
        "ILS (Israeli New Shekel)", "IMP (Isle of Man Pound)", "INR (Indian Rupee)", "IQD (Iraqi Dinar)", "IRR (Iranian Rial)", "ISK (Icelandic Krona)",
        "JEP (Jersey Pound)", "JMD (Jamaican Dollar)", "JOD (Jordanian Dinar)", "JPY (Japanese Yen)", "KES (Kenyan Shilling)", "KGS (Kyrgystani Som)",
        "KHR (Cambodian Riel)", "KID (Kiribati Dollar)", "KMF (Comorian Franc)", "KRW (South Korean Won)", "KWD (Kuwaiti Dinar)", "KYD (Cayman Islands Dollar)",
        "KZT (Kazakhstani Tenge)", "LAK (Laotian Kip)", "LBP (Lebanese Pound)", "LKR (Sri Lankan Rupee)", "LRD (Liberian Dollar)", "LSL (Lesotho Loti)",
        "LYD (Libyan Dinar)", "MAD (Moroccan Dirham)", "MDL (Moldovan Leu)", "MGA (Malagasy Ariary)", "MKD (Macedonian Denar)", "MMK (Burmese Kyat)",
        "MNT (Mongolian Tugrik)", "MOP (Macanese Pataca)", "MRU (Mauritanian Ouguiya)", "MUR (Mauritian Rupee)", "MVR (Maldivian Rufiyaa)", "MWK (Malawian Kwacha)",
        "MXN (Mexican Peso)", "MYR (Malaysian Ringgit)", "MZN (Mozambican Metical)", "NAD (Namibian Dollar)", "NGN (Nigerian Naira)", "NIO (Nicaraguan Córdoba)",
        "NOK (Norwegian Krone)", "NPR (Nepalese Rupee)", "NZD (New Zealand Dollar)", "OMR (Omani Rial)", "PAB (Panamanian Balboa)", "PEN (Peruvian Nuevo Sol)",
        "PGK (Papua New Guinean Kina)", "PHP (Philippine Peso)", "PKR (Pakistani Rupee)", "PLN (Polish Zloty)", "PYG (Paraguayan Guarani)", "QAR (Qatari Rial)",
        "RON (Romanian Leu)", "RSD (Serbian Dinar)", "RUB (Russian Ruble)", "RWF (Rwandan Franc)", "SAR (Saudi Riyal)", "SBD (Solomon Islands Dollar)",
        "SCR (Seychellois Rupee)", "SDG (Sudanese Pound)", "SEK (Swedish Krona)", "SGD (Singapore Dollar)", "SHP (Saint Helena Pound)", "SLE (Sierra Leonean Leone)",
        "SLL (Sierra Leonean Leone)", "SOS (Somali Shilling)", "SRD (Surinamese Dollar)", "SSP (South Sudanese Pound)", "STN (Sao Tome and Principe Dobra)",
        "SYP (Syrian Pound)", "SZL (Swazi Lilangeni)", "THB (Thai Baht)", "TJS (Tajikistani Somoni)", "TMT (Turkmenistani Manat)", "TND (Tunisian Dinar)",
        "TOP (Tongan Paanga)", "TRY (Turkish Lira)", "TTD (Trinidad and Tobago Dollar)", "TVD (Tuvaluan Dollar)", "TWD (New Taiwan Dollar)", "TZS (Tanzanian Shilling)",
        "UAH (Ukrainian Hryvnia)", "UGX (Ugandan Shilling)", "UYU (Uruguayan Peso)", "UZS (Uzbekistani Som)", "VES (Venezuelan Bolivar)", "VND (Vietnamese Dong)",
        "VUV (Vanuatu Vatu)", "WST (Samoan Tala)", "XAF (Central African CFA Franc)", "XCD (East Caribbean Dollar)", "XDR (Special Drawing Rights)", 
        "XOF (West African CFA Franc)", "XPF (CFP Franc)", "YER (Yemeni Rial)", "ZAR (South African Rand)", "ZMW (Zambian Kwacha)", "ZWL (Zimbabwean Dollar)"
    ];
    

    const fromCurrencySelect = document.getElementById('from-currency');
    const toCurrencySelect = document.getElementById('to-currency');

    currencyList.forEach(currency => {
        const option1 = document.createElement('option');
        option1.value = currency;
        option1.textContent = currency;
        fromCurrencySelect.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = currency;
        option2.textContent = currency;
        toCurrencySelect.appendChild(option2);
    });
});

document.getElementById('convert-btn').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    fromCurrency = document.getElementById('from-currency').value;
    toCurrency = document.getElementById('to-currency').value;
    fromCurrency = fromCurrency.split(' ')[0]
    toCurrency = toCurrency.split(' ')[0]
    const apiKey = '79bc8cd95247baaa5ada5c8c'; // Replace with your actual API key

    if (amount && fromCurrency && toCurrency) {
        const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;
        
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.result === 'success') {
                    const rate = data.conversion_rates[toCurrency];
                    if (rate) {
                        const convertedAmount = (amount * rate).toFixed(2);
                        document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
                    } else {
                        document.getElementById('result').textContent = `Invalid currency code: ${toCurrency}`;
                    }
                } else {
                    document.getElementById('result').textContent = 'Error fetching data.';
                }
            })
            .catch(error => {
                document.getElementById('result').textContent = 'Error fetching data.';
                console.error('Error:', error);
            });
    } else {
        document.getElementById('result').textContent = 'Please fill out all fields.';
    }
});
