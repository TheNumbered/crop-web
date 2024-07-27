export interface Reply {
  id: string;
  message: string;
  repliedBy: string;
  date: string;
  replyImageURL: string;
  replierId: string;
}

export interface Topic {
  id: string;
  subject: string;
  message: string;
  userId: string;
  imageURL: string;
  attachment: File | null;
  startedBy: string;
  date: string;
  replies: Reply[];
}
