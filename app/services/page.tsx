export default function Services() {
  return (
    <section className="py-20 px-10">
      <h1 className="text-4xl font-bold mb-10">Services</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 shadow hover:scale-105 transition">
          Architecture Design
        </div>
        <div className="p-6 shadow hover:scale-105 transition">
          Interior Design
        </div>
        <div className="p-6 shadow hover:scale-105 transition">
          Urban Planning
        </div>
      </div>
    </section>
  );
}