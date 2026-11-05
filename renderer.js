const WEATHER_API_KEY = "2672188747a9b240bf8318fc10906d5a";

// ========================
// WEATHER SERVICE CLASS
// ========================
class WeatherService {

    // ======================================================
// GET WEATHER INFORMATION + TRAVEL ACTIVITY SUGGESTIONS
// ======================================================
async getWeather(city, country) {

    try {

        // --------------------------------------
        // Retrieve weather data from OpenWeather
        // --------------------------------------
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
        );

        const data = await response.json();

        // If API request fails
        if (!response.ok) {
            throw new Error("Weather not found");
        }

        // --------------------------------------
        // Extract required weather information
        // --------------------------------------
        const temperature =
            data.main.temp;

        const condition =
            data.weather[0].main;

        // --------------------------------------
        // Get HTML elements
        // --------------------------------------
        const activityImage =
            document.getElementById(
                "activityImage"
            );

        // Display weather information
        document.getElementById(
            "weatherDetails"
        ).innerHTML = `
            <b>Temperature:</b> ${temperature}°C <br>
            <b>Condition:</b> ${condition}
        `;

        // Variable to store activity suggestion
        let suggestion = "";

        // =====================================================
        // JAPAN
        // =====================================================
        if (country === "Japan") {

            if (condition === "Clear") {

                suggestion =
                    "The clear weather in Japan is perfect for visiting Mount Fuji, exploring Tokyo city attractions, enjoying cherry blossom parks, taking photographs of iconic landmarks, and visiting traditional temples in Kyoto.";

                activityImage.src =
                    "images/japan-clear.jpg";

            }

            else if (
                condition === "Rain" ||
                condition === "Drizzle" ||
                condition === "Thunderstorm"
            ) {

                suggestion =
                    "Rainy weather is ideal for exploring anime cafés, museums, shopping districts, aquariums, and traditional tea houses while staying comfortable indoors.";

                activityImage.src =
                    "images/japan-rain.jpg";

            }

            else if (condition === "Snow") {

                suggestion =
                    "Snowfall creates perfect conditions for skiing in Hokkaido, visiting hot spring resorts, enjoying winter festivals, and experiencing Japan's beautiful snowy landscapes.";

                activityImage.src =
                    "images/japan-snow.jpeg";

            } else {

            suggestion =
                "The weather is comfortable for exploring local attractions, cultural sites, food markets, and city sightseeing.";

            activityImage.src =
                "images/japan-clear.jpg";
        }

        }

        // =====================================================
        // CHINA
        // =====================================================
        else if (country === "China") {

            if (condition === "Clear") {

                suggestion =
                    "Enjoy outdoor sightseeing by visiting the Great Wall of China, exploring the Forbidden City, discovering ancient cultural districts, and experiencing the vibrant city life of Beijing and Shanghai.";

                activityImage.src =
                    "images/china-clear.jpg";

            }

            else if (
                condition === "Rain" ||
                condition === "Drizzle" ||
                condition === "Thunderstorm"
            ) {

                suggestion =
                    "Rainy weather is suitable for visiting museums, indoor cultural exhibitions, shopping centres, historical galleries, and sampling authentic Chinese cuisine.";

                activityImage.src =
                    "images/china-rain.jpg";

            }

            else if (condition === "Snow") {

                suggestion =
                    "Winter weather is perfect for viewing snow-covered historical landmarks, exploring northern China scenery, and enjoying seasonal cultural festivals.";

                activityImage.src =
                    "images/china-snow.jpeg";

            } else {

            suggestion =
                "The weather is comfortable for exploring local attractions, cultural sites, food markets, and city sightseeing.";

            activityImage.src =
                "images/china-clear.jpg";
        }

        }

        // =====================================================
        // SWITZERLAND
        // =====================================================
        else if (country === "Switzerland") {

            if (condition === "Clear") {

                suggestion =
                    "The beautiful weather is perfect for exploring the Swiss Alps, enjoying scenic train journeys, visiting lakeside towns, taking mountain cable cars, and experiencing breathtaking alpine views.";

                activityImage.src =
                    "images/switzerland-clear.jpg";

            }

            else if (
                condition === "Rain" ||
                condition === "Drizzle" ||
                condition === "Thunderstorm"
            ) {

                suggestion =
                    "Rainy conditions are ideal for visiting museums, enjoying Swiss chocolate experiences, relaxing in mountain cafés, and shopping in charming town centres.";

                activityImage.src =
                    "images/switzerland-rain.jpg";

            }

            else if (condition === "Snow") {

                suggestion =
                    "The Swiss Alps offer world-class skiing, snowboarding, snow activities, winter hiking, and spectacular snowy mountain scenery.";

                activityImage.src =
                    "images/switzerland-snow.jpeg";

            } else {

            suggestion =
                "The weather is comfortable for exploring local attractions, cultural sites, food markets, and city sightseeing.";

            activityImage.src =
                "images/switzerland-clear.jpg";
        }

        }

        // =====================================================
        // MALAYSIA
        // =====================================================
        else if (country === "Malaysia") {

            if (condition === "Clear") {

                suggestion =
                    "Take advantage of the sunny weather by visiting the Petronas Twin Towers, exploring Langkawi beaches, hiking nature trails, visiting historical attractions, and enjoying outdoor food markets.";

                activityImage.src =
                    "images/malaysia-clear.jpg";

            }

            else if (
                condition === "Rain" ||
                condition === "Drizzle" ||
                condition === "Thunderstorm"
            ) {

                suggestion =
                    "Rainy weather is perfect for exploring shopping malls, museums, aquariums, indoor attractions, and experiencing Malaysia's diverse local cuisine.";

                activityImage.src =
                    "images/malaysia-rain.jpg";

            }

            else {

                suggestion =
                    "The pleasant weather is suitable for city sightseeing, local markets, food hunting, cultural attractions, and exploring Malaysia's rich heritage.";

                activityImage.src =
                    "images/malaysia-clear.jpg";

            }

        }

        // =====================================================
        // DEFAULT SUGGESTIONS
        // =====================================================
        else {

            if (condition === "Clear") {

                suggestion =
                    "The weather is excellent for sightseeing, outdoor adventures, photography, nature exploration, and visiting popular landmarks.";

                activityImage.src =
                    "images/sightseeing.jpeg";

            }

            else if (
                condition === "Rain" ||
                condition === "Drizzle" ||
                condition === "Thunderstorm"
            ) {

                suggestion =
                    "Indoor activities such as museums, cafés, shopping centres, galleries, and cultural attractions are recommended.";

                activityImage.src =
                    "images/museum.jpeg";

            }

            else if (condition === "Snow") {

                suggestion =
                    "The snowy weather is perfect for winter sports, mountain adventures, scenic photography, and enjoying seasonal attractions.";

                activityImage.src =
                    "images/skiing.jpeg";

            }

            else {

                suggestion =
                    "The weather is suitable for city walks, local exploration, cultural experiences, and discovering nearby attractions.";

                activityImage.src =
                    "images/citywalk.jpeg";

            }

        }

        // --------------------------------------
        // Display recommendation
        // --------------------------------------
        document.getElementById(
            "activitySuggestion"
        ).textContent = suggestion;

    }

    catch (error) {

        console.error(error);

        document.getElementById(
            "weatherDetails"
        ).textContent =
            "Unable to retrieve weather information.";

    }

}
}

// ========================
// COUNTRY SERVICE CLASS
// ========================
class CountryService {

    async getCountryInfo(country) {

        try {

            const capitalResponse = await fetch(
                "https://countriesnow.space/api/v0.1/countries/capital"
            );

            const currencyResponse = await fetch(
                "https://countriesnow.space/api/v0.1/countries/currency"
            );

            const flagResponse = await fetch(
                "https://countriesnow.space/api/v0.1/countries/flag/images"
            );

            const capitalData =
                await capitalResponse.json();

            const currencyData =
                await currencyResponse.json();

            const flagData =
                await flagResponse.json();

            const countryCapital =
                capitalData.data.find(
                    item => item.name === country
                );

            const countryCurrency =
                currencyData.data.find(
                    item => item.name === country
                );

            const countryFlag =
                flagData.data.find(
                    item => item.name === country
                ); 

            const capital =
                countryCapital
                    ? countryCapital.capital
                    : "N/A";

            const currency =
                countryCurrency
                    ? countryCurrency.currency
                    : "N/A";

            currencyService.setCurrency(
                    currency
                );

            const flag =
                countryFlag
                    ? countryFlag.flag
                    : "";

            document.getElementById("countryFlag").innerHTML = `
                <img
                    src="${flag}"
                    alt="${country} Flag"
                    class="flag-image"
                >
            `;

            document.getElementById("countryInfo").innerHTML = `
                <b>Country:</b> ${country}<br>
                <b>Capital:</b> ${capital}<br>
                <b>Currency:</b> ${currency}
            `;

            return capital;

        } catch (error) {

            console.error(error);

            document.getElementById("countryInfo")
                .innerHTML =
                "Unable to retrieve country information.";

            return null;
        }
    }
}

// Currency Exchange
class CurrencyService {

    constructor() {
        this.currencyCode = "";
    }

    setCurrency(currencyCode) {
        this.currencyCode = currencyCode;
    }

    async getExchangeRate() {

        try {

            const response = await fetch(
                "https://open.er-api.com/v6/latest/MYR"
            );

            const data =
                await response.json();

            return data.rates[
                this.currencyCode
            ];

        } catch (error) {

            console.error(error);

            return null;
        }
    }

    calculateConversion(
        amount,
        exchangeRate
    ) {

        return amount * exchangeRate;
    }
}
// ========================
// TRAVEL PLAN CLASS
// ========================
class TravelPlan {

    constructor(destination, date, travellers, cost) {

        this.destination = destination;
        this.date = date;
        this.travellers = travellers;
        this.cost = cost;
    }

    calculateTotalCost() {
        return this.travellers * this.cost;
    }
}

// ========================
// TRAVEL MANAGER CLASS
// ========================
class TravelManager {

    constructor() {
        const savedPlans = JSON.parse(
            localStorage.getItem("travelPlans")
        ) || [];

        this.editIndex = -1;

        this.plans = savedPlans.map(plan =>
            new TravelPlan(
                plan.destination,
                plan.date,
                plan.travellers,
                plan.cost
            )
        );

        this.renderPlans();
    }

    addPlan(plan) {
        if(this.editIndex === -1){
        this.plans.push(plan);

    } else {
        this.plans[this.editIndex] = plan;
        this.editIndex = -1;
        document.querySelector(
            "#planForm button"
        ).textContent = "Add Plan";
    }
        localStorage.setItem(
            "travelPlans",
            JSON.stringify(this.plans)
        );

        this.renderPlans();
    }

    deletePlan(index) {

    this.plans.splice(index, 1);

    localStorage.setItem(
        "travelPlans",
        JSON.stringify(this.plans)
    );

    this.renderPlans();
}

    editPlan(index) {

        const plan = this.plans[index];

        document.getElementById(
            "destination"
        ).value = plan.destination;

        document.getElementById(
            "date"
        ).value = plan.date;

        document.getElementById(
            "travellers"
        ).value = plan.travellers;

        document.getElementById(
            "cost"
        ).value = plan.cost;

        this.editIndex = index;

        document.querySelector(
            "#planForm button"
        ).textContent = "Update Plan";
}


    renderPlans() {

        const body =
            document.getElementById("plansBody");

        const totalBudget =
            document.getElementById("totalBudget");

        if (!body || !totalBudget) {
            return;
        }

        body.innerHTML = "";

        let overallBudget = 0;

        this.plans.forEach((plan, index) => {

            const totalCost =
                plan.calculateTotalCost();

            overallBudget += totalCost;

            body.innerHTML += `
                <tr>
                    <td>${plan.destination}</td>
                    <td>${plan.date}</td>
                    <td>${plan.travellers}</td>
                    <td>RM ${plan.cost.toFixed(2)}</td>
                    <td>RM ${totalCost.toFixed(2)}</td>
                    <td>
                        <button
                            onclick="travelManager.editPlan(${index})">
                            Edit
                        </button>

                        <button
                            onclick="travelManager.deletePlan(${index})">
                            Delete
                        </button>
                    </td>
                </tr>
            `;
        });

        totalBudget.textContent =
            overallBudget.toFixed(2);
    }
}

// ========================
// OBJECT CREATION
// ========================
const weatherService =
    new WeatherService();

const countryService =
    new CountryService();

const currencyService =
    new CurrencyService();

const travelManager =
    new TravelManager();

// ========================
// DESTINATION CARD
// ========================
async function selectCountry(country) {

    const countrySelect =
        document.getElementById("countrySelect");

    if (!countrySelect) {
        window.location.href =
            `index.html?country=${encodeURIComponent(country)}`;
        return;
    }

    countrySelect.value = country;

    const capital =
        await countryService.getCountryInfo(
            country
        );

    if (capital) {
        await weatherService.getWeather(
            capital,
            country
        );
    }
}

// ========================
// EVENT - GET INFO
// ========================
const getInfoButton =
    document.getElementById("getInfoBtn");

if (getInfoButton) {
    getInfoButton.addEventListener("click", async () => {

        const country =
            document.getElementById(
                "countrySelect"
            ).value;

        const capital =
            await countryService.getCountryInfo(
                country
            );

        if (capital) {
            await weatherService.getWeather(
                capital,
                country
            );
        }
    });
}

const selectedCountry =
    new URLSearchParams(window.location.search).get("country");

if (selectedCountry && document.getElementById("countrySelect")) {
    selectCountry(selectedCountry);
}

// ========================
// EVENT - ADD PLAN
// ========================
const planForm =
    document.getElementById("planForm");

if (planForm) {
    planForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const destination =
            document.getElementById(
                "destination"
            ).value;

        const date =
            document.getElementById(
                "date"
            ).value;

        const travellers =
            parseInt(
                document.getElementById(
                    "travellers"
                ).value
            );

        const cost =
            parseFloat(
                document.getElementById(
                    "cost"
                ).value
            );

        const plan =
            new TravelPlan(
                destination,
                date,
                travellers,
                cost
            );

        travelManager.addPlan(plan);
        this.reset();
    });
}

const convertButton =
    document.getElementById("convertBtn");

if (convertButton) {
    convertButton.addEventListener("click", async () => {

        const amount =
            parseFloat(
                document.getElementById(
                    "amount"
                ).value
            );

        if (!amount) {
            return;
        }

        const rate =
            await currencyService
                .getExchangeRate();

        if (!rate) {

            document
                .getElementById(
                    "conversionResult"
                )
                .textContent =
                "Unable to retrieve exchange rate.";

            return;
        }

        const result =
            currencyService
                .calculateConversion(
                    amount,
                    rate
                );

        document
            .getElementById(
                "conversionResult"
            )
            .textContent =
            `${amount} MYR = ${result.toFixed(2)} ${currencyService.currencyCode}`;
    });
        }