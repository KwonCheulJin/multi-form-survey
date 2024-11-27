import { ReactNode, useState } from 'react';
import { QuestionTypeValueType } from '../../types/app';
import Input from '../common/Input';

import CheckboxIcon from '../../assets/icons/check_box_outline_blank.svg?react';
import RadioIcon from '../../assets/icons/radio_button_unchecked.svg?react';

interface Props {
  type: QuestionTypeValueType;
}
export default function OptionEditor({ type }: Props) {
  const [options, setOptions] = useState<string[]>(['']);
  return (
    <div>
      {options.map((option, index) => (
        <div key={index} className="flex items-center">
          {icons[type]}
          <Input
            value={option}
            onChange={e => {
              const newOptions = [...options];
              newOptions[index] = e.target.value;
              setOptions(newOptions);
            }}
          />
        </div>
      ))}
      <div className="flex items-center mt-28">
        {icons[type]}
        <button
          className="text-gray500 text-16"
          onClick={() => {
            setOptions([...options, '']);
          }}
        >
          옵션 추가
        </button>
      </div>
    </div>
  );
}

const icons: Partial<Record<QuestionTypeValueType, ReactNode>> = {
  multipleChoice: <RadioIcon className="mr-14" />,
  checkbox: <CheckboxIcon className="mr-14" />,
  dropdown: <RadioIcon className="mr-14" />,
};
