import { messages } from "../consts/message";
import { getDayOfYear } from "../functions/getDayOfYear";

export const RomanticMessage = () => {
  const day = getDayOfYear();
  const message = messages[day - 1];

  return (
    <h1 className="fade-up font-allura text-5xl text-rose-200">
      {message || "Bom dia be"}
    </h1>
  );
};
