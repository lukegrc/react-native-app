export interface Lesson {
  id: number;
  subject: string;
  location: string;
  price: number;
  maximumSpaces: number;
  availableSpaces: number;
  image: string;
  description?: string;
  instructor?: string;
  duration?: string;
  ageGroup?: string;
}

export interface CartItem extends Lesson {
  quantity: number;
}

export interface UserInfo {
  name: string;
  phoneNumber: string;
  email?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  userInfo: UserInfo;
  totalAmount: number;
  orderDate: Date;
  status: "pending" | "confirmed" | "cancelled";
}
