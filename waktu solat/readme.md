# Waktu Solat Malaysia
#### Live: https://waktu-solat.netlify.app

### **Base URL:** https://www.e-solat.gov.my/index.php?r=esolatApi/takwimsolat

### **URL's Additional Params:**

- &period={**PERIOD**}
- &zone={**ZONE**}
- &datestart={**YYYY-MM-DD**}&dateend={**YYYY-MM-DD**}

---

### **Available Period**

- today
- week
- month
- year

---

### **Available Zone:**

- JHR01 = Pulau Aur dan Pulau Pemanggil
- JHR02 = Johor Bharu, Kota Tinggi, Mersing
- JHR03 = Kluang, Pontian
- JHR04 = Batu Pahat, Muar, Segamat, Gemas Johor
- KDH01 = Kota Setar, Kubang Pasu, Pokok Sena (Daerah Kecil)
- KDH02 = Kuala Muda, Yan, Pendang
- KDH03 = Padang Terap, Sik
- KDH04 = Baling
- KDH05 = Bandar Baharu, Kulim
- KDH06 = Langkawi
- KDH07 = Gunung Jerai
- KTN01 = Bachok, Kota Bharu, Machang, Pasir Mas, Pasir Puteh, Tanah Merah, Tumpat, Kuala Krai, Mukim Chiku
- KTN03 = Gua Musang (Daerah Galas Dan Bertam), Jeli
- MLK01 = SELURUH NEGERI MELAKA
- NGS01 = Tampin, Jempol
- NGS02 = Jelebu, Kuala Pilah, Port Dickson, Rembau, Seremban
- PHG01 = Pulau Tioman
- PHG02 = Kuantan, Pekan, Rompin, Muadzam Shah
- PHG03 = Jerantut, Temerloh, Maran, Bera, Chenor, Jengka
- PHG04 = Bentong, Lipis, Raub
- PHG05 = Genting Sempah, Janda Baik, Bukit Tinggi
- PHG06 = Cameron Highlands, Genting Higlands, Bukit Fraser
- PLS01 = Kangar, Padang Besar, Arau
- PNG01 = Seluruh Negeri Pulau Pinang
- PRK01 = Tapah, Slim River, Tanjung Malim
- PRK02 = Kuala Kangsar, Sg. Siput (Daerah Kecil), Ipoh, Batu Gajah, Kampar
- PRK03 = Lenggong, Pengkalan Hulu, Grik
- PRK04 = Temengor, Belum
- PRK05 = Kg Gajah, Teluk Intan, Bagan Datuk, Seri Iskandar, Beruas, Parit, Lumut, Sitiawan, Pulau Pangkor
- PRK06 = Selama, Taiping, Bagan Serai, Parit Buntar
- PRK07 = Bukit Larut
- SBH01 = Bahagian Sandakan (Timur), Bukit Garam, Semawang, Temanggong, Tambisan, Bandar Sandakan
- SBH02 = Beluran, Telupid, Pinangah, Terusan, Kuamut, Bahagian Sandakan (Barat)
- SBH03 = Lahad Datu, Silabukan, Kunak, Sahabat, Semporna, Tungku, Bahagian Tawau (Timur)
- SBH04 = Bandar Tawau, Balong, Merotai, Kalabakan, Bahagian Tawau (Barat)
- SBH05 = Kudat, Kota Marudu, Pitas, Pulau Banggi, Bahagian Kudat
- SBH06 = Gunung Kinabalu
- SBH07 = Kota Kinabalu, Ranau, Kota Belud, Tuaran, Penampang, Papar, Putatan, Bahagian Pantai Barat
- SBH08 = Pensiangan, Keningau, Tambunan, Nabawan, Bahagian Pendalaman (Atas)
- SBH09 = Beaufort, Kuala Penyu, Sipitang, Tenom, Long Pa Sia, Membakut, Weston, Bahagian Pendalaman (Bawah)
- SGR01 = Gombak, Petaling, Sepang, Hulu Langat, Hulu Selangor, Rawang, S.Alam
- SGR02 = Kuala Selangor, Sabak Bernam
- SGR03 = Klang, Kuala Langat
- SWK01 = Limbang, Lawas, Sundar, Trusan
- SWK02 = Miri, Niah, Bekenu, Sibuti, Marudi
- SWK03 = Pandan, Belaga, Suai, Tatau, Sebauh, Bintulu
- SWK04 = Sibu, Mukah, Dalat, Song, Igan, Oya, Balingian, Kanowit, Kapit
- SWK05 = Sarikei, Matu, Julau, Rajang, Daro, Bintangor, Belawai
- SWK06 = Lubok Antu, Sri Aman, Roban, Debak, Kabong, Lingga, Engkelili, Betong, Spaoh, Pusa, Saratok
- SWK07 = Serian, Simunjan, Samarahan, Sebuyau, Meludam
- SWK08 = Kuching, Bau, Lundu, Sematan
- SWK09 = Zon Khas (Kampung Patarikan)
- TRG01 = Kuala Terengganu, Marang, Kuala Nerus
- TRG02 = Besut, Setiu
- TRG03 = Hulu Terengganu
- TRG04 = Dungun, Kemaman
- WLY01 = Kuala Lumpur, Putrajaya
- WLY02 = Labuan

---

### **Output Example**

```json
{
    "prayerTime": [
        {
            "hijri": "1439-12-24",
            "date": "05-Sep-2018",
            "day": "Wednesday",
            "imsak": "05:30:00",
            "fajr": "05:40:00",
            "syuruk": "06:56:00",
            "dhuhr": "13:03:00",
            "asr": "16:10:00",
            "maghrib": "19:07:00",
            "isha": "20:16:00"
        },
        {...}
    ],
    "status": "OK!",
    "serverTime": "2018-09-05 14:15:55",
    "periodType": "week",
    "lang": "ms_my",
    "zone": "JHR01",
    "bearing": "292&#176; 25&#8242; 40&#8243;"
}
```

---

Credit:

- https://www.e-solat.gov.my/
- https://gist.github.com/lomotech/b25cde7118adf5e7a1fea4ce6cfce259#url
