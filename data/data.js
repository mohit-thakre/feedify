import Google from "@/assets/logos/Google.svg";
import Microsoft from "@/assets/logos/Microsoft.svg";
import Amazon from "@/assets/logos/Amazon.svg";
import Netflix from "@/assets/logos/Netflix.svg";
import Instagram from "@/assets/logos/Instagram.svg";
import Uber from "@/assets/logos/Uber.svg";
import Spotify from "@/assets/logos/Spotify.svg";
import {
    SiFramer,
    SiWebflow,
    SiWix,
    SiSquarespace,
    SiShopify,
    SiWordpress,
  } from "react-icons/si";

  import { AiOutlineThunderbolt } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { LucideChartBarDecreasing } from "lucide-react";
import { SiManageiq } from "react-icons/si";
import { LiaHourglassStartSolid } from "react-icons/lia";
import { FaCode } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

import { Fa500Px, FaAccessibleIcon } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { MdManageSearch, MdOutlineCollectionsBookmark } from "react-icons/md";
import { PiSlideshowDuotone } from "react-icons/pi";

export const avatars = [
    {
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      profileUrl: "https://fakeurl.com/user1",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
      profileUrl: "https://fakeurl.com/user2",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
      profileUrl: "https://fakeurl.com/user3",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
      profileUrl: "https://fakeurl.com/user4",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
      profileUrl: "https://fakeurl.com/user5",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/women/6.jpg",
      profileUrl: "https://fakeurl.com/user6",
    },
  ];

  export const companyLogos = [
    { name: "Google", src: Google },
    { name: "Microsoft", src: Microsoft },
    { name: "Amazon", src: Amazon },
    { name: "Netflix", src: Netflix },
    { name: "Instagram", src: Instagram },
    { name: "Uber", src: Uber },
    { name: "Spotify", src: Spotify },
  ];

 export const logos = [
    {
      logo: <SiFramer />,
      name: "Framer",
      description: "A responsive design tool for building websites quickly.",
      color: "text-blue-300",
    },
    {
      logo: <SiWordpress />,
      name: "WordPress",
      description:
        "A popular content management system for blogs and websites.",
      color: "text-orange-600",
    },
    {
      logo: <SiWebflow />,
      name: "Webflow",
      description: "A web design tool that allows for visual development.",
      color: "text-green-500",
    },
    {
      logo: <SiWix />,
      name: "Wix",
      description: "A cloud-based website builder with drag-and-drop features.",
      color: "text-blue-500",
    },
    {
      logo: <SiSquarespace />,
      name: "Squarespace",
      description:
        "A platform for building beautiful websites and online stores.",
      color: "text-gray-800",
    },
    {
      logo: <SiShopify />,
      name: "Shopify",
      description:
        "An e-commerce platform for online stores and retail point-of-sale.",
      color: "text-green-600",
    },
  ];

 export const iframeCode = `
  <script src="https://feedify.com/embed-testimonials.js"></script>
  <iframe src="https://feedify.com/testimonials.html"
    width="100%" height="200">
  </iframe>`;

 export const jsCode = `
  (async function () {
    const response = await fetch("https://feedify.com/api/testimonials");
    const testimonials = await response.json();
    
    console.log(testimonials);
  })();`;

 export const featuresData = [
    {
      id: 1,
      title: "Easy to Manage",
      icon: <SiManageiq size={40} className="text-gray-700" />,
      description: [
        "A dashboard to manage all testimonials.",
        "Simple & clean interface for ease of use.",
        "Everything is in one place for better organization.",
        "Feels like an email inbox, but designed for social proof!",
      ],
    },
    {
      id: 2,
      title: "Track the Metrics",
      icon: <LucideChartBarDecreasing size={40} className="text-gray-700" />,
      description: [
        "Monitor user engagement and feedback.",
        "Analyze data to improve service.",
        "Visualize trends with easy-to-read graphs.",
        "Generate reports for better decision-making.",
      ],
    },
    {
      id: 3,
      title: "Quick Start",
      icon: <LiaHourglassStartSolid size={40} className="text-gray-700" />,
      description: [
        "Get up and running in minutes.",
        "Easy setup process with guided instructions.",
        "Pre-built templates to choose from.",
        "Instant access to support for any questions.",
      ],
    },
    {
      id: 4,
      title: "No Coding",
      icon: <FaCode size={40} className="text-gray-700" />,
      description: [
        "Integrate seamlessly without any coding skills.",
        "User-friendly interface for all users.",
        "Drag-and-drop functionality for customization.",
        "Step-by-step tutorials available.",
      ],
    },
    {
      id: 5,
      title: "Secure",
      icon: <AiOutlineThunderbolt size={40} className="text-gray-700" />,
      description: [
        "Protect user data with top-notch security.",
        "Comply with data protection regulations.",
        "Regular security updates to ensure safety.",
        "Encrypted data storage for peace of mind.",
      ],
    },
    {
      id: 6,
      title: "Customizable",
      icon: <CiEdit size={40} className="text-gray-700" />,
      description: [
        "Tailor the look and feel to match your brand.",
        "Flexible options for layout and design.",
        "Add custom fields to collect specific data.",
        "Easily update content as your needs change.",
      ],
    },
  ];

export  const pricingData = [
    {
      name: "Starter Pack",
      price: "$0/mo",
      description: "Best for individuals",
      features: [
        { text: "Up to 5 testimonials", included: true },
        { text: "Email support", included: true },
        { text: "Basic analytics", included: true },
        { text: "Custom branding", included: false },
        { text: "Priority support", included: false },
        { text: "API access", included: false },
      ],
      buttonText: "Get started free",
      buttonBg: "bg-black text-white border border-black/50",
    },
    {
      name: "Pro Pack",
      price: "$15/mo",
      description: "Best for small businesses",
      features: [
        { text: "Up to 50 testimonials", included: true },
        { text: "Priority email support", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Custom branding", included: true },
        { text: "Priority support", included: false },
        { text: "API access", included: false },
      ],
      buttonText: "Get started",
      buttonBg: "bg-[#3979da] hover:bg-[#315ea8] text-white",
    },
    {
      name: "Enterprise Pack",
      price: "$49/mo",
      description: "Best for large teams",
      features: [
        { text: "Unlimited testimonials", included: true },
        { text: "Dedicated support", included: true },
        { text: "Comprehensive analytics", included: true },
        { text: "Custom branding", included: true },
        { text: "Priority support", included: true },
        { text: "API access", included: true },
      ],
      buttonText: "Contact us",
      buttonBg: "bg-[#3979da] hover:bg-[#315ea8] text-white",
    },
  ];

 export const TimeLine = [
    {
      Logo: <IoIosCreate />,
      Heading: "Create",
      Description: "Fully committed to the success company",
    },
    {
      Logo: <MdOutlineCollectionsBookmark />,
      Heading: "Share",
      Description: "Students will always be our top priority",
    },
    {
      Logo: <MdManageSearch />,
      Heading: "Manage",
      Description: "The ability to switch is an important skills",
    },
    {
      Logo: <PiSlideshowDuotone />,
      Heading: "Showcase",
      Description: "Code your way to a solution",
    },
  ];

 export const faqs = [
    {
      question: "How do I collect testimonials from users?",
      answer:
        "Users can submit testimonials through a simple form shared via a link or embedded on your website.",
    },
    {
      question: "Can I edit or manage submitted testimonials?",
      answer:
        "Yes, the admin dashboard allows you to approve, edit, or organize testimonials before displaying them.",
    },
    {
      question: "How can I embed testimonials on my website?",
      answer:
        "You can use an iframe or JavaScript snippet to display testimonials dynamically.",
    },
    {
      question: "Is it possible to customize the look of the testimonials?",
      answer:
        "Yes, you can customize fonts, colors, and layouts to match your brand.",
    },
    {
      question: "How secure is the testimonial data?",
      answer:
        "All testimonials are securely stored with encryption, ensuring data protection and compliance.",
    },
  ];