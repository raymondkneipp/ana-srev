import { Container, Hero } from "@components";

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <h1 className="font-heading font-normal text-2xl">Anais</h1>
        <p className="font-body">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, ut,
          tempore totam rem nesciunt iure ipsa animi dolor odio, asperiores esse
          quae vel adipisci. Harum exercitationem eaque corporis aspernatur
          provident.
        </p>
      </Container>
    </>
  );
}
