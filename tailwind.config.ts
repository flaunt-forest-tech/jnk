import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		colors: {
  			brand: {
  				'50': '#f2e5e6',
  				'100': '#ebbbbf',
  				'200': '#e49196',
  				'300': '#dd676d',
  				'400': '#d63d44',
  				'500': '#cf131b',
  				'600': '#b81118',
  				'700': '#a10f15',
  				'800': '#8a0d12',
  				'900': '#730b0f',
  				DEFAULT: '#730b0f'
  			},
  			primary: {
  				'0': '#FFFFFF',
  				'100': '#E8EAEA',
  				'200': '#D1D6D4',
  				'300': '#BAC1BF',
  				'400': '#A3ACA9',
  				'500': '#75837F',
  				'600': '#5E6E69',
  				'700': '#475954',
  				'800': '#30453E',
  				'900': '#193029',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'0': '#FFFFFF',
  				'100': '#FEEBCF',
  				'200': '#FDD3A0',
  				'300': '#F9B270',
  				'400': '#F4934C',
  				'500': '#ED6214',
  				'600': '#CB460E',
  				'700': '#AA2F0A',
  				'800': '#891D06',
  				'900': '#711003',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			success: {
  				'100': '#E5FCDA',
  				'200': '#C6FAB7',
  				'300': '#9EF290',
  				'400': '#78E672',
  				'500': '#46D64B',
  				'600': '#33B843',
  				'700': '#239A3C',
  				'800': '#167C34',
  				'900': '#0D6630'
  			},
  			error: {
  				'100': '#FEE5D4',
  				'200': '#FEC4AB',
  				'300': '#FE9B80',
  				'400': '#FD7561',
  				'500': '#FC372D',
  				'600': '#D82027',
  				'700': '#B51629',
  				'800': '#920E29',
  				'900': '#780828'
  			},
  			warning: {
  				'100': '#FFF6CC',
  				'200': '#FFEA99',
  				'300': '#FFDC66',
  				'400': '#FFCD3F',
  				'500': '#FFB600',
  				'600': '#DB9600',
  				'700': '#B77800',
  				'800': '#935C00',
  				'900': '#7A4800'
  			},
  			info: {
  				'100': '#D6E5FE',
  				'200': '#ADCAFE',
  				'300': '#85ACFD',
  				'400': '#6692FB',
  				'500': '#3469F9',
  				'600': '#2650D6',
  				'700': '#1A3AB3',
  				'800': '#102890',
  				'900': '#091B77'
  			},
  			black: {
  				'50': '#F2F2F2',
  				'100': '#E5E5E5',
  				'200': '#CCCCCC',
  				'300': '#B3B3B3',
  				'400': '#999999',
  				'500': '#808080',
  				'600': '#666666',
  				'700': '#4C4C4C',
  				'800': '#333333',
  				'900': '#0C0407'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
