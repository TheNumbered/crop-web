export interface Crop_listings {
    id: number;
    cropName: string;
    variety: string;
    qualityGrade: any;
    quantity: string;
    startingBid?: any;
    bidIncrement?: any;
    currentBid?: any;
    auctionStart: any;
    auctionEnd: any;
    sellerName: string;
    sellerRating?: any;
    contactInfo: string;
    location: string;
    shippingOptions: any;
    pickupOptions: any;
    description: string;
    certifications: any;
    crop_listings?: any;
}

export interface Farming_courses {
    id: number;
    title?: string;
    description?: string;
    image_url?: string;
    farming_courses?: any;
}

export interface Market_items {
    id: number;
    name?: string;
    image?: string;
    highest_bid?: number;
    description?: string;
    location?: string;
    end_date?: any;
    market_items?: any;
}

export interface Replies {
    id: number;
    topic_id: number;
    message: string;
    repliedBy: string;
    date?: string;
    replyImageURL?: string;
    replierId?: string;
}

export interface Topics {
    id: number;
    subject: string;
    message: string;
    startedBy: string;
    date?: string;
    userId?: string;
    imageURL?: string;
    topics?: any;
}

export interface Crop_listingsInput {
    cropName: string;
    variety: string;
    qualityGrade: any;
    quantity: string;
    startingBid?: any;
    bidIncrement?: any;
    currentBid?: any;
    auctionStart: any;
    auctionEnd: any;
    sellerName: string;
    sellerRating?: any;
    contactInfo: string;
    location: string;
    shippingOptions: any;
    pickupOptions: any;
    description: string;
    certifications: any;
    crop_listings?: any;
}

export interface Farming_coursesInput {
    title?: string;
    description?: string;
    image_url?: string;
    farming_courses?: any;
}

export interface Market_itemsInput {
    name?: string;
    image?: string;
    highest_bid?: number;
    description?: string;
    location?: string;
    end_date?: any;
    market_items?: any;
}

export interface RepliesInput {
    topic_id: number;
    message: string;
    repliedBy: string;
    date?: string;
    replyImageURL?: string;
    replierId?: string;
}

export interface TopicsInput {
    subject: string;
    message: string;
    startedBy: string;
    date?: string;
    userId?: string;
    imageURL?: string;
    topics?: any;
}

