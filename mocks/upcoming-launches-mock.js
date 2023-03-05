export const UPCOMING_LAUNCHES = [
  {
    id: 'bc325945-4bee-4412-84e1-14998b2eba5f',
    url: 'https://ll.thespacedevs.com/2.2.0/launch/bc325945-4bee-4412-84e1-14998b2eba5f/',
    slug: 'falcon-9-block-5-crew-6',
    name: 'Falcon 9 Block 5 | Crew-6',
    status: {
      id: 3,
      name: 'Launch Successful',
      abbrev: 'Success',
      description:
        'The launch vehicle successfully inserted its payload(s) into the target orbit(s).'
    },
    last_updated: '2023-03-02T05:58:44Z',
    net: '2023-03-02T05:34:14Z',
    window_end: '2023-03-02T05:34:14Z',
    window_start: '2023-03-02T05:34:14Z',
    probability: 95,
    holdreason: '',
    failreason: '',
    hashtag: null,
    launch_service_provider: {
      id: 121,
      url: 'https://ll.thespacedevs.com/2.2.0/agencies/121/',
      name: 'SpaceX',
      type: 'Commercial'
    },
    rocket: {
      id: 7498,
      configuration: {
        id: 164,
        url: 'https://ll.thespacedevs.com/2.2.0/config/launcher/164/',
        name: 'Falcon 9',
        family: 'Falcon',
        full_name: 'Falcon 9 Block 5',
        variant: 'Block 5'
      }
    },
    mission: {
      id: 5898,
      name: 'Crew-6',
      description:
        "SpaceX Crew-6 is the sixth crewed operational flight of a Crew Dragon spacecraft to the International Space Station as part of NASA's Commercial Crew Program.",
      launch_designator: null,
      type: 'Human Exploration',
      orbit: {
        id: 8,
        name: 'Low Earth Orbit',
        abbrev: 'LEO'
      }
    },
    pad: {
      id: 87,
      url: 'https://ll.thespacedevs.com/2.2.0/pad/87/',
      agency_id: null,
      name: 'Launch Complex 39A',
      info_url: null,
      wiki_url:
        'https://en.wikipedia.org/wiki/Kennedy_Space_Center_Launch_Complex_39#Launch_Pad_39A',
      map_url: 'http://maps.google.com/maps?q=28.608+N,+80.604+W',
      latitude: '28.60822681',
      longitude: '-80.60428186',
      location: {
        id: 27,
        url: 'https://ll.thespacedevs.com/2.2.0/location/27/',
        name: 'Kennedy Space Center, FL, USA',
        country_code: 'USA',
        map_image:
          'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_27_20200803142447.jpg',
        total_launch_count: 216,
        total_landing_count: 0
      },
      map_image:
        'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_87_20200803143537.jpg',
      total_launch_count: 158,
      orbital_launch_attempt_count: 156
    },
    webcast_live: false,
    image:
      'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20230301082227.jpeg',
    infographic: null,
    program: [
      {
        id: 5,
        url: 'https://ll.thespacedevs.com/2.2.0/program/5/',
        name: 'Commercial Crew Program',
        description:
          'The Commercial Crew Program (CCP) is a human spaceflight program operated by NASA, in association with American aerospace manufacturers Boeing and SpaceX. The program conducts rotations between the expeditions of the International Space Station program, transporting crews to and from the International Space Station (ISS) aboard Boeing Starliner and SpaceX Crew Dragon capsules, in the first crewed orbital spaceflights operated by private companies.',
        agencies: [
          {
            id: 80,
            url: 'https://ll.thespacedevs.com/2.2.0/agencies/80/',
            name: 'Boeing',
            type: 'Commercial'
          },
          {
            id: 44,
            url: 'https://ll.thespacedevs.com/2.2.0/agencies/44/',
            name: 'National Aeronautics and Space Administration',
            type: 'Government'
          },
          {
            id: 121,
            url: 'https://ll.thespacedevs.com/2.2.0/agencies/121/',
            name: 'SpaceX',
            type: 'Commercial'
          }
        ],
        image_url:
          'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/commercial2520_program_20200820201209.png',
        start_date: '2011-04-18T00:00:00Z',
        end_date: null,
        info_url: 'https://www.nasa.gov/exploration/commercial/crew/index.html',
        wiki_url: 'https://en.wikipedia.org/wiki/Commercial_Crew_Program',
        mission_patches: []
      },
      {
        id: 17,
        url: 'https://ll.thespacedevs.com/2.2.0/program/17/',
        name: 'International Space Station',
        description:
          'The International Space Station programme is tied together by a complex set of legal, political and financial agreements between the sixteen nations involved in the project, governing ownership of the various components, rights to crewing and utilization, and responsibilities for crew rotation and resupply of the International Space Station. It was conceived in 1984 by President Ronald Reagan, during the Space Station Freedom project as it was originally called.',
        agencies: [
          {
            id: 16,
            url: 'https://ll.thespacedevs.com/2.2.0/agencies/16/',
            name: 'Canadian Space Agency',
            type: 'Government'
          },
          {
            id: 27,
            url: 'https://ll.thespacedevs.com/2.2.0/agencies/27/',
            name: 'European Space Agency',
            type: 'Multinational'
          },
          {
            id: 37,
            url: 'https://ll.thespacedevs.com/2.2.0/agencies/37/',
            name: 'Japan Aerospace Exploration Agency',
            type: 'Government'
          },
          {
            id: 44,
            url: 'https://ll.thespacedevs.com/2.2.0/agencies/44/',
            name: 'National Aeronautics and Space Administration',
            type: 'Government'
          },
          {
            id: 63,
            url: 'https://ll.thespacedevs.com/2.2.0/agencies/63/',
            name: 'Russian Federal Space Agency (ROSCOSMOS)',
            type: 'Government'
          }
        ],
        image_url:
          'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/international2_program_20201129184745.png',
        start_date: '1998-11-20T06:40:00Z',
        end_date: null,
        info_url: 'https://www.nasa.gov/mission_pages/station/main/index.html',
        wiki_url:
          'https://en.wikipedia.org/wiki/International_Space_Station_programme',
        mission_patches: []
      }
    ],
    orbital_launch_attempt_count: 6385,
    location_launch_attempt_count: 216,
    pad_launch_attempt_count: 158,
    agency_launch_attempt_count: 227,
    orbital_launch_attempt_count_year: 29,
    location_launch_attempt_count_year: 3,
    pad_launch_attempt_count_year: 3,
    agency_launch_attempt_count_year: 14
  },
  {
    id: '16b81321-f53c-4323-b79d-528b1c2480d0',
    url: 'https://ll.thespacedevs.com/2.2.0/launch/16b81321-f53c-4323-b79d-528b1c2480d0/',
    slug: 'falcon-9-block-5-starlink-group-2-7',
    name: 'Falcon 9 Block 5 | Starlink Group 2-7',
    status: {
      id: 1,
      name: 'Go for Launch',
      abbrev: 'Go',
      description: 'Current T-0 confirmed by official or reliable sources.'
    },
    last_updated: '2023-03-02T16:31:52Z',
    net: '2023-03-02T22:50:00Z',
    window_end: '2023-03-02T22:50:00Z',
    window_start: '2023-03-02T22:50:00Z',
    probability: null,
    holdreason: '',
    failreason: '',
    hashtag: null,
    launch_service_provider: {
      id: 121,
      url: 'https://ll.thespacedevs.com/2.2.0/agencies/121/',
      name: 'SpaceX',
      type: 'Commercial'
    },
    rocket: {
      id: 7781,
      configuration: {
        id: 164,
        url: 'https://ll.thespacedevs.com/2.2.0/config/launcher/164/',
        name: 'Falcon 9',
        family: 'Falcon',
        full_name: 'Falcon 9 Block 5',
        variant: 'Block 5'
      }
    },
    mission: {
      id: 6299,
      name: 'Starlink Group 2-7',
      description:
        "A batch of 51 satellites for the Starlink mega-constellation - SpaceX's project for space-based Internet communication system.",
      launch_designator: null,
      type: 'Communications',
      orbit: {
        id: 8,
        name: 'Low Earth Orbit',
        abbrev: 'LEO'
      }
    },
    pad: {
      id: 16,
      url: 'https://ll.thespacedevs.com/2.2.0/pad/16/',
      agency_id: null,
      name: 'Space Launch Complex 4E',
      info_url: null,
      wiki_url: '',
      map_url: 'http://maps.google.com/maps?q=34.632+N,+120.611+W',
      latitude: '34.632',
      longitude: '-120.611',
      location: {
        id: 11,
        url: 'https://ll.thespacedevs.com/2.2.0/location/11/',
        name: 'Vandenberg SFB, CA, USA',
        country_code: 'USA',
        map_image:
          'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_11_20200803142416.jpg',
        total_launch_count: 712,
        total_landing_count: 8
      },
      map_image:
        'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_16_20200803143532.jpg',
      total_launch_count: 103,
      orbital_launch_attempt_count: 103
    },
    webcast_live: false,
    image:
      'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20230209220217.png',
    infographic: null,
    program: [],
    orbital_launch_attempt_count: 6386,
    location_launch_attempt_count: 713,
    pad_launch_attempt_count: 104,
    agency_launch_attempt_count: 228,
    orbital_launch_attempt_count_year: 30,
    location_launch_attempt_count_year: 4,
    pad_launch_attempt_count_year: 4,
    agency_launch_attempt_count_year: 15
  },
  {
    id: '25d652f7-7e20-42d5-967e-b8e01305746c',
    url: 'https://ll.thespacedevs.com/2.2.0/launch/25d652f7-7e20-42d5-967e-b8e01305746c/',
    slug: 'terran-1-good-luck-have-fun-maiden-flight',
    name: 'Terran 1 | Good Luck, Have Fun (Maiden Flight)',
    status: {
      id: 1,
      name: 'Go for Launch',
      abbrev: 'Go',
      description: 'Current T-0 confirmed by official or reliable sources.'
    },
    last_updated: '2023-02-22T17:42:22Z',
    net: '2023-03-08T18:00:00Z',
    window_end: '2023-03-08T21:00:00Z',
    window_start: '2023-03-08T18:00:00Z',
    probability: -1,
    holdreason: '',
    failreason: '',
    hashtag: '#GLHF',
    launch_service_provider: {
      id: 266,
      url: 'https://ll.thespacedevs.com/2.2.0/agencies/266/',
      name: 'Relativity Space',
      type: null
    },
    rocket: {
      id: 2212,
      configuration: {
        id: 180,
        url: 'https://ll.thespacedevs.com/2.2.0/config/launcher/180/',
        name: 'Terran 1',
        family: 'Terran',
        full_name: 'Terran 1',
        variant: '1'
      }
    },
    mission: {
      id: 969,
      name: 'Good Luck, Have Fun (Maiden Flight)',
      description:
        'Maiden launch of the Terran 1 rocket developed by Relativity Space.',
      launch_designator: null,
      type: 'Test Flight',
      orbit: {
        id: 8,
        name: 'Low Earth Orbit',
        abbrev: 'LEO'
      }
    },
    pad: {
      id: 92,
      url: 'https://ll.thespacedevs.com/2.2.0/pad/92/',
      agency_id: 161,
      name: 'Launch Complex 16',
      info_url: null,
      wiki_url:
        'https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Launch_Complex_16',
      map_url: 'http://www.google.com/maps?q=28.501626,-80.5518',
      latitude: '28.501626',
      longitude: '-80.5518',
      location: {
        id: 12,
        url: 'https://ll.thespacedevs.com/2.2.0/location/12/',
        name: 'Cape Canaveral, FL, USA',
        country_code: 'USA',
        map_image:
          'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg',
        total_launch_count: 876,
        total_landing_count: 32
      },
      map_image:
        'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_92_20200803143523.jpg',
      total_launch_count: 0,
      orbital_launch_attempt_count: 0
    },
    webcast_live: false,
    image:
      'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/terran_1_image_20220129191632.jpg',
    infographic: null,
    program: [],
    orbital_launch_attempt_count: 6390,
    location_launch_attempt_count: 878,
    pad_launch_attempt_count: 1,
    agency_launch_attempt_count: 1,
    orbital_launch_attempt_count_year: 34,
    location_launch_attempt_count_year: 10,
    pad_launch_attempt_count_year: 1,
    agency_launch_attempt_count_year: 1
  },
  {
    id: '7d6982f5-d7e3-4d10-9655-0e83999d81a6',
    url: 'https://ll.thespacedevs.com/2.2.0/launch/7d6982f5-d7e3-4d10-9655-0e83999d81a6/',
    slug: 'falcon-9-block-5-oneweb-17',
    name: 'Falcon 9 Block 5 | OneWeb 17',
    status: {
      id: 8,
      name: 'To Be Confirmed',
      abbrev: 'TBC',
      description:
        'Awaiting official confirmation - current date is known with some certainty.'
    },
    last_updated: '2023-03-01T05:02:02Z',
    net: '2023-03-09T19:05:00Z',
    window_end: '2023-03-09T19:05:00Z',
    window_start: '2023-03-09T19:05:00Z',
    probability: null,
    holdreason: '',
    failreason: '',
    hashtag: null,
    launch_service_provider: {
      id: 121,
      url: 'https://ll.thespacedevs.com/2.2.0/agencies/121/',
      name: 'SpaceX',
      type: 'Commercial'
    },
    rocket: {
      id: 2674,
      configuration: {
        id: 164,
        url: 'https://ll.thespacedevs.com/2.2.0/config/launcher/164/',
        name: 'Falcon 9',
        family: 'Falcon',
        full_name: 'Falcon 9 Block 5',
        variant: 'Block 5'
      }
    },
    mission: {
      id: 6111,
      name: 'OneWeb 17',
      description:
        'A batch of 48 satellites for the OneWeb satellite constellation, which is intended to provide global Internet broadband service for individual consumers. The constellation is planned to have around 648 microsatellites (of which 60 are spares), around 150 kg each, operating in Ku-band from low Earth orbit.',
      launch_designator: null,
      type: 'Communications',
      orbit: {
        id: 13,
        name: 'Polar Orbit',
        abbrev: 'PO'
      }
    },
    pad: {
      id: 80,
      url: 'https://ll.thespacedevs.com/2.2.0/pad/80/',
      agency_id: 121,
      name: 'Space Launch Complex 40',
      info_url: null,
      wiki_url:
        'https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Space_Launch_Complex_40',
      map_url: 'http://maps.google.com/maps?q=28.56194122,-80.57735736',
      latitude: '28.56194122',
      longitude: '-80.57735736',
      location: {
        id: 12,
        url: 'https://ll.thespacedevs.com/2.2.0/location/12/',
        name: 'Cape Canaveral, FL, USA',
        country_code: 'USA',
        map_image:
          'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg',
        total_launch_count: 876,
        total_landing_count: 32
      },
      map_image:
        'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_80_20200803143323.jpg',
      total_launch_count: 171,
      orbital_launch_attempt_count: 170
    },
    webcast_live: false,
    image:
      'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/falcon_9_block__image_20210506060831.jpg',
    infographic: null,
    program: [],
    orbital_launch_attempt_count: 6388,
    location_launch_attempt_count: 878,
    pad_launch_attempt_count: 172,
    agency_launch_attempt_count: 229,
    orbital_launch_attempt_count_year: 32,
    location_launch_attempt_count_year: 10,
    pad_launch_attempt_count_year: 9,
    agency_launch_attempt_count_year: 16
  },
  {
    id: '9a0216fd-811b-4e20-be0a-98e6c54859e4',
    url: 'https://ll.thespacedevs.com/2.2.0/launch/9a0216fd-811b-4e20-be0a-98e6c54859e4/',
    slug: 'falcon-9-block-5-dragon-crs-2-spx-27',
    name: 'Falcon 9 Block 5 | Dragon CRS-2 SpX-27',
    status: {
      id: 8,
      name: 'To Be Confirmed',
      abbrev: 'TBC',
      description:
        'Awaiting official confirmation - current date is known with some certainty.'
    },
    last_updated: '2023-03-01T05:04:32Z',
    net: '2023-03-12T01:36:00Z',
    window_end: '2023-03-12T01:36:00Z',
    window_start: '2023-03-12T01:36:00Z',
    probability: null,
    holdreason: '',
    failreason: '',
    hashtag: null,
    launch_service_provider: {
      id: 121,
      url: 'https://ll.thespacedevs.com/2.2.0/agencies/121/',
      name: 'SpaceX',
      type: 'Commercial'
    },
    rocket: {
      id: 7459,
      configuration: {
        id: 164,
        url: 'https://ll.thespacedevs.com/2.2.0/config/launcher/164/',
        name: 'Falcon 9',
        family: 'Falcon',
        full_name: 'Falcon 9 Block 5',
        variant: 'Block 5'
      }
    },
    mission: {
      id: 5857,
      name: 'Dragon CRS-2 SpX-27',
      description:
        '27th commercial resupply services mission to the International Space Station operated by SpaceX. The flight will be conducted under the second Commercial Resupply Services contract with NASA.\r\n\r\nCargo Dragon 2 brings supplies and payloads, including critical materials to directly support science and research investigations that occur onboard the orbiting laboratory.',
      launch_designator: null,
      type: 'Resupply',
      orbit: {
        id: 8,
        name: 'Low Earth Orbit',
        abbrev: 'LEO'
      }
    },
    pad: {
      id: 87,
      url: 'https://ll.thespacedevs.com/2.2.0/pad/87/',
      agency_id: null,
      name: 'Launch Complex 39A',
      info_url: null,
      wiki_url:
        'https://en.wikipedia.org/wiki/Kennedy_Space_Center_Launch_Complex_39#Launch_Pad_39A',
      map_url: 'http://maps.google.com/maps?q=28.608+N,+80.604+W',
      latitude: '28.60822681',
      longitude: '-80.60428186',
      location: {
        id: 27,
        url: 'https://ll.thespacedevs.com/2.2.0/location/27/',
        name: 'Kennedy Space Center, FL, USA',
        country_code: 'USA',
        map_image:
          'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_27_20200803142447.jpg',
        total_launch_count: 216,
        total_landing_count: 0
      },
      map_image:
        'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_87_20200803143537.jpg',
      total_launch_count: 158,
      orbital_launch_attempt_count: 156
    },
    webcast_live: false,
    image:
      'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20210922155253.jpeg',
    infographic: null,
    program: [
      {
        id: 11,
        url: 'https://ll.thespacedevs.com/2.2.0/program/11/',
        name: 'Commercial Resupply Services',
        description:
          'Commercial Resupply Services (CRS) are a series of flights awarded by NASA for the delivery of cargo and supplies to the International Space Station.The first CRS contracts were signed in 2008 and awarded $1.6 billion to SpaceX for twelve cargo Dragon and $1.9 billion to Orbital Sciences for eight Cygnus flights, covering deliveries to 2016. The Falcon 9 and Antares rockets were also developed under the CRS program to deliver cargo spacecraft to the ISS.',
        agencies: [
          {
            id: 44,
            url: 'https://ll.thespacedevs.com/2.2.0/agencies/44/',
            name: 'National Aeronautics and Space Administration',
            type: 'Government'
          },
          {
            id: 257,
            url: 'https://ll.thespacedevs.com/2.2.0/agencies/257/',
            name: 'Northrop Grumman Space Systems',
            type: 'Commercial'
          },
          {
            id: 1020,
            url: 'https://ll.thespacedevs.com/2.2.0/agencies/1020/',
            name: 'Sierra Nevada Corporation',
            type: 'Commercial'
          },
          {
            id: 121,
            url: 'https://ll.thespacedevs.com/2.2.0/agencies/121/',
            name: 'SpaceX',
            type: 'Commercial'
          }
        ],
        image_url:
          'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/commercial2520_program_20201129212219.png',
        start_date: '2008-12-23T00:00:00Z',
        end_date: null,
        info_url: null,
        wiki_url:
          'https://en.wikipedia.org/wiki/Commercial_Resupply_Services#Commercial_Resupply_Services',
        mission_patches: []
      },
      {
        id: 17,
        url: 'https://ll.thespacedevs.com/2.2.0/program/17/',
        name: 'International Space Station',
        description:
          'The International Space Station programme is tied together by a complex set of legal, political and financial agreements between the sixteen nations involved in the project, governing ownership of the various components, rights to crewing and utilization, and responsibilities for crew rotation and resupply of the International Space Station. It was conceived in 1984 by President Ronald Reagan, during the Space Station Freedom project as it was originally called.',
        agencies: [
          {
            id: 16,
            url: 'https://ll.thespacedevs.com/2.2.0/agencies/16/',
            name: 'Canadian Space Agency',
            type: 'Government'
          },
          {
            id: 27,
            url: 'https://ll.thespacedevs.com/2.2.0/agencies/27/',
            name: 'European Space Agency',
            type: 'Multinational'
          },
          {
            id: 37,
            url: 'https://ll.thespacedevs.com/2.2.0/agencies/37/',
            name: 'Japan Aerospace Exploration Agency',
            type: 'Government'
          },
          {
            id: 44,
            url: 'https://ll.thespacedevs.com/2.2.0/agencies/44/',
            name: 'National Aeronautics and Space Administration',
            type: 'Government'
          },
          {
            id: 63,
            url: 'https://ll.thespacedevs.com/2.2.0/agencies/63/',
            name: 'Russian Federal Space Agency (ROSCOSMOS)',
            type: 'Government'
          }
        ],
        image_url:
          'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/international2_program_20201129184745.png',
        start_date: '1998-11-20T06:40:00Z',
        end_date: null,
        info_url: 'https://www.nasa.gov/mission_pages/station/main/index.html',
        wiki_url:
          'https://en.wikipedia.org/wiki/International_Space_Station_programme',
        mission_patches: []
      }
    ],
    orbital_launch_attempt_count: 6389,
    location_launch_attempt_count: 217,
    pad_launch_attempt_count: 159,
    agency_launch_attempt_count: 230,
    orbital_launch_attempt_count_year: 33,
    location_launch_attempt_count_year: 4,
    pad_launch_attempt_count_year: 4,
    agency_launch_attempt_count_year: 17
  }
]
