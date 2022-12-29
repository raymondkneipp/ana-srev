import { LOVE } from "@constants";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Container } from "./Container";

interface Props {
  children: string;
}

const LoveItem: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex gap-2 items-center">
      <p className="px-12 font-body text-lg">{children}</p>
      <Image src="/icon.svg" width={20} height={20} alt="Heart" />
    </div>
  );
};

export const Love: React.FC = () => {
  const len = LOVE.length;

  const chunkOne = LOVE.slice(0, len / 3);
  const chunkTwo = LOVE.slice(len / 3, (len / 3) * 2);
  const chunkThree = LOVE.slice((len / 3) * 2, len);

  return (
    <div className="flex flex-col gap-6 bg-base-200 py-6">
      <Container>
        <h2 className="font-heading font-bold text-xl text-center text-primary">
          Things I Love About You
        </h2>
      </Container>
      <Marquee gradient={false} speed={20}>
        {chunkOne.map((item) => (
          <LoveItem key={item}>{item}</LoveItem>
        ))}
      </Marquee>
      <Marquee gradient={false} speed={25} direction="right">
        {chunkTwo.map((item) => (
          <LoveItem key={item}>{item}</LoveItem>
        ))}
      </Marquee>
      <Marquee gradient={false} speed={15}>
        {chunkThree.map((item) => (
          <LoveItem key={item}>{item}</LoveItem>
        ))}
      </Marquee>
    </div>
  );
};
