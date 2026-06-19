const features = [
  "100 Player Battle Royale",
  "Real Rewards",
  "Loot & Survival",
  "Squad Combat",
  "Battle Pass",
  "Seasonal Events"
];

export default function Features() {
  return (
    <section className="py-24">
      <h2 className="text-4xl font-bold text-center mb-12">
        Features
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((item) => (
          <div
            key={item}
            className="border p-6 rounded-xl"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
