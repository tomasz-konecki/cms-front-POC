{
  data: {
    clients: [
      {
        name: "Bank Of Ireland",
        id: "9032487773090669812",
        sites: [
          {
            name: "ITC",
            code: "ITC",
            type: "DOMAIN",
            path: "IRL/D18_PH48/ITC",
            subLocalizations: [
              {
                name: "Block E",
                code: "E",
                type: "ZONE",
                path: "IRL/D18_PH48/ITC/E",
                subLocalizations: [
                  {
                    name: "Floor 1",
                    code: "E01",
                    type: "LEVEL",
                    path: "IRL/D18_PH48/ITC/E/E01",
                    subLocalizations: [
                      {
                        name: "Compartment 2",
                        code: "C02",
                        type: "COMPARTMENT",
                        path: "IRL/D18_PH48/ITC/E/E01/C02",
                        subLocalizations: [
                          {
                            name: "Z-OOS-Office E",
                            code: "R01",
                            type: "ROOM",
                            path: "IRL/D18_PH48/ITC/E/E01/C02/R01",
                            subLocalizations: [
                              {
                                name: "Bench 02",
                                code: "B02",
                                type: "BENCH",
                                path: "IRL/D18_PH48/ITC/E/E01/C02/R01/B02",
                                subLocalizations: [
                                  {
                                    name: "EFF-09",
                                    code: "D009",
                                    type: "DESK",
                                    path:
                                      "IRL/D18_PH48/ITC/E/E01/C02/R01/B02/D009",
                                    status: "BUSY"
                                  },
                                  {
                                    name: "EFF-09",
                                    code: "D010",
                                    type: "DESK",
                                    path:
                                      "IRL/D18_PH48/ITC/E/E01/C02/R01/B02/D010",
                                    status: "VACANT"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "INTEVI",
        id: "7513577201571960161",
        sites: [
          {
            name: "INTEVI",
            code: "INT",
            type: "DOMAIN",
            path: "GBR/WC2N_5DU/INT",
            subLocalizations: [
              {
                name: "FLOOR 1",
                code: "F01",
                type: "LEVEL",
                path: "GBR/WC2N_5DU/INT/F01",
                subLocalizations: [
                  {
                    name: "Open Space",
                    code: "R02",
                    type: "ROOM",
                    path: "GBR/WC2N_5DU/INT/F01/R02",
                    subLocalizations: [
                      {
                        name: "Bench 6",
                        code: "B6",
                        type: "BENCH",
                        path: "GBR/WC2N_5DU/INT/F01/R02/B6",
                        subLocalizations: [
                          {
                            name: "Desk 22",
                            code: "D22",
                            type: "DESK",
                            path: "GBR/WC2N_5DU/INT/F01/R02/B6/D22",
                            status: "OFF-PERIOD"
                          },
                          {
                            name: "Desk 24",
                            code: "D24",
                            type: "DESK",
                            path: "GBR/WC2N_5DU/INT/F01/R02/B6/D24",
                            status: "OFF-PERIOD"
                          }
                        ]
                      },
                      {
                        name: "Bench 3",
                        code: "B3",
                        type: "BENCH",
                        subLocalizations: [
                          {
                            name: "Desk 9",
                            code: "D09",
                            type: "DESK",
                            path: "GBR/WC2N_5DU/INT/F01/R02/B3/D09",
                            status: "VACANT"
                          },
                          {
                            name: "Desk 10",
                            code: "D10",
                            type: "DESK",
                            path: "GBR/WC2N_5DU/INT/F01/R02/B3/D10",
                            status: "BUSY"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
  }
}

// SUBLOCATIONS TYPES:
//  - DOMAIN
//  - ZONE
//  - LEVEL
//  - COMPARTMENT
//  - ROOM
//  - BENCH
//  - DESK
