export interface ProvinceByDay {
  name: string;
  slug: string;
  data: {
    date: string;
    confirmed: number;
  }[];
}
