import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

// Define the context type
type AcordionContextType = {
  openIndex: number | string;
  setOpenIndex?: Dispatch<SetStateAction<number>>;
  isExpandAll?: boolean;
  setIsExpandAll: Dispatch<SetStateAction<boolean>> | undefined;
};

const acordionContext = createContext<AcordionContextType>({
  openIndex: -1,
  setOpenIndex: undefined, // This is okay for initial context value
  isExpandAll: false,
  setIsExpandAll: undefined,
});

const Acordion = ({ faqs }: { faqs: any[] }) => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [isExpandAll, setIsExpandAll] = useState<boolean>(false);

  return (
    <div className="p-6 md:w-2/3 md:mx-auto border border-black">
      <div className="text-xl font-semibold h-fit  [&>*]:list-none flex justify-between mx-2 m-1 p-2 border-b border-black">
        <li>Faq&apos;s</li>
        <li onClick={() => setIsExpandAll(!isExpandAll)}>
          {" "}
          {isExpandAll ? "Collapse" : "Expand All"}

        </li>
      </div>

      <acordionContext.Provider
        value={{ openIndex, setOpenIndex, isExpandAll, setIsExpandAll }}
      >
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
  const { openIndex, setOpenIndex, isExpandAll } = useContext(acordionContext);
  const isOpen = openIndex === index;

  return (
    <div
      className="text-black cursor-pointer m-2 border-b border-black py-2"
      onClick={() => {
        if (isOpen) {
          setOpenIndex?.(-1);
        } else {
          setOpenIndex?.(index);
        }
      }}
    >
      <div className="font-bold text-lg flex justify-between px-2">
        <div>{title}</div>

        <div>{isOpen ? "▲" : "▼"}</div>
      </div>

      {(isOpen || isExpandAll) && (
        <p
          className="text-justify text-wrap px-4 py-2"
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
