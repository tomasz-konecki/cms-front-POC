import { gql } from "@apollo/client";

const GET_CLIENTS = gql`
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

const GET_LOCATIONS = gql`
  query GetLocations($path: String!, $clientId: String!) {
    LocalizationInfo(path: $path, clientId: $clientId) {
      name
      code
      type
      path
      subLocalizations {
        name
        code
        type
        path
        subLocalizations {
          name
          code
          type
          path
          subLocalizations {
            name
            code
            type
            path
            subLocalizations {
              name
              code
              type
              path
              subLocalizations {
                name
                code
                type
                path
                subLocalizations {
                  name
                  code
                  type
                  path
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

export { GET_CLIENTS, GET_LOCATIONS, GET_SENSORS };
