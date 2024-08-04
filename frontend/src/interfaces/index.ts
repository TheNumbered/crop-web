export type CourseTopics = {
    id: number;
    course_id: number;
    my_resources: any;
    topic: any;
}

export type Courses = {
    id: number;
    course_name: any;
    user_id: number;
    description: string;
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
    primaryImage: any;
    pictures: any;
    userId: number;
}

export type FarmingCourses = {
    id: number;
    courseName: any;
    imageUrl: any;
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

export type Resources = {
    id: number;
    topic_id: number;
    resources_by_public: any;
    ranking: number;
}

export type CourseTopicsInput = {
    course_id: number;
    my_resources: any;
    topic: any;
}

export type CoursesInput = {
    course_name: any;
    user_id: number;
    description: string;
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
    primaryImage: any;
    pictures: any;
    userId: number;
}

export type FarmingCoursesInput = {
    courseName: any;
    imageUrl: any;
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

export type ResourcesInput = {
    topic_id: number;
    resources_by_public: any;
    ranking: number;
}

