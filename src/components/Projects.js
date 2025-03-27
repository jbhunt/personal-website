import Card from "@/components/ui/card";

export default function Projects() {
  return (
    <section id="projects" className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <div>
            <h3 className="text-xl font-bold">Neural Decoder Toolkit</h3>
            <p>A Python package for decoding neural activity.</p>
          </div>
        </Card>
        <Card>
          <div>
            <h3 className="text-xl font-bold">Behavioral Task Framework</h3>
            <p>Real-time behavioral experiment runner.</p>
          </div>
        </Card>
      </div>
    </section>
  );
}