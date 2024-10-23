export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': 'Helvetica Neue,sans-serif'
    },
    extend: {
      colors: {
        color_main: "#03c75a",
        color_title: "#080808",
        color_body: "#101010",
        color_caption1: "#404040",
        color_caption2: "#606060",
        color_caption3: "#555558",
        color_search: "#000",
        color_border_out: "#e3e5e8",
        color_border_in: "#ebebeb",
        color_border_in_divider: "#ebebeb",
        color_border_in_exception: "#ebebeb",
        color_button_border: "#dadcdf",
        color_dot_divider: "#d3d5d7",
        color_block_bg: "#fff",
        color_board_bg: "#f4f6fa",
        color_option_bg: "#f5f7f8",
        color_login_bg: "#fafbfb",
        color_menu_widget_bg: "#fff",
        color_setting_bg: "#fff",
        color_button1_bg: "#fff",
        color_button2_bg: "#fff",
        color_news: "#3a67ea",
        color_news_econ_stay: "#909aab",
        color_news_econ_down: "#4f67d6",
        color_live_news_price: "#f4361e",
        color_enter: "#e538e2",
        color_enter_bg: "#f2f1fb",
        color_sports: "#1f65ef",
        color_sports_bg: "#f4f7fe",
        color_econ: "#008f76",
        color_calendar: "#eb5b5b",
        color_dic: "#031f5f",
        
      },
      backgroundImage: {
        naver: "url('/assets/img/sp_main.png')",
        naver2: "url('/assets/img/sp_main2.png')",
        navIcon: "url('/assets/img/navIcon.png')",
        ad: "url('/assets/img/ad.png')",
        side_ad: "url('/assets/img/ad2.jpeg')",
        shop_logo: "url('/assets/img/shopLogo.png')",
        shop_ad: "url('/assets/img/hello_spring.jpeg')",
        logo: "url('/assets/img/sp_logo.png')",
        login_img: "url('/assets/img/sp_login.png')"
      },
      boxShadow: {
       outline: '0 0 0 1px #e3e5e8, 0 1px 2px 0 rgba(0,0,0,.04)',
       login_outline:'0 5px 8px 0 rgba(68,68,68,.04);'
      }
    },
  },
  plugins: [],
};
