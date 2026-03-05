export default function Rak() {
  const books = [
    {
      title: "Sepucuk Surat",
      author: "Anonim",
      cover: "/og-kelaspekerja.png",
    },
    {
      title: "Malam di Stasiun",
      author: "Kelas Pekerja",
      cover: "/og-kelaspekerja.png",
    },
  ];

  return (
    <div className="min-h-screen max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Rak Buku</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {books.map((book, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img
              src={book.cover}
              className="w-full aspect-[3/4] object-cover"
            />

            <div className="p-3">
              <h3 className="text-sm font-semibold">{book.title}</h3>
              <p className="text-xs text-gray-500">{book.author}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        Ingin menambahkan buku Anda?
        <br />
        Hubungi pengelola untuk menambahkan karya Anda.
      </div>
    </div>
  );
}
