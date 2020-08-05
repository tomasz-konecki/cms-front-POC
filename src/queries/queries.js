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

const GET_CLIENTS_LEVEL = gql`
  query GetClientsLevel {
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

export { GET_ALL_LOCATIONS, GET_SENSORS };
