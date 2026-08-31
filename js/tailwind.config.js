tailwind.config = {
    theme: {
        extend: {
            "colors": {
                "cream": "#FEDEB5",
                "dark-brown": "#4B4238",
                "black-text": "#221F1F",
                "primary-orange": "#F26D33",
                "terracotta": "#BE5225",
                "gold": "#FFC107"
            },
            "borderRadius": {
                "DEFAULT": "1rem",
                "lg": "2rem",
                "xl": "3rem",
                "full": "9999px"
            },
            "spacing": {
                "gutter": "24px",
                "container-max": "1280px",
                "section-gap": "120px",
                "margin-mobile": "20px",
                "margin-desktop": "64px",
                "unit": "8px"
            },
            "fontFamily": {
                "display": ["Oswald", "sans-serif"],
                "body": ["Poppins", "sans-serif"]
            },
            "fontSize": {
                "4xl": ["clamp(2rem, 1.3rem + 3vw, 2.5rem)", { "lineHeight": "1.15" }],
                "5xl": ["clamp(2.25rem, 1.4rem + 4vw, 3rem)", { "lineHeight": "1.1" }],
                "6xl": ["clamp(2.5rem, 1.5rem + 4.5vw, 3.75rem)", { "lineHeight": "1.05" }],
                "7xl": ["clamp(2.75rem, 1.7rem + 5vw, 4.5rem)", { "lineHeight": "1.05" }]
            }
        },
    },
}