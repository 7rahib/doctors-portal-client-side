module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/bg.png')",
        'MakeAppointment-pattern': "url('/src/assets/images/appointment.png')",
        'Footer-pattern': "url('/src/assets/images/footer.png')"
      }
    },
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
