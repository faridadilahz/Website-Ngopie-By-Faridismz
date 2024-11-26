let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Mengurangi offset untuk memperbaiki posisi
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Menghapus kelas active dari semua tautan
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active'); // Menambahkan kelas active untuk tautan yang sesuai
                }
            });
        }
    });
};

    function toggleMenu() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('show'); // Tambahkan/hapus class "show" saat toggle diklik
    }

    function toggleMenu() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('show'); // Tambah/hapus class "show"
    }

    // Tutup menu saat klik di luar menu
    document.addEventListener('click', function (event) {
        const navbar = document.querySelector('.navbar');
        const toggle = document.querySelector('.menu-toggle');

        // Periksa jika klik tidak berada di dalam menu atau tombol toggle
        if (!navbar.contains(event.target) && !toggle.contains(event.target)) {
            navbar.classList.remove('show'); // Tutup menu
        }
    });

    function toggleMenu() {
        const navbar = document.querySelector('.navbar');
        
        // Jika menu sedang terbuka
        if (navbar.classList.contains('show')) {
            navbar.classList.remove('show');
            navbar.classList.add('hide'); // Tambahkan animasi keluar
        } else {
            navbar.classList.remove('hide'); // Hapus animasi keluar
            navbar.classList.add('show'); // Tambahkan animasi masuk
        }
    }

    // Tutup menu saat klik di luar
    document.addEventListener('click', function (event) {
        const navbar = document.querySelector('.navbar');
        const toggle = document.querySelector('.menu-toggle');

        // Periksa jika klik tidak berada di dalam menu atau tombol toggle
        if (!navbar.contains(event.target) && !toggle.contains(event.target)) {
            navbar.classList.remove('show'); // Hapus animasi masuk
            navbar.classList.add('hide'); // Tambahkan animasi keluar
        }
    });
    
    
    // Adjust layout on page load and when resizing the window
    window.addEventListener('load', adjustCardLayout);
    window.addEventListener('resize', adjustCardLayout);
    

    