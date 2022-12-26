import { Container } from "@components";
import { GALLERY } from "@constants";
import Image from "next/image";

export const Gallery: React.FC = () => {
  return (
    <Container>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {GALLERY.map((photo) => (
          <div className="card card-compact bg-base-200 shadow-xl">
            <figure>
              <Image
                src={photo.src}
                alt={photo.description}
                width={500}
                height={500}
              />
            </figure>
            <div className="card-body">
              <p className="font-body text-center">{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
