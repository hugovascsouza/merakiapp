// src/data/dietMockCoaches.js
import dietMock1 from '../assets/dietMock1.jpg';  // Adjust the path according to your file structure

export const dietMockCoaches = [
    {
      id: 1,
      name: "Alice Green",
      type: "Nutrition Coach",
      country: "USA",
      services: ["Vegan Diet", "Weight Loss Nutrition", "Healthy Eating Habits"],
      languages: ["English", "Spanish"],
      location: "Los Angeles, CA",
      image: "https://randomuser.me/api/portraits/women/1.jpg", // Example image URL
      instagram: "alicegreen_diet",
      email: "alice@dietcoaching.com",
      linkedin: "alice-green-linkedin",
      phone: "+1234567890"
    },
    {
      id: 2,
      name: "John Doe",
      type: "Carnivore Diet Specialist",
      country: "Canada",
      services: ["Carnivore Diet", "Gut Health & Microbiome"],
      languages: ["English", "French", "Portuguese"],
      location: "Toronto, ON",
      image: dietMock1,
      instagram: "john_doe_diet",
      linkedin: "john-doe-linkedin",
      website: "http://johndoe.com",
    },
    {
      id: 3,
      name: "Sarah Lee",
      type: "Diet & Nutrition Expert",
      country: "UK",
      services: ["Paleo Diet", "Plant-Based Nutrition", "Intermittent Fasting"],
      languages: ["English"],
      location: "London, UK",
      image: "https://randomuser.me/api/portraits/women/3.jpg", // Example image URL
      instagram: "sarahlee_nutrition",
      email: "sarah@dietcoaching.com",
      phone: "+442087654321",
      youtube: "http://youtube.com/sarahlee"
    },
    {
      id: 4,
      name: "Michael Johnson",
      type: "Nutrition Coach",
      country: "Australia",
      services: ["Carnivore Diet", "Sports Nutrition", "Healthy Eating Habits"],
      languages: ["English"],
      location: "Sydney, NSW",
      image: "https://randomuser.me/api/portraits/men/4.jpg", // Example image URL
      instagram: "michaeljohnson_nutrition",
      email: "michael@dietcoaching.com",
      phone: "+61412345678",
      website: "http://michaeljohnson.com"
    },
    {
      id: 5,
      name: "Emma Williams",
      type: "Health & Wellness Coach",
      country: "USA",
      services: ["Weight Loss Nutrition", "Plant-Based Nutrition", "Keto Diet"],
      languages: ["English"],
      location: "New York, NY",
      image: "https://randomuser.me/api/portraits/women/5.jpg", // Example image URL
      instagram: "emmawilliams_wellness",
      email: "emma@dietcoaching.com",
      phone: "+12125552345",
      linkedin: "emma-williams-linkedin"
    }
];
