import ProfilePic from '../assets/github.png';
import Usdc from '../assets/logo.png';
import anchor from '../assets/anchor.png';
import solanaciv from '../assets/solanaciv.jpg';

const tasks = [
    {
      icon: ProfilePic,
      title: 'Create A FAQ List for Gibwork',
      points: 1,
      currencyIcon: Usdc,
    },
    {
      icon: ProfilePic,
      title: 'Share a link to your most used dApp',
      points: 100,
      currencyIcon: Usdc,
    },
    {
      icon: ProfilePic,
      title: 'Design GibWork\'s New Landing Page',
      points: 500,
      currencyIcon: Usdc,
    },
    {
      icon: ProfilePic,
      title: 'Create developer challenges for Zircon',
      points: 500,
      currencyIcon: Usdc,
    },
    {
      icon: ProfilePic,
      title: 'Use slug0 to share a set of links on X or Reddit',
      points: 100,
      currencyIcon: Usdc,
    },
];

const testimonials = [
    {
      id: 1,
      pfp: ProfilePic, 
      message: "This is an amazing product! Highly recommended.",
      username: "John Doe",
    },
    {
      id: 2,
      pfp: ProfilePic, 
      message: "I've had a fantastic experience with this service.",
      username: "Jane Smith",
    },
    {
      id: 3,
      pfp: ProfilePic, 
      message: "Top-notch customer support and quality!",
      username: "Michael Brown",
    },
    {
      id: 4,
      pfp: ProfilePic, 
      message: "I can't imagine going back to life before this. I can't imagine going back to life before this.",
      username: "Emily White",
    },
];

const collaborators = [
    {
      name: "SolanaCiv",
      description: "Fully on-chain strategy game inspired by Civilization. Built on @Solana.",
      logo: solanaciv,
    },
    {
      name: "Anchor",
      description: "Anchor is a framework for Solana providing several convenient tools for writing smart contracts.",
      logo: anchor,
    },
];

export { testimonials, tasks, collaborators };
