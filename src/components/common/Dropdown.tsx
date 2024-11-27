import {
  createContext,
  ReactNode,
  RefObject,
  useCallback,
  useContext,
  useState,
} from 'react';

import ArrowIcon from '../../assets/icons/arrow_drop_down.svg?react';
import useOutsideClick from '../../hooks/common/useOutsideClick';
interface Props<T> {
  options: DropdownOption<T>[];
  placeholder?: string;
  onChange?: (value: T) => void;
}
export default function Dropdown<T>({
  options,
  onChange,
  placeholder,
}: Props<T>) {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(-1);

  const open = useCallback(() => setOpened(true), []);
  const close = useCallback(() => setOpened(false), []);

  const handleChange = useCallback(
    (index: number) => {
      setSelected(index);
      onChange?.(options[index].value);
      close();
    },
    [options, onChange, close]
  );

  return (
    <DropdownContext.Provider
      value={{
        opened,
        open,
        close,
        options,
        selected,
        onChange: handleChange,
      }}
    >
      <div className="inline-block relative">
        <DropdownButton placeholder={placeholder} />
        <DropdownMenu />
      </div>
    </DropdownContext.Provider>
  );
}

type DropdownOption<T> = {
  label: ReactNode;
  value: T;
};

interface DropdownContextType<T = unknown> {
  opened: boolean;
  open: () => void;
  close: () => void;
  options: DropdownOption<T>[];
  selected: number;
  onChange: (index: number) => void;
}

const DropdownContext = createContext<DropdownContextType | null>(null);

function DropdownButton({ placeholder = 'select' }: { placeholder?: string }) {
  const { opened, open, options, selected } = useContext(DropdownContext)!;
  console.log('🚀 ~ DropdownButton ~ opened:', opened);
  return (
    <button
      className="border-gray300 border rounded-10 min-w-197 p-14 pr-36 relative text-left"
      onClick={open}
    >
      {selected >= 0 ? options[selected].label : placeholder ?? ''}
      <span className="absolute right-12 top-1/2 transform -translate-y-1/2">
        <ArrowIcon />
      </span>
    </button>
  );
}

function DropdownMenu() {
  const { opened, close, options, onChange } = useContext(DropdownContext)!;
  const containerRef = useOutsideClick(close);
  return opened ? (
    <div
      ref={containerRef as RefObject<HTMLDivElement>}
      className="absolute left-0 top-64 border border-gray300 rounded-10 flex flex-col min-w-197 bg-white"
    >
      {options.map((option, index) => (
        <DropdownMenuItem
          key={`${option.value}`}
          label={option.label}
          onSelect={() => onChange(index)}
        />
      ))}
    </div>
  ) : null;
}

function DropdownMenuItem({
  label,
  onSelect,
}: {
  label: ReactNode;
  onSelect: () => void;
}) {
  return (
    <button
      className="text-left p-14 border-b-1 border-gray300 last:border-b-0"
      onClick={onSelect}
    >
      {label}
    </button>
  );
}