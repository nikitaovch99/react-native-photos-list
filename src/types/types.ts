type Links = {
  download: string;
  download_location: string;
  html: string;
  self: string;
};

type Urls = {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
};

type User = {
  accepted_tos: boolean;
  bio: string;
  first_name: string;
  for_hire: boolean;
  id: string;
  instagram_username: string;
  last_name: boolean;
  links: string[];
  location: string | null;
  name: string;
  portfolio_url: string;
  profile_image: string[];
  social: string[];
  total_collections: number;
  total_likes: number;
  total_photos: number;
  twitter_username: string;
  updated_at: string;
  username: string;
};

export type Photo = {
  alt_description: string | null;
  blur_hash: string;
  color: string;
  created_at: string;
  current_user_collections: string[];
  description: string | null;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: Links;
  promoted_at: string | null;
  sponsorship: Object;
  topic_submissions: Object;
  updated_at: string;
  urls: Urls;
  user: User;
  width: number;
};

