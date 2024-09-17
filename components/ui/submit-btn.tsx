import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group border border-white-100 flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-black-100 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-black-200 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {" "}
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white-100"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}{" "}
    </button>
  );
}
