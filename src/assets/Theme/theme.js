export const baseTheme = {
    font: {
        size: {
            xxxs: '.9rem',
            xxs: '1.2rem',
            xs: '1.4rem',
            s: '2.6rem',
            m: '4.2rem',
            l: '5 rem',
            xl: '7.2rem',
            xxl: '9.4rem',
        },
        weight: {
            100: '100',
            300: '300',
            500: '500',
            700: '700',
        },
    },
    containerSize: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        xxl: '1320px',
    },
    mq: {
        sm: '@media (min-width: 576px)',
        md: '@media (min-width: 768px)',
        lg: '@media (min-width: 992px)',
        xl: '@media (min-width: 1200px)',
        xxl: '@media (min-width: 1400px)',
    },
    navigation: {
        mobile_height: '8rem',
        mobile_width: '100%',
        desktop_height: '100vh',
        desktop_width: '27rem'
    },
};

export const lightTheme = {
    color: {
        body: 'white',
        text: '#333333',
        accent: '#333333',
        secondary: '',
    },
};

export const darkTheme = {
    color: {
        body: '#12131a',
        text: '#e5e5e5',
        accent: '#1855c9',
        element: '#1e2129',
    },
};