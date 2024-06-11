module.exports = {
  '**/*.{js,json,jsx,ts,tsx}': (filenames) =>
    `prettier --write ${filenames.join(' ')}`,
};
