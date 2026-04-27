export default function Projects() {
  return (
    <section className="py-20 px-10">
      <h1 className="text-4xl font-bold mb-10">Projects</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map((item) => (
          <div key={item} className="overflow-hidden">
            <img
              src="https://via.placeholder.com/400"
              className="hover:scale-110 transition"
            />
          </div>
        ))}
      </div>
    </section>
  );
}