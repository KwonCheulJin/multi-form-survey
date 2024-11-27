import cn from 'classnames';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

export default function Tabs({ children }: PropsWithChildren) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="flex flex-col">{children}</div>
    </TabContext.Provider>
  );
}

const TabContext = createContext({
  activeTab: 0,
  setActiveTab: (_: number) => {},
});

export function TabList({ children }: PropsWithChildren) {
  return <div className="flex gap-x-20 justify-center">{children}</div>;
}

export function Tab({ children, index }: PropsWithChildren<{ index: number }>) {
  const { activeTab, setActiveTab } = useContext(TabContext);

  return (
    <button
      className={cn('border-b-3 p-14', {
        'text-main border-main': activeTab === index,
        'text-gray-500 border-transparent': activeTab !== index,
      })}
      onClick={() => setActiveTab(index)}
    >
      {children}
    </button>
  );
}

export function TabPanels({ children }: PropsWithChildren) {
  return <div className="flex-1">{children}</div>;
}

export function TabPanel({
  children,
  index,
}: PropsWithChildren<{ index: number }>) {
  const { activeTab } = useContext(TabContext);

  return <div hidden={activeTab !== index}>{children}</div>;
}
