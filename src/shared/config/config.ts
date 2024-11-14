const name = 'Template';

const config = {
  name,
  API: {
    BASE_URL: 'https://api.example.com',
    TOKEN_NAME: `@${name}_TkN`,
    REFRESH_TOKEN_NAME: `@${name}_RfTkN`,
  },
} as const;

export default config;
