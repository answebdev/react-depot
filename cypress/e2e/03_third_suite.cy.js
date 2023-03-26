/// <reference types="cypress" />

// React JS Cypress Mock HTTP Requests: https://www.youtube.com/watch?v=yCao-kxIcF8
// Stubbing and Mocking Network Request with Cypress new Intercept: https://www.youtube.com/watch?v=tidy0Bm5PGM
// https://www.webtips.dev/webtips/cypress/wait-for-elements-to-be-visible-in-cypress

// The intention of cy.request() is to be used for checking endpoints on an actual running server,
// without having to...
// These are tests that do not modify the server state.
// Using the request method to test the response from a GET request.
// Testing the endpoint to make sure the data fetched is the correct response.
// Source: https://www.youtube.com/watch?v=bcO2E6XFJCY

describe('Third test suite', () => {
  beforeEach(() => {
    cy.visit('/tours');
    cy.request('GET', 'https://course-api.com/react-tours-project').as('tours');
  });

  it('should have a body length of 5 items', () => {
    cy.get('@tours')
      .its('body')
      .should('have.length', '5');
  });

  it('should have a status code of 200', () => {
    cy.get('@tours')
      .its('status')
      .should('eq', 200);
  });

  it('should have a content-type of application/json', () => {
    cy.get('@tours')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
      .and('include', 'charset=utf-8');
  });

  const apiItems = [
    {
      id: 'rec6d6T3q5EBIdCfD',
      name: 'Best of Paris in 7 Days Tour',
      info:
        "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
      image: 'https://images2.imgbox.com/d6/91/DLtwCiTn_o.jpg',
      price: '1,995',
    },
    {
      id: 'recIwxrvU9HfJR3B4',
      name: 'Best of Ireland in 14 Days Tour',
      info:
        "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
      image: 'https://images2.imgbox.com/e5/62/SR8sJgyg_o.jpeg',
      price: '3,895',
    },
    {
      id: 'recJLWcHScdUtI3ny',
      name: 'Best of Salzburg & Vienna in 8 Days Tour',
      info:
        "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
      image: 'https://images2.imgbox.com/a2/b3/5H5WRLw7_o.jpeg',
      price: '2,695',
    },
    {
      id: 'recK2AOoVhIHPLUwn',
      name: 'Best of Rome in 7 Days Tour',
      info:
        "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
      image: 'https://images2.imgbox.com/67/2f/Sk5x6VxF_o.jpeg',
      price: '2,095',
    },
    {
      id: 'receAEzz86KzW2gvH',
      name: 'Best of Poland in 10 Days Tour',
      info:
        "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
      image: 'https://images2.imgbox.com/ff/f5/vFKUUGBY_o.jpeg',
      price: '2,595',
    },
  ];

  // Make sure response from endpoint is the same as in 'apiItems' constant
  it('should have the correct content in the body', () => {
    cy.get('@tours')
      .its('body')
      .should('deep.eq', apiItems); // Make sure body of request has the same API items as in constant
  });

  it('should have correct JSON schema', () => {
    cy.get('@tours')
      .its('body')
      .each((value) => {
        expect(value).to.have.all.keys('id', 'name', 'info', 'image', 'price');
      });
  });

  //   it('should get data from API', () => {
  //     cy.request('GET', 'https://course-api.com/react-tours-project', {}).then(
  //       (res) => {
  //         expect(res.status).to.eq(200);
  //         expect(res).to.have.property('headers');
  //         expect(res).to.have.property('duration');
  //       }
  //     );
  //   });
});
