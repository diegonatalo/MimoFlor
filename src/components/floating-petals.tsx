const PETALS = [
  { left: "6%", size: 12, delay: "0s", duration: "15s" },
  { left: "16%", size: 8, delay: "4s", duration: "19s" },
  { left: "27%", size: 14, delay: "8s", duration: "16s" },
  { left: "38%", size: 9, delay: "2s", duration: "21s" },
  { left: "49%", size: 11, delay: "6s", duration: "17s" },
  { left: "58%", size: 7, delay: "11s", duration: "22s" },
  { left: "68%", size: 13, delay: "1s", duration: "18s" },
  { left: "78%", size: 9, delay: "7s", duration: "20s" },
  { left: "87%", size: 12, delay: "3s", duration: "16s" },
  { left: "94%", size: 8, delay: "9s", duration: "23s" },
];

export const FloatingPetals = () => {
  return (
    <div className="floating-petals" aria-hidden="true">
      {PETALS.map((petal, index) => (
        <span
          key={index}
          className="petal"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
          }}
        />
      ))}
    </div>
  );
};
