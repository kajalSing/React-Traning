export const PUBLIC_IMAGE_FOLDER = '/images/';
export const DEFAULT_BANNER_IMAGE = 'banners/default.png';

const football= [
  { value:'Defender' },
  { value: 'Skiner' },
];
const Cricket= [
  { value:'Batsman' },
  { value: 'Boller' },
  { value: 'All Rounder' },
  { value: 'Wicket keeper' },
];
const OptionSelect= [
  { option:'Select'},
  { option:'Football'},
  { option: 'Cricket'},
];

const navigation = [
  { label: 'Trainee', to: "/trainee" },
  { label: 'TextField Demo',  to: "/textfield" },
  { label: 'InputField Demo',  to: "/inputfield" },
  { label: 'Childern Demo', to: "/children" },
  { label: 'Login', to: "/login" },
];


export{
  football,
  Cricket,
  OptionSelect,
  navigation
}
