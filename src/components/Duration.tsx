import { useEffect, useState } from "react";
import { format, intervalToDuration } from "date-fns";
import { Container } from "@components";

export const Duration: React.FC = () => {
  const datingInterval = {
    start: new Date(2020, 6, 24, 22, 50, 0),
    end: new Date(),
  };

  const [interval, setDatingDuration] = useState(
    intervalToDuration({ start: new Date(), end: new Date() })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDatingDuration(
        intervalToDuration({
          start: new Date(2020, 6, 24, 22, 50, 0),
          end: new Date(),
        })
      );
      console.log("running");
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Container>
      <div className="flex flex-col gap-1">
        <h2 className="font-heading font-bold text-xl text-center text-primary">
          Established on
          <br />
        </h2>

        <span className="badge badge-primary mx-auto">
          <time
            dateTime={datingInterval.start.toString()}
            className="font-body text-center"
          >
            {format(datingInterval.start, "MMMM do yyyy 'at' h:mm aaa")}
          </time>
        </span>
      </div>

      <div className="flex items-center justify-center py-6">
        <div className="stats stats-horizontal shadow bg-base-200">
          <div className="stat">
            <div className="stat-title">Years</div>
            <div className="stat-value">
              <span className="countdown font-mono font-bold">
                <span style={{ "--value": interval.years } as any}></span>
              </span>
            </div>
            <div className="stat-desc">magical</div>
          </div>

          <div className="stat">
            <div className="stat-title">Months</div>
            <div className="stat-value">
              <span className="countdown font-mono font-bold">
                <span style={{ "--value": interval.months } as any}></span>
              </span>
            </div>
            <div className="stat-desc">wonderful</div>
          </div>

          <div className="stat">
            <div className="stat-title">Days</div>
            <div className="stat-value">
              <span className="countdown font-mono font-bold">
                <span style={{ "--value": interval.days } as any}></span>
              </span>
            </div>
            <div className="stat-desc">amazing</div>
          </div>

          <div className="stat">
            <div className="stat-title">Hours</div>
            <div className="stat-value">
              <span className="countdown font-mono font-bold">
                <span style={{ "--value": interval.hours } as any}></span>
              </span>
            </div>
            <div className="stat-desc">happy</div>
          </div>

          <div className="stat">
            <div className="stat-title">Minutes</div>
            <div className="stat-value">
              <span className="countdown font-mono font-bold">
                <span style={{ "--value": interval.minutes } as any}></span>
              </span>
            </div>
            <div className="stat-desc">comforting</div>
          </div>

          <div className="stat">
            <div className="stat-title">Seconds</div>
            <div className="stat-value">
              <span className="countdown font-mono font-bold">
                <span style={{ "--value": interval.seconds } as any}></span>
              </span>
            </div>
            <div className="stat-desc">blessed</div>
          </div>
        </div>
      </div>
    </Container>
  );
};
