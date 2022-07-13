import {ComponentStory, ComponentMeta} from '@storybook/react';
import ProgressBar from ".";
import { theme } from "../../../Themes/main";
const ProgressBarComponent = {
  title: "Atoms/ProgressBar",
  component: ProgressBar ,
} as ComponentMeta<typeof ProgressBar>;


export const Template: ComponentStory<typeof ProgressBar >  = (args:any) => (
    <ProgressBar  {...args} />
)

Template.args = {
    value: 44,
    color: 'primary',
    theme: theme
}

export default ProgressBarComponent;