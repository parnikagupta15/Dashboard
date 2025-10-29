import {
  UilEstate,
  UilClipboardAlt,
  UilChart,
} from "@iconscout/react-unicons";

import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilChart,
    heading: 'Analyse Content',
  },
  {
    icon: UilClipboardAlt,
    heading: "History",
  },
];

export const cardsData = [
  {
    title: "Text Analysis",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Text Analysis",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Image Analysis",
    color: {
      backGround: "linear-gradient(180deg, #fa4f63ff 0%, #fa4f63ff 100%)",
      boxShadow: "0px 10px 20px 0px #fa4f63ff",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Image Analysis",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "URL Analysis",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "URL Analysis",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];