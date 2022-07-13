import ExploreComponent from './index';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {RocketLaunchOutlined, AccountBalanceOutlined ,
  DesktopWindowsOutlined, ScienceOutlined,
  StairsOutlined, HistoryToggleOffOutlined,
  AttachMoneyOutlined, SpaOutlined, ConnectWithoutContactOutlined, ApartmentOutlined, AccessibleForwardOutlined, BorderColorOutlined, CakeOutlined, CategoryOutlined, FamilyRestroomOutlined, LibraryBooksOutlined, LocalAtmOutlined, ManageAccountsOutlined, ParkOutlined, PeopleAltOutlined, PrecisionManufacturingOutlined, PsychologyOutlined, SchoolOutlined, SelfImprovementOutlined, TimerOutlined, WcOutlined}
   from '@mui/icons-material';


export default {
    title: "Organisms/Explore",
    component: ExploreComponent,
  }as ComponentMeta<typeof ExploreComponent>;
  
  const template: ComponentStory<typeof ExploreComponent> = (args:any) =><BrowserRouter><ExploreComponent {...args} /></BrowserRouter> ;
  export const Explore = template.bind({});
  Explore.args = {};


 