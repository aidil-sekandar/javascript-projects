// elements
const form = document.getElementById("form");
const results = document.querySelector("#results");
const zone_select = document.getElementById("zone");
const duration_select = document.getElementById("duration");
const date = document.getElementById("date").value;
const selZone = document.getElementById("selected-zone");

// Global Variable
const baseURL = "https://www.e-solat.gov.my/index.php?r=esolatApi/TakwimSolat";

// function to create option elements for "duration"
const appendDurationOption = (durations) => {
  durations.map((duration) => {
    const duration_option = document.createElement("option");
    duration_option.value = duration;
    duration_option.innerText = duration;
    duration_select.append(duration_option);
  });
};

// function to create option elements for "zone"
const appendZoneOption = (zone) => {
  zone["zone-code"].map((code) => {
    const zone_option = document.createElement("option");
    zone_option.value = code;
    zone_option.innerText = zone["zone"][code];
    zone_select.append(zone_option);
  });
};

// fetch data from ./data/data.json
const fetchData = async () => {
  const res = await fetch("./data/data.json");
  const data = await res.json();
  appendZoneOption(data);
  appendDurationOption(data["durations"]);
};

const checkDate = (data) => {
  const hariMal = {
    Monday: "Isnin",
    Tuesday: "Selasa",
    Wednesday: "Rabu",
    Thursday: "Khamis",
    Friday: "Jumaat",
    Saturday: "Sabtu",
    Sunday: "Ahad",
  };

  const monthNum = {
    Jan: "1",
    Feb: "2",
    Mar: "3",
    Apr: "4",
    May: "5",
    Jun: "6",
    Jul: "7",
    Aug: "8",
    Sep: "9",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  let date = `${data.date[0]}${data.date[1]}`;
  let month = "";
  let year = "";
  for (let i = 0; i < 3; i++) {
    month = month + data.date[i + 3];
  }

  for (let i = 0; i < 4; i++) {
    year = year + data.date[i + 7];
  }

  let fullDate = hariMal[data.day] + " - " + date + "/" + monthNum[month] + "/" + year;
  return fullDate;
};

const displayResult = (w) => {
  if (results.hasChildNodes()) {
    results.innerHTML = "";
  }

  const waktuArray = ["Subuh", "Zohor", "Asar", "Maghrib", "Isha'"];

  w.map((e) => {
    let masa = [e.fajr, e.dhuhr, e.asr, e.maghrib, e.isha];
    const hari = document.createElement("h3");
    const result = document.createElement("div");
    result.classList.add("result");
    result.append(hari);
    hari.innerText = checkDate(e);
    for (let i = 0; i < 5; i++) {
      const waktu = document.createElement("p");
      waktu.innerText = `${waktuArray[i]}: ${masa[i].slice(0, masa[i].length - 3)}`;
      result.append(waktu);
    }
    results.append(result);
  });
};

// request prayer time from api
const requestData = async (zone, date, duration) => {
  const fetchedData = await fetch(`${baseURL}&period=${duration}&zone=${zone.value}&date=${date}`);
  const data = await fetchedData.json();

  selZone.innerText = `Zone: ${zone.textContent}`;
  displayResult(data.prayerTime);
};

// submit form event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let duration = duration_select.options[duration_select.selectedIndex].value;
  let zone_code = zone_select.options[zone_select.selectedIndex];

  requestData(zone_code, date, duration);
});

// onload function
window.onload = () => {
  fetchData();
};
