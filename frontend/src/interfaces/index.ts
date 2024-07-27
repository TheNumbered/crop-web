export interface Course_topics {
  id: number;
  course_id: number;
  my_resources: any;
}

export interface Courses {
  id: number;
  course_name: string;
  user_id: number;
  courses: any;
  cropName: string;
  variety: string;
  qualityGrade: any;
  quantity: string;
  currentBid?: any;
  auctionEnd: any;
  sellerName: string;
  contactInfo: string;
  location: string;
  shippingOptions: any;
  pickupOptions: any;
  description: string;
  certifications: any;
  primary_image?: string;
  pictures?: any;
  crop_listings?: any;
}

export interface Farming_courses {
  id: number;
  title?: string;
  description?: string;
  image_url?: string;
  farming_courses?: any;
}

export interface Forum_comments {
  id: number;
  topic_id: number;
  message: string;
  repliedBy: string;
  date?: string;
  replyImageURL?: string;
  replierId?: string;
}

export interface Forum_topics {
  id: number;
  subject: string;
  message: string;
  startedBy: string;
  date?: string;
  userId?: string;
  imageURL?: string;
  forum_topics?: any;
}

export interface Resources {
  id: number;
  topic_id: number;
  url: string;
  rank?: number;
}

export interface Course_topicsInput {
  course_id: number;
  my_resources: any;
}

export interface CoursesInput {
  course_name: string;
  user_id: number;
  courses: any;
  cropName: string;
  variety: string;
  qualityGrade: any;
  quantity: string;
  currentBid?: any;
  auctionEnd: any;
  sellerName: string;
  contactInfo: string;
  location: string;
  shippingOptions: any;
  pickupOptions: any;
  description: string;
  certifications: any;
  primary_image?: string;
  pictures?: any;
  crop_listings?: any;
}

export interface Farming_coursesInput {
  title?: string;
  description?: string;
  image_url?: string;
  farming_courses?: any;
}

export interface Forum_commentsInput {
  topic_id: number;
  message: string;
  repliedBy: string;
  date?: string;
  replyImageURL?: string;
  replierId?: string;
}

export interface Forum_topicsInput {
  subject: string;
  message: string;
  startedBy: string;
  date?: string;
  userId?: string;
  imageURL?: string;
  forum_topics?: any;
}

export interface ResourcesInput {
  topic_id: number;
  url: string;
  rank?: number;
}
