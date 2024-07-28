export type CourseCommunityUrls = {
    id: number;
    topicId: number;
    url: any;
    rank: number;
    title: any;
}

export type CourseTopics = {
    id: number;
    courseId: number;
    urls: any;
}

export type Courses = {
    id: number;
    courseName: any;
    userId: number;
    description: string;
    imageUrl: any;
}

export type CropListings = {
    id: number;
    cropName: any;
    variety: any;
    qualityGrade: any;
    quantity: any;
    currentBid: any;
    auctionEnd: Date;
    sellerName: any;
    contactInfo: any;
    location: any;
    shippingOptions: any;
    pickupOptions: any;
    description: string;
    certifications: any;
    primaryImage: any;
    pictures: any;
}

export type ForumComments = {
    id: number;
    topic_id: number;
    message: string;
    repliedBy: any;
    date: any;
    replyImageURL: any;
    replierId: any;
}

export type ForumTopics = {
    id: number;
    subject: any;
    message: string;
    startedBy: any;
    date: any;
    userId: any;
    imageURL: any;
}

export type CourseCommunityUrlsInput = {
    topicId: number;
    url: any;
    rank: number;
    title: any;
}

export type CourseTopicsInput = {
    courseId: number;
    urls: any;
}

export type CoursesInput = {
    courseName: any;
    userId: number;
    description: string;
    imageUrl: any;
}

export type CropListingsInput = {
    cropName: any;
    variety: any;
    qualityGrade: any;
    quantity: any;
    currentBid: any;
    auctionEnd: Date;
    sellerName: any;
    contactInfo: any;
    location: any;
    shippingOptions: any;
    pickupOptions: any;
    description: string;
    certifications: any;
    primaryImage: any;
    pictures: any;
}

export type ForumCommentsInput = {
    topic_id: number;
    message: string;
    repliedBy: any;
    date: any;
    replyImageURL: any;
    replierId: any;
}

export type ForumTopicsInput = {
    subject: any;
    message: string;
    startedBy: any;
    date: any;
    userId: any;
    imageURL: any;
}

