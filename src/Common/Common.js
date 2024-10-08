// Buyer input fiels
export const buyerField = [
  {
    label: "Full Name*",
    input: "Enter your full Name",
  },
  {
    label: "EmailId*",
    input: "Enter your EmailID",
  },
  {
    label: "Phone Number*",
    input: "Enter your phone number",
  },
  {
    label: "password*",
    input: "Enter your password",
  },
  {
    label: "confirm password*",
    input: "confirm password",
  },
];

// This is for seller input field---------
export const sellerField = [
  {
    label: "FirstName*",
    input: "Enter you First Name",
  },
  {
    label: "LastName*",
    input: "Enter you last Name",
  },
  {
    label: "EmailId*",
    input: "Enter you Email Id",
  },
  {
    label: "phoneNumber*",
    input: "Enter you phone Number",
  },
  {
    label: "Store Display Name*",
    input: "Your Store Display Name",
  },
  {
    label: "Password*",
    input: "password",
  },
  {
    label: "Confirm Password*",
    input: "Confirm password",
  },
  {
    label: "GST Number*",
    input: "GST Number",
  },
  {
    label: "Seller Address*",
    input: "Address line 1",
  },
];

// Seller Bank Details!!!

export const BankDetails = [
  {
    label: "Bank Name*",
    input: "text",
  },
  {
    label: "Bank Account No*",
    input: "text",
  },
  {
    label: "Branch*",
    input: "text",
  },
  {
    label: "IFSC Code*",
    input: "text",
  },
  {
    label: "Upload your Pan card*",
    input: "File",
  },
  {
    label: "Upload your Adhar Card*",
    input: "File",
  },
];

// USER PROFILE ICONS
import { IoSettings } from "react-icons/io5";
import { PiLockKeyFill } from "react-icons/pi";
import { FaCartPlus } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
export const profile = [
  {
    icon: IoSettings,
    title: "Profile Setting",
  },
  {
    icon: PiLockKeyFill,
    title: "Change password",
  },
  {
    icon: FaCartPlus,
    title: "My Store",
  },
  {
    icon: AiOutlineLogout,
    title: "logout",
  },
];

// For sellerHome page recent uploads items

export const uploads = [
  "/images/banana.jpg",
  "/images/garlic.jpg",
  "/images/potato.jpg",
  "/images/onion.jpg",
  "/images/Tomato.jpg",
  "/images/strawberry.jpg",
  "/images/tractor.jpg",
];

// For seller footer
import { GrHome } from "react-icons/gr";
import { GrHistory } from "react-icons/gr";
import { MdOutlineLeaderboard } from "react-icons/md";
import { GiFruitBowl } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";

// Assuming you have a variable 'isBuyerLoggedIn' that tracks if the user is logged in as a buyer.
const isBuyerLoggedIn = true; // Change this based on your logic

export const footer = [
  {
    icon: GrHome,
    title: "Home",
  },
  {
    icon: GrHistory,
    title: "History",
  },
  {
    icon: isBuyerLoggedIn ? MdOutlineLeaderboard : FaShoppingCart, // Conditionally show icon
    title: isBuyerLoggedIn ? "leaderboard" : "cart", // Conditionally change title
  },
  {
    icon: GiFruitBowl,
    title: "Fresh Farm",
  },
];

// PRODUCTS FOR RENT
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosAlarm } from "react-icons/io";
export const SellProduct = [
  {
    id: 1,
    name: "Cauliflower",
    image: "/images/image1.jpg",
    icon: [
      {
        component: MdOutlineCurrencyRupee,
        title: "Price",
      },
      {
        component: IoLocationSharp,
        title: "Kisanganj",
      },
      {
        component: IoIosAlarm,
        title: "2hr ago",
      },
    ],
  },
  {
    id: 2,
    name: "Tomato",
    image: "/images/Tomato.jpg",
    icon: [
      {
        component: MdOutlineCurrencyRupee,
        title: "Price",
      },
      {
        component: IoLocationSharp,
        title: "Kisanganj",
      },
      {
        component: IoIosAlarm,
        title: "2hr ago",
      },
    ],
  },
  {
    id: 3,
    name: "Onion",
    image: "images/onion.jpg",
    icon: [
      {
        component: MdOutlineCurrencyRupee,
        title: "Price",
      },
      {
        component: IoLocationSharp,
        title: "Kisanganj",
      },
      {
        component: IoIosAlarm,
        title: "2hr ago",
      },
    ],
  },
];
