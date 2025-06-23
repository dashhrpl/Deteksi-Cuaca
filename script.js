document.getElementById("getWeather").addEventListener("click", function () {
    const city = document.getElementById("city").value;
    const apiKey = "e56a092b182062d2b8b1ef43a4ce30a2"; // atau pakai yang satunya juga bisa
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Kota tidak ditemukan atau kesalahan jaringan.");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("location").textContent = `${data.name}, ${data.sys.country}`;
            document.getElementById("temperature").textContent = `Suhu: ${data.main.temp}°C`;
            document.getElementById("description").textContent = `Cuaca: ${data.weather[0].description}`;

            const iconCode = data.weather[0].icon;
            document.getElementById("icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

            document.getElementById("weather").classList.remove("hidden");
        })
        .catch(error => {
            alert(error.message);
        });
});