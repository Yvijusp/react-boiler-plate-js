module.exports = (api) => {
  const reactPlugins = ['babel-plugin-styled-components'];

  if (api.env('development')) {
    reactPlugins.push('react-refresh/babel');
  }

  return {
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', { runtime: 'automatic' }],
    ],
    plugins: reactPlugins,
  };
};
