import { useEffect, useState } from "react";
import { intervalToDuration } from "date-fns";
import { Container } from "@components";

export const Duration: React.FC = () => {
  const datingInterval = {
    start: new Date(2020, 6, 24, 22, 50, 0),
    end: new Date(),
  };

  const [{ years, months, days, hours, minutes, seconds }, setDatingDuration] =
    useState(intervalToDuration(datingInterval));

  useEffect(() => {
    const interval = setInterval(() => {
      setDatingDuration(intervalToDuration(datingInterval));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Container>
      <div className="flex items-center justify-center py-6">
        <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-200">
          <div className="stat">
            <div className="stat-title">Years</div>
            <div className="stat-value">{years}</div>
            <div className="stat-desc">magical</div>
          </div>

          <div className="stat">
            <div className="stat-title">Months</div>
            <div className="stat-value">{months}</div>
            <div className="stat-desc">wonderful</div>
          </div>

          <div className="stat">
            <div className="stat-title">Days</div>
            <div className="stat-value">{days}</div>
            <div className="stat-desc">amazing</div>
          </div>

          <div className="stat">
            <div className="stat-title">Hours</div>
            <div className="stat-value">{hours}</div>
            <div className="stat-desc">happy</div>
          </div>

          <div className="stat">
            <div className="stat-title">Minutes</div>
            <div className="stat-value">{minutes}</div>
            <div className="stat-desc">comforting</div>
          </div>

          <div className="stat">
            <div className="stat-title">Seconds</div>
            <div className="stat-value">{seconds}</div>
            <div className="stat-desc">blessed</div>
          </div>
        </div>
      </div>
    </Container>
  );
};
