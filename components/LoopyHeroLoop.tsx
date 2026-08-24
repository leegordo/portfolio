"use client";

import {
  motion,
  useReducedMotion,
  useSpring,
  useTime,
  useTransform,
  type MotionValue,
} from "framer-motion";

const INK = "#1C1A17";
const CREAM = "#F2ECE0";
const PINK = "#F0468A";
const YELLOW = "#F2C84B";
const ORANGE = "#E8902A";
const INDIGO = "#5A4BFF";
const TEAL = "#18B0C4";
const GREEN = "#1AA35A";

const LOOP_CX = 320;
const LOOP_CY = 205;
const LOOP_RX = 252;
const LOOP_RY = 148;
const ORBIT_MS = 9000;

const STATIONS = [
  { angle: -90, label: "BRIEF", color: GREEN },
  { angle: -18, label: "DRAFT", color: INDIGO },
  { angle: 54, label: "CRITIQUE", color: ORANGE },
  { angle: 126, label: "SCORE", color: TEAL },
  { angle: 198, label: "REVIEW", color: PINK },
] as const;

function stationXY(angleDeg: number, pad = 0) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: LOOP_CX + (LOOP_RX + pad) * Math.cos(rad),
    y: LOOP_CY + (LOOP_RY + pad) * Math.sin(rad),
  };
}

function angleDist(a: number, b: number) {
  const d = Math.abs(((a - b) % 360) + 360) % 360;
  return Math.min(d, 360 - d);
}

export default function LoopyHeroLoop() {
  const reducedMotion = useReducedMotion();
  const time = useTime();
  const orbit = useTransform(time, (t) =>
    reducedMotion ? -90 : -90 + ((t % ORBIT_MS) / ORBIT_MS) * 360,
  );
  const packetX = useTransform(orbit, (angle) => stationXY(angle).x);
  const packetY = useTransform(orbit, (angle) => stationXY(angle).y);
  const tailA = useSpring(orbit, { stiffness: 120, damping: 24 });
  const tailB = useSpring(orbit, { stiffness: 60, damping: 22 });
  const tailAX = useTransform(tailA, (angle) => stationXY(angle).x);
  const tailAY = useTransform(tailA, (angle) => stationXY(angle).y);
  const tailBX = useTransform(tailB, (angle) => stationXY(angle).x);
  const tailBY = useTransform(tailB, (angle) => stationXY(angle).y);

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#F2ECE0] px-3 py-3 md:px-8">
      <div className="flex h-full w-full max-w-[600px] flex-col items-center justify-center">
        <svg
          viewBox="-20 -20 680 450"
          className="block min-h-0 w-full flex-1"
          role="img"
          aria-label="The Loopy loop: brief, draft, critique, score, and review, repeating"
        >
          <g transform={`rotate(-4 ${LOOP_CX} ${LOOP_CY})`}>
            <motion.ellipse
              cx={LOOP_CX}
              cy={LOOP_CY}
              rx={LOOP_RX}
              ry={LOOP_RY}
              fill="none"
              stroke={INK}
              strokeWidth="3"
              strokeLinecap="round"
              initial={reducedMotion ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.3, ease: [0.65, 0, 0.35, 1], delay: 0.35 }}
            />

            {STATIONS.map((station, index) => (
              <Station
                key={station.label}
                station={station}
                index={index}
                orbit={orbit}
                reducedMotion={Boolean(reducedMotion)}
              />
            ))}

            {!reducedMotion && (
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7, duration: 0.4 }}
              >
                <motion.circle cx={tailBX} cy={tailBY} r="3.5" fill={YELLOW} opacity="0.28" />
                <motion.circle cx={tailAX} cy={tailAY} r="4.5" fill={YELLOW} opacity="0.55" />
                <motion.circle
                  cx={packetX}
                  cy={packetY}
                  r="7"
                  fill={YELLOW}
                  stroke={INK}
                  strokeWidth="2.5"
                />
              </motion.g>
            )}
          </g>
        </svg>
        <motion.p
          className="text-center font-mono text-[8px] font-semibold tracking-[1px] text-[#6A655D] md:text-[10px]"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.5 }}
        >
          A LOOPY PROJECT FROM BRIEF TO REVIEW
        </motion.p>
      </div>
    </div>
  );
}

function Station({
  station,
  index,
  orbit,
  reducedMotion,
}: {
  station: (typeof STATIONS)[number];
  index: number;
  orbit: MotionValue<number>;
  reducedMotion: boolean;
}) {
  const { x, y } = stationXY(station.angle);
  const label = stationXY(station.angle, 42);
  const bumpR = useTransform(orbit, (angle) =>
    reducedMotion ? 15 : 15 * (1 + 0.24 * Math.max(0, 1 - angleDist(angle, station.angle) / 26)),
  );

  return (
    <g>
      <motion.g
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.55 + index * 0.14 }}
      >
        <motion.circle cx={x} cy={y} r={bumpR} fill={CREAM} stroke={INK} strokeWidth="2.5" />
        <StationMark id={station.label} x={x} y={y} color={station.color} />
      </motion.g>
      <motion.text
        x={label.x}
        y={label.y}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={INK}
        style={{
          fontFamily: "var(--font-mono)",
          fontWeight: 600,
          fontSize: "11px",
          letterSpacing: "0.5px",
        }}
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 + index * 0.14, duration: 0.4 }}
      >
        {station.label}
      </motion.text>
    </g>
  );
}

function StationMark({ id, x, y, color }: { id: string; x: number; y: number; color: string }) {
  switch (id) {
    case "BRIEF":
      return (
        <rect
          x={x - 5.5}
          y={y - 5.5}
          width="11"
          height="11"
          fill={color}
          transform={`rotate(45 ${x} ${y})`}
        />
      );
    case "DRAFT":
      return <rect x={x - 5} y={y - 5} width="10" height="10" fill={color} />;
    case "CRITIQUE":
      return <path d={`M ${x - 6} ${y + 3.5} A 6 6 0 0 1 ${x + 6} ${y + 3.5} Z`} fill={color} />;
    case "SCORE":
      return <circle cx={x} cy={y} r="5.5" fill="none" stroke={color} strokeWidth="3" />;
    case "REVIEW":
      return <polygon points={`${x - 4},${y - 5.5} ${x + 6},${y} ${x - 4},${y + 5.5}`} fill={color} />;
    default:
      return null;
  }
}
