import t1 from "../images/tour-1.jpeg"
import t2 from "../images/tour-2.jpeg"
import t3 from "../images/tour-3.jpeg"
import t4 from "../images/tour-4.jpeg"

export const pageLinks=[
    {id:1,href:"#home",description:"home"},
    {id:2,href:"#about",description:"about"},
    {id:3,href:"#services",description:"services"},
    {id:4,href:"#tours",description:"tours"}
]

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
]

export const services = [
  {
    id: 1,
    icon: "fab fa-facebook",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
]

export const tours = [
  {
    id: 1,
    image:  t1 ,
    date: "August 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: " China",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: t2 ,
    date: "October 1th, 2020",
    title: "Best Of Java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Indonesia",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image:  t3 ,
    date: "September 15th, 2020",
    title: "Explore Hong Kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Hong Kong",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image:  t4 ,
    date: "December 5th, 2019",
    title: "Kenya Highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Kenya",
    duration: 20,
    cost: 3300,
  },
]