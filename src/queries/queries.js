import { gql } from "@apollo/client";

const GET_ALL_LOCATIONS = gql`
  query GetClients {
    ClientsInfo {
      id
      name
      code
      sites {
        name
        path
        subLocalizations {
          name
          type
          path
          subLocalizations {
            name
            type
            path
            subLocalizations {
              name
              type
              path
              subLocalizations {
                name
                type
                path
                status
                subLocalizations {
                  name
                  type
                  path
                  status
                  subLocalizations {
                    name
                    type
                    path
                    status
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const GET_SENSORS = gql`
  query GetSensors($limit: Int) {
    SensorEntries(limit: $limit) {
      parentName
      sensorType
      parentPath
      createdAt
      status
    }
  }
`;

const LOCATIONS_SUBSCRIPTION = gql`
  subscription OnClientInfoUpdate {
    ClientsInfoUpdated {
      id
      name
      code
      sites {
        name
        path
        subLocalizations {
          name
          type
          path
          subLocalizations {
            name
            type
            path
            subLocalizations {
              name
              type
              path
              subLocalizations {
                name
                type
                path
                status
                subLocalizations {
                  name
                  type
                  path
                  status
                  subLocalizations {
                    name
                    type
                    path
                    status
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_ALL_LOCATIONS, GET_SENSORS, LOCATIONS_SUBSCRIPTION };
