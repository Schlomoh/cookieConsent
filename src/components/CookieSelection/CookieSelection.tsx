import { ChangeEvent, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { FlexDiv } from "../styledComponents";

interface ISelectionProp {
  selection: { get: string[]; set: Dispatch<SetStateAction<string[]>> };
}

export interface ICookieSelectionProps extends ISelectionProp {
  categories?: string[];
}

interface ISelectorCheckboxProps extends ISelectionProp {
  category: string;
}

const SelectorWrapper = styled(FlexDiv)`
  padding: 10px;
  padding-left: 0;
  p {
    margin: 0 0 0 20px;
  }
`;

const SelectorCheckbox = ({ category, selection }: ISelectorCheckboxProps) => {
  const isNecessary = category === "necessary";
  //   const [active, setActiv] = useState(isNecessary);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    // setActiv(!active);
    if (selection && !selection.get.includes(e.target.name)) {
      selection.set([...selection.get, category]);
    } else if (selection) {
      const newSelection = selection.get;
      const index = selection.get.findIndex(
        (el: string) => el === e.target.name
      );
      newSelection.splice(index, 1);
      selection.set(newSelection);
    }
  }

  return (
    <SelectorWrapper justify="start" flexDirection="row">
      <input
        type="checkbox"
        name={category}
        onChange={handleChange}
        defaultChecked={isNecessary || selection?.get.includes(category)}
        disabled={isNecessary}
      />
      <p>{category}</p>
    </SelectorWrapper>
  );
};

const CookieSelection = ({ categories, selection }: ICookieSelectionProps) => {
  const allCategories = categories
    ? ["necessary", ...categories]
    : ["necessary"];

  const checkboxes = allCategories.map((category, i) => {
    return (
      <SelectorCheckbox key={i} category={category} selection={selection} />
    );
  });

  return <>{checkboxes}</>;
};

export default CookieSelection;
