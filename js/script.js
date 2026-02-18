function createStars() {
    const starsContainer = document.getElementById('starsContainer');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('id-ID', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    const dateString = now.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    document.getElementById('clock-time').innerText = timeString;
    document.getElementById('clock-date').innerText = dateString;
}

function updateCountdown() {
    const ramadhanStart = new Date('2026-02-19T00:00:00').getTime();
    const ramadhanEnd = new Date('2026-03-20T23:59:59').getTime();
    const now = new Date().getTime();

    if (now < ramadhanStart) {
        // Before Ramadhan - show countdown
        document.querySelector('.countdown').style.display = 'flex';
        document.querySelector('.clock').style.display = 'none';
        document.getElementById('viewScheduleBtn').style.display = 'block';

        const gap = ramadhanStart - now;
        const days = Math.floor(gap / (1000 * 60 * 60 * 24));
        const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((gap % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
        document.querySelector('.message').innerText = '✨ Selamat Menyambut Bulan Ramadhan ✨';
    } else if (now <= ramadhanEnd) {
        // During Ramadhan - show clock
        document.querySelector('.countdown').style.display = 'none';
        document.querySelector('.clock').style.display = 'flex';
        document.getElementById('viewScheduleBtn').style.display = 'block';

        updateClock();
        if (!userHasToggled) {
            scheduleVisible = true;
            document.querySelector('.schedule').style.display = 'block';
            loadSchedule();
        }
        document.querySelector('.message').innerText = '🎉 Selamat Menjalankan Ibadah Puasa 🎉';
    } else {
        // After Ramadhan - show clock
        document.querySelector('.countdown').style.display = 'none';
        document.querySelector('.clock').style.display = 'flex';
        document.getElementById('viewScheduleBtn').style.display = 'block';

        updateClock();
        document.querySelector('.message').innerText = '✨ Ramadhan Telah Berakhir, Tetap Jaga Kebaikan ✨';
    }
}

document.getElementById('viewScheduleBtn').addEventListener('click', function() {
    loadFullSchedule();
});

const jadwalRamadan = [
  {
    hari: 1,
    tanggal: "19 Feb 2026",
    imsak: "04:50",
    subuh: "05:00",
    terbit: "06:13",
    duha: "06:41",
    zuhur: "12:26",
    asar: "15:38",
    magrib: "18:31",
    isya: "19:41"
  },
  {
    hari: 2,
    tanggal: "20 Feb 2026",
    imsak: "04:50",
    subuh: "05:00",
    terbit: "06:13",
    duha: "06:40",
    zuhur: "12:26",
    asar: "15:37",
    magrib: "18:31",
    isya: "19:40"
  },
  {
    hari: 3,
    tanggal: "21 Feb 2026",
    imsak: "04:51",
    subuh: "05:01",
    terbit: "06:13",
    duha: "06:40",
    zuhur: "12:25",
    asar: "15:37",
    magrib: "18:31",
    isya: "19:40"
  },
  {
    hari: 4,
    tanggal: "22 Feb 2026",
    imsak: "04:51",
    subuh: "05:01",
    terbit: "06:13",
    duha: "06:40",
    zuhur: "12:25",
    asar: "15:36",
    magrib: "18:30",
    isya: "19:40"
  },
  {
    hari: 5,
    tanggal: "23 Feb 2026",
    imsak: "04:51",
    subuh: "05:01",
    terbit: "06:13",
    duha: "06:40",
    zuhur: "12:25",
    asar: "15:35",
    magrib: "18:30",
    isya: "19:39"
  },
  {
    hari: 6,
    tanggal: "24 Feb 2026",
    imsak: "04:51",
    subuh: "05:01",
    terbit: "06:13",
    duha: "06:40",
    zuhur: "12:25",
    asar: "15:34",
    magrib: "18:30",
    isya: "19:39"
  },
  {
    hari: 7,
    tanggal: "25 Feb 2026",
    imsak: "04:51",
    subuh: "05:01",
    terbit: "06:13",
    duha: "06:40",
    zuhur: "12:25",
    asar: "15:34",
    magrib: "18:30",
    isya: "19:39"
  },
  {
    hari: 8,
    tanggal: "26 Feb 2026",
    imsak: "04:51",
    subuh: "05:01",
    terbit: "06:13",
    duha: "06:40",
    zuhur: "12:25",
    asar: "15:33",
    magrib: "18:29",
    isya: "19:38"
  },
  {
    hari: 9,
    tanggal: "27 Feb 2026",
    imsak: "04:51",
    subuh: "05:01",
    terbit: "06:13",
    duha: "06:40",
    zuhur: "12:24",
    asar: "15:32",
    magrib: "18:29",
    isya: "19:38"
  },
  {
    hari: 10,
    tanggal: "28 Feb 2026",
    imsak: "04:51",
    subuh: "05:01",
    terbit: "06:13",
    duha: "06:40",
    zuhur: "12:24",
    asar: "15:31",
    magrib: "18:29",
    isya: "19:38"
  },
  {
    hari: 11,
    tanggal: "1 Mar 2026",
    imsak: "04:51",
    subuh: "05:01",
    terbit: "06:12",
    duha: "06:40",
    zuhur: "12:24",
    asar: "15:30",
    magrib: "18:29",
    isya: "19:37"
  },
  {
    hari: 12,
    tanggal: "2 Mar 2026",
    imsak: "04:51",
    subuh: "05:01",
    terbit: "06:12",
    duha: "06:39",
    zuhur: "12:24",
    asar: "15:29",
    magrib: "18:28",
    isya: "19:37"
  },
  {
    hari: 13,
    tanggal: "3 Mar 2026",
    imsak: "04:50",
    subuh: "05:00",
    terbit: "06:12",
    duha: "06:39",
    zuhur: "12:24",
    asar: "15:28",
    magrib: "18:28",
    isya: "19:36"
  },
  {
    hari: 14,
    tanggal: "4 Mar 2026",
    imsak: "04:50",
    subuh: "05:00",
    terbit: "06:12",
    duha: "06:39",
    zuhur: "12:23",
    asar: "15:27",
    magrib: "18:28",
    isya: "19:36"
  },
  {
    hari: 15,
    tanggal: "5 Mar 2026",
    imsak: "04:50",
    subuh: "05:00",
    terbit: "06:12",
    duha: "06:39",
    zuhur: "12:23",
    asar: "15:27",
    magrib: "18:27",
    isya: "19:36"
  },
  {
    hari: 16,
    tanggal: "6 Mar 2026",
    imsak: "04:50",
    subuh: "05:00",
    terbit: "06:12",
    duha: "06:39",
    zuhur: "12:23",
    asar: "15:26",
    magrib: "18:27",
    isya: "19:35"
  },
  {
    hari: 17,
    tanggal: "7 Mar 2026",
    imsak: "04:50",
    subuh: "05:00",
    terbit: "06:12",
    duha: "06:39",
    zuhur: "12:23",
    asar: "15:24",
    magrib: "18:27",
    isya: "19:35"
  },
  {
    hari: 18,
    tanggal: "8 Mar 2026",
    imsak: "04:50",
    subuh: "05:00",
    terbit: "06:11",
    duha: "06:39",
    zuhur: "12:22",
    asar: "15:23",
    magrib: "18:26",
    isya: "19:35"
  },
  {
    hari: 19,
    tanggal: "9 Mar 2026",
    imsak: "04:50",
    subuh: "05:00",
    terbit: "06:11",
    duha: "06:38",
    zuhur: "12:22",
    asar: "15:22",
    magrib: "18:26",
    isya: "19:34"
  },
  {
    hari: 20,
    tanggal: "10 Mar 2026",
    imsak: "04:50",
    subuh: "05:00",
    terbit: "06:11",
    duha: "06:38",
    zuhur: "12:22",
    asar: "15:21",
    magrib: "18:26",
    isya: "19:34"
  },
  {
    hari: 21,
    tanggal: "11 Mar 2026",
    imsak: "04:50",
    subuh: "05:00",
    terbit: "06:11",
    duha: "06:38",
    zuhur: "12:22",
    asar: "15:21",
    magrib: "18:25",
    isya: "19:33"
  },
  {
    hari: 22,
    tanggal: "12 Mar 2026",
    imsak: "04:49",
    subuh: "04:59",
    terbit: "06:11",
    duha: "06:38",
    zuhur: "12:21",
    asar: "15:22",
    magrib: "18:25",
    isya: "19:33"
  },
  {
    hari: 23,
    tanggal: "13 Mar 2026",
    imsak: "04:49",
    subuh: "04:59",
    terbit: "06:11",
    duha: "06:38",
    zuhur: "12:21",
    asar: "15:22",
    magrib: "18:24",
    isya: "19:33"
  },
  {
    hari: 24,
    tanggal: "14 Mar 2026",
    imsak: "04:49",
    subuh: "04:59",
    terbit: "06:10",
    duha: "06:37",
    zuhur: "12:21",
    asar: "15:23",
    magrib: "18:24",
    isya: "19:32"
  },
  {
    hari: 25,
    tanggal: "15 Mar 2026",
    imsak: "04:49",
    subuh: "04:59",
    terbit: "06:10",
    duha: "06:37",
    zuhur: "12:20",
    asar: "15:23",
    magrib: "18:24",
    isya: "19:32"
  },
  {
    hari: 26,
    tanggal: "16 Mar 2026",
    imsak: "04:49",
    subuh: "04:59",
    terbit: "06:10",
    duha: "06:37",
    zuhur: "12:20",
    asar: "15:23",
    magrib: "18:23",
    isya: "19:31"
  },
  {
    hari: 27,
    tanggal: "17 Mar 2026",
    imsak: "04:49",
    subuh: "04:59",
    terbit: "06:10",
    duha: "06:37",
    zuhur: "12:20",
    asar: "15:24",
    magrib: "18:23",
    isya: "19:31"
  },
  {
    hari: 28,
    tanggal: "18 Mar 2026",
    imsak: "04:48",
    subuh: "04:58",
    terbit: "06:10",
    duha: "06:37",
    zuhur: "12:20",
    asar: "15:24",
    magrib: "18:23",
    isya: "19:31"
  },
  {
    hari: 29,
    tanggal: "19 Mar 2026",
    imsak: "04:48",
    subuh: "04:58",
    terbit: "06:10",
    duha: "06:36",
    zuhur: "12:20",
    asar: "15:25",
    magrib: "18:23",
    isya: "19:31"
  },
  {
    hari: 30,
    tanggal: "20 Mar 2026",
    imsak: "04:48",
    subuh: "04:58",
    terbit: "06:09",
    duha: "06:36",
    zuhur: "12:19",
    asar: "15:25",
    magrib: "18:22",
    isya: "19:30"
  }
];

function loadFullSchedule() {
    const scheduleTable = document.querySelector('.schedule-table');
    scheduleTable.innerHTML = ''; // Clear previous

    jadwalRamadan.forEach(day => {
        // Add day header
        const dayHeader = document.createElement('div');
        dayHeader.className = 'schedule-day-header';
        dayHeader.innerHTML = `<h3>Hari ${day.hari} - ${day.tanggal}</h3>`;
        scheduleTable.appendChild(dayHeader);

        const scheduleItems = [
            { label: 'Imsak', time: day.imsak },
            { label: 'Subuh', time: day.subuh },
            { label: 'Zuhur', time: day.zuhur },
            { label: 'Ashar', time: day.asar },
            { label: 'Maghrib', time: day.magrib },
            { label: 'Isya', time: day.isya }
        ];

        scheduleItems.forEach(item => {
            const row = document.createElement('div');
            row.className = 'schedule-row';
            row.innerHTML = `
                <span class="schedule-label">${item.label}</span>
                <span class="schedule-time">${item.time}</span>
            `;
            scheduleTable.appendChild(row);
        });
    });

    document.querySelector('.schedule-title').innerText = 'Jadwal Imsakiyah Lengkap Kota Lubuklinggau - Ramadhan 2026/1447 H';
}

function loadSchedule(isFull = false) {
    const scheduleTable = document.querySelector('.schedule-table');
    scheduleTable.innerHTML = ''; // Clear previous

    if (isFull) {
        // Display full schedule for all days
        document.querySelector('.schedule-title').innerText = 'Jadwal Imsakiyah Kota Lubuklinggau - Ramadhan 2026/1447 H';

        jadwalRamadan.forEach(day => {
            // Add day header
            const dayHeader = document.createElement('div');
            dayHeader.className = 'schedule-day-header';
            dayHeader.innerText = `Hari ${day.hari} - ${day.tanggal}`;
            scheduleTable.appendChild(dayHeader);

            const scheduleItems = [
                { label: 'Imsak', time: day.imsak },
                { label: 'Subuh', time: day.subuh },
                { label: 'Zuhur', time: day.zuhur },
                { label: 'Ashar', time: day.asar },
                { label: 'Maghrib', time: day.magrib },
                { label: 'Isya', time: day.isya }
            ];

            scheduleItems.forEach(item => {
                const row = document.createElement('div');
                row.className = 'schedule-row';
                row.innerHTML = `
                    <span class="schedule-label">${item.label}</span>
                    <span class="schedule-time">${item.time}</span>
                `;
                scheduleTable.appendChild(row);
            });
        });
    } else {
        // Display today's schedule
        const now = new Date();
        const startDate = new Date('2026-02-19');
        const diffTime = now - startDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // Hari ke-1 mulai 19 Feb

        const todaySchedule = jadwalRamadan.find(day => day.hari === diffDays);

        if (todaySchedule) {
            const scheduleItems = [
                { label: 'Imsak', time: todaySchedule.imsak },
                { label: 'Subuh', time: todaySchedule.subuh },
                { label: 'Zuhur', time: todaySchedule.zuhur },
                { label: 'Ashar', time: todaySchedule.asar },
                { label: 'Maghrib', time: todaySchedule.magrib },
                { label: 'Isya', time: todaySchedule.isya }
            ];

            scheduleItems.forEach(item => {
                const row = document.createElement('div');
                row.className = 'schedule-row';
                row.innerHTML = `
                    <span class="schedule-label">${item.label}</span>
                    <span class="schedule-time">${item.time}</span>
                `;
                scheduleTable.appendChild(row);
            });

            // Update title with date
            document.querySelector('.schedule-title').innerText = `Jadwal Imsakiyah Kota Lubuklinggau - Hari ${todaySchedule.hari} (${todaySchedule.tanggal})`;
        } else {
            // Fallback if no schedule found
            const scheduleData = [
                { label: 'Imsak', time: '04:50' },
                { label: 'Subuh', time: '05:00' },
                { label: 'Zuhur', time: '12:26' },
                { label: 'Ashar', time: '15:38' },
                { label: 'Maghrib', time: '18:31' },
                { label: 'Isya', time: '19:41' }
            ];

            scheduleData.forEach(item => {
                const row = document.createElement('div');
                row.className = 'schedule-row';
                row.innerHTML = `
                    <span class="schedule-label">${item.label}</span>
                    <span class="schedule-time">${item.time}</span>
                `;
                scheduleTable.appendChild(row);
            });

            document.querySelector('.schedule-title').innerText = 'Jadwal Imsakiyah Kota Lubuklinggau - Ramadhan 2026/1447 H';
        }
    }
}

createStars();
document.body.style.overflow = 'hidden'; // Default hide scroll
loadSchedule();
updateCountdown();
setInterval(updateCountdown, 1000);

let scheduleVisible = false;
let userHasToggled = false;

// Event listener for view schedule button
document.getElementById('viewScheduleBtn').addEventListener('click', function() {
    const scheduleDiv = document.querySelector('.schedule');
    const clockDiv = document.querySelector('.clock');
    const countdownDiv = document.querySelector('.countdown');
    const h1 = document.querySelector('h1');
    const subtitle = document.querySelector('.subtitle');
    userHasToggled = true;
    scheduleVisible = !scheduleVisible;
    if (scheduleVisible) {
        scheduleDiv.style.display = 'block';
        clockDiv.classList.add('fixed');
        h1.style.transform = 'scale(0.5)';
        subtitle.style.transform = 'scale(0.5)';
        clockDiv.style.transform = 'scale(0.5)';
        countdownDiv.style.transform = 'scale(0.5)';
        loadSchedule(true); // true for full schedule
        this.innerText = 'Sembunyikan Jadwal Imsak';
        document.body.style.overflow = 'auto'; // Allow page scroll
    } else {
        scheduleDiv.style.display = 'none';
        clockDiv.classList.remove('fixed');
        h1.style.transform = 'scale(1)';
        subtitle.style.transform = 'scale(1)';
        clockDiv.style.transform = 'scale(1)';
        countdownDiv.style.transform = 'scale(1)';
        this.innerText = 'Lihat Jadwal Imsak';
        document.body.style.overflow = 'hidden'; // Hide scroll when schedule hidden
    }
});