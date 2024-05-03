import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

// Define the context type
type AcordionContextType = {
  openIndex: number;
  setOpenIndex?: Dispatch<SetStateAction<number>>; 
};

const acordionContext = createContext<AcordionContextType>({
  openIndex: -1,
  setOpenIndex: undefined, // This is okay for initial context value
});

const Acordion = ({ faqs }: { faqs: any[] }) => {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  return (
    <div className="p-6 md:w-2/3 md:mx-auto border border-black">
      <h2 className="text-xl font-semibold h-fit text-center">FAQ's</h2>

      <acordionContext.Provider value={{ openIndex, setOpenIndex }}>
        {faqs?.map(({ title, description, _id }: any) => {
          return (
            <Card
              title={title}
              description={description}
              index={_id}
              key={_id}
            />
          );
        })}
      </acordionContext.Provider>
    </div>
  );
};

export default Acordion;

type CardType = {
  title: string;
  description: string;
  index: number;
};

const Card = ({ title, description, index }: CardType) => {
  const { openIndex, setOpenIndex } = useContext(acordionContext);
  const isOpen = openIndex === index;

  return (
    <div
      className="text-black cursor-pointer m-2"
      onClick={() => {
        if (isOpen) {
          setOpenIndex?.(-1); // Use optional chaining to avoid errors
        } else {
          setOpenIndex?.(index);
        }
      }}
    >
      <p className="font-bold">{title}</p>

      {isOpen && (
        <p
          className="text-justify text-wrap"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
};
