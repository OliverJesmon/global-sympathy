import CSR from "../components/CSR";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import Workinfo from "../components/Workinfo";

export default function CulturalP() {
  const Para1 =
    "Cultural preservation is essential for maintaining the identity, traditions, and heritage of communities, especially in a rapidly changing world. It safeguards the diverse customs, languages, and practices that form the foundation of local and global identities. Preserving culture fosters a sense of belonging and pride, ensuring that future generations can learn from their roots while adapting to modern life.";
  const Para2 =
    "For organizations like Global Sympathy Foundation (GSF), cultural preservation is vital in protecting indigenous knowledge, promoting community cohesion, and empowering marginalized groups to maintain their cultural practices amidst external pressures. Supporting traditional arts, crafts, festivals, and languages strengthens community resilience, creates sustainable livelihoods, and nurtures a deep respect for diversity.";
  const Para3 =
    "Cultural preservation is vital for safeguarding the identity, heritage, and traditions of communities, particularly those in marginalized or indigenous groups. For Global Sympathy Foundation (GSF), promoting cultural preservation helps ensure that the rich history and unique practices of these communities are celebrated, respected, and passed on to future generations.";
  const Para4 =
    "Cultural preservation is more than just about maintaining traditions—it is about empowering communities by instilling a sense of pride and connection to their roots. This contributes to social cohesion, inclusion, and a strong sense of identity, which are critical for community well-being and resilience.";
  const Para5 =
    "For GSF, supporting cultural heritage aligns with its mission to foster sustainable development that respects the diverse cultural landscapes of rural and marginalized populations, promoting a future where cultural diversity is valued and protected.";
  return (
    <>
      <Hero text1="Responding to the call of Humanity" />
      <Impact />
      <Workinfo
        title="Cultural Preservation"
        para1={Para1}
        para2={Para2}
        para3={Para3}
        para4={Para4}
        para5={Para5}
      />
      <div className="content-section">
        <CSR title="Donate For Cultural Prevention" />
      </div>
    </>
  );
}
