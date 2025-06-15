module.exports = {
  // Directories where your code resides
  input: ["src/**/*.{js,jsx,ts,tsx}"],

  // Where the translation files will be saved
  output: "./src/translations/$LOCALE.json",

  // Supported locales
  locales: ["en", "ru", "uz"],

  // Whether to allow keys with no value (default is `true`)
  defaultValue: "",

  // Key separator (set to false to use keys with dots)
  keySeparator: false,

  // Namespace separator (set to false if not using namespaces)
  namespaceSeparator: false,

  // Sort the keys in the output files
  sort: false,

  // Whether to include unused keys in the output
  keepRemoved: true,

  // Custom functions or methods used for translation
  func: {
    list: ["t"], // Functions to look for, e.g., `t("key")`
    extensions: [".js", ".jsx", ".ts", ".tsx"], // File extensions to scan
  },

  // Verbosity of the output
  verbose: false,
};
