import { Star } from "lucide-react";

interface Props {
  name: string;
  text: string;
  bg: string;
  radius: string;
}

export default function TestimonialCard({
  name,
  text,
  bg,
  radius,
}: Props) {
  return (
    <div
      style={{ backgroundColor: bg }}
      className={`${radius} p-8 min-h-[290px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2`}
    >
      <div>

        <div className="flex gap-1 mb-6">

          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              fill="#eab308"
              strokeWidth={0}
            />
          ))}

        </div>

        <p className="ftext-md  text-gray-700">
          "{text}"
        </p>

      </div>

      <p className="mt-4  text-sm md:text-lg font-normal   text-[#1F1B1A]">
        — {name}
      </p>
    </div>
  );
}