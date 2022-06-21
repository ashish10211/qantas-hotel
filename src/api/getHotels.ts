import hotels from "./hotel.json";
import { z } from "zod";

const hotelSchema = z.object({
  id: z.string(),
  property: z.object({
    title: z.string(),
    address: z.array(z.string()),
    previewImage: z.object({
      url: z.string(),
    }),
    rating: z.object({
      ratingValue: z.number(),
      ratingType: z.string(),
    }),
  }),
  offer: z.object({
    name: z.string(),
    displayPrice: z.object({
      amount: z.number(),
      currency: z.string(),
    }),
    savings: z.union([
      z.object({
        amount: z.number(),
        currency: z.string(),
      }),
      z.null(),
    ]),
    cancellationOption: z.object({
      cancellationType: z.string(),
    }),
  }),
});

const hotelResponseSchema = z.object({ results: z.array(hotelSchema) });

export type HotelData = z.infer<typeof hotelSchema>;

export const getHotels = () => {
  const apiResponse = hotelResponseSchema.parse(hotels);
  return apiResponse;
};
