import Navbar from '../components/Navbar';
import '../assets/atjatip-module.css';
import Footer from '../components/Footer'

export default function Example() {
  return (
    <>
      <Navbar />



      

      <div className=" mx-0 min-h-screen overflow-y-auto">
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
         
         <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
             
             <div className="hidden duration-700 ease-in-out" data-carousel-item>
                 </div>
             <div className="hidden duration-700 ease-in-out" data-carousel-item>
                 </div>
             
             <div className="hidden duration-700 ease-in-out" data-carousel-item>
                 </div>
             <div className="hidden duration-700 ease-in-out" data-carousel-item>
                 </div>
             <div className="hidden duration-700 ease-in-out" data-carousel-item>
                 </div>
         </div>
         <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
             <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
             <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
             <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
             <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
             <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
         </div>
         <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
             <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                 <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                 </svg>
                 <span className="sr-only">Previous</span>
             </span>
         </button>
         <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
             <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                 <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                 </svg>
                 <span className="sr-only">Next</span>
             </span>
         </button>
     </div>
        <div className="relative isolate px-8 pt-14 lg:px-8">
          <div className="mx-auto w-[70%] py-15 sm:py-40">
            {/* Company Profile */}
            <div className="text-center px-16 py-5 backdrop-blur-xl bg-white/30 rounded-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                AT Jastip
              </h1>
              <p className="mt-6 text-lg leading-8 text-black px-3">
                Selamat datang di layanan jasa titip terbaik di Indonesia.
              </p>
              <p className="mt-4 text-lg leading-8 text-black px-3">
                AT Jastip membantu Anda mendapatkan barang dari luar negeri dengan mudah, cepat, dan terpercaya.
              </p>
            </div>
          </div>

          {/* Cara Pakai */}
          <div className="mx-auto w-[70%] py-15 sm:py-40">
            <div className="text-center px-16 py-5 backdrop-blur-xl bg-white/30 rounded-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Cara Pakai
              </h1>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">1. Cari Barang</h3>
                  <p className="text-gray-700">Temukan barang yang ingin Anda titipkan kepada kami.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">2. Hubungi Kami</h3>
                  <p className="text-gray-700">Kirimkan detail barang dan kami akan mengurus sisanya.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">3. Tunggu Barang Anda</h3>
                  <p className="text-gray-700">Kami akan memastikan barang sampai di tangan Anda.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mx-auto w-[70%] py-15 sm:py-40">
            <div className="text-center px-16 py-5 backdrop-blur-xl bg-white/30 rounded-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                FAQ
              </h1>
              <div className="mt-6 text-left">
                <details className="bg-white p-4 rounded-lg shadow-md mb-4">
                  <summary className="text-lg font-semibold">Apa itu AT Jastip?</summary>
                  <p className="mt-2 text-gray-700">
                    AT Jastip adalah layanan jasa titip yang membantu Anda membeli barang dari luar kota atau luar negeri dengan mudah.
                  </p>
                </details>
                <details className="bg-white p-4 rounded-lg shadow-md mb-4">
                  <summary className="text-lg font-semibold">Bagaimana cara menggunakan layanan ini?</summary>
                  <p className="mt-2 text-gray-700">
                    Anda bisa mengikuti langkah-langkah pada bagian &quot;Cara Pakai&quot; di atas.
                  </p>
                </details>
                <details className="bg-white p-4 rounded-lg shadow-md mb-4">
                  <summary className="text-lg font-semibold">Berapa lama proses pengiriman barang?</summary>
                  <p className="mt-2 text-gray-700">
                    Waktu pengiriman tergantung dari lokasi barang dan metode pengiriman yang dipilih.
                  </p>
                </details>
                <details className="bg-white p-4 rounded-lg shadow-md mb-4">
                  <summary className="text-lg font-semibold">Apakah ada biaya tambahan?</summary>
                  <p className="mt-2 text-gray-700">
                    Biaya tambahan mungkin berlaku tergantung dari berat, ukuran, dan nilai barang.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
