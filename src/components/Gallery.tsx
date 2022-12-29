import { Container } from "@components";
import { GALLERY } from "@constants";
import Image from "next/image";

export const Gallery: React.FC = () => {
  return (
    <Container>
      <h2 className="font-heading font-bold text-xl text-center text-primary mb-6">
        Gallery
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {GALLERY.map((photo) => (
          <div
            className="card bg-base-100 shadow-xl image-full"
            key={photo.src}
          >
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
