import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("cars").del();

    // Inserts seed entries
    await knex("cars").insert([
        {
            "id": 55,
            "name": "mobil1",
            "price": "350000000",
            "category": "medium",
            "image": "https://res.cloudinary.com/djlgdme26/image/upload/v1717409453/ch-5-challenge/ug3vnkl2f5wm4ueyvkby.png",
            "start_date": "2024-05-05T17:00:00.000Z",
            "end_date": "2024-08-27T17:00:00.000Z",
            "availability": true,
            "createdAt": "2024-06-03T10:10:53.944Z",
            "updatedAt": "2024-06-03T10:10:53.944Z"
        },
        {
            "id": 82,
            "name": "mobil2",
            "price": "560000000",
            "category": "medium",
            "image": "https://res.cloudinary.com/djlgdme26/image/upload/v1717409480/ch-5-challenge/wz0kjw1ilazc03n5xxle.png",
            "start_date": "2024-05-05T17:00:00.000Z",
            "end_date": "2024-08-27T17:00:00.000Z",
            "availability": true,
            "createdAt": "2024-06-03T10:11:21.311Z",
            "updatedAt": "2024-06-03T10:11:21.311Z"
        },
        {
            "id": 61,
            "name": "mobil3",
            "price": "1000000000",
            "category": "medium",
            "image": "https://res.cloudinary.com/djlgdme26/image/upload/v1717409501/ch-5-challenge/cap8jduezrq1qttxrcsh.png",
            "start_date": "2024-05-05T17:00:00.000Z",
            "end_date": "2024-08-27T17:00:00.000Z",
            "availability": true,
            "createdAt": "2024-06-03T10:11:42.381Z",
            "updatedAt": "2024-06-03T10:11:42.381Z"
        }
    ]);
};
