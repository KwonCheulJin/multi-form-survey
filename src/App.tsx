import './App.css';
import MainLayout from './components/common/MainLayout';
import Tabs, {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from './components/common/Tabs';

function App() {
  return (
    <MainLayout>
      <Tabs>
        <TabList>
          <Tab index={0}>tab1</Tab>
          <Tab index={1}>tab2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel index={0}>tab1 content</TabPanel>
          <TabPanel index={1}>tab2 content</TabPanel>
        </TabPanels>
      </Tabs>
    </MainLayout>
  );
}

export default App;
