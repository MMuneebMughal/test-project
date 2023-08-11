import { alpha } from '@mui/material/styles';
const GREY = {
    0: '#FFFFFF',
    100: '#F2F2F2',
    200: '#F8F8F8',
    300: '#f6f6f6',
    400: '#f7f7f7',
    500: '#919EAB',
    600: '#637381',
    700: '#454F5B',
    800: '#212B36',
    900: '#161C24',
};

const PRIMARY = {
    main: '#3f51b5',
    light: '#7986cb',
    dark: '#1a237e',
    contrastText: '#fff',
};
const SECONDARY = {
    main: '#cddc39',
    light: '#e6ee9c',
    dark: '#827717',
    contrastText: '#fff',
};
const INFO = {
    lighter: '#D0F2FF',
    light: '#74CAFF',
    main: '#1890FF',
    dark: '#0C53B7',
    darker: '#04297A',
    contrastText: '#fff',
};

const SUCCESS = {
    lighter: '#E9FCD4',
    light: '#AAF27F',
    main: '#54D62C',
    dark: '#229A16',
    darker: '#08660D',
    contrastText: GREY[800],
};

const WARNING = {
    lighter: '#FFF7CD',
    light: '#FFE16A',
    main: '#FFC107',
    dark: '#B78103',
    darker: '#7A4F01',
    contrastText: GREY[800],
};

const ERROR = {
    lighter: '#FFE7D9',
    light: '#FFA48D',
    main: '#FF4842',
    dark: '#B72136',
    darker: '#7A0C2E',
    contrastText: '#fff',
};
export const palette = {
    common: { black: '#333', white: '#fdfdfd' },
    primary: PRIMARY,
    secondary: SECONDARY,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    error: ERROR,
    grey: GREY,
    divider: alpha(GREY[500], 0.24),
    text: {
        primary: '#333',
        secondary: GREY[600],
        disabled: GREY[500],
    },
    background: {
        default: GREY[100],
        paper: GREY[200],
    },
    action: {
        active: PRIMARY.dark,
        hover: PRIMARY.light,
        hoverColor: SECONDARY.main,
        selected: alpha(GREY[500], 0.8),
        disabledBackground: alpha(GREY[500], 0.24),
        focus: PRIMARY.dark,
        hoverOpacity: 0.7,
        disableOpacity: 0.48,
    },
};
