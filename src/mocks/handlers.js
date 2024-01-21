import { rest } from "msw";

export const handlers = [
    rest.get('https://course-api.com/react-tours-project', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([{
                id: "rec6d6T3q5EBIdCfD",
                name: "Best of Paris in 7 Days Tour",
                info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
                image: "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681752593/react-tours-project/tour-1_bners3.jpg",
                price: "1,995"
            }])
        );
    }),
    rest.get('https://course-api.com/react-tabs-project', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([{
                id: "recAGJfiU4CeaV0HL",
                order: 3,
                title: "Full Stack Web Developer",
                dates: "December 2015 - Present",
                duties: [
                    "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
                    "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
                    "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian."
                ],
                company: "TOMMY"
            }])
        );
    })
];