export interface IFaqs {
    question: string;
    answer:string
}

const faqs: IFaqs[] = [
    {
        question: "Why should I start a business in Dubai?",
        answer: "Dubai offers a strategic location, tax advantages, modern infrastructure, and global business opportunities."
    },
    {
        question: "How do I set up a business in Dubai?",
        answer: "You need to choose a business activity, legal structure, register with the Department of Economic Development (DED) or Free Zone, and obtain necessary approvals."
    },
    {
        question: "What types of business licences are available in Dubai?",
        answer: "Commercial, Professional, and Industrial licenses are the main categories."
    },
    {
        question: "What are the main steps to set up a company in Dubai?",
        answer: "Choose your business activity, pick a company name, apply for initial approval, draft MOA, lease office space, and get the trade license."
    },
    {
        question: "How much does it cost to set up a business in Dubai?",
        answer: "The cost varies depending on the license type, location (mainland or free zone), and business activity. On average, from AED 15,000 to AED 50,000."
    },
    {
        question: "Can foreigners own 100% of their business in Dubai?",
        answer: "Yes, foreigners can now own 100% of their business in most sectors, especially in Free Zones and many Mainland activities."
    },
];

export default faqs