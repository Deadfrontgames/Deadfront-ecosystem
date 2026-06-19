export default function Rewards() {
  return (
    <section className="py-24">
      <h2 className="text-4xl font-bold mb-8">
        Rewards
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border p-6 rounded-xl">
          Daily Missions
        </div>

        <div className="border p-6 rounded-xl">
          Tournament Rewards
        </div>

        <div className="border p-6 rounded-xl">
          Battle Pass Rewards
        </div>
      </div>
    </section>
  );
}
