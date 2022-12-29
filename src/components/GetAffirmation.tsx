import { AFFIRMATIONS, QUESTION } from "@constants";
import { format } from "date-fns";
import Image from "next/image";
import { useState } from "react";

export const GetAffirmation: React.FC = () => {
  const [randomAffirmation, setRandomAffirmation] = useState(AFFIRMATIONS[0]);

  const [deliveredTime, setDeliveredTime] = useState(new Date());

  const [randomQuestion, setRandomQuestion] = useState(QUESTION[0]);

  return (
    <>
      <label htmlFor="my-modal-4" className="btn btn-lg btn-primary">
        Get Affirmation
      </label>

      <input
        type="checkbox"
        id="my-modal-4"
        className="modal-toggle"
        onChange={(e) => {
          if (e.target.checked) {
            setRandomAffirmation(
              AFFIRMATIONS[Math.floor(Math.random() * AFFIRMATIONS.length)]
            );
            setRandomQuestion(
              QUESTION[Math.floor(Math.random() * QUESTION.length)]
            );
            setDeliveredTime(new Date());
          }
        }}
      />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <Image
                  src="/images/avatars/otter.webp"
                  alt="otter"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="chat-header">
              Anaïs
              <time className="text-xs opacity-50 ml-1">
                {format(deliveredTime, "HH:mm aaa")}
              </time>
            </div>
            <div className="chat-bubble text-left">{randomQuestion}</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <Image
                  src="/images/avatars/squirrel.jpg"
                  alt="squirrel"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="chat-header">
              Ray
              <time className="text-xs opacity-50 ml-1">
                {format(deliveredTime, "HH:mm aaa")}
              </time>
            </div>
            <div className="chat-bubble text-left chat-bubble-info">
              {randomAffirmation}
            </div>
          </div>
        </label>
      </label>
    </>
  );
};
