import { messages } from "../consts/message";
import { getDayOfYear } from "../functions/getDayOfYear";

export const RomanticMessage = () => {
  const day = getDayOfYear();
  const message = messages[day - 1];

  return (
    <div className="fade-up flex flex-col items-center gap-6">
      <h1 className="message-glow max-w-2xl text-balance font-allura text-5xl leading-tight text-rose-100 md:text-6xl">
        {message || "Bom dia be"}
      </h1>

      <span className="msg-divider" aria-hidden="true" />
    </div>
  );
};
