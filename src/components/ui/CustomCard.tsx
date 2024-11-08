import { Button } from "@/components/ui/Button";

interface CardProps {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

export const CustomCard: React.FC<CardProps> = ({
  number,
  title,
  subtitle,
  description,
  icon,
}) => {
  return (
    <div className="max-w-[300px] flex flex-col justify-between gap-2">
      {/* Borda contornando o card */}

      {/* Container para o número, título e ícone */}
      <div>
        <div className="w-full flex items-center relative p-1 m-0 bg-transparent border-t-[2px] border-r-[2px] border-b-[2px] rounded-r-full border-tradeoff-primary">
          <span className="w-2 h-2 rounded-full border-[2px] border-tradeoff-primary absolute top-[-4.5px] left-0 z-10 bg-tradeoff-primary"></span>
          <span className="relative z-20 text-5xl -mb-2 -mr-2 text-tradeoff-primary text-shadow leading-none font-nohemi font-bold">
            {number}
          </span>
          <h3
            id=""
            className="text-center relative w-full z-0 leading-none text-xl mr-1 py-[6px] pl-6 pr-12 font-poppins bg-tradeoff-primary rounded-r-2xl text-white"
          >
            {title}
          </h3>
          <span
            id="circlecut"
            className="absolute -right-0 bg-gray-100 rounded-full p-1 z-0"
          >
            <span className="flex items-center justify-center bg-tradeoff-primary p-2 w-full h-full rounded-full">
              {icon}
            </span>
          </span>
        </div>

        {/* Subtítulo e descrição */}
        <div className="flex flex-col px-4 mt-4">
          <h4 className="font-semibold text-tradeoff-primary font-poppins text-center mb-2">
            {subtitle}
          </h4>
          <p className="text-sm text-tradeoff-primary font-poppins text-justify flex-1 h-full">
            {description}
          </p>
        </div>
      </div>
      <Button variant="tradeoff_secondary">{title}</Button>
    </div>
  );
};
