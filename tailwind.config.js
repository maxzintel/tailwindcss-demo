module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ['responsive','hover','focus','active'] // order important here for cascade.
  }, // hover, focus, active, etc... are variants
  plugins: [],
}
