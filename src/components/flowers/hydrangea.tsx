import { Leaf, Stem } from "./shared";
import { rnd, vars } from "./utils";

const CX = 160;
const CY = 116;
const RX = 76;
const RY = 66;
const COUNT = 130;

const florets = Array.from({ length: COUNT }, (_, i) => {
  const t = (i + 0.5) / COUNT;
  const angle = i * 137.508 * (Math.PI / 180);
  const dist = Math.sqrt(t);
  const x = CX + Math.cos(angle) * dist * RX;
  const y = CY + Math.sin(angle) * dist * RY;
  const z = Math.sqrt(1 - t * 0.85);
  const size = 10.5 + z * 8 + rnd(i) * 3;
  const hue = rnd(i + 7) < 0.88 ? 208 + rnd(i + 3) * 18 : 245 + rnd(i + 5) * 22;
  const light = 48 + z * 17 + rnd(i + 9) * 8;
  return {
    t,
    x,
    y,
    size,
    rotation: rnd(i + 11) * 90,
    fill: `hsl(${hue} ${70 + rnd(i + 2) * 16}% ${light}%)`,
    delay: ((CY + RY - y) / (2 * RY)) * 1.6 + rnd(i + 13) * 0.25,
  };
}).sort((a, b) => b.t - a.t);

const PETAL =
  "M0 0 C-0.62 -0.12 -0.7 -0.78 -0.28 -0.98 C-0.12 -1.04 0.12 -1.04 0.28 -0.98 C0.7 -0.78 0.62 -0.12 0 0Z";

export const HydrangeaDefs = () => (
  <>
    <radialGradient id="hydBack" cx="0.5" cy="0.45" r="0.55">
      <stop offset="0" stopColor="#1d3fae" />
      <stop offset="1" stopColor="#1e1b6b" />
    </radialGradient>
    <g id="hydFloret">
      {[0, 90, 180, 270].map((a) => (
        <path
          key={a}
          d={PETAL}
          transform={`rotate(${a})`}
          stroke="#0b1d5c"
          strokeOpacity={0.3}
          strokeWidth={0.05}
          strokeLinejoin="round"
        />
      ))}
      <circle r={0.14} fill="#dbeafe" />
      <circle r={0.06} fill="#fde68a" />
    </g>
  </>
);

export const HydrangeaPlant = () => (
  <>
    <Stem d="M160 358 C166 310 154 240 160 170" width={10} />

    <Leaf x={159} y={316} angle={-78} scale={1.2} delay={0.9} kind="ovate" />
    <Leaf x={161} y={304} angle={78} scale={1.2} delay={1.0} kind="ovate" />
    <Leaf x={157} y={252} angle={-60} scale={0.92} delay={1.2} kind="ovate" />
    <Leaf x={160} y={242} angle={60} scale={0.92} delay={1.3} kind="ovate" />

    <g
      className="head-sway"
      style={vars({ "--ox": "160px", "--oy": "175px" })}
    >
      <g filter="url(#headShadow)">
        <ellipse
          className="petal"
          cx={CX}
          cy={CY + 4}
          rx={RX - 16}
          ry={RY - 14}
          fill="url(#hydBack)"
          style={vars({ "--d": 0, "--s0": 0.3, "--dur": "1.6s" })}
        />
        {florets.map((f, i) => (
          <g
            key={i}
            transform={`translate(${f.x} ${f.y}) rotate(${f.rotation}) scale(${f.size})`}
          >
            <use
              href="#hydFloret"
              className="petal"
              fill={f.fill}
              style={vars({ "--d": f.delay, "--s0": 0, "--dur": "0.8s" })}
            />
          </g>
        ))}
      </g>
    </g>
  </>
);
