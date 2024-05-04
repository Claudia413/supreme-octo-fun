const modules = import.meta.glob('../assets/GalleryImgs/*.jpg', { eager: true })

const photos = {
  sunrise: [
    {
      id: 1,
      url: `${modules['./GalleryImgs/SunriseClaudiaEngelsman.jpg'].default}`,
      title: 'Seashell at Sumner Beach'
    },
    {
      id: 2,
      url: `${modules['./GalleryImgs/SunriseClaudiaEngelsman2.jpg'].default}`,
      title: 'Seagulls waking up'
    },
    {
      id: 3,
      url: `${modules['./GalleryImgs/SunriseClaudiaEngelsman3.jpg'].default}`,
      title: 'Sunset in the Catlins'
    },
    {
      id: 4,
      url: `${modules['./GalleryImgs/SunriseClaudiaEngelsman4.jpg'].default}`,
      title: 'Ripples'
    }
  ],
  catlins: [
    {
      id: 5,
      url: modules['./GalleryImgs/CatlinsClaudiaEngelsman.jpg'].default,
      title: 'Nugget point'
    },
    {
      id: 6,
      url: modules['./GalleryImgs/CatlinsClaudiaEngelsman2.jpg'].default,
      title: 'Nugget point view'
    },
    {
      id: 7,
      url: modules['./GalleryImgs/CatlinsClaudiaEngelsman3.jpg'].default,
      title: 'Sunset at Nugget point'
    },
    {
      id: 8,
      url: modules['./GalleryImgs/CatlinsClaudiaEngelsman4.jpg'].default,
      title: 'Last sunrays'
    }
  ],
  dunes: [
    { id: 9, url: modules['./GalleryImgs/DunesClaudiaEngelsman.jpg'].default, title: 'Sparkles' },
    {
      id: 10,
      url: modules['./GalleryImgs/DunesClaudiaEngelsman2.jpg'].default,
      title: 'Golden dunes'
    },
    {
      id: 11,
      url: modules['./GalleryImgs/DunesClaudiaEngelsman3.jpg'].default,
      title: 'Golden mountains'
    },
    {
      id: 12,
      url: modules['./GalleryImgs/DunesClaudiaEngelsman4.jpg'].default,
      title: 'Line in the sand'
    }
  ],
  waterfall: [
    {
      id: 25,
      url: modules['./GalleryImgs/WaterfallClaudiaEngelsman.jpg'].default,
      title: 'Waterfall at Milford'
    },
    {
      id: 26,
      url: modules['./GalleryImgs/WaterfallClaudiaEngelsman2.jpg'].default,
      title: 'Fairies live here'
    },
    {
      id: 27,
      url: modules['./GalleryImgs/WaterfallClaudiaEngelsman3.jpg'].default,
      title: 'Everflowing'
    },
    {
      id: 28,
      url: modules['./GalleryImgs/WaterfallClaudiaEngelsman4.jpg'].default,
      title: 'Gravity'
    }
  ],

  dark: [
    { id: 37, url: '/assets/GalleryImgs/DarkClaudiaEngelsman.jpg', title: 'Duckling' },
    { id: 38, url: '/assets/GalleryImgs/DarkClaudiaEngelsman2.jpg', title: 'Sage' },
    {
      id: 39,
      url: '/assets/GalleryImgs/DarkClaudiaEngelsman3.jpg',
      title: 'Tiny flowers'
    }
  ],

  'spring flowers': [
    {
      id: 13,
      url: '/assets/GalleryImgs/SpringFlowersClaudiaEngelsman.jpg',
      title: 'Blossom'
    },
    {
      id: 14,
      url: '/assets/GalleryImgs/SpringFlowersClaudiaEngelsman2.jpg',
      title: 'Sea of flowers'
    },
    {
      id: 15,
      url: '/assets/GalleryImgs/SpringFlowersClaudiaEngelsman3.jpg',
      title: 'White blossom'
    }
  ],
  wildlife: [
    {
      id: 33,
      url: '/assets/GalleryImgs/WildlifeClaudiaEngelsman.jpg',
      title: 'Sea lion'
    },
    {
      id: 34,
      url: '/assets/GalleryImgs/WildlifeClaudiaEngelsman2.jpg',
      title: 'Sea lion on the rocks'
    },
    {
      id: 35,
      url: '/assets/GalleryImgs/WildlifeClaudiaEngelsman3.jpg',
      title: 'Dusty Sea lion'
    },
    {
      id: 36,
      url: '/assets/GalleryImgs/WildlifeClaudiaEngelsman4.jpg',
      title: 'Dolphin at Picton'
    }
  ],
  beach: [
    {
      id: 21,
      url: '/assets/GalleryImgs/BeachClaudiaEngelsman.jpg',
      title: 'Getting breakfast'
    },
    {
      id: 22,
      url: '/assets/GalleryImgs/BeachClaudiaEngelsman2.jpg',
      title: 'Life is good'
    },
    { id: 23, url: '/assets/GalleryImgs/BeachClaudiaEngelsman3.jpg', title: 'Beach dog' },
    {
      id: 24,
      url: '/assets/GalleryImgs/BeachClaudiaEngelsman4.jpg',
      title: 'Morning swim'
    }
  ],
  'welcome flat': [
    {
      id: 29,
      url: '/assets/GalleryImgs/WelcomeFlatClaudiaEngelsman.jpg',
      title: 'Incoming clouds'
    },
    {
      id: 30,
      url: '/assets/GalleryImgs/WelcomeFlatClaudiaEngelsman2.jpg',
      title: 'After the rain'
    },
    {
      id: 31,
      url: '/assets/GalleryImgs/WelcomeFlatClaudiaEngelsman3.jpg',
      title: 'Forest track'
    },
    {
      id: 32,
      url: '/assets/GalleryImgs/WelcomeFlatClaudiaEngelsman4.jpg',
      title: 'Forest stream'
    }
  ]
}

export default photos
