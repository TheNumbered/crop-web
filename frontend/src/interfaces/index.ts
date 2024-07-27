export interface CourseTopics {
    id: number;
    course_id: number;
    my_resources: any;
}

export interface Courses {
    id: number;
    course_name: any;
    user_id: number;
    description: string;
}

export interface CropListings {
    id: number;
    cropName: any;
    variety: any;
    qualityGrade: any;
    quantity: any;
    auctionEnd: Date;
    sellerName: any;
    contactInfo: any;
    location: any;
    shippingOptions: any;
    pickupOptions: any;
    description: string;
    certifications: any;
}

export interface ForumComments {
    id: number;
    topic_id: number;
    message: string;
    repliedBy: any;
}

export interface ForumTopics {
    id: number;
    subject: any;
    message: string;
    startedBy: any;
}

export interface Resources {
    id: number;
    topic_id: number;
    url: any;
}

export interface CourseTopicsInput {
    course_id: number;
    my_resources: any;
}

export interface CoursesInput {
    course_name: any;
    user_id: number;
    description: string;
}

export interface CropListingsInput {
    cropName: any;
    variety: any;
    qualityGrade: any;
    quantity: any;
    auctionEnd: Date;
    sellerName: any;
    contactInfo: any;
    location: any;
    shippingOptions: any;
    pickupOptions: any;
    description: string;
    certifications: any;
}

export interface ForumCommentsInput {
    topic_id: number;
    message: string;
    repliedBy: any;
}

export interface ForumTopicsInput {
    subject: any;
    message: string;
    startedBy: any;
}

export interface ResourcesInput {
    topic_id: number;
    url: any;
}

